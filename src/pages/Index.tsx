import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Presentations from '@/components/Presentations';
import Awards from '@/components/Awards';
import Documents from '@/components/Documents';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionBookmarks from '@/components/SectionBookmarks';

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <SectionBookmarks />
    <Hero />
    <About />
    <Research />
    <Projects />
    <Presentations />
    <Awards />
    <Documents />
    <Contact />
    <Footer />
  </div>
);

export default Index;
