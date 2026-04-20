// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography"
import Container from "../../../components/design-system/Container"

// TYPES
import { type Vehicle } from '../../../types/Vehicle';
export interface VehicleDescriptionProps {
    vehicle: Vehicle;
}

// Composant servant à afficher la section de description et les informations techniques du véhicule
export default function DescriptionVehiclePage({ vehicle }: VehicleDescriptionProps) {
    return (
        <>
            <Container as="section" className="gap-16 grid grid-cols-1 lg:grid-cols-12 py-24" data-pg-name="Section d'information technique du véhicule">
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Titre de la section */}
                    <Typography variant="headline-md" component="h2" color="on-surface" className="uppercase">
                        En savoir plus
                    </Typography>
                    {/* Description du véhicule */}
                    <Typography variant="body-md" color="on-surface-variant">
                        {vehicle.description}
                    </Typography>
                </div>

                {/* Carte d'information technique du véhicule */}
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Information sur l'accélération du véhicule */}
                    <div className="bg-surface-container-highest p-4 lg:p-6 rounded-xl flex flex-col justify-between aspect-square">
                        <div className="flex flex-col gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">timer</span> 
                            <Typography variant="label-sm" color="on-surface-variant" className="leading-tight">
                                Accélération 0-100
                            </Typography>
                        </div>
                        <div className="flex items-end gap-1 mt-2">
                            <Typography variant="headline-sm" component="span" color="on-surface" className="tracking-tighter">
                                {vehicle.technicalSpecs.acceleration}
                            </Typography>
                            <Typography variant="label-sm" color="on-surface-variant" component="span" className="mb-1 lowercase">
                                s
                            </Typography>
                        </div>
                    </div>
                    {/* Information sur la vitesse maximale du véhicule */}
                    <div className="bg-surface-container-highest p-4 lg:p-6 rounded-xl flex flex-col justify-between aspect-square">
                        <div className="flex flex-col gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">speed</span> 
                            <Typography variant="label-sm" color="on-surface-variant" className="leading-tight">
                                Vitesse max
                            </Typography>
                        </div>
                        <div className="flex items-end gap-1 mt-2">
                            <Typography variant="headline-sm" component="span" color="on-surface" className="tracking-tighter">
                                {vehicle.technicalSpecs.topSpeed}
                            </Typography>
                            <Typography variant="label-sm" color="on-surface-variant" component="span" className="mb-1 lowercase">
                                km/h
                            </Typography>
                        </div>
                    </div>
                    {/* Information sur la puissance du véhicule */}
                    <div className="bg-surface-container-highest p-4 lg:p-6 rounded-xl flex flex-col justify-between aspect-square">
                        <div className="flex flex-col gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">bolt</span> 
                            <Typography variant="label-sm" color="on-surface-variant" className="leading-tight">
                                Puissance
                            </Typography>
                        </div>
                        <div className="flex items-end gap-1 mt-2">
                            <Typography variant="headline-sm" component="span" color="on-surface" className="tracking-tighter">
                                {vehicle.technicalSpecs.power}
                            </Typography>
                            <Typography variant="label-sm" color="on-surface-variant" component="span" className="mb-1 lowercase">
                                ch
                            </Typography>
                        </div>
                    </div>
                    {/* Information sur le moteur du véhicule */}
                    <div className="bg-surface-container-highest p-4 lg:p-6 rounded-xl flex flex-col justify-between aspect-square">
                        <div className="flex flex-col gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">settings</span> 
                            <Typography variant="label-sm" color="on-surface-variant" className="leading-tight">
                                Moteur
                            </Typography>
                        </div>
                        <div className="flex items-end gap-1 mt-2">
                            <Typography variant="label-md" color="on-surface" component="span" className="leading-tight uppercase">
                                {vehicle.technicalSpecs.engine}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}