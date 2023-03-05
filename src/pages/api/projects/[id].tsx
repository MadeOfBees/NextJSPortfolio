import { Request, Response } from "express";
import {updateProject, deleteProject, getProject} from "../controllers/projects";

export default async function handler(req: Request, res: Response): Promise<void> {
    if (req.method === "PUT") {
        await updateProject(req, res);
    } else if (req.method === "DELETE") {
        await deleteProject(req, res);
    } else if (req.method === "GET") {
        await getProject(req, res);
    } else {
        res.status(404).json({ message: "Not found" });
    }
}