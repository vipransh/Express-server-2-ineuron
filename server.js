import express from 'express'
import cookieParser from 'cookie-parser';
import indexRouter from './Routes/indexRoute.js';
import config from './config/envConfig.js';
const app=express();
const PORT=config.PORT || 4000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Welcome to Express Server")
})


app.use("/api",indexRouter);


app.listen(PORT,(req,res)=>{
    console.log("App is listening on PORT=",PORT);
})