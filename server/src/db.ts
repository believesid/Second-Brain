import mongoose , {model, Model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    //@ts-ignore
    console.log("hero");
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
//first create a schema then use a model to put it, "users" is the name of the UserModel (this statement covers code till line 10)
const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String}
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: { type: String, enum: ["youtube", "twitter"], required: true},
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

const LinkSchema = new Schema({
    hash: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
})

export const LinkModel = model("Links", LinkSchema);

export const ContentModel = model("Content", ContentSchema);