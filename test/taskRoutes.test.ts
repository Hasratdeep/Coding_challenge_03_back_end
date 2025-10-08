import request from "supertest";
import express from "express";
import taskRoutes from "../routes/taskRoutes";
import * as taskController from "../controllers/taskController";

jest.mock("../controllers/taskController");

const app = express();
app.use(express.json());
app.use("/tasks", taskRoutes);

describe("Task Routes", () => {
    it("POST /tasks - valid request", async () => {
        (taskController.createTask as jest.Mock).mockImplementation((req, res) => {
            res.status(201).json({ message: "Task created successfully" });
        });

        const response = await request(app)
            .post("/tasks")
            .send({
                userId: "user246",
                title: "Task Routes",
                priority: "low",
                status: "open",
                dueDate: "2025-10-07"
            });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: "Task created successfully" });
    });

    it("POST /tasks - invalid request", async () => {
        const response = await request(app)
            .post("/tasks")
            .send({ title: "Missing fields" }); // invalid

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message", "Validation failed");
    });
});





