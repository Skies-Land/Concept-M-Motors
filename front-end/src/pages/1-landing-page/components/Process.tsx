// COMPOSANTS
import Container from "../../../components/layout/Container";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher les informations du processus d'aquisition d'un véhicule correspondant à la landing page 
export default function Process() {
  return (
    <section className="py-32 bg-surface-dim" data-pg-name="Section : Process">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <Typography variant="headline-lg" component="h2" color="on-surface" className="uppercase">
              Processus d'aquisition
            </Typography>
            <div className="h-1 w-24 bg-primary mt-4"></div>
          </div>
          <Typography variant="body-md" component="p" color="on-surface-variant" className="max-w-md">
            Quatre étapes rigoureuses pour une acquisition en toute sérénité,
            de la sélection à la remise des clés.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/10">
          {/* Step 1 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <Typography variant="display-lg" component="span" className="text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              01
            </Typography>
            <Typography variant="headline-sm" component="h3" color="on-surface" className="mt-8 mb-4 uppercase">
              Choisissez votre véhicule
            </Typography>
            <Typography variant="body-sm" color="on-surface-variant">
              Parcourez notre catalogue exclusif de modèles sélectionnés pour
              leur excellence technique et leur rareté.
            </Typography>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <Typography variant="display-lg" component="span" className="text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              02
            </Typography>
            <Typography variant="headline-sm" component="h3" color="on-surface" className="mt-8 mb-4 uppercase">
              Simulez votre financement
            </Typography>
            <Typography variant="body-sm" color="on-surface-variant">
              Ajustez vos mensualités en temps réel selon votre apport et la
              durée souhaitée via notre interface intuitive.
            </Typography>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <Typography variant="display-lg" component="span" className="text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              03
            </Typography>
            <Typography variant="headline-sm" component="h3" color="on-surface" className="mt-8 mb-4 uppercase">
              Déposez vos documents
            </Typography>
            <Typography variant="body-sm" color="on-surface-variant">
              Une interface 100% digitale sécurisée pour un traitement
              ultra-rapide et confidentiel de votre dossier.
            </Typography>
          </div>
          {/* Step 4 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <Typography variant="display-lg" component="span" className="text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              04
            </Typography>
            <Typography variant="headline-sm" component="h3" color="on-surface" className="mt-8 mb-4 uppercase">
              Récupérez vos clés
            </Typography>
            <Typography variant="body-sm" color="on-surface-variant">
              Livraison à domicile ou expérience en showroom. La route vous
              attend désormais.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}
