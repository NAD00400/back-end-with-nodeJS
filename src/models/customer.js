const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: { type:String ,require:true},
    address: { type:String ,},
    email: { type:String ,require:true},
    phone: { type:String ,require:true},
    image: { type:String ,},
    description: { type:String ,},
},
{timestamps:true}
);
const Customer = mongoose.model('user', CustomerSchema);
module.exports= Customer;

