import express from "express";
import billControllers from "../controllers/billControllers.js";

const route = express.Router();

route.get("/:userId", billControllers.getBills);
route.post("/", billControllers.createBill);
route.put("/", billControllers.updateBill);
route.delete("/:id", billControllers.deleteBill);

export default route;
