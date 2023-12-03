const Emergencycase = require("../models/Emergencycase.model");
const debug = require("debug")("app: emergencycase-controller");
const controller = {};





controller.saving = async (req, res, next) => {
    try {

        const { coordenates } = req.body;
        const { user } = req;
        
        const emergencycase = new Emergencycase({
        user: user._id,
        coordenates: coordenates
        
        });
        
        
               
        
        // let emergencycase = await Emergencycase.findById(identifier);
        
        // if (!emergencycase){
        //     emergencycase= new Emergencycase();
        //     emergencycase["user"] = user._id;
        
        // } else {
        //     if (!contact["user"].equals(user._id)){
        //         return res.status(403).json({ error: "This is not your post" });
        //     }
        // }
        
        
        
        // emergencycase["coordenates"] = coordenates;
        // emergencycase["date"] = date;
        
        
        const ecSaved = await emergencycase.save();
        if(!ecSaved){
        return res.status(400).json({error: "Error saving Emergency case"});
        
        }
         return res.status(201).json({ecSaved});
        
        
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal Server Error"});
        }

}


controller.findAll = async (req, res, next) => {
try {
  const emergencycases = await Emergencycase.find()
  .populate("user", "username email" )
    return res.status(200).json({emergencycases});
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"})
    
}
}

controller.findByUser = async (req, res, next) => {
    try {
    const { identifier } = req.params;

    const emergencycases =
    await Emergencycase.find({ user: identifier})
    .populate("user", "username email");

    return res.status(200).json({ emergencycases });
        
    } catch (error) {
        console.error(error);
    return res.status(500).json({error: "Internal Server Error"});
        
    }
}

controller.findOwn = async (req, res, next) => {
    try {
    const { _id: userId } = req.user;
    const emergencycases = 
    await Emergencycase.find({ user: userId })
    .populate("user", "username email");
    
    return res.status(200).json({ emergencycases });
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
        
    }
}

controller.findOneById = async (req, res, next) => {
try {
    const { identifier } = req.params;
    const emergencycase = await Emergencycase.findOne({_id: identifier})
    .populate("user","username email");
    if (!emergencycase){
        return res.status(404).json({ error: "Emergency case not found" })
    } 
    return res.status(200).json(emergencycase);
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"});
}
}

controller.deleteById = async (req, res, next) => {
    try {
    const {identifier} = req.params;
    const user = req.user;
    const emergencycase = await Emergencycase.findById({identifier});
if (!emergencycase){
    return res.status(404).json({error: "Emergency case not found"});
}

return res.status(200).json({message: "Emergency case deleted"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
        
    }
}



module.exports = controller;