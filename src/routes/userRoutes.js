import express from "express";
import userControllers from "../controllers/userControllers.js";

const route = express.Router();

route.get("/:id", userControllers.getUser);
route.post("/", userControllers.createUser);
route.put("/", userControllers.updateUser);

export default route;
