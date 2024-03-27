import { Router } from "express";
import getProducts from "../controllers/productos/getProducts.js";
import productDataConvert from '../middlewares/productDataConvert.js'

const router=Router()

router.get("/",productDataConvert,getProducts)

export default router