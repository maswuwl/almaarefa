import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function MailPage() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>بريد المعرفة</h2>
        <form onSubmit={handleSend}>
          <textarea
            placeholder="اكتب رسالتك هنا..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', height: '150px', padding: '1rem' }}
          />
          <br />
          <button type="submit" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
            إرسال
          </button>
        </form>
        {sent && <p style={{ marginTop: '1rem', color: 'green' }}>✅ تم إرسال الرسالة بنجاح!</p>}
      </main>
      <Footer />
    </>
  );
}
