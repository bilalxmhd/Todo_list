import express from "express";
import * as controllers from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/get", controllers.getTodo);
router.put("/update/:id", controllers.updateTodo);
router.delete("/delete/:id", controllers.deleteTodo);
router.post("/add", controllers.addTodo);

export default router;
