import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>عن منصة المعرفة</h2>
        <p>
          منصة المعرفة هي مشروع عربي مبتكر يهدف إلى تمكين المستخدمين من تحويل أفكارهم إلى مشاريع واقعية،
          باستخدام أدوات ذكية وتجربة سلسة بدون أي عوائق تقنية أو لغوية.
        </p>
        <p>
          نحن نؤمن بأن كل فكرة تستحق أن تُبنى، وأن الذكاء الاصطناعي يجب أن يكون شريكًا معرفيًا حقيقيًا،
          يساعدك في كل خطوة من التصميم إلى التنفيذ.
        </p>
      </main>
      <Footer />
    </>
  );
}
