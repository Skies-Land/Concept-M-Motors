// DÉPENDANCES
import { collection, getDocs } from 'firebase/firestore';

// CONFIGURATION
import { db } from '../config/firebase-config';

// TYPES
import { type Vehicle } from '../types/Vehicle';

// Fonction servant à récupérer les données de véhicules de la base de données Firestore de Firebase
export const getVehicles = async (): Promise<Vehicle[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "vehicles"));
        const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })) as Vehicle[];
        return data;
    } catch (error) {
        console.error("Erreur détaillée lors de la récupération des véhicules:", error);
        throw error;
    }
};