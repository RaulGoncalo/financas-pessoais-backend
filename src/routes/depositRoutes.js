import express from "express";
import depositControllers from "../controllers/depositControllers.js";

const route = express.Router();

route.get("/:userId", depositControllers.getDeposits);
route.post("/", depositControllers.createDeposit);
route.put("/", depositControllers.updateDeposit);
route.delete("/:id", depositControllers.deleteDeposit);

export default route;
