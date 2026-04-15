// COMPONENT
import Container from "../../../components/layout/Container";

// Composant servant à afficher la section Hero correspondant à la landing page
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface-container-lowest" data-pg-name="Section : Hero">
      <div className="absolute inset-0 z-0" data-pg-name="Image de fond">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10" data-pg-name="Ombre devant l'image"></div>
        <img className="w-full h-full object-cover grayscale opacity-50" data-alt="sleek modern supercar side profile in a dark cinematic garage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2L8bbipyhdBjNqpVQ-Jlwvg3b9HzayQRSG5JLFwfNb9pAUNgoz7Ed2ulzWr2ZFOD8Ul-2hZ6tI5QNHYkvNobBRnTbBeQ6uudeGH06kkx9xpo2DINPUAeaM8_Nl0ujAeKk562UOVPSGp3B9eH0F0QDG9fINC6zSnpWOMi0Dbg-7ihmr3FoNhqpQyMz0RrS0zN2IDD7tL9J7YMb_7fIhMG9xHhUNAOYmOTMAc9b3-hk1Wjo5cLo0VgVXH94CrDxlnBPdZzVTpmZFj4i" alt="Hero background" />
      </div>
      <Container className="relative z-20">
        <div className="max-w-4xl">
          <span className="label-sm text-primary-container font-medium tracking-[0.3em] uppercase block mb-6">Précision Ingénierie</span>
          <h1 className="text-tension-lg font-headline font-bold text-white uppercase tracking-tighter mb-8">
            Valoriser la
            <span className="text-primary-container"> flexibilité</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light max-w-2xl mb-12 leading-relaxed">
            L'excellence automobile redéfinie par la technologie et
            l'accompagnement sur-mesure. Accédez à un catalogue exclusif de
            véhicules d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="flex font-bold gap-3 ignition-gradient items-center justify-center px-10 py-5 rounded-lg text-on-primary-fixed tracking-widest uppercase">
              Parcourir notre catalogue
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <button className="bg-surface-container-highest font-bold px-10 py-5 rounded-lg text-white tracking-widest transition-colors uppercase hover:bg-surface-container-high">
              En savoir plus
            </button>
          </div>
        </div>
      </Container>
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.5em] font-label">En savoir plus</span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
}
