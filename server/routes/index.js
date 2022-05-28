import express from "express";
import authentication from '../apiServices/authentication/routes.js';
import products from '../apiServices/products/routes.js';

const router = express.Router();

router.use('/auth', authentication);
router.use('/products', products);

export default router
