import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'مشروع دردشة ذكية', description: 'نظام دردشة مدعوم بالذكاء الاصطناعي.' },
  { title: 'منصة تعليمية', description: 'منصة تفاعلية لتعليم البرمجة باللغة العربية.' },
  { title: 'مساعد شخصي', description: 'تطبيق يساعدك في تنظيم المهام اليومية.' },
];

export default function StorePage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>متجر المعرفة</h2>
        {projects.map((proj, index) => (
          <ProjectCard key={index} title={proj.title} description={proj.description} />
        ))}
      </main>
      <Footer />
    </>
  );
}
