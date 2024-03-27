import { Router } from "express";
import read from '../controllers/shoppingCart/read.js'
import addProduct from '../controllers/shoppingCart/addProduct.js'
import create from "../controllers/shoppingCart/create.js";
import deleteProduct from '../controllers/shoppingCart/deleteProduct.js'
const router=Router()

router.get('/',read)
router.post('/',create)
router.put('/:id',addProduct)
router.delete('/:shoppingid/:productId',deleteProduct)

export default router