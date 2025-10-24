// pages/login.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [token, setToken] = useState('');

  const handleLogin = () => {
    if (token.trim()) {
      localStorage.setItem('token', token);
      router.push('/chat');
    }
  };

  useEffect(() => {
    const existingToken = localStorage.getItem('token');
    if (existingToken) router.push('/chat');
  }, []);

  return (
    <main style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>تسجيل الدخول</h2>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="أدخل رمز الدخول"
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>
        دخول
      </button>
    </main>
  );
}
