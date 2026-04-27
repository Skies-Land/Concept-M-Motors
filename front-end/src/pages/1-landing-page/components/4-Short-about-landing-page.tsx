// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher une courte description de l'entreprise correspondant à la landing page
export default function ShortAbout() {
  return (
    <section className="bg-surface-dim overflow-hidden py-32 relative" data-pg-name="Section courte description de l'entreprise de la landing page">

      {/* Conteneur principal */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Contenu textuel */}
        <div className="lg:col-span-7">
          <Typography 
            variant="headline-lg" 
            component="h2" 
            color="on-surface" 
            className="uppercase mb-12"
          >
            Héritage et
            <span className="text-primary"> Excellence</span> Automobile
          </Typography>
          {/* Description de l'entreprise */}
          <div className="space-y-6 mb-16">
            <Typography variant="body-lg" color="on-surface-variant">
              M-MOTORS incarne la quintessence du luxe et de la performance.
              Depuis trois décennies, nous cultivons un savoir-faire unique
              dans le sourcing de véhicules rares et la personnalisation de
              l'expérience client.
            </Typography>
            <Typography variant="body-lg" color="on-surface-variant">
              Notre mission dépasse la simple transaction. Nous bâtissons des
              relations durables fondées sur la confiance technique et
              l'émotion esthétique.
            </Typography>
          </div>

          {/* Chiffres clés de l'entreprise */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/10">
            <div className="bg-surface-container p-6 rounded-lg">
              <Typography variant="label-sm" color="on-surface-variant" className="mb-2">Expérience</Typography>
              <Typography variant="headline-sm" component="span" color="on-surface">30+ Ans</Typography>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <Typography variant="label-sm" color="on-surface-variant" className="mb-2">Classement</Typography>
              <Typography variant="headline-sm" component="span" color="on-surface">Top 10</Typography>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <Typography variant="label-sm" color="on-surface-variant" className="mb-2">Clients</Typography>
              <Typography variant="headline-sm" component="span" color="on-surface">15k+</Typography>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <Typography variant="label-sm" color="on-surface-variant" className="mb-2">Pays</Typography>
              <Typography variant="headline-sm" component="span" color="on-surface">12</Typography>
            </div>
          </div>
        </div>

        {/* Liste des services de l'entreprise */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-low p-10 h-full flex flex-col justify-center rounded-lg">
            <Typography 
                variant="headline-sm" 
                component="h3" 
                color="on-surface" 
                className="mb-10 uppercase border-l-4 border-primary pl-6"
            >
              L'Écosystème M-Motors
            </Typography>

            {/* Les services */}
            <ul className="space-y-4">
              <li className="bg-surface-container-lowest/50 flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <Typography variant="label-lg" component="span" color="on-surface" className="group-hover:text-on-primary-fixed">Vente</Typography>
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed" data-icon="Icône de panier d'achat">shopping_cart</span>
              </li>
              <li className="bg-surface flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <Typography variant="label-lg" component="span" color="on-surface" className="group-hover:text-on-primary-fixed">Accompagnement</Typography>
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed" data-icon="Icône d'agent de support">support_agent</span>
              </li>
              <li className="bg-surface-container-lowest/50 flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <Typography variant="label-lg" component="span" color="on-surface" className="group-hover:text-on-primary-fixed">Essai</Typography>
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed" data-icon="Icône de vitesse">speed</span>
              </li>
              <li className="bg-surface flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <Typography variant="label-lg" component="span" color="on-surface" className="group-hover:text-on-primary-fixed">Financement</Typography>
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed" data-icon="Icône d'une banque">account_balance</span>
              </li>
              <li className="bg-surface-container-lowest/50 flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <Typography variant="label-lg" component="span" color="on-surface" className="group-hover:text-on-primary-fixed">Reprise</Typography>
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed" data-icon="Icône de flèche circulaire">autorenew</span>
              </li>
            </ul>
          </div>
        </div>

      </Container>

    </section>
  );
}
