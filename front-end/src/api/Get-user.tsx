// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import type { User } from "../types/UserType";

/** Fonction servant à récupérer les informations de l'utilisateur depuis l'API FastAPI
 * @param userId - L'ID unique de l'utilisateur.
 * @returns {Promise<User | null>} - L'objet utilisateur si trouvé, sinon null.
 * @throws {Error} - Lance une erreur si la récupération de l'utilisateur échoue.*/
export const getUser = async (userId: string): Promise<User | null> => {
    try {
        /** Requête `GET` vers l'API FastAPI pour récupérer les données */
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);

        // Vérification si l'utilisateur existe
        if (response.status === 404) {
            console.log("Aucun utilisateur trouvé !");
            return null;
        }

        // Vérification de la validité de la réponse réseau avant de continuer
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        /** Conversion de la réponse en JSON */
        const data = await response.json();

        return {
            ...data,
            // Conversion de la date de création en objet Date si nécessaire
            creationDate: data.creationDate ? new Date(data.creationDate) : null
        } as User;

    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur via l'API :", error);
        return null;
    }
};
