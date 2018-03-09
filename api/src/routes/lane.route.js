import express from "express";

import laneController from "../controllers/lane.controller.js";

const router = express.Router();

router.get("/", laneController.list);
router.post("/", laneController.create);
router.put("/:id", laneController.update);
router.delete("/:id", laneController.remove);

export default router;
