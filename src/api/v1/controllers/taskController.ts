import { Request, Response } from "express";
import * as taskService from "../services/taskService";
import { HTTP_STATUS } from "../../../constants/httpConstants";
 
export const createTask = (req: Request, res: Response): void => {
    const newTask = req.body;
    const createdTask = taskService.createTask(newTask);
 
    res.status(HTTP_STATUS.CREATED).json({
        message: "Task created successfully",
        data: createdTask,
    });
};