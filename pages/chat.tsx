import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { parseAIResponseToFiles } from '../lib/ProjectBuilder';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [files, setFiles] = useState<{ [key: string]: string }>({});

  const handleSend = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setReply(data.reply);
    setFiles(parseAIResponseToFiles(data.reply));
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>الدردشة الذكية</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب طلبك هنا..."
          style={{ width: '100%', height: '100px', marginBottom: '1rem' }}
        />
        <button onClick={handleSend} style={{ padding: '0.5rem 1rem' }}>
          إرسال
        </button>

        {reply && (
          <div style={{ marginTop: '2rem' }}>
            <h3>رد الذكاء الاصطناعي:</h3>
            <pre>{reply}</pre>
          </div>
        )}

        {Object.keys(files).length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h3>الملفات الناتجة:</h3>
            {Object.entries(files).map(([name, content]) => (
              <div key={name} style={{ marginBottom: '1rem' }}>
                <strong>{name}</strong>
                <pre style={{ background: '#f0f0f0', padding: '1rem' }}>{content}</pre>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
