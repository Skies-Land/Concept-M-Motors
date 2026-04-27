// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";

// Composant servant à afficher un bouton d'appel à l'action correspondant à la landing page
export default function CTA() {
  return (
    <section className="py-24 ignition-gradient text-on-primary-container" data-pg-name="Section bouton d'appel à l'action de la landing page">

      {/* Conteneur principal */}
      <Container className="flex flex-col gap-12 items-center justify-between md:flex-row">
        <Typography 
            variant="headline-lg" 
            component="h2" 
            color="inverse" 
            className="max-w-xl text-center md:text-left uppercase"
        >
          Prêt à démarrer votre expérience ?
        </Typography>

        {/* Bouton de navigation */}
        <Button 
            variant="secondary" 
            size="large"
            baseUrl="/login"
        >
            Commencer ici
        </Button>

      </Container>

    </section>
  );
}
