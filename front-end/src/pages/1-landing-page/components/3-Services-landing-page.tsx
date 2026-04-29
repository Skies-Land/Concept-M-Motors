// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";

// IMPORT
import imageServicesLandingPage from "../../../assets/IMG_Services-landing-page.png"

/** Composant servant à afficher les services proposés par l'entreprise correspondant à la landing page */
export default function ServicesLandingPage() {
  return (
    <section className="py-32 bg-surface-container-lowest" data-pg-name="Section services de la landing page">

      {/* Conteneur principal */}
      <Container>

        {/* En-tête de la section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <Typography variant="label-sm" color="primary">Écosystème Premium</Typography>
            <Typography variant="headline-lg" component="h2" color="on-surface" className="uppercase mt-4">Services Intégrés</Typography>
          </div>
          <Typography variant="label-md" component="p" color="on-surface-variant" className="max-w-md">
            Plus qu'un véhicule, une expérience de mobilité totale sans les contraintes traditionnelles.
          </Typography>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carte de service 1 : Tout Inclus */}
          <div className="relative rounded-2xl overflow-hidden group border border-white/5">
            <img 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-1000" 
              src={imageServicesLandingPage}
              alt="Intérieur d'une voiture de luxe" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl text-orange-500" data-icon="all_inclusive">all_inclusive</span>
                <Typography variant="label-sm" color="primary">Offre Signature</Typography>
              </div>
              <Typography variant="headline-md" component="h3" color="on-surface" className="uppercase mb-4">Tout Inclus</Typography>
              <Typography variant="label-md" color="on-surface-variant" className="mb-8">
                Entretien, assurance tous risques et assistance 24/7 réunis en un seul prélèvement fixe. La sérénité absolue.
              </Typography>
              {/* Bouton de navigation */}
              <Button variant="primary" size="small" baseUrl="/contact">
                Découvrir
              </Button>
            </div>
          </div>
          {/* Service Card 2: Technical */}
          <div className="grid grid-rows-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:bg-surface-container transition-colors">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-orange-500" data-icon="Icône d'agent de support">support_agent</span>
                </div>
                <div>
                  <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-2">Conciergerie 24/7</Typography>
                  <Typography variant="label-md" color="on-surface-variant">Une équipe dédiée pour répondre à tous vos besoins de mobilité, où que vous soyez.</Typography>
                </div>
              </div>
              {/* Bouton de navigation */}
              <Button 
                variant="tertiary" 
                size="small" 
                className="mt-6 p-0 w-max" 
                icon={<span className="material-symbols-outlined text-sm">arrow_forward</span>} 
                iconPosition="right"
                baseUrl="/contact"
              >
                En savoir plus
              </Button>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:bg-surface-container transition-colors">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-orange-500" data-icon="Icône de fabrication de précision">precision_manufacturing</span>
                </div>
                <div>
                  <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-2">Entretien Prédictif</Typography>
                  <Typography variant="label-md" color="on-surface-variant">Maintenance proactive avec pièces constructeurs d'origine pour garantir la performance.</Typography>
                </div>
              </div>
              {/* Bouton de navigation */}
              <Button 
                variant="tertiary" 
                size="small" 
                className="mt-6 p-0 w-max" 
                icon={<span className="material-symbols-outlined text-sm">arrow_forward</span>} 
                iconPosition="right"
                baseUrl="/contact"
              >
                En savoir plus
              </Button>
            </div>
          </div>
          {/* Service Card 3: Security & Guarantee */}
          <div className="bg-surface-container-low p-10 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-colors">
            <div className="space-y-8 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-orange-500" data-icon="Icône de coche de vérification">verified</span>
              </div>
              <div>
                <Typography variant="headline-md" component="h4" color="on-surface" className="uppercase mb-4">Garantie Premium Étendue</Typography>
                <Typography variant="label-md" color="on-surface-variant" className="mb-6">Sérénité totale sur 48 mois ou 100,000 km. Nous couvrons l'essentiel pour que vous ne pensiez qu'au plaisir de conduire.</Typography>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="Icône de coche de vérification">verified</span>
                    <Typography variant="label-sm" component="span" color="on-surface">Assistance Europe</Typography>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="Icône de coche de vérification">verified</span>
                    <Typography variant="label-sm" component="span" color="on-surface">Remplacement véhicule</Typography>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="Icône de coche de vérification">verified</span>
                    <Typography variant="label-sm" component="span" color="on-surface">Expertise certifiée</Typography>
                  </li>
                </ul>
              </div>
            </div>
            {/* Bouton de navigation */}
            <Button 
              variant="primary" 
              size="medium" 
              fullWidth={true} 
              className="mt-8 relative z-10"
              baseUrl="/contact"
            >
              Consulter les détails
            </Button>
          </div>
        </div>

      </Container>

    </section>
  );
}
