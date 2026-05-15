// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import { type Vehicle } from '../types/Vehicle';

/** Fonction servant à récupérer le prix du véhicule le plus cher depuis l'API FastAPI
 * @returns {Promise<number>} - Le prix maximum trouvé.
 * @throws {Error} - Lance une erreur si la récupération échoue.*/
export const getMaxPriceCatalog = async (): Promise<number> => {
    try {
        /** Requête `GET` vers l'API FastAPI pour récupérer les données */
        const response = await fetch(`${API_BASE_URL}/vehicles/`);

        // Vérification de la validité de la réponse réseau avant de continuer
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        /** Conversion de la réponse en JSON */
        const data = await response.json() as Vehicle[];

        // Vérification si des véhicules ont été trouvés
        if (data.length > 0) {
            /** Récupération de tous les prix d'achat et recherche du maximum */
            const prices = data
                .map(v => v.acquisition.purchasePrice)
                .filter((p): p is number => p !== null);
            return prices.length > 0 ? Math.max(...prices) : 2000000;
        }

        // Valeur par défaut si aucun véhicule n'est trouvé
        return 2000000;
    } catch (error) {
        console.error("Erreur lors de la récupération du prix maximum via l'API:", error);
        throw error;
    }
};
