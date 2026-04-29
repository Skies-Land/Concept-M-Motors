// DÉPENDANCES
import { collection, getDocs } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

/** Fonction servant à récupérer les marques de véhicules depuis la base de données
 * @returns {Promise<string[]>} - Un tableau contenant les marques uniques de véhicules.
 * @throws {Error} - Lance une erreur si la récupération des marques échoue.*/
export const getBrandsCatalog = async (): Promise<string[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "vehicles"));
        const vehicleBrands = querySnapshot.docs.map(doc => doc.data().brand as string);
        // On retire les doublons et on trie par ordre alphabétique
        return Array.from(new Set(vehicleBrands)).sort();
    } catch (error) {
        console.error("Erreur lors de la récupération des marques:", error);
        throw error;
    }
};
