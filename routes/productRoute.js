import express from "express";
import {getProducts, getProductsById, createProducts, deleteProducts, updateProducts}
 from "../controller/ProductController.js";

import { verify } from "../middleware/AuthUser.js";

const Router = express.Router();

Router.get("/products", verify, getProducts);
Router.get("/products/:id", verify, getProductsById);
Router.post("/products", verify, createProducts);
Router.put("/products/:id", verify, updateProducts);
Router.delete("/products/:id", verify, deleteProducts);

export default Router;
