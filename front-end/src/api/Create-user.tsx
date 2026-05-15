// CONFIGURATION
import { API_BASE_URL } from "../config/api-config";

// TYPES
import type { User } from "../types/UserType";

/** Fonction servant à enregistrer un nouvel utilisateur dans la base de données MongoDB via l'API FastAPI
 * @param userId - L'ID unique de l'utilisateur (optionnel si géré par MongoDB).
 * @param data - Les données de l'utilisateur (prénom, nom, email, téléphone, adresse).*/
export const createUser = async (_userId: string, data: Partial<User>): Promise<void> => {
    try {
        /** Requête `POST` vers l'API FastAPI pour créer un nouvel utilisateur */
        const response = await fetch(`${API_BASE_URL}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                // Vérification de la présence des champs obligatoires pour l'API 
                firstName: data.firstName || "",
                lastName: data.lastName || "",
                email: data.email || "",
                phoneNumber: data.phoneNumber || "",
                address: data.address || "",
            }),
        });

        // Vérification de la validité de la réponse réseau avant de continuer
        if (!response.ok) {
            const errorData = await response.json();
            // Affichage du message d'erreur de l'API
            throw new Error(errorData.detail || `Erreur HTTP: ${response.status}`);
        }
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur via l'API :", error);
        throw error;
    }
};
