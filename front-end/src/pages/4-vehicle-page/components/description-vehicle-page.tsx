// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography"
import { Button } from "../../../components/design-system/Button"
import Container from "../../../components/design-system/Container"

// Composant servant à afficher la section de description et les informations techniques du véhicule
export default function DescriptionVehiclePage() {
    return (
        <>
            {/* TODO: Remplacer le texte et les informations technique de présentation 
            par celles de la voiture en fonction de son ID dans la base de données */}
            <section className="gap-16 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto px-12 py-24 w-full" data-pg-name="Section d'information technique du véhicule">
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface uppercase">
                        Engineering<br/>Excellence
                    </h2>
                    {/* Description du véhicule */}
                    <p className="font-body text-on-surface-variant leading-relaxed">
                        Texte d'information à propos du véhicule
                    </p>
                </div>

                {/* Carte d'information technique du véhicule */}
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-surface-container-highest p-6 rounded flex flex-col justify-between aspect-square">
                        <span className="font-body text-on-surface-variant text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                                timer
                            </span> 
                            0-100 km/h
                        </span>
                        <span className="font-headline text-4xl font-black text-on-surface tracking-tighter">
                            3.4s
                        </span>
                    </div>
                    <div className="bg-surface-container-highest p-6 rounded flex flex-col justify-between aspect-square">
                        <span className="font-body text-on-surface-variant text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                                speed
                            </span> 
                            Top Speed
                        </span>
                        <span className="font-headline text-4xl font-black text-on-surface tracking-tighter">
                            320 
                            <span className="text-xl text-on-surface-variant">km/h</span>
                        </span>
                    </div>
                    <div className="bg-surface-container-highest p-6 rounded flex flex-col justify-between aspect-square">
                        <span className="font-body text-on-surface-variant text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                                bolt
                            </span> 
                            Power
                        </span>
                        <span className="font-headline text-4xl font-black text-on-surface tracking-tighter">
                            510 
                            <span className="text-xl text-on-surface-variant">PS</span>
                        </span>
                    </div>
                    <div className="bg-surface-container-highest p-6 rounded flex flex-col justify-between aspect-square">
                        <span className="font-body text-on-surface-variant text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                                settings
                            </span> 
                            Engine
                        </span>
                        <span className="font-headline text-4xl font-black text-on-surface tracking-tighter">
                            4.0L 
                            <span className="text-xl text-on-surface-variant">Flat-6</span>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}