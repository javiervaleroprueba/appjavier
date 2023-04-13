import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  }
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
