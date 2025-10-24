import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'space-between' }}>
      <h1>منصة المعرفة</h1>
      <nav>
        <Link href="/build">بناء المعرفة</Link> |{' '}
        <Link href="/store">متجر المعرفة</Link> |{' '}
        <Link href="/mail">بريد المعرفة</Link> |{' '}
        <Link href="/chat">دردشة المعرفة</Link>
      </nav>
    </header>
  );
}
