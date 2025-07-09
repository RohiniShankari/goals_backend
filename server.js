import express from "express";
import {connectDB} from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT=process.env.PORT||5001;
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/notes",notesRoutes);
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`connected to ${PORT}`)
    });
}).catch((error)=>{
    console.log("error connecting to db",error);
})
