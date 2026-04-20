// DÉPENDANCES
import { collection, getDocs } from "firebase/firestore";

// CONFIGURATION
import { db } from "../../../../config/firebase-config";

// Fonction servant à récupérer les marques uniques de véhicules depuis la base de données
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
