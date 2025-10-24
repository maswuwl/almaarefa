import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>تسجيل الدخول</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            دخول
          </button>
        </form>
        {loggedIn && <p style={{ marginTop: '1rem', color: 'green' }}>✅ تم تسجيل الدخول بنجاح!</p>}
      </main>
      <Footer />
    </>
  );
}
