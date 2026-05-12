// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

/** Fonction servant à récupérer les marques de véhicules depuis l'API FastAPI
 * @returns {Promise<string[]>} - Un tableau contenant les marques uniques de véhicules.
 * @throws {Error} - Lance une erreur si la récupération des marques échoue.*/
export const getBrandsCatalog = async (): Promise<string[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/vehicles/`);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        const vehicleBrands = data.map((vehicle: any) => vehicle.brand as string);
        
        // On retire les doublons et on trie par ordre alphabétique
        return Array.from(new Set(vehicleBrands)).sort() as string[];
    } catch (error) {
        console.error("Erreur lors de la récupération des marques via l'API:", error);
        throw error;
    }
};
