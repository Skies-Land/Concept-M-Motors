// Composant servant à afficher les services de l'entreprise correspondant à la page à propos

export default function OurVision() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="font-headline text-4xl font-bold uppercase tracking-tight mb-4">
                        L'Écosystème M-Motors
                    </h2>
                    <p className="text-zinc-500 font-body">
                        Une approche intégrée pour une expérience automobile sans compromis, 
                        alliant technologie de pointe et service personnalisé.
                    </p>
                </div>
                <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block mb-4"></div>
                <div className="font-bold font-label mb-4 shrink-0 text-orange-500 text-xs tracking-widest uppercase">
                    Services Précision
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Vente et Qualité */}
                <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                        <span className="material-symbols-outlined text-orange-500" data-icon="verified">
                            verified
                        </span>
                    </div>
                    <h3 className="font-headline text-xl font-bold">
                        Vente et Qualité
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Une sélection rigoureuse des modèles les plus performants, garantissant 
                        une intégrité mécanique totale.
                    </p>
                </div>
                {/* Accompagnement Client */}
                <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                    <div className="bg-primary/10 duration-500 flex h-12 items-center justify-center rounded-lg text-orange-500 transition-colors w-12">
                        <span className="material-symbols-outlined text-orange-500" data-icon="handshake">
                            handshake
                        </span>
                    </div>
                    <h3 className="font-headline text-xl font-bold">
                        Accompagnement
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Un conseiller dédié pour chaque étape de votre parcours, assurant une 
                        transition fluide vers votre nouveau véhicule.
                        </p>
                </div>
                {/* Essai Routier */}
                <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                        <span className="material-symbols-outlined text-orange-500" data-icon="speed">
                            speed
                        </span>
                    </div>
                    <h3 className="font-headline text-xl font-bold">
                        Essai Routier
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Prenez les commandes de nos modèles exclusifs sur des parcours sélectionnés 
                        pour révéler leur plein potentiel.
                    </p>
                </div>
                {/* Financement */}
                <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                        <span className="material-symbols-outlined text-orange-500" data-icon="payments">
                            payments
                        </span>
                    </div>
                    <h3 className="font-headline text-xl font-bold">
                        Financement
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Des solutions de financement sur mesure, adaptées à votre structure fiscale et 
                        à vos ambitions patrimoniales.
                    </p>
                </div>
                {/* Reprise */}
                <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high md:col-span-2">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                            <span className="material-symbols-outlined text-orange-500" data-icon="autorenew">
                                autorenew
                            </span>
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-bold mb-2">
                                Reprise Optimisée
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Une expertise transparente de votre véhicule actuel pour une offre de reprise 
                                au plus juste des valeurs du marché premium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}