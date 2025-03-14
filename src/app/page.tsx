import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import News from '@/components/home/News';
import StudentResources from '@/components/home/CTA';
import AcademicCalendar from '@/components/home/AcademicCalendar';
import FacultyDirectory from '@/components/home/FacultyDirectory';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <AcademicCalendar />
      <Stats />
      <FacultyDirectory />
      <Testimonials />
      <News />
      <StudentResources />
    </MainLayout>
  );
}
