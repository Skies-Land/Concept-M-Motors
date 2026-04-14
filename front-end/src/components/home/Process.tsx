export default function Process() {
  return (
    <section className="py-32 bg-surface-dim" data-pg-name="Section : Process">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl font-headline font-bold text-white uppercase tracking-tight">
              Processus d'aquisition
            </h2>
            <div className="h-1 w-24 bg-primary-container mt-4"></div>
          </div>
          <p className="text-on-surface-variant max-w-md font-light">
            Quatre étapes rigoureuses pour une acquisition en toute sérénité,
            de la sélection à la remise des clés.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/10">
          {/* Step 1 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <span className="text-6xl font-headline font-bold text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              01
            </span>
            <h3 className="text-xl font-headline font-bold text-white mt-8 mb-4 uppercase">
              Choisissez votre véhicule
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Parcourez notre catalogue exclusif de modèles sélectionnés pour
              leur excellence technique et leur rareté.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <span className="text-6xl font-headline font-bold text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              02
            </span>
            <h3 className="text-xl font-headline font-bold text-white mt-8 mb-4 uppercase">
              Simulez votre financement
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Ajustez vos mensualités en temps réel selon votre apport et la
              durée souhaitée via notre interface intuitive.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <span className="text-6xl font-headline font-bold text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              03
            </span>
            <h3 className="text-xl font-headline font-bold text-white mt-8 mb-4 uppercase">
              Déposez vos documents
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Une interface 100% digitale sécurisée pour un traitement
              ultra-rapide et confidentiel de votre dossier.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-surface-container group p-10 rounded-lg transition-colors hover:bg-surface-container-high">
            <span className="text-6xl font-headline font-bold text-outline-variant/30 group-hover:text-primary-container/20 transition-colors">
              04
            </span>
            <h3 className="text-xl font-headline font-bold text-white mt-8 mb-4 uppercase">
              Récupérez vos clés
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Livraison à domicile ou expérience en showroom. La route vous
              attend désormais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
