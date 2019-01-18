import jwt from 'jsonwebtoken';
import fs from 'fs';

const userdb = JSON.parse(fs.readFileSync('./data/db.json', 'UTF-8'));

const SECRET_KEY = '123456789';

const expiresIn = '1h';

// Create a token from a payload
export function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));
}

// Check if the user exists in database
export function isAuthenticated({ email, password }) {
  console.log(`Email: ${email}, Password: ${password}`);

  return userdb.user.findIndex(user => user.email === email && user.password === password) !== -1;
}
