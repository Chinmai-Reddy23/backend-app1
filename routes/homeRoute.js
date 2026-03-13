import express from "express";
import homePage from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/", homePage);

export default homeRouter;