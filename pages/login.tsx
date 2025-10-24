import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) return alert('يرجى إدخال البريد وكلمة المرور');
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        router.push('/chat');
      } else {
        alert(data.error || 'فشل تسجيل الدخول');
      }
    } catch (err) {
      alert('خطأ في الاتصال بالخادم');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', direction: 'rtl' }}>
      <h2>تسجيل الدخول</h2>
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '0.5rem', width: '250px' }}
      /><br /><br />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '0.5rem', width: '250px' }}
      /><br /><br />
      <button onClick={handleLogin} disabled={loading} style={{ padding: '0.5rem 1rem' }}>
        {loading ? 'جاري التحقق...' : 'دخول'}
      </button>
    </div>
  );
}
