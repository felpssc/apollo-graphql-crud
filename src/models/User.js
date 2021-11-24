import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: String,
  active: {
    type: Boolean,
    default: true,
    required: true
  }
});

export default mongoose.model("User", UserSchema);