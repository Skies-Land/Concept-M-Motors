// COMPOSANTS
import Container from "../../../components/layout/Container";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher un bouton d'appel à l'action correspondant à la landing page
export default function CTA() {
  return (
    <section className="py-24 ignition-gradient text-on-primary-container" data-pg-name="Section : Boutton action">
      <Container className="flex flex-col gap-12 items-center justify-between md:flex-row">
        <Typography 
            variant="headline-lg" 
            component="h2" 
            color="inverse" 
            className="max-w-xl text-center md:text-left uppercase"
        >
          Prêt à démarrer votre expérience ?
        </Typography>
        <button className="bg-on-primary-fixed font-bold px-12 py-6 rounded-lg text-white tracking-[0.2em] transition-transform uppercase hover:scale-105">
          Commencer ici
        </button>
      </Container>
    </section>
  );
}
