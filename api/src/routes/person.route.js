import express from "express";

import personController from "../controllers/person.controller.js";

const router = express.Router();

router.get("/", personController.list);
router.post("/", personController.create);
router.put("/:id", personController.update);
router.delete("/:id", personController.remove);

export default router;
