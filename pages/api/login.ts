import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const prisma = new PrismaClient();
const SECRET = 'almaarefa_secret_key'; // غيّره إلى مفتاح سري قوي

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: '7d' });
    const cookie = serialize('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: 'بيانات الدخول غير صحيحة' });
  }
}
