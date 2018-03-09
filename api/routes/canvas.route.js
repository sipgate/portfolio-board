import express from "express";

import canvasController from "../controllers/canvas.controller.js";

const router = express.Router();

router.get('/', canvasController.list);
router.post('/', canvasController.create);

export default router;