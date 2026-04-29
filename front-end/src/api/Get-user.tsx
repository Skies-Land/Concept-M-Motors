// DÉPENDANCES
import { doc, getDoc } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

// TYPES
import type { User } from "../types/UserType";

/** Fonction servant à récupérer les informations de l'utilisateur depuis la base de données
 * @param userId - L'ID unique de l'utilisateur.
 * @returns {Promise<User | null>} - L'objet utilisateur si trouvé, sinon null.
 * @throws {Error} - Lance une erreur si la récupération de l'utilisateur échoue.*/
export const getUser = async (userId: string): Promise<User | null> => {
    try {
        // Crée une référence au document utilisateur spécifique basé sur son ID
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();
            // Conversion du Timestamp Firestore en Date JS
            return { 
                ...data, 
                id: userSnap.id,
                creationDate: data.creationDate?.toDate() || null 
            } as User;
        } else {
            console.log("Aucun utilisateur trouvé !");
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        return null;
    }
};
