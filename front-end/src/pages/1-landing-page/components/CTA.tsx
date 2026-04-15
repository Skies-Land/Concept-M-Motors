// COMPONENT
import Container from "../../../components/layout/Container";

// Composant servant à afficher un bouton d'appel à l'action correspondant à la landing page
export default function CTA() {
  return (
    <section className="py-24 bg-primary-container text-on-primary-container" data-pg-name="Section : Boutton action">
      <Container className="flex flex-col gap-12 items-center justify-between md:flex-row">
        <h2 className="font-bold font-headline max-w-xl text-4xl text-center tracking-tighter uppercase md:text-5xl md:text-left">
          Prêt à démarrer votre expérience ?
        </h2>
        <button className="bg-on-primary-fixed font-bold px-12 py-6 rounded-lg text-white tracking-[0.2em] transition-transform uppercase hover:scale-105">
          Commencer ici
        </button>
      </Container>
    </section>
  );
}
