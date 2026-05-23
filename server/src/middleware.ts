
//@ts-ignore
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";


export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    console.log("Token received:", token);
    console.log("JWT_PASSWORD:", JWT_PASSWORD);
    //@ts-ignore
    const decoded = jwt.verify(token as string, JWT_PASSWORD);


    //@ts-ignore
    if(decoded){
        //@ts-ignore
       req.userId = decoded.id;
       next()
    }
    else{
        res.send(403).json({
            message: "You are not logged in"
        })
    }

}