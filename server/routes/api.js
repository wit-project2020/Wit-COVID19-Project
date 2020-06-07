const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Form=require('../models/form');
const db="mongodb://usrviewharleen:pharleen@ds113678.mlab.com:13678/froms";
 mongoose.promise=global.promise;
 mongoose.connect(db,function(err){
     if(err)
      console.error("Error!"+err);
 });
 router.get('/forms/:location',function(req,res){
  console.log('Get request for all forms');
  form.findBylocation({req.params.location})
     .exec(function(err,form)
     {
         if(err)
         {
             console.log("Error retrieving forms");
         }
     
     else
       {
           res.json(form);
       }   
    });

 });


   
module.exports=router;
