// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography"
import Container from "../../../components/design-system/Container"

// TYPES
import { type Vehicle } from '../../../types/Vehicle';
export interface VehicleRentalPriceProps {
    vehicle: Vehicle;
}

/** Composant servant à afficher une grille tarifaire pour la méthode d'acquisition par location */
export default function TarifCatalogDescriptionPage({ vehicle }: VehicleRentalPriceProps) {
    return (
        <>
            <Container as="section" className="py-24 rounded-lg" data-pg-name="Section : Grille tarifaire pour la location">
                <Typography variant="headline-sm" component="h2" color="on-surface" className="uppercase mb-8">
                    Grille tarifaire pour la location
                </Typography>

                {/* Grille de tarification pour la location */}
                <div className="bg-surface-container overflow-hidden rounded-lg">
                    <div className="bg-surface-container-highest border-b border-outline-variant/15 grid grid-cols-2 p-4">
                        <Typography variant="label-sm" color="primary" className="font-semibold">Durée</Typography>
                        <Typography variant="label-sm" color="primary" className="font-semibold">Mensualités</Typography>
                    </div>
                    {/* 24 mois (Prix de base) */}
                    <div className="bg-surface-container grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            24 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {vehicle.acquisition.rentalPrice ? `${vehicle.acquisition.rentalPrice} € / mois` : "Nous contacter"}
                        </Typography>
                    </div>
                    {/* 36 mois (Ex: réduction de 15%) */}
                    <div className="bg-surface-container-highest grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            36 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {vehicle.acquisition.rentalPrice ? `${Math.round(vehicle.acquisition.rentalPrice * 0.85)} € / mois` : "Nous contacter"}
                        </Typography>
                    </div>
                    {/* 48 mois (Ex: réduction de 25%) */}
                    <div className="bg-surface-container grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            48 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {vehicle.acquisition.rentalPrice ? `${Math.round(vehicle.acquisition.rentalPrice * 0.75)} € / mois` : "Nous contacter"}
                        </Typography>
                    </div>
                    {/* 72 mois (Ex: réduction de 35%) */}
                    <div className="bg-surface-container-highest grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            72 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {vehicle.acquisition.rentalPrice ? `${Math.round(vehicle.acquisition.rentalPrice * 0.65)} € / mois` : "Nous contacter"}
                        </Typography>
                    </div>
                </div>
                <Typography variant="label-md" color="on-surface-variant" component="p" className="mt-4 text-right text-xs lowercase first-letter:capitalize italic">
                    * Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
                </Typography>
            </Container>
        </>
    )
}