import * as taskService from "../services/taskService";
import * as firestoreRepo from "../repositories/firestoreRepository";

jest.mock("../repositories/firestoreRepository");

describe("Task Service", () => {
    const mockTaskData = {
        userId: "user123",
        title: "Finish assignment",
        priority: "high",
        status: "open",
        dueDate: "2025-10-07"
    };

    it("should create a task successfully", async () => {
        (firestoreRepo.createDocument as jest.Mock).mockResolvedValue("task123");

        const result = await taskService.createTask(mockTaskData);

        expect(firestoreRepo.createDocument).toHaveBeenCalledWith("tasks", expect.objectContaining(mockTaskData));
        expect(result).toBe("task123");
    });

    it("should throw an error if repository fails", async () => {
        (firestoreRepo.createDocument as jest.Mock).mockRejectedValue(new Error("Firestore error"));

        await expect(taskService.createTask(mockTaskData)).rejects.toThrow("Failed to create task: Firestore error");
    });
});
