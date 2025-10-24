import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('loggedIn');
    router.push('/login');
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', direction: 'rtl' }}>
      <h2>جاري تسجيل الخروج...</h2>
    </div>
  );
}
