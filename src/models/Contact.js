const   mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{  
        type: String,
        required: true,
    },
    phone:{
        type: Number,
    } ,
    email:{
        type: String,
    } ,
    user:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }

});

const modelContac = module.exports = mongoose.model('Contact', ContactSchema);
module.exports = modelContac;