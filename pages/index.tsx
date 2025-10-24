import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>مرحبًا بك في منصة المعرفة</h2>
        <p>ابدأ رحلتك في بناء المشاريع، التواصل، والتعلم المدعوم بالذكاء الاصطناعي.</p>
      </main>
      <Footer />
    </>
  );
}
