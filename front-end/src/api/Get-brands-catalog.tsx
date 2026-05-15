// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

/** Fonction servant à récupérer les marques de véhicules depuis l'API FastAPI
 * @returns {Promise<string[]>} - Un tableau contenant les marques uniques de véhicules.
 * @throws {Error} - Lance une erreur si la récupération des marques échoue.*/
export const getBrandsCatalog = async (): Promise<string[]> => {
    try {
        /** Requête `GET` vers l'API FastAPI pour récupérer les données */
        const response = await fetch(`${API_BASE_URL}/vehicles/`);

        // Vérification de la validité de la réponse réseau avant de continuer
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        /** Conversion de la réponse en JSON */
        const data = await response.json();
        /** Extraction des marques uniques et tri alphabétique */
        const vehicleBrands = data.map((vehicle: any) => vehicle.brand as string);

        // Filtrage des marques uniques et tri alphabétique
        return Array.from(new Set(vehicleBrands)).sort() as string[];
    } catch (error) {
        console.error("Erreur lors de la récupération des marques via l'API:", error);
        throw error;
    }
};
