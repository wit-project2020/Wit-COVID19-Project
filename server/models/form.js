const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const formSchema=new Schema({
    first_name:String,
    last_name:String,
    contact_number:String,
    location:String,
    kind_of_help:String


});
 module.exports=mongoose.model('form',formSchema,'forms');
 const db="mongodb://usrviewharleen:pharleen@ds113678.mlab.com:13678/froms";
 mongoose.promise=global.promise;
 mongoose.connect(db,function(err){
     if(err)
      console.error("Error!"+err);
 });
 router.get('/',function(req,res){
  res.send('api works');
 })
 module.exports=router;


