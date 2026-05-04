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

    /** Mensualité de location du véhicule **(de base calculé sur 24 mois)** */
    const acquisitionRentalPrice = vehicle.acquisition.rentalPrice;

    /** Fonction de calcul pour les mensualités */
    const calculateMonthlyPayment = (months: number) => {
        // Si la mensualité de base n'est pas renseignée, on retourne null
        if (!acquisitionRentalPrice) return null;

        // Si la durée est de 24 mois, on retourne directement la mensualité de la base de données
        if (months === 24) return acquisitionRentalPrice;

        // Pour 36, 48 et 72 mois, on déduit le prix total de location (mensualité sur 24 mois * 24)
        const totalRentalPrice = acquisitionRentalPrice * 24;

        // et on le divise par le nombre de mois souhaité.
        return Math.round(totalRentalPrice / months);
    };

    /** Affichage du tarif mensuel arrondie (prix du véhicule divisé par le nombre de mois) */
    const displayMonthlyPayment = (months: number) => {
        const payment = calculateMonthlyPayment(months);
        return payment ? `${payment.toLocaleString()} € / mois` : "Nous contacter";
    };

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
                    {/* 24 mois */}
                    <div className="bg-surface-container grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            24 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {displayMonthlyPayment(24)}
                        </Typography>
                    </div>
                    {/* 36 mois */}
                    <div className="bg-surface-container-highest grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            36 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {displayMonthlyPayment(36)}
                        </Typography>
                    </div>
                    {/* 48 mois */}
                    <div className="bg-surface-container grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            48 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {displayMonthlyPayment(48)}
                        </Typography>
                    </div>
                    {/* 72 mois */}
                    <div className="bg-surface-container-highest grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <Typography variant="headline-sm" component="div" color="on-surface">
                            72 mois
                        </Typography>
                        <Typography variant="body-md" component="div" color="on-surface-variant" className="group-hover:text-primary transition-colors">
                            {displayMonthlyPayment(72)}
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