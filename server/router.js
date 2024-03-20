const express = require('express')
const Product = require('./models/product')
const router = express.Router();

router.post("/product/add",addProduct)
router.get("/product/get/:id",getProduct)
router.get("/product/getall",getAll)
router.patch('/product/edit/:id',editProduct)
router.delete('/product/delete/:id',deleteProduct)

async function addProduct(req,res){
    let body = req.body;
    console.log('===>', body)
    let newProduct = new Product({
        id:body.id,
        productimage: body.productimage,
        productname: body.productname,
        productprice: body.productprice,
        counttype: body.counttype,
        discountpercent: body.discountpercent
    })
    await newProduct.save()
    console.log(body)
    res.status(201).json('Product created')
}
async function editProduct(req,res){
    try {
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product) res.status(404).json('id not found');
        else res.status(201).json('updated');
    } catch (error) {
        return res.status(404).send('entity not edited');
    }
}
async function getProduct(req,res){
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product) return res.status(404).send(`cannot find the Product entity with id :${id}`)
        res.status(201).json(product);
    } catch (error) {
        return res.status(404).send('entity not found');
    }
}
async function getAll(req,res){
    try {
        const product = await Product.find({});
        if(!product) return res.status(404).send(`products not found`)
        res.status(201).json(product);
    } catch (error) {
        return res.status(404).send('entity not found');
    }
}
async function deleteProduct(req,res){
    try {
        const {id} = req.params;
        const Product = await Product.findByIdAndDelete(id);
        if(!Product) return res.status(404).json({message:`cannot find the Product entity with id :${id}`})
        else res.status(201).send('Entity deleted');
    } catch (error) {
        return res.status(404).send('entity not found');
    }
}

module.exports = router;