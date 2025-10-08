import express, { Router } from "express";
import { createTask } from "../controllers/taskController";
import { validateCreateTasks } from "../validation/tasksValidation";

const router: Router = express.Router();

router.post("/", validateCreateTasks, createTask);

export default router;
