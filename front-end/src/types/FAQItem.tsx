/** Interface définissant les types de données pour les questions et réponses de la section FAQ de la page à propos */
export interface FAQItem {
    id: string; // ID unique de la question (auto-généré dans Firebase)
    question: string; // Question posée
    answer: string; // Réponse à la question
}