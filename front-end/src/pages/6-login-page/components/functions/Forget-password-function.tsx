// FIREBASE
import { auth } from "../../../../config/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

// DÉPENDANCE
import { useState } from "react";

// Fonction servant à gérer la logique du formulaire d'oubli de mot de passe
export const useForgetPassword = () => {
    // State pour les données du formulaire
    const [email, setEmail] = useState("");

    // State pour les erreurs
    const [error, setError] = useState<string | null>(null);

    // State pour le succès de l'envoi
    const [success, setSuccess] = useState(false);

    // State pour le chargement
    const [loading, setLoading] = useState(false);

    // Fonction gérant la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setLoading(true);

        // Tentative de réinitialisation de mot de passe
        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess(true);
        } catch (err: any) {
            console.error("Erreur de réinitialisation de mot de passe :", err);
            
            // Gestion des erreurs spécifiques Firebase
            if (err.code === "auth/user-not-found") {
                setError("Aucun utilisateur ne correspond à cette adresse e-mail.");
            } else if (err.code === "auth/invalid-email") {
                setError("L'adresse e-mail n'est pas valide.");
            } else {
                setError("Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.");
            }
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
