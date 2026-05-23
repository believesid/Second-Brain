import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
export const userMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log("Token received:", token);
    console.log("JWT_PASSWORD:", JWT_PASSWORD);
    //@ts-ignore
    const decoded = jwt.verify(token, JWT_PASSWORD);
    //@ts-ignore
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.send(403).json({
            message: "You are not logged in"
        });
    }
};
//# sourceMappingURL=middleware.js.map