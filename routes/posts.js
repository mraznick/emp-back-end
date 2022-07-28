import { Router } from "express"
import * as controllers from "../controllers/posts.js"

const router = Router();

router.get("/posts", controllers.getPosts);
router.get("/posts/:id", controller.getPost);
router.post("/posts". controller.createPost);
router.put("/posts/:id", controlller.updatePost);
router.delete("/post/:id", controller.deletePost);

export default router;
