# منصة المعرفة

منصة عربية ذكية تتيح للمستخدمين التفاعل مع نموذج GPT عبر واجهة بسيطة وسريعة، تدعم الجوال وتسجيل الدخول.

## ⚙️ المتطلبات

- Node.js 18+
- مفتاح OpenAI API داخل ملف `.env.local`

## 🚀 بدء التشغيل

```bash
npm install
npm run dev
```

ثم افتح الرابط: [http://localhost:3000](http://localhost:3000)

## 📁 هيكل المشروع

```
lib/
pages/
  ├── login.tsx
  ├── chat.tsx
  ├── _app.tsx
  └── api/chat.ts
public/
  ├── styles/global.css
  └── images/logo.png
components/
  └── Header.tsx
.env.local
.gitignore
README.md
```

## 🧠 الميزات

- تسجيل دخول بسيط باستخدام رمز
- محادثة ذكية مع GPT-4
- حماية المفتاح عبر `.env.local`
- دعم كامل للجوال واللغة العربية

## 📦 النشر

يمكنك نشر المنصة على [Vercel](https://vercel.com) بسهولة.

---

هل تريد الآن اختبار المشروع على الجوال؟ أو نبدأ بإضافة ميزات جديدة؟
