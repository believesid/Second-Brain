import mongoose, { model, Model, Schema } from "mongoose";
mongoose.connect("mongodb://nayaksiddharth1801_db_user:JdzDfp14StUy4uQL@ac-0jhgsnv-shard-00-00.1xp0gfh.mongodb.net:27017,ac-0jhgsnv-shard-00-01.1xp0gfh.mongodb.net:27017,ac-0jhgsnv-shard-00-02.1xp0gfh.mongodb.net:27017/?ssl=true&replicaSet=atlas-5zpoqt-shard-0&authSource=admin&appName=Cluster0");
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