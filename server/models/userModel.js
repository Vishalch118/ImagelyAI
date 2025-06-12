import mongoose from 'mongoose';

//this is the schema for every user.
const userSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    creditBalance:{type:Number,default:3},
})

//this will create a model named user using usierSchema. It will check if the user named model is already existing or not
const userModel=mongoose.models.user || mongoose.model("user",userSchema)

export default userModel

