import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // Get authorization header
  const authHeader = req.headers.authorization;

  // Check if header exists
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  // Extract token from "Bearer TOKEN"
  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId to request
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
