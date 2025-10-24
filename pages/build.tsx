import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIBuilder from '../components/AIBuilder';

export default function BuildPage() {
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>بناء مشروع جديد</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="اكتب فكرتك هنا..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            style={{ padding: '0.5rem', width: '80%', marginBottom: '1rem' }}
          />
          <br />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            بناء
          </button>
        </form>
        {submitted && <AIBuilder idea={idea} />}
      </main>
      <Footer />
    </>
  );
}
