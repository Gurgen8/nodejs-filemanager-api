import express from "express";
import FileManagerController from "../controllers/FileManagerController";

const router = express.Router();

router.get('/', FileManagerController.index);

router.get('/edit', FileManagerController.edit);
router.post('/edit', FileManagerController.editSave);

export default router;
