import express from "express";
import { createANote, getAllNotes } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllNotes)
router.get("/",createANote)

router.post("/",(req,res)=>{
    res.status(200).json({response:"post created succesfully"})
})

router.put("/:id",(req,res)=>{
    res.status(200).json({response:"post updated  succesfully"})
})

router.delete("/:id",(req,res)=>{
    res.status(200).json({response:"post deleted succesfully"})
})

export default router