// DÉPENDANCES
import { doc, updateDoc } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

// TYPES
import type { User } from "../types/UserType";

/** Fonction servant à mettre à jour les informations d'un utilisateur dans la base de données Firestore collection : `users`
 * @param userId - L'ID unique de l'utilisateur.
 * @param data - Les données de l'utilisateur à mettre à jour.*/
export const updateUser = async (userId: string, data: Partial<User>): Promise<void> => {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, data);
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur dans Firestore :", error);
        throw error;
    }
};
