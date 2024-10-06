import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: false, unique: true },
  email: { type: String, required: false, unique: true },
  username: { type: String, required: false },
  reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
