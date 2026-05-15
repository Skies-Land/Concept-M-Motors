// DÉPENDANCE
import { useState } from "react";

/** Fonction servant à gérer la logique du formulaire d'oubli de mot de passe */
export const useForgetPassword = () => {
    // State pour les données du formulaire
    const [email, setEmail] = useState("");

    // State pour les erreurs
    const [error, setError] = useState<string | null>(null);

    // State pour le succès de l'envoi
    const [success, setSuccess] = useState(false);

    // State pour le chargement
    const [loading, setLoading] = useState(false);

    /** Fonction gérant la soumission du formulaire */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setLoading(true);

        // Simulation de réinitialisation (en attente du service Backend pour la gestion d'envoie du lien de réinitialisation de mot de passe par email)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setError("La réinitialisation par email est temporairement indisponible (migration en cours). Veuillez contacter l'administrateur.");
        } catch (err: any) {
            console.error("Erreur de réinitialisation :", err);
            setError("Une erreur est survenue.");
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        error,
        success,
        loading,
        handleSubmit
    };
};
