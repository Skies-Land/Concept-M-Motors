// DÉPENDANCES

// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import type { FAQItem } from "../types/FAQItem";

/** Fonction servant à récupérer les questions et réponses de la section FAQ depuis l'API FastAPI
 * @returns {Promise<FAQItem[]>} - Un tableau contenant les questions et réponses.
 * @throws {Error} - Lance une erreur si la récupération des questions et réponses échoue.*/
export const getFAQAboutPage = async (): Promise<FAQItem[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/faqs/`);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json() as FAQItem[];
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des questions et réponses via l'API:", error);
        throw error;
    }
};