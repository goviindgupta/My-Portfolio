import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization; // ✅ Fixed typo
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next("Auth Failed"); // ✅ Corrected condition and added return
  }

  const token = authHeader.split(" ")[1]; // ✅ Extract token correctly
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY); // ✅ Ensure correct secret key
    req.user = { userId: payload.userId };
    next();
  } catch (err) {
    return next("Auth Failed"); // ✅ Return to stop execution
  }
};

export default userAuth;
