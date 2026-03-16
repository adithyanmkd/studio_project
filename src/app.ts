import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index.ts";
import connectDB from "./config/database.ts";

connectDB();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", routes);

export default app;
