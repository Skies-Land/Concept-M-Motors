// DÉPENDANCES
import { collection, getDocs } from "firebase/firestore";

// CONFIGURATION
import { db } from "../config/firebase-config";

// TYPES
import type { FAQItem } from "../types/FAQItem";

// Fonction servant à récupérer les questions et réponses de la section FAQ de la page à propos depuis la base de données
export const getFAQAboutPage = async (): Promise<FAQItem[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "faq"));
        const faqData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as FAQItem));
        return faqData;
    } catch (error) {
        console.error("Erreur lors de la récupération des questions et réponses:", error);
        throw error;
    }
};