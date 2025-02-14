import mongoose, { mongo } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is require"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is require"],
      minlength: [6, "Password should be greater then 6 charater"],
      select : true
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function () {
  if (!this.isModified) return
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};

userSchema.methods.comparePassword = async function (userPassword) {
     const isMatch = await bcrypt.compare(userPassword,this.password)
     return isMatch
}

const User = mongoose.model("User", userSchema);

export default User;
