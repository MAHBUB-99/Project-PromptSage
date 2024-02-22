import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRoute from "./routes/userRoute.js";
import promptRoute from "./routes/promptRoute.js";
import discussionRoute from "./routes/discussionRoute.js";
import cartRoute from "./routes/cartRoute.js";


import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    // methods: ["POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/users", userRoute);
app.use("/api/v1/prompts", promptRoute);
app.use("/api/v1/discussions", discussionRoute);
app.use("/api/v1/cart",cartRoute);

dbConnection();

app.use(errorMiddleware);

export default app;
