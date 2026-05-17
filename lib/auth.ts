import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  return bcrypt.compare(password, hashedPassword);
}

const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey123";



export function generateToken(payload: {
  userId: string;
  role: string;
}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}