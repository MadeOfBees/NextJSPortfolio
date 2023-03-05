import { Schema, Model, model, models } from "mongoose";

interface IProjects {
    orderNumber: number;
    name: string;
    pageContent: string;
    image: string;
    githubLink: string;
    deployedLink: string;
    new: boolean;
}

const projectSchema: Schema<IProjects> = new Schema({
    orderNumber: { type: Number },
    name: { type: String, required: true },
    pageContent: { type: String, required: true },
    image: { type: String, required: true },
    githubLink: { type: String, required: true },
    deployedLink: { type: String },
    new: { type: Boolean },
});

const Projects: Model<IProjects> = models.Projects || model<IProjects>("Projects", projectSchema);

export { Projects };
export type { IProjects };
