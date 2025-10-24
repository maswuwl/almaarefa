export default function ChatBubble({ text, sender }: { text: string; sender: 'user' | 'ai' }) {
  const isUser = sender === 'user';
  return (
    <div style={{
      backgroundColor: isUser ? '#e0f7fa' : '#fce4ec',
      padding: '1rem',
      borderRadius: '12px',
      margin: '0.5rem 0',
      textAlign: isUser ? 'right' : 'left'
    }}>
      {text}
    </div>
  );
}
