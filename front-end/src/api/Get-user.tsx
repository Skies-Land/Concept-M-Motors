// DÉPENDANCES
import { doc, getDoc } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

// TYPES
import type { User } from "../types/UserType";

// Fonction servant à récupérer les informations de l'utilisateur depuis la base de données
export const getUser = async (userId: string): Promise<User | null> => {
    try {
        // Crée une référence au document utilisateur spécifique basé sur son ID
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            // Retourne les données en ajoutant l'id du document
            return { id: userSnap.id, ...userSnap.data() } as User;
        } else {
            console.log("Aucun utilisateur trouvé !");
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        return null;
    }
};
