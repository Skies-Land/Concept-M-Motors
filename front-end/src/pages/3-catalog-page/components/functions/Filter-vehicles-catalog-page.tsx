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
        const matchesBrand = filters.brand === "Toutes les Manufactures" || vehicle.brand === filters.brand;
        
        // Vérification du prix d'achat en priorité pour l'investissement
        // Si pas de prix d'achat, on regarde si c'est une location (facultatif selon règle métier)
        const price = vehicle.acquisition?.purchasePrice || 0;
        const matchesPrice = price <= filters.maxPrice;

        return matchesBrand && matchesPrice;
    });
};
