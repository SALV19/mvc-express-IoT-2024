import { Router } from "express";

import validate from "../middlewares/validate";
import {
  createProfessor,
  deleteProfessor,
  getProfessor,
  updateProfessor,
} from "../controllers/professor";
import { professorSchema } from "../schemas/professor";

const router = Router();

router.get("/", getProfessor);
router.post("/", validate(professorSchema), createProfessor);
router.put("/:id", validate(professorSchema), updateProfessor);
router.delete("/:id", deleteProfessor);

export default router;
