// COMPOSANTS
import Container from "../../../components/layout/Container";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher les services proposés par l'entreprise correspondant à la landing page
export default function Services() {
  return (
    <section className="py-32 bg-surface-container-lowest" data-pg-name="Section : Services">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <Typography variant="label-sm" color="primary">Écosystème Premium</Typography>
            <Typography variant="headline-lg" component="h2" color="on-surface" className="uppercase mt-4">Services Intégrés</Typography>
          </div>
          <Typography variant="label-md" component="p" color="on-surface-variant" className="max-w-md">
            Plus qu'un véhicule, une expérience de mobilité totale sans les contraintes traditionnelles.
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Card 1: All Inclusive */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden group border border-white/5">
            <img className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAuvjwnFc-hdctkWJrc98sXCvj3MwEhG2NDQSga7w6uctrwqRI1t3tGRHbAHs-bgg3hzPxdVQcvaV-gv5q38F8FqwLkqScM1QJxoh4gdXH5I6blSqvreTodsRlcgtAlw5IUEjDdGe5ea0c-zcw7rbqlhdWIr8SU4mPcjxoDeWXNbJFJqSxj2zUKvsVRqOSA_l2qzomWgYyfnvNrQ4fx4cuFISp01KNoEB7bCQnKx_IG59SCYxK7Dj0l1JkcbVuYyBaibj6B8xi88N2" alt="Interior view" />
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
              <button className="border border-primary font-bold ignition-gradient px-8 py-3 rounded-lg text-on-primary-fixed text-xs tracking-widest transition-all uppercase">Découvrir</button>
            </div>
          </div>
          {/* Service Card 2: Technical */}
          <div className="grid grid-rows-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:bg-surface-container transition-colors">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-orange-500" data-icon="support_agent">support_agent</span>
                </div>
                <div>
                  <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-2">Conciergerie 24/7</Typography>
                  <Typography variant="label-md" color="on-surface-variant">Une équipe dédiée pour répondre à tous vos besoins de mobilité, où que vous soyez.</Typography>
                </div>
              </div>
              <div className="cursor-pointer flex items-center mt-6 gap-2">
                <Typography variant="label-sm" color="primary">En savoir plus</Typography>
                <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:bg-surface-container transition-colors">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-orange-500" data-icon="build">build</span>
                </div>
                <div>
                  <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-2">Entretien Prédictif</Typography>
                  <Typography variant="label-md" color="on-surface-variant">Maintenance proactive avec pièces constructeurs d'origine pour garantir la performance.</Typography>
                </div>
              </div>
              <div className="cursor-pointer flex items-center mt-6 gap-2">
                <Typography variant="label-sm" color="primary">En savoir plus</Typography>
                <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>
          {/* Service Card 3: Security & Guarantee */}
          <div className="bg-surface-container-low p-10 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-colors">
            <div className="absolute top-[-20%] right-[-10%] opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="space-y-8 relative z-10">
              <span className="material-symbols-outlined text-5xl text-orange-500" data-icon="verified_user">verified_user</span>
              <div>
                <Typography variant="headline-md" component="h4" color="on-surface" className="uppercase mb-4">Garantie Premium Étendue</Typography>
                <Typography variant="label-md" color="on-surface-variant" className="mb-6">Sérénité totale sur 48 mois ou 100,000 km. Nous couvrons l'essentiel pour que vous ne pensiez qu'au plaisir de conduire.</Typography>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="check_circle">check_circle</span>
                    <Typography variant="label-sm" component="span" color="on-surface">Assistance Europe</Typography>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="check_circle">check_circle</span>
                    <Typography variant="label-sm" component="span" color="on-surface">Remplacement véhicule</Typography>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="check_circle">check_circle</span>
                    <Typography variant="label-sm" component="span" color="on-surface">Expertise certifiée</Typography>
                  </li>
                </ul>
              </div>
            </div>
            <button className="font-black font-headline ignition-gradient mt-8 py-4 relative rounded-lg shadow-xl text-on-primary-fixed text-sm tracking-widest uppercase w-full z-10">
              Consulter les détails
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
