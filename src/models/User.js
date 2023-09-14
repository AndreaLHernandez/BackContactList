const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    } ,
    password:{
        type: String,
        required: true,
    }    
})

const UserMol = mongoose.model('User', userSchema);
module.exports = UserMol;
//module.exports = mongoose.model("User", userSchema);