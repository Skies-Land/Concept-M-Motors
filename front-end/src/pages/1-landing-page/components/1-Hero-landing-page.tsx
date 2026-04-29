// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";

// IMPORT
import imageHeroLandingPage from "../../../assets/IMG_Hero_landing-page.png"

/** Composant servant à afficher la section Hero correspondant à la landing page */
export default function HeroLandingPage() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface-container-lowest" data-pg-name="Section hero de la landing page">

      {/* Image de fond */}
      <div className="absolute inset-0 z-0" data-pg-name="Image de fond">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10" data-pg-name="Ombre devant l'image"></div>
        <img 
          className="w-full h-full object-cover grayscale opacity-50" 
          data-alt="Profil latéral d'une supercar moderne et élégante dans un garage sombre et cinématique" 
          src = {imageHeroLandingPage}
          alt="Image de fond de la section hero" />
      </div>

      {/* Conteneur principal */}
      <Container className="relative z-20">
        <div className="max-w-4xl">
          <Typography 
            variant="label-sm" 
            color="primary" 
            component="span" 
            className="block mb-6"
          >
            Précision Ingénierie
          </Typography>
          <Typography 
            variant="display-lg" 
            component="h1" 
            color="on-surface" 
            className="uppercase mb-8"
          >
            Valoriser la
            <span className="text-primary"> flexibilité</span>
          </Typography>
          <Typography 
            variant="body-lg" 
            component="p" 
            color="on-surface-variant" 
            weight="regular"
            className="max-w-2xl mb-12 text-xl"
          >
            L'excellence automobile redéfinie par la technologie et
            l'accompagnement sur-mesure. Accédez à un catalogue exclusif de
            véhicules d'exception.
          </Typography>

          {/* Boutons de navigation */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              variant="primary" 
              size="large" 
              // TODO: Ajouter un icône de flèche pointant vers la droite
              iconPosition="right"
              baseUrl="/catalog"
            >
              Parcourir notre catalogue
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              baseUrl="/about"
            >
              Notre histoire
            </Button>

          </div>
        </div>
      </Container>

      {/* Indicateur de défilement - Scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <Typography variant="label-sm" component="span" color="on-surface">
            En savoir plus
        </Typography>
        <div className="w-px h-12 bg-white"></div>
      </div>

    </section>
  );
}
