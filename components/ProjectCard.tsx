export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
