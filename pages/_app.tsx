// pages/_app.tsx

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../public/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />;
}
