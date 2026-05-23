import jwt from "jsonwebtoken";
import { random } from "./utils.js";
import express from "express";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import bcrypt from "bcrypt";
import { userMiddleware } from "./middleware.js";
import cors from "cors";
import { connectDB } from "./db.js";
import dotenv from "dotenv";
dotenv.config();
const JWT_PASSWORD = "Siddharth1801";
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        await UserModel.create({
            username: username,
            password: hashedPassword
        });
        res.json({
            message: "Signup successful"
        });
        console.log(username);
    }
    catch (e) {
        res.status(409).json({
            message: "user already exists"
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // ✅ Fix 1: added await
    const existingUser = await UserModel.findOne({ username });
    // ✅ Fix 2: using bcrypt to compare hashed password
    //@ts-ignore
    if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
        const token = jwt.sign({ id: existingUser._id }, JWT_PASSWORD);
        res.json({ token });
    }
    else {
        res.status(403).json({
            message: "invalid credentials"
        });
    }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    // ✅ Fix 3: correct assignment syntax
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title; // ✅ Fix 4: added title
    await ContentModel.create({
        link,
        //@ts-ignore
        type,
        title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });
    res.json({
        message: "Content added"
    });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username password");
    res.json({
        content
    });
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        });
        res.json({ hash });
    }
    else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
        res.json({
            message: "Removed link"
        });
    }
});
// ✅ Fix 5: added missing leading slash
app.post("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({ hash });
    if (!link) {
        res.status(409).json({
            message: "Sorry incorrect input"
        });
        return;
    }
    const content = await ContentModel.find({
        userId: link.userId
    });
    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    });
    if (!user) {
        res.status(409).json({
            message: "user not found"
        });
        return;
    }
    res.json({
        username: user.username,
        content: content
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map