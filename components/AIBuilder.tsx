export default function AIBuilder({ idea }: { idea: string }) {
  const response = `تم بناء مشروعك بنجاح: ${idea}`;
  return (
    <div style={{ padding: '1rem', backgroundColor: '#e8f5e9', borderRadius: '8px', marginTop: '1rem' }}>
      <strong>الذكاء الاصطناعي:</strong>
      <p>{response}</p>
    </div>
  );
}
