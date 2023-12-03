const User = require("../models/User.model");
const ROLES = require("../data/roles.constants.json");
const { createToken, verifyToken } = require("./../utils/jwt.tools");
const tools = require("../utils/jwt.tools");
const debug = require("debug")("app: auth.middleware");

const controller = {};


controller.register = async (req, res, next) => {
    try {
        //obtener la info
        const { username, email, password } = req.body;

        //Verificar la existencia del correo y del user
        const user = 
        await User.findOne({ $or: [{username: username}, {email: email}]});

        if (user){
            return res.status(409).json({error: "User already exists! "});     
        }
        //Si no existe lo creamos
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            roles: [ROLES.USER]
        })
        await newUser.save();
        return res.status(201).json({message: "user registered"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});

    }
}

controller.login = async (req, res, next) => {
    try {
        //obtener la info, pide identificador, password
        const { identifier, password } = req.body;
        //verificar si el ususario existe
        const user = 
        await User.findOne({ $or: [{username: identifier}, {email: identifier}]});
        //si no existe retornar 404
        if (!user){
            return res.status(404).json({ error: "User not found" });
        }

        //si existe, verificar la contraseña
        if (!user.comparePassword(password)){
            return res.status(401).json({ error: "Incorrect password"});
        }
        
        
        //si la password coincide loggeamos
        //crear un token
        const token = await createToken(user._id);
     
    
        //almacenar token
        //verificar la integridad de los tokens actuales
        let _tokens = [...user.tokens];
        const _verifyPromises = _tokens.map(async (_t) => {
        const status = await verifyToken(_t);
        
            
            return status ? _t : null;
        });

        _tokens = (await Promise.all(_verifyPromises))
        .filter(_t => _t)
        .slice(0,4);
        
        _tokens = [token, ..._tokens];
        user.tokens = _tokens;

        await user.save();

        //devolver token
        return res.status(200).json({ token });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    
}
}

controller.whoami = async (req, res, next) => {
    try {
    const { _id, username, email, roles } = req.user;
    return res.status(200).json({
     _id, username, email, roles   
    })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}




module.exports = controller;
