const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const EmergencycaseSchema = new Schema({
user: {
type: Schema.Types.ObjectId,
ref: "User",
required: true
},


coordenates: {
type: String,
trim: true,
required: true
}, 

date: {
type: Date,
default: Date.now,
}



}, {timestamps: true});

module.exports = Mongoose.model("Emergencycase", EmergencycaseSchema);
