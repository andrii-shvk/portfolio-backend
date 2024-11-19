import { Request, Response } from "express";
import { client } from "../db";

class UserController {
    async createProject(req: Request, res: Response): Promise<void> {
        const {
            title, skills, img,
            linkto, frontendrepo, backendrepo,
            filter
        } = req.body;
        try {
            console.log(
                title, skills, img, linkto,
                frontendrepo, backendrepo, filter
            );
            const newProject = await client.query(
                `INSERT INTO projects (title, skills, img, linkto, frontendrepo, backendrepo, filter) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                [title, skills, img, linkto, frontendrepo, backendrepo, filter]
            );
            res.json(newProject.rows);
        } catch(e) {
            res.status(500).json({ message: "Error with fetching projects" });
        }
    }

    async getAllProjects(req: Request, res: Response): Promise<void> {
        try {
            const data = await client.query(`SELECT * FROM projects`);
            res.json(data.rows);
        } catch (e) {
            console.log("Error with fetch data", e);
        }
    }

    async getProjectsByFilter(req: Request, res: Response): Promise<void> {
        const filter = req.params.filter;
        try {
            const data = await client.query(`SELECT * FROM projects where filter = $1`, [filter]);
            res.json(data.rows);
        } catch (e) {
            console.log("Error with fetch data", e);
        }
    }

    async updateProject(req: Request, res: Response): Promise<void> {
        const {
            id,
            title, skills, img,
            linkto, frontendrepo, backendrepo,
            filter
        } = req.body;
        try {
            const user = await client.query(
                `UPDATE projects set title = $1, skills = $2, img = $3, linkto = $4, frontendrepo = $5, backendrepo = $6, filter = $7 where id = $8 RETURNING *`,
                [title, skills, img, linkto, frontendrepo, backendrepo, filter, id]
            );
            res.json(user.rows[0]);
        } catch (e) {
            console.log("Can not upate user", e);
            res.status(500).json({ message: "Can not udpate user" });
        }
    }

    async deleteProject(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const result = await client.query(
                `DELETE from projects where id = $1`,
                [id]
            );
            if (result.rowCount === 0) {
                res.status(404).json({ message: "Project is not found" });
            } else {
                res.status(200).json({ message: "Project deleted successfully" });
            }
        } catch (e) {
            console.log("Error with delete project", e);
        }
    }
}

export default UserController;
