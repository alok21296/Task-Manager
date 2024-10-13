const mongoose=require("mongoose")

const todoschema=mongoose.Schema(
    {
        task:{
            type:String,
            required:[true,"Enter a task"]
        }
    },
    {timestamps:true}
)

const TodoModel=mongoose.model("Task",todoschema)
module.exports=TodoModel