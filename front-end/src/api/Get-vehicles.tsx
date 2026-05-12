// DÉPENDANCES

// CONFIGURATION
import { API_BASE_URL } from '../config/api-config';

// TYPES
import { type Vehicle } from '../types/Vehicle';

/** Fonction servant à récupérer les données des véhicules de l'API FastAPI
 * @returns {Promise<Vehicle[]>} - Un tableau contenant les véhicules.
 * @throws {Error} - Lance une erreur si la récupération des véhicules échoue.*/
export const getVehicles = async (): Promise<Vehicle[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/vehicles/`);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json() as Vehicle[];
        return data;
    } catch (error) {
        console.error("Erreur détaillée lors de la récupération des véhicules via l'API:", error);
        throw error;
    }
};