import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatBubble from '../components/ChatBubble';

export default function ChatPage() {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'ai' }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }, { text: `رد الذكاء: ${input}`, sender: 'ai' }]);
    setInput('');
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>دردشة المعرفة</h2>
        <div>
          {messages.map((msg, index) => (
            <ChatBubble key={index} text={msg.text} sender={msg.sender} />
          ))}
        </div>
        <input
          type="text"
          placeholder="اكتب رسالتك..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '0.5rem', width: '80%', marginTop: '1rem' }}
        />
        <br />
        <button onClick={handleSend} style={{ padding: '0.5rem 1rem', marginTop: '0.5rem' }}>
          إرسال
        </button>
      </main>
      <Footer />
    </>
  );
}
