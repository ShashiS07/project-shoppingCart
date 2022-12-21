const express = require('express')
const router=express.Router()
const {createuser,updateUser,Createproduct} = require('../Middleware/validations')
const auth=require('../Middleware/auth')
const {createUser,getUser,login,update} = require('../Controllers/userController')
const {createproduct,updateProductById,getproductById,deletedProduct,getproductbyquery} = require('../Controllers/productController')



router.post('/register',createuser,createUser)
router.post('/login',login)
router.post('/products',Createproduct,createproduct)

router.get('/user/:userId/profile',auth.authentication,getUser)
router.get('/products',getproductbyquery)
router.get('/products/:productId',getproductById)

router.put('/user/:userId/profile',auth.authentication,updateUser,update)
router.put('/products/:productId',updateProductById)

router.delete('/products/:productId',deletedProduct)



module.exports = router