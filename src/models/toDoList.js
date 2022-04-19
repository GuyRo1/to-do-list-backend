const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    task:{
        type:String,
        required: true
    },
    completed:{
        type:Boolean,
        required:true,
        validate(value){
           if(!typeof value === "boolean"){
               throw new Error("not boolean")
           } 
        }
    }
})

const ToDo = mongoose.model('ToDo',ToDoSchema)
module.exports = ToDo