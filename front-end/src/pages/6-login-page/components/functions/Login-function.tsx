// DÉPENDANCES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// FIREBASE
import { auth } from "../../../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

/** Fonction servant à gérer la logique du formulaire de connexion */
export const useLogin = () => {

    // State pour la navigation
    const navigate = useNavigate();

    // State pour les données du formulaire
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State pour les erreurs
    const [error, setError] = useState<string | null>(null);

    // State pour le chargement
    const [loading, setLoading] = useState(false);

    /** Fonction gérant la soumission du formulaire */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        // Tentative de connexion
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirection vers l'espace client après connexion réussie
            navigate("/account");
        } catch (err: any) {
            console.error("Erreur de connexion :", err);
            setError("Email ou mot de passe incorrect.");
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        loading,
        handleSubmit
    };
};
