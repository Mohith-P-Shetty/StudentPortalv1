import express from "express";
import { createANote, deleteANote, getAllNotes, updateANote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllNotes)
router.get("/",createANote)
router.put("/:id",updateANote)
router.delete("/:id",deleteANote)

export default router