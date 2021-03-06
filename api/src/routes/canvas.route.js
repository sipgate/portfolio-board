import express from "express";

import canvasController from "../controllers/canvas.controller.js";

const router = express.Router();

router.get("/", canvasController.list);
router.post("/", canvasController.create);
router.put("/:id", canvasController.update);
router.delete("/:id", canvasController.remove);

export default router;
