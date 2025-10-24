import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>الصفحة غير موجودة</h2>
        <p>عذرًا، الصفحة التي تبحث عنها غير متوفرة.</p>
      </main>
      <Footer />
    </>
  );
}
