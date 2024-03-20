const mongoose = require('mongoose')

let productSchema=mongoose.Schema({
    id:{type:String},
    productimage: {type:String},
    productname: {type:String},
    productprice: {type:Number},
    counttype: {type:String},
    discountpercent: {type:Number}
});
module.exports=mongoose.model('product',productSchema)
