import { Router } from "express"
import * as controllers from "../controllers/users.js"

const router = Router();

router.get("/users", controllers.getUsers);
router.get("/users/:id", controller.getUser);
router.post("/users". controller.createUser);
router.put("/users/:id", controlller.updateUser);
router.delete("/users/:id", controller.deleteUser);

export default router;
