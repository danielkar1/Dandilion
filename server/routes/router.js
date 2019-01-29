const express = require('express')
// const Modle = require("./module");
const router = express.Router()
// const Users=require('./module')

//  const transactions= module.Transactions
router.get("/",function(req,res){
   console.log("server is sain")
   res.send("router is running")
})


module.exports=router