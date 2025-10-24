// pages/chat.tsx

import { useState } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

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
      setReply(data.reply);
    } catch (error) {
      setReply('حدث خطأ أثناء الاتصال بالخادم.');
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>المحادثة الذكية</h2>
      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="اكتب رسالتك هنا..."
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={sendMessage} disabled={loading} style={{ padding: '0.5rem 1rem' }}>
        {loading ? 'جاري الإرسال...' : 'إرسال'}
      </button>
      {reply && (
        <div style={{ marginTop: '2rem', background: '#eee', padding: '1rem', borderRadius: '4px' }}>
          <strong>الرد:</strong>
          <p>{reply}</p>
        </div>
      )}
    </main>
  );
}
