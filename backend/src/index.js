import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from"path";
import dotenv from "dotenv";
import { app ,server} from "./lib/socket.js";
dotenv.config();


const PORT = process.env.PORT;
const __dirname=path.resolve();

// 🛠️ Middleware first!
app.use(express.json());
 // 📦 Routes after middleware
 app.use(cookieParser());
 app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
 }))
 app.use("/api/auth", authRoutes);
 app.use("/api/messages", messageRoutes);
 if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
 }

server.listen(PORT, () => {
    console.log("Server running at PORT: " + PORT);
    connectDB();
});
