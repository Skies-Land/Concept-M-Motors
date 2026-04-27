// DÉPENDANCES
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

// TYPES
import type { User } from "../types/UserType";

// Fonction servant à enregistrer un nouvel utilisateur dans la base de données Firestore collection : 'users'
export const createUser = async (userId: string, data: Partial<User>): Promise<void> => {
    try {
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, {
            ...data,
            creationDate: serverTimestamp(),
            // Initialisation des champs vides s'ils ne sont pas fournis
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            phoneNumber: data.phoneNumber || "",
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur dans Firestore :", error);
        throw error;
    }
};
