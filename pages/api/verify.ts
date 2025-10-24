import jwt from 'jsonwebtoken';

const SECRET = 'almaarefa_secret_key';

export default async function handler(req, res) {
  const token = req.cookies.token;
  if (!token) return res.status(401).end();

  try {
    jwt.verify(token, SECRET);
    res.status(200).end();
  } catch {
    res.status(401).end();
  }
}
