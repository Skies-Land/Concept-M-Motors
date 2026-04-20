// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography"
import { Button } from "../../../components/design-system/Button"
import Container from "../../../components/design-system/Container"

// TYPES
import { type Vehicle } from '../../../types/Vehicle';
export interface VehicleAcquisitionProps {
    vehicle: Vehicle;
}

// Composant servant à afficher deux options d'acquisition d'un véhicule - Achat / Location
export default function AcquisitionMethodVehiclePage({ vehicle }: VehicleAcquisitionProps) {
    return (
        <>
            <section className="bg-surface-container-low py-24" data-pg-name="Section sur le choix des options d'acquisition">
                <Container>
                    <Typography variant="headline-md" component="h2" color="on-surface" className="uppercase mb-12 text-center">
                        Options d'acquisition
                    </Typography>

                    {/* Grid pour afficher les options d'acquisition */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* OPTION 1 : Achat */}
                        <div className="bg-surface-container p-8 rounded-xl flex flex-col gap-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col gap-2">
                                <Typography variant="label-sm" color="primary" component="span" className="font-semibold">
                                    Achat définitif
                                </Typography>
                                <Typography variant="headline-sm" component="h3" color="on-surface" className="uppercase">
                                    Achat
                                </Typography>
                            </div>
                            <div className="relative z-10 flex flex-col gap-1">
                                <Typography variant="body-sm" color="on-surface-variant" component="span">
                                    À partir de
                                </Typography>
                                <Typography variant="headline-md" color="primary" component="span" className="tracking-tighter">
                                    {vehicle.acquisition.purchasePrice ? `${vehicle.acquisition.purchasePrice} €` : "Nous contacter"}
                                </Typography>
                            </div>
                            <Typography variant="body-sm" color="on-surface-variant" className="relative z-10">
                                Découvrez le plaisir d'être propriétaire d'un véhicule sur mesure.
                            </Typography>
                            {/* Bouton pour commander le véhicule */}
                            <Button variant="primary" className="relative z-10 mt-auto">
                                Commander
                            </Button>
                        </div>
                        {/* OPTION 2 : Location */}
                        <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col gap-8 relative border border-primary/20 shadow-[0_0_40px_rgba(255,145,87,0.05)]">
                            <div className="relative z-10 flex flex-col gap-2">
                                <Typography variant="label-sm" color="primary" component="span" className="font-semibold">
                                    Conditions flexibles
                                </Typography>
                                <Typography variant="headline-sm" component="h3" color="on-surface" className="uppercase">
                                    Location *
                                </Typography>
                            </div>
                            <div className="relative z-10 flex flex-col gap-1">
                                <Typography variant="body-sm" color="on-surface-variant" component="span">
                                    Estimation sur 24 mois
                                </Typography>
                                <Typography variant="headline-md" color="primary" component="span" className="tracking-tighter">
                                    {vehicle.acquisition.rentalPrice ? `${vehicle.acquisition.rentalPrice} € /mois` : "Nous contacter"}
                                </Typography>
                            </div>
                            <Typography variant="body-sm" color="on-surface-variant" className="relative z-10">
                                Découvrez ci-dessous notre tableau complet des offres de location.
                            </Typography>
                            {/* Bouton pour commander le véhicule en location */}
                            <Button variant="secondary" className="relative z-10 mt-auto border-primary/50 text-primary hover:bg-primary/5">
                                Commander en location
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}