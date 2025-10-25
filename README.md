# منصة المعرفة

منصة تعليمية عربية تعتمد على الذكاء الاصطناعي من نوع GPT لإنشاء محتوى ذكي باللغة العربية.

## 🧠 الميزات
- تسجيل دخول آمن باستخدام JWT و Cookies
- تشفير كلمات المرور باستخدام bcrypt
- محادثة ذكية عبر OpenAI API
- واجهة عربية متوافقة مع الجوال
- قاعدة بيانات Prisma + SQLite

## ⚙️ المتطلبات
- Node.js 18+
- مفتاح API من OpenAI
- حساب على Vercel أو بيئة نشر تدعم Next.js

## 🚀 طريقة التشغيل
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## 📁 هيكل المشروع
```
├── pages/
│   ├── api/
│   │   ├── login.ts
│   │   ├── signup.ts
│   │   ├── chat.ts
│   │   └── verify.ts
│   ├── index.tsx
│   ├── login.tsx
│   ├── signup.tsx
│   ├── chat.tsx
│   └── logout.tsx
├── prisma/
│   └── schema.prisma
├── styles/
│   └── globals.css
├── public/
│   └── icons/
├── .env.local
├── package.json
├── README.md
```

## 📌 ملاحظات
- تأكد من إدخال مفتاح OpenAI في `.env.local`
- لا ترفع ملف `.env.local` إلى GitHub
- المنصة جاهزة للنشر على Vercel مباشرة
