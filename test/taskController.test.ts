import { Request, Response, NextFunction, response } from "express";
import * as taskController from "../controllers/taskController";
import * as taskService from "../services/taskService";

jest.mock("../services/taskService");

describe("Task Controller", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = { body: {} };
        next = jest.fn();
    });

    it("should create a task and return success", async () => {
        req.body = {
            userId: "user123",
            title: "Finish assignment",
            priority: "high",
            status: "open",
            dueDate: "2025-10-07"
        };
        (taskService.createTask as jest.Mock).mockResolvedValue("task123");

        await taskController.createTask(req as Request, response as Response, next);

        expect(response.status).toHaveBeenCalledWith(201);
        expect(response.json).toHaveBeenCalledWith(successResponse({ id: "task123" }, "Task created successfully"));
    });

    it("should call next with error if service fails", async () => {
        req.body = { ...req.body };
        (taskService.createTask as jest.Mock).mockRejectedValue(new Error("Service error"));

        await taskController.createTask(req as Request, response as Response, next);

        expect(next).toHaveBeenCalledWith(expect.any(Error));
    });
});

