import express from "express";
import notesRouter from "./routes/notesRoutes.js"
import { ConnectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app=express();
app.use("/api/notes",notesRouter);
ConnectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server started on port :5002")
});