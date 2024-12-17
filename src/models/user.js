const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type:String ,require:true},
    address: { type:String ,},
    email: { type:String ,require:true},
    phone: { type:String ,require:true},
    image: { type:String ,},
    description: { type:String ,},
},
{timestamps:true}
);
const User = mongoose.model('user', userSchema);
module.exports= User;

