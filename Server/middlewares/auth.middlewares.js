const debug = require("debug")("app: auth.middleware");
const { verifyToken } = require("../utils/jwt.tools");
const User = require("../models/User.model");
const middlewares = {};
const PREFIX = "Bearer";
const ROLES = require("../data/roles.constants.json");

middlewares.authentication = async (req, res, next) => {
try {
    debug("User authentication");
    // verificar el authorization 
    const { authorization } = req.headers;
    if (!authorization){
        return res.status(401).json({ error: "User not authenticated"});
    }

    const [prefix, token] = authorization.split(" ");
    if (prefix !== PREFIX){
        return res.status(401).json({error: "User not authenticated"});

    }
    if(!token){
        return res.status(401).json({error: "User not authenticated"});

    }

    const payload = await verifyToken(token);
    if (!payload){
        return res.status(401).json({error: "User not authenticated"});

    }
      // verificar el usuario
    const userId = payload["sub"];
    const user = await User.findById(userId);
    if(!user){
        return res.status(401).json({error: "User not authenticated"});
    }
  

    // verificar la validez del token
    // token => Bearer aaaaaa.aaaaaaa.aaaaaaaa

  
    // comparar el token con los tokens registrados
    const isTokenValid = user.tokens.includes(token);
    if(!isTokenValid){
        return res.status(401).json({error: "User not authenticated"});
    }
    // modificar la req. para añadir la info del usuario
    req.user = user;
    req.token = token;
    next();
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"});

}
}

middlewares.authorization = (roleRequired = ROLES.SYSADMIN ) => {
return (req, res, next) => {
 //premisa: antes debe de haber pasado por aunenticación
 try {
    const { roles=[] } = req.user;
    //verificar si el rol esta en la coleccion
    const isAuth = roles.includes(roleRequired);
    const isSysadmin = roles.includes(ROLES.SYSADMIN);
  //si no esta 403
    if(!isAuth && !isSysadmin){
    return res.status(403).json({error: "forbidden"});

    }

    //si esta -> next();
    next();

 } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"});
 }
}
}


module.exports = middlewares;
