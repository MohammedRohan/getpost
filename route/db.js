
const mongoose = require("mongoose");

// connect to cloud Database


const uri = "mongodb+srv://rohanmomo:Rohan$10@cluster0.gpc9e.mongodb.net/getpost?retryWrites=true&w=majority";
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connected1")
    })
    .catch(err => console.log(err))

// create Schema
const Schema = mongoose.Schema;
const crud = new Schema({
    name: String
})
var xyz = mongoose.model("xyz",crud)
module.exports = xyz;
