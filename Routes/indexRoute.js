import express from 'express'
const indexRouter=express.Router();

import authRouter from './loginRoute.js';
import postRouter from './postRoute.js';


indexRouter.use("/",authRouter);
indexRouter.use("/",postRouter);

export default indexRouter;