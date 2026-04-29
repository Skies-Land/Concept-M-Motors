// DÉPENDANCES
import { doc, getDoc } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

// TYPES
import { type Vehicle } from '../types/Vehicle';

/** Fonction servant à récupérer les détails descriptifs d'un véhicule spécifique depuis la base de données
 * @param id - L'ID unique du véhicule.
 * @returns {Promise<Vehicle | null>} - L'objet véhicule si trouvé, sinon null.
 * @throws {Error} - Lance une erreur si la récupération du véhicule échoue.*/
export const getVehicleDescription = async (id: string): Promise<Vehicle | null> => {
    try {
        const docRef = doc(db, "vehicles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as Vehicle;
        } else {
            console.log("Aucun document trouvé !");
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du véhicule:", error);
        throw error;
    }
};