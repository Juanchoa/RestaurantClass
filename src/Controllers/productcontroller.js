require('express');   //express es la tecnologia que nos permite simular un servidor 
const { restart } = require('nodemon');
const product = require('../Models/product');
const restaurant = require('../Models/restaurant');

async function createProduct(req, res){
    try{
        await product.create({
            productName : req.body.productName,
            productDescription: req.body.productDescription,
            productPrice: req.productPrice,
            restaurantId:req.restaurantId
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ //error en el servidor 
            return res.status(400).json({
                error:error
            });
        })
    }
    catch{
        console.log(e);
    }
}
async function listProduct(req,res){
    try{
        await product.listProduct({
            attributes: [
                'productId',
                'productName',
                'productDescription',
                'productPrice',                
            ],
            order: ['productName'],
            include: {
                model: 'restaurant',
                where : {restaurantId : req.params.restaurantId}
            }
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ //error en el servidor 
            return res.status(400).json({
                error:error
            });
        })
    }
    catch{
        console.log(e);
    }
}
module.exports = {
    createProduct,
    listProduct
}
