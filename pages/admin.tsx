import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdminPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>لوحة الإدارة</h2>
        <p>مرحبًا بك في لوحة إدارة منصة المعرفة.</p>
        <ul>
          <li>مراجعة المشاريع الجديدة</li>
          <li>إدارة المستخدمين</li>
          <li>تحديث المحتوى</li>
          <li>مراقبة أداء المنصة</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
