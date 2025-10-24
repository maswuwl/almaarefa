// pages/_app.tsx

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../public/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const email = typeof window !== 'undefined' ? localStorage.getItem('userEmail') : null;
    const isLoginPage = router.pathname === '/login';

    if (!email && !isLoginPage) {
      router.push('/login');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
