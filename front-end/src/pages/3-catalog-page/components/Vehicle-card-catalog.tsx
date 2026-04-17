// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANT
import { Typography } from "../../../components/design-system/Typography";

// TYPES
export interface VehicleCardProps {
    vehicle: Vehicle;
}

// Composant servant à afficher une carte de véhicule en suivant des propriétés
export default function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <article className="group bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-xl overflow-hidden flex flex-col">
            {/* Image du véhicule */}
            <div className="relative h-64 overflow-hidden">
                <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={`${vehicle.brand} ${vehicle.model}`} 
                    src={vehicle.imageUrl}
                />
            </div>
            {/* Carte du conteneur d'informations du véhicule */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Titre - Marque et modèle du véhicule */}
                <Typography variant="headline-sm" component="h3" color="on-surface" className="mb-4">
                    {vehicle.brand} {vehicle.model}
                </Typography>
                {/* Indication du kilométrage du véhicule */}
                {vehicle.mileage !== undefined && (
                    <Typography variant="body-sm" color="on-surface-variant" className="mb-4">
                        {vehicle.mileage.toLocaleString()} km
                    </Typography>
                )}
                {/* Indication de la méthode d'acquisition - Prix : Achat ou Location */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
                    {/* Achat */}
                    {vehicle.acquisition?.isAvailableForSale && (
                        <div className="flex justify-between items-center">
                            <Typography variant="label-sm" component="span" color="on-surface-variant">
                                Achat
                            </Typography>
                            <Typography variant="headline-sm" component="span" color="primary">
                                {vehicle.acquisition.purchasePrice 
                                    ? `${vehicle.acquisition.purchasePrice.toLocaleString()} €` 
                                    : "Sur demande"}
                            </Typography>
                        </div>
                    )}
                    {/* Location */}
                    <div className="flex justify-between items-center">
                        <Typography variant="label-sm" component="span" color="on-surface-variant">
                            Location
                        </Typography>
                        <Typography variant="body-md" component="span" color="on-surface">
                            {/* Affichage conditionnel du prix de location :
                                Dans la base de donnée, 
                                - si le véhicule est disponible à la location le prix est affiché
                                - Sinon, l'affichage du prix est remplacer par "Nous contacter" */}
                            {vehicle.acquisition?.isAvailableForRent && vehicle.acquisition?.rentalPrice 
                                ? `${vehicle.acquisition.rentalPrice.toLocaleString()} €/mois` 
                                : "Nous contacter"}
                        </Typography>
                    </div>
                </div>
            </div>
        </article>
    );
}