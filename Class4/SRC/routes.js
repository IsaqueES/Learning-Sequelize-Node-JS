//Archive with routes of URL 
import {Router} from 'express';
const routes = new Router();

routes.get("/",(req,res)=>{
    return res.json({message:"Hello SSS!!"})
})

export default routes;