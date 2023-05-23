import express  from "express";
const authRouter=express.Router();


import {login} from '../controllers/loginController.js'


authRouter.route("/login").get(login);


export default authRouter;