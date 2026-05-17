import mongoose, { model, Model, Schema } from "mongoose";
export const connectDB = async () => {
    try {
        //@ts-ignore
        await mongoose.connect("mongodb://sid-18:nayak12@ac-mbosyxh-shard-00-00.hkk9bh6.mongodb.net:27017,ac-mbosyxh-shard-00-01.hkk9bh6.mongodb.net:27017,ac-mbosyxh-shard-00-02.hkk9bh6.mongodb.net:27017/Second-Brain?ssl=true&replicaSet=atlas-ulperk-shard-0&authSource=admin&appName=Cluster0");
        console.log("database connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
//first create a schema then use a model to put it, "users" is the name of the UserModel (this statement covers code till line 10)
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String }
});
export const UserModel = model("users", UserSchema);
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});
const LinkSchema = new Schema({
    hash: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
});
export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);
//# sourceMappingURL=db.js.map