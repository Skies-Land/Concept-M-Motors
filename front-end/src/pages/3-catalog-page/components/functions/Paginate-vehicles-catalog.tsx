// TYPES
import { type Vehicle } from '../../../../types/Vehicle';

// Fonction servant à calculer la pagination de la liste des véhicules
export const paginateVehiclesCatalog = (filteredVehicles: Vehicle[], currentPage: number, itemsPerPage: number) => {
    // Calcul du nombre total de pages sur la liste filtrée
    const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

    // Calcul de l'index de début et de fin pour la pagination
    const startIndex = (currentPage - 1) * itemsPerPage;

    // Récupération des véhicules de la page actuelle à partir de la liste filtrée
    const currentVehicles = filteredVehicles.slice(startIndex, startIndex + itemsPerPage);

    return { totalPages, currentVehicles };
};
