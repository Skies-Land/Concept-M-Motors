// TYPES
import { type Vehicle } from '../../../../types/Vehicle';

// INTERFACES
export interface FilterState {
    brand: string;
    maxPrice: number;
}

/** Fonction servant à filtrer la liste des véhicules */
export const filterVehiclesCatalog = (vehicles: Vehicle[], filters: FilterState): Vehicle[] => {
    return vehicles.filter(vehicle => {
        /** Filtrage par marque - Vérification si la marque correspond au filtre ou si le filtre est sur "Toutes les Manufactures" */
        const matchesBrand = filters.brand === "Toutes les Manufactures" || vehicle.brand === filters.brand;

        /** Récupération du prix d'achat du véhicule */
        const price = vehicle.acquisition?.purchasePrice || 0;

        /** Filtrage par prix d'achat - Vérification si le prix correspond au filtre */
        const matchesPrice = price <= filters.maxPrice;

        return matchesBrand && matchesPrice;
    });
};
