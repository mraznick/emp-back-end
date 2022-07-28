import { Router } from "express"
import * as controllers from "../controllers/comments.js"

const router = Router();

router.get("/comments", controllers.getComments);
router.get("/comments/:id", controller.getComment);
router.post("/comments". controller.createComment);
router.put("/comments/:id", controlller.updateComment);
router.delete("/comments/:id", controller.deleteComment);

export default router;
