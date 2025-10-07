import { Task } from "../models/taskModel";
import * as firestoreRepository from "../../../repositories/firestoreRepository";

const TASKS_COLLECTION = "tasks";

/**
 * Creates a new task in Firestore.
 * @param {Task} taskData - The task data to create.
 * @returns {Promise<Task>}
 * @throws {Error} - If validation or repository operation fails.
 */
export const createTask = async (taskData: Task): Promise<Task> => {
    try {
        const timestamp = new Date();

        const newTask: Task = {
            ...taskData,
            createdAt: timestamp,
            updatedAt: timestamp,
        };

        await firestoreRepository.createDocument<Task>(
            TASKS_COLLECTION,
            newTask
        );

        return newTask;
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(
            `Failed to create task: ${errorMessage}`);
    }
};
