// DÉPENDANCES
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

/** Fonction servant à récupérer le prix du véhicule le plus cher dans la base de données
 * @returns {Promise<number>} - Le prix maximum trouvé.
 * @throws {Error} - Lance une erreur si la récupération échoue.*/
export const getMaxPriceCatalog = async (): Promise<number> => {
    try {
        const vehiclesRef = collection(db, "vehicles");
        const q = query(vehiclesRef, orderBy("price", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            const mostExpensiveVehicle = querySnapshot.docs[0].data();
            return mostExpensiveVehicle.price as number;
        }
        
        // Valeur par défaut si aucun véhicule n'est trouvé
        return 2000000;
    } catch (error) {
        console.error("Erreur lors de la récupération du prix maximum:", error);
        throw error;
    }
};
