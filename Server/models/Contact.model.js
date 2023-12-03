const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ContactSchema = new Schema({
name: {
    type: String,
    trim: true,
    required: true
},
description: {
    type: String,
    trim: true,
    required: false
},
image: {
    type: String,
    required: false
},
email: {
    type: String,
    trim: false,
    required: true
}, 

user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
}

}, {timestamps: true});

module.exports = Mongoose.model("Contact", ContactSchema);
;
