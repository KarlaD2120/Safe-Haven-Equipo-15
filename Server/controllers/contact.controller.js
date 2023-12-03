const Contact = require("../models/Contact.model");
const debug = require("debug")("app: contact-controller");
const controller = {};




controller.saving = async (req, res, next) => {
//Premisa - la ruta save debe estar autenticada
try {
const { name, description, image, email} = req.body;
const { identifier } = req.params;
const { user } = req;

// debug({ user });


let contact = await Contact.findById(identifier);

if (!contact){
    contact= new Contact();
    contact["user"] = user._id;

} else {
    if (!contact["user"].equals(user._id)){
        return res.status(403).json({ error: "This is not your post" });
    }
}

contact["name"] = name;
contact["description"] = description;
contact["image"] = image;
contact["email"] = email;


const contactSaved = await contact.save();
if(!contactSaved){
return res.status(400).json({error: "Error saving Contact"});

}
 return res.status(201).json({contactSaved});


    
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"});
}
}


controller.findAll = async (req, res, next) => {
try {
  const contacts = await Contact.find()
  .populate("user", "username email" )
    return res.status(200).json({contacts})
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"})
    
}
}

controller.findByUser = async (req, res, next) => {
    try {
    const { identifier } = req.params;

    const contacts =
    await Contact.find({ user: identifier})
    .populate("user", "username email");

    return res.status(200).json({ contacts });
        
    } catch (error) {
        console.error(error);
    return res.status(500).json({error: "Internal Server Error"});
        
    }
}

controller.findOwn = async (req, res, next) => {
    try {
    const { _id: userId } = req.user;
    const contacts = 
    await Contact.find({ user: userId })
    .populate("user", "username email");
    
    return res.status(200).json({ contacts });
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
        
    }
}

controller.findOneById = async (req, res, next) => {
try {
    const { identifier } = req.params;
    const contact = await Contact.findOne({_id: identifier})
    .populate("user","username email");
    if (!contact){
        return res.status(404).json({ error: "Contact not found" })
    } 
    return res.status(200).json(contact);
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal Server Error"});
}
}

controller.deleteById = async (req, res, next) => {
    try {
    const {identifier} = req.params;
    const user = req.user;
    const contact = await Contact.findOneAndDelete({_id: identifier, user: user._id});
if (!contact){
    return res.status(404).json({error: "Contact not found"});
}

return res.status(200).json({message: "Contact deleted"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
        
    }
}




module.exports = controller;