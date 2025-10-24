import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ChatPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/verify')
      .then(res => res.ok ? setAuthorized(true) : router.push('/login'))
      .catch(() => router.push('/login'));
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setMessages([...messages, { user: message, bot: data.reply }]);
      setMessage('');
    } catch {
      setMessages([...messages, { user: message, bot: 'حدث خطأ أثناء الاتصال.' }]);
    }
    setLoading(false);
  };

  if (!authorized) return null;

  return (
    <main style={{ padding: '1rem', maxWidth: '600px', margin: 'auto', direction: 'rtl' }}>
      <h2 style={{ textAlign: 'center' }}>المحادثة الذكية</h2>
      {messages.map((msg, i) => (
        <div key={i} style={{ marginBottom: '1rem', background: '#f9f9f9', padding: '1rem', borderRadius: '6px' }}>
          <p><strong>أنت:</strong> {msg.user}</p>
          <p><strong>الرد:</strong> {msg.bot}</p>
        </div>
      ))}
      <textarea
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="اكتب رسالتك هنا..."
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />
      <br /><br />
      <button onClick={sendMessage} disabled={loading} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        {loading ? 'جاري الإرسال...' : 'إرسال'}
      </button>
    </main>
  );
}
