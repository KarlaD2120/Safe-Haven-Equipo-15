const userViews = require("../models/User.model");
const debug = require("debug")("app: userView-controller");
const controller = {};

    
    //done
    controller.findAll = async (req, res, next) => {
    try {
      const userView = await userViews.find();
    // .populate("user", "username email" )
        return res.status(200).json({userView});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"})
        
    }
    } 
    //done
    controller.findOneById = async (req, res, next) => {
    try {
        const { identifier } = req.params;
        const userView = await userViews.findById(identifier);
       //.populate("user","username email");
        if (!userView){
            return res.status(404).json({ error: "User not found" })
        } 
        return res.status(200).json(userView);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
    }
    //done
    controller.deleteById = async (req, res, next) => {
        try {
        const {identifier} = req.params;
        const userView= await userViews.findOneAndDelete({_id: identifier});
    if (!userView){
        return res.status(404).json({error: "User not found"});
    }
    
    return res.status(200).json({message: "User deleted"});
    
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal Server Error"});
            
        }
    }
    
    
    
    
    module.exports = controller;