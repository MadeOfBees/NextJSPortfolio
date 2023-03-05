import { Request, Response } from "express";
import { getProjects } from "../controllers/projects";

export default async function handler(req: Request, res: Response): Promise<void> {
    if (req.method === "GET") {
        await getProjects(req, res);
    } else {
        res.status(404).json({ message: "Not found" });
    }
}