import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'البيانات ناقصة' });

  try {
    const user = await prisma.user.create({ data: { email, password } });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: 'فشل التسجيل' });
  }
}
