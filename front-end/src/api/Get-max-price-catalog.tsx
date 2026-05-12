// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import { type Vehicle } from '../types/Vehicle';

/** Fonction servant à récupérer le prix du véhicule le plus cher depuis l'API FastAPI
 * @returns {Promise<number>} - Le prix maximum trouvé.
 * @throws {Error} - Lance une erreur si la récupération échoue.*/
export const getMaxPriceCatalog = async (): Promise<number> => {
    try {
        const response = await fetch(`${API_BASE_URL}/vehicles/`);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json() as Vehicle[];
        
        if (data.length > 0) {
            // On récupère tous les prix d'achat et on trouve le maximum
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
