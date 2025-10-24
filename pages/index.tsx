import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', direction: 'rtl' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>منصة المعرفة</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        منصة تعليمية عربية تعتمد على الذكاء الاصطناعي لإنشاء محتوى ذكي باللغة العربية.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/signup">
          <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>إنشاء حساب</button>
        </Link>
        <Link href="/login">
          <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>تسجيل الدخول</button>
        </Link>
        <Link href="/chat">
          <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>المحادثة الذكية</button>
        </Link>
      </div>
    </main>
  );
}
