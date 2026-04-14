import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Process from './components/home/Process';
import Services from './components/home/Services';
import ShortAbout from './components/home/ShortAbout';
import CTA from './components/home/CTA';

function App() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <ShortAbout />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
