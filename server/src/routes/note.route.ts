import { Router } from "express";
import {
  create,
  getAllNotes,
  getSingleNote,
  removeSingleNote,
  update,
} from "../controllers/note.controller";

const router = Router();

router.post("/create", create);

router.patch("/:noteId", update);

router.delete("/:noteId", removeSingleNote);

router.get("/", getAllNotes);

router.get("/:id", getSingleNote);

export default router;
