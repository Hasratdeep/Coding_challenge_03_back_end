import express, { Router } from "express";
import { createTasks } from "../controllers/taskController";
import { validateCreateTasks } from "../validation/tasksValidation";

const router: Router = express.Router();

router.post("/", validateCreateTasks, createTasks);

export default router;
