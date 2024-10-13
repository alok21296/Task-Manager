const TodoModel=require("../models/todo")
const gettodo=(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}
const posttodo=(req,res)=>{
    const task=req.body.task
    TodoModel.create({
        task:task,
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    console.log(task)
}

module.exports={gettodo,posttodo}