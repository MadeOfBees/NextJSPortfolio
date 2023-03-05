import { Request, Response } from "express";
import { Projects, IProjects } from "../models/projects";
import connectionJS from "../../../../utils/connection";

export async function newProject(req: Request, res: Response): Promise<void> {
  if (req.body.password === process.env.SPASSWORD) {
    try {
      const db = await connectionJS();
      const newProject: IProjects = (await Projects.create(
        req.body
      )) as IProjects;
      res
        .status(200)
        .json({ message: "Project added successfully", newProject });
      db.disconnect();
    } catch (error) {
      res.status(500).json({ message: "Error creating project", error });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

export async function updateProject(
  req: Request,
  res: Response
): Promise<void> {
  if (req.body.password === process.env.SPASSWORD) {
    try {
      const db = await connectionJS();
      const updatedProject: IProjects = (await Projects.findByIdAndUpdate(
        req.body.id,
        req.body,
        { new: true }
      )) as IProjects;
      res
        .status(200)
        .json({ message: "Project updated successfully", updatedProject });
      db.disconnect();
    } catch (error) {
      res.status(500).json({ message: "Error updating project", error });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

export async function deleteProject(
  req: Request,
  res: Response
): Promise<void> {
  if (req.body.password === process.env.SPASSWORD) {
    try {
      const db = await connectionJS();
      const deletedProject: IProjects = (await Projects.findByIdAndDelete(
        req.body.id
      )) as IProjects;
      res
        .status(200)
        .json({ message: "Project deleted successfully", deletedProject });
      db.disconnect();
    } catch (error) {
      res.status(500).json({ message: "Error deleting project", error });
    }
  }
}

export async function getProjects(req: Request, res: Response): Promise<void> {
  try {
    const db = await connectionJS();
    const projects: IProjects[] = (await Projects.find().sort({
      orderNumber: 1,
      name: 1,
    })) as IProjects[];
    res
      .status(200)
      .json({ message: "Project retrieved successfully", projects });
    db.disconnect();
  } catch (error) {
    res.status(500).json({ message: "Error retrieving project", error });
  }
}

export async function getProject(req: Request, res: Response): Promise<void> {
  try {
    const db = await connectionJS();
    const project: IProjects = (await Projects.findOne({
      name: req.body.name,
    })) as IProjects;
    res.status(200)
    .json({ message: "Project retrieved successfully", project, reqBody: req.body });
    db.disconnect();
  } catch (error) {
    res.status(500).json({ message: "Error retrieving project", error });
  }
}