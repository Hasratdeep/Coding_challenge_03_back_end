import express from "express";
import { createTasks } from "../controllers/taskController";
import { validateCreateTasks } from "../validation/tasksValidation";

const router = express.Router();

router.post("/", validateCreateTasks, createTasks);

export default router;
