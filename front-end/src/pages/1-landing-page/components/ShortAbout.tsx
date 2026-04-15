// Composant servant à afficher une courte description de l'entreprise correspondant à la landing page

export default function ShortAbout() {
  return (
    <section className="bg-surface-dim overflow-hidden py-32 relative" data-pg-name="Section : Short About">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Text Content */}
        <div className="lg:col-span-7">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white uppercase tracking-tighter leading-none mb-12">
            Héritage et
            <span className="text-primary-container"> Excellence</span> Automobile
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed mb-16">
            <p>
              M-MOTORS incarne la quintessence du luxe et de la performance.
              Depuis trois décennies, nous cultivons un savoir-faire unique
              dans le sourcing de véhicules rares et la personnalisation de
              l'expérience client.
            </p>
            <p>
              Notre mission dépasse la simple transaction. Nous bâtissons des
              relations durables fondées sur la confiance technique et
              l'émotion esthétique.
            </p>
          </div>
          {/* Spec-Grid Style Key Figures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/10">
            <div className="bg-surface-container p-6 rounded-lg">
              <span className="label-sm text-on-surface-variant block mb-2 uppercase tracking-tighter">Expérience</span>
              <span className="text-3xl font-headline font-bold text-white">30+ Ans</span>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <span className="label-sm text-on-surface-variant block mb-2 uppercase tracking-tighter">Classement</span>
              <span className="text-3xl font-headline font-bold text-white">Top 10</span>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <span className="label-sm text-on-surface-variant block mb-2 uppercase tracking-tighter">Clients</span>
              <span className="text-3xl font-headline font-bold text-white">15k+</span>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <span className="label-sm text-on-surface-variant block mb-2 uppercase tracking-tighter">Pays</span>
              <span className="text-3xl font-headline font-bold text-white">12</span>
            </div>
          </div>
        </div>
        {/* Ecosystem Image/List */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-low p-10 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-headline font-bold text-white mb-10 uppercase tracking-widest border-l-4 border-primary-container pl-6">
              L'Écosystème M-Motors
            </h3>
            <ul className="space-y-4">
              <li className="bg-surface-container-lowest/50 flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <span className="text-white font-bold uppercase tracking-widest group-hover:text-on-primary-fixed">Vente</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-fixed" data-icon="shopping_cart">shopping_cart</span>
              </li>
              <li className="bg-surface flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <span className="text-white font-bold uppercase tracking-widest group-hover:text-on-primary-fixed">Accompagnement</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-fixed" data-icon="support_agent">support_agent</span>
              </li>
              <li className="bg-surface-container-lowest/50 flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <span className="text-white font-bold uppercase tracking-widest group-hover:text-on-primary-fixed">Essai</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-fixed" data-icon="speed">speed</span>
              </li>
              <li className="bg-surface flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <span className="text-white font-bold uppercase tracking-widest group-hover:text-on-primary-fixed">Financement</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-fixed" data-icon="account_balance">account_balance</span>
              </li>
              <li className="bg-surface-container-lowest/50 flex group items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary-container">
                <span className="text-white font-bold uppercase tracking-widest group-hover:text-on-primary-fixed">Reprise</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-fixed" data-icon="autorenew">autorenew</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
