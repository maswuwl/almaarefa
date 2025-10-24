import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && user.password === password) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: 'بيانات الدخول غير صحيحة' });
  }
}
