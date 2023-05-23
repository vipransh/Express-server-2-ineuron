import express  from "express";
import { isLoggedIn } from "../middleware/authMiddleware.js";
import { getPost } from "../controllers/postController.js";
const postRouter=express.Router();


postRouter.route("/getPost").get(isLoggedIn,getPost);

export default postRouter;