import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Visual from './sections/Visual';
import Team from './sections/Team';
import TeamStructure from './sections/TeamStructure';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Features />
        <Visual />
        <Team />
        <TeamStructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
