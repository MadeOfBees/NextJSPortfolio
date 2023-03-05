import { Request, Response } from "express";
import { newProject } from "../controllers/projects";

export default async function handler(req: Request, res: Response): Promise<void> {
    if (req.method === "POST") {
        await newProject(req, res);
    } else {
        res.status(404).json({ message: "Not found" });
    }
}

