import express from "express"
const router=express.Router();
import {getAllNotes,createNote,updateNote,deleteNote,getNodeById} from "../controllers/notesController.js";
router.get("/",getAllNotes);
router.get("/:id",getNodeById);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
export default router;