import { Router } from "express"
import * as controllers from "../controllers/pictures.js"

const router = Router();

router.get("/pictures", controllers.getPictures);
router.get("/pictures/:id", controller.getPicture);
router.post("/pictures", controller.createPicture);
router.put("/pictures/:id", controlller.updatePicture);
router.delete("/pictures/:id", controller.deletePicture);

export default router;
