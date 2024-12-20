import express from "express";
import userRouter from "./routes/user.routes";
import { client } from "./db";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/projects", userRouter);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

client
    .connect()
    .then(() => console.log("Connected to the database!"))
    .catch((err: any) => console.error("Connection error", err));

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
