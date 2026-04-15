// Composant servant à afficher les services proposés par l'entreprise correspondant à la landing page

export default function Services() {
  return (
    <section className="py-32 bg-surface-container-lowest" data-pg-name="Section : Services">
      <div className="max-w-screen-2xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="font-black font-headline text-orange-500 text-xs tracking-[0.5em] uppercase">Écosystème Premium</span>
            <h2 className="text-4xl lg:text-6xl font-headline font-black uppercase tracking-tighter mt-4">Services Intégrés</h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-sm lg:text-base uppercase tracking-wider font-medium">
            Plus qu'un véhicule, une expérience de mobilité totale sans les contraintes traditionnelles.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Card 1: All Inclusive */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden group border border-white/5">
            <img className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAuvjwnFc-hdctkWJrc98sXCvj3MwEhG2NDQSga7w6uctrwqRI1t3tGRHbAHs-bgg3hzPxdVQcvaV-gv5q38F8FqwLkqScM1QJxoh4gdXH5I6blSqvreTodsRlcgtAlw5IUEjDdGe5ea0c-zcw7rbqlhdWIr8SU4mPcjxoDeWXNbJFJqSxj2zUKvsVRqOSA_l2qzomWgYyfnvNrQ4fx4cuFISp01KNoEB7bCQnKx_IG59SCYxK7Dj0l1JkcbVuYyBaibj6B8xi88N2" alt="Interior view" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl text-orange-500" data-icon="all_inclusive">all_inclusive</span>
                <span className="font-black font-headline text-orange-500 text-xs tracking-widest uppercase">Offre Signature</span>
              </div>
              <h3 className="text-3xl font-headline font-black uppercase text-white mb-4">Tout Inclus</h3>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed uppercase tracking-wider mb-8">
                Entretien, assurance tous risques et assistance 24/7 réunis en un seul prélèvement fixe. La sérénité absolue.
              </p>
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
                  <h4 className="text-xl font-headline font-bold uppercase text-white mb-2">Conciergerie 24/7</h4>
                  <p className="text-sm text-on-surface-variant uppercase leading-relaxed">Une équipe dédiée pour répondre à tous vos besoins de mobilité, où que vous soyez.</p>
                </div>
              </div>
              <div className="cursor-pointer flex font-bold gap-2 items-center mt-6 text-[10px] text-orange-500 tracking-widest uppercase">
                En savoir plus <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:bg-surface-container transition-colors">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-orange-500" data-icon="build">build</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold uppercase text-white mb-2">Entretien Prédictif</h4>
                  <p className="text-sm text-on-surface-variant uppercase leading-relaxed">Maintenance proactive avec pièces constructeurs d'origine pour garantir la performance.</p>
                </div>
              </div>
              <div className="cursor-pointer flex font-bold gap-2 items-center mt-6 text-[10px] text-orange-500 tracking-widest uppercase">
                En savoir plus <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>
          {/* Service Card 3: Security & Guarantee */}
          <div className="bg-surface-container-high p-10 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="space-y-8 relative z-10">
              <span className="material-symbols-outlined text-5xl text-orange-500" data-icon="verified_user">verified_user</span>
              <div>
                <h4 className="text-2xl font-headline font-black uppercase text-white mb-4">Garantie Premium Étendue</h4>
                <p className="text-sm text-on-surface-variant uppercase leading-relaxed mb-6">Sérénité totale sur 48 mois ou 100,000 km. Nous couvrons l'essentiel pour que vous ne pensiez qu'au plaisir de conduire.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="check_circle">check_circle</span> Assistance Europe
                  </li>
                  <li className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="check_circle">check_circle</span> Remplacement véhicule
                  </li>
                  <li className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest">
                    <span className="material-symbols-outlined text-orange-500 text-sm" data-icon="check_circle">check_circle</span> Expertise certifiée
                  </li>
                </ul>
              </div>
            </div>
            <button className="font-black font-headline ignition-gradient mt-8 py-4 relative rounded-lg shadow-xl text-on-primary-fixed text-sm tracking-widest uppercase w-full z-10">
              Consulter les détails
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
