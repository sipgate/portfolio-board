import express from "express";

import streamController from "../controllers/stream.controller.js";

const router = express.Router();

router.get("/", streamController.list);
router.post("/", streamController.create);
router.put("/:id", streamController.update);
router.delete("/:id", streamController.remove);

export default router;
