import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUserPostController } from "./controllers/CreateUserPostController";
import { FindPostController } from "./controllers/FindPostController";

const router = Router();

const createUser = new CreateUserController();

const createUserPost = new CreateUserPostController();

const findPost = new FindPostController();

router.post("/api/users", createUser.handle);
router.post("/api/userpost", createUserPost.handle);
router.get("/api/userpost/:id", findPost.handle);

export { router };
