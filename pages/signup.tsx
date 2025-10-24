import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password) return alert('يرجى إدخال البريد وكلمة المرور');

    localStorage.setItem('user', JSON.stringify({ email, password }));
    router.push('/login');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', direction: 'rtl' }}>
      <h2>إنشاء حساب جديد</h2>
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
      <button onClick={handleSignup} style={{ padding: '0.5rem 1rem' }}>
        تسجيل
      </button>
    </div>
  );
}
