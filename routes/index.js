import express from 'express';
const router = express.Router();
import productsRouter from './productsRouter.js'
import shoppingCardRouter from './shoppingCardRouter.js'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/getProducts",productsRouter)
router.use("/shopping-cart",shoppingCardRouter)
export default router;