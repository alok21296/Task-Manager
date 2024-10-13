const express=require("express")
const router =express.Router()
const {posttodo,gettodo}=require("../Controllers/todoController")



router.route("/").get(gettodo)
router.route("/").post(posttodo)

module.exports=router