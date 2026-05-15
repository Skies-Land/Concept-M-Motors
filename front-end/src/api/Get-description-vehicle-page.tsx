// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import { type Vehicle } from '../types/Vehicle';

/** Fonction servant à récupérer les détails descriptifs d'un véhicule spécifique depuis l'API FastAPI
 * @param id - L'ID unique du véhicule.
 * @returns {Promise<Vehicle | null>} - L'objet véhicule si trouvé, sinon null.
 * @throws {Error} - Lance une erreur si la récupération du véhicule échoue.*/
export const getVehicleDescription = async (id: string): Promise<Vehicle | null> => {
    try {
        /** Requête `GET` vers l'API FastAPI pour récupérer les données */
        const response = await fetch(`${API_BASE_URL}/vehicles/${id}`);
        
        // Vérification si le véhicule est trouvé
        if (response.status === 404) {
            console.log("Aucun document trouvé !");
            return null;
        }

        // Vérification de la validité de la réponse réseau avant de continuer
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        /** Conversion de la réponse en JSON */
        const data = await response.json() as Vehicle;
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération du véhicule via l'API:", error);
        throw error;
    }
};