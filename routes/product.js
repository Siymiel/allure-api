import { Router } from "express";
import { createProductController } from "../controllers/productsController";

// GET 
// CREATE
Router.post('/create', createProductController);
