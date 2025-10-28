const mongoose = require("mongoose");
const { ref } = require("process");

const taskSchema = new mongoose.Schema({
    title : {type : String , required : true},
    completed : {type : Boolean , default : false},
    user : {type : mongoose.Schema.Types.ObjectId , ref : "User"}
})

module.exports = mongoose.model("Tasks", taskSchema)