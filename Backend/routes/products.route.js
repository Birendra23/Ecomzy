import express from "express"
import { addProducts,getProducts } from "../controllers/products.controller.js"
const router=express.Router()

router.get("/", getProducts)
router.post("/", addProducts)



export default router