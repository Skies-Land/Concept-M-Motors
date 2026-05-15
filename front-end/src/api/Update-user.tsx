// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import type { User } from "../types/UserType";

/** Fonction servant à mettre à jour les informations d'un utilisateur dans la base de données MongoDB via l'API FastAPI
 * @param userId - L'ID unique de l'utilisateur.
 * @param data - Les données de l'utilisateur à mettre à jour.*/
export const updateUser = async (userId: string, data: Partial<User>): Promise<void> => {
    try {
        /** Requête `PATCH` vers l'API FastAPI pour mettre à jour les données */
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Vérification de la validité de la réponse réseau avant de continuer
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Erreur HTTP: ${response.status}`);
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur via l'API :", error);
        throw error;
    }
};
