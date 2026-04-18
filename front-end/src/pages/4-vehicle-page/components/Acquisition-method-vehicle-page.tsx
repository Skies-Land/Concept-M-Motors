// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography"
import { Button } from "../../../components/design-system/Button"
import Container from "../../../components/design-system/Container"

// Composant servant à afficher deux options d'acquisition d'un véhicule - Achat / Location
export default function AcquisitionMethodVehiclePage() {
    return (
        <>
        {/* TODO: Ajouter les prix réels des véhicules en fonction de l'ID du véhicule */}
            <section className="bg-surface-container-low py-24" data-pg-name="Section sur le choix des options d'acquisition">
                <div className="px-12 max-w-7xl mx-auto w-full">
                    <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface uppercase mb-12 text-center">
                        Options d'acquisition
                    </h2>

                    {/* Grid pour afficher les options d'acquisition */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* OPTION 1 : Achat */}
                        <div className="bg-surface-container p-8 rounded flex flex-col gap-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col gap-2">
                                <span className="font-body text-primary text-sm uppercase tracking-widest font-semibold">
                                    Achat définitif
                                </span>
                                <h3 className="font-headline text-3xl font-bold text-on-surface uppercase">
                                    Achat
                                </h3>
                            </div>
                            <div className="relative z-10 flex flex-col gap-1">
                                <span className="font-body text-on-surface-variant text-sm">
                                    À partir de
                                </span>
                                <span className="font-headline text-5xl font-black text-on-surface tracking-tighter">
                                    192 400 €
                                </span>
                            </div>
                            <p className="font-body text-on-surface-variant text-sm relative z-10">
                                Découvrez le plaisir d'être propriétaire d'un véhicule sur mesure.
                            </p>
                            {/* Bouton pour commander le véhicule */}
                            <button className="relative z-10 mt-auto bg-surface-container-highest border border-outline-variant/15 text-on-surface font-headline font-bold uppercase text-sm tracking-tight py-4 px-6 rounded hover:bg-surface-variant transition-colors flex justify-center items-center gap-2">
                                Commander
                            </button>
                        </div>
                        {/* OPTION 2 : Location */}
                        <div className="bg-surface-container-highest p-8 rounded flex flex-col gap-8 relative border border-primary/20 shadow-[0_0_40px_rgba(255,145,87,0.05)]">
                            <div className="relative z-10 flex flex-col gap-2">
                                <span className="font-body text-primary text-sm uppercase tracking-widest font-semibold">
                                    Conditions flexibles
                                </span>
                                <h3 className="font-headline text-3xl font-bold text-on-surface uppercase">
                                    Location
                                </h3>
                            </div>
                            <div className="relative z-10 flex flex-col gap-1">
                                <span className="font-body text-on-surface-variant text-sm">
                                    Estimation sur 24 mois
                                </span>
                                <span className="font-headline text-5xl font-black text-on-surface tracking-tighter">
                                    3 200 € /mois
                                </span>
                            </div>
                            <p className="font-body text-on-surface-variant text-sm relative z-10">
                                Découvrez ci-dessous notre tableau complet des offres de location.
                            </p>
                            {/* Bouton pour commander le véhicule en location */}
                            <button className="relative z-10 mt-auto bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-headline font-bold uppercase text-sm tracking-tight py-4 px-6 rounded hover:from-primary-dim hover:to-primary transition-colors flex justify-center items-center gap-2">
                                Commander en location
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}