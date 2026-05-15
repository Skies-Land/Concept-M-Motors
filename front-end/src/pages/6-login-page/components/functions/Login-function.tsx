// DÉPENDANCES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API
import { API_BASE_URL } from "../../../../config/api-config";

// CONTEXTE
import { useAuth } from "../../../../context/AuthUserContext";

/** Fonction servant à gérer la logique du formulaire de connexion */
export const useLogin = () => {

    // State pour la navigation
    const navigate = useNavigate();
    const { login } = useAuth();

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

        // Tentative de connexion via l'API locale
        try {
            const formData = new URLSearchParams();
            formData.append('username', email);
            formData.append('password', password);

            /** Requête `POST` vers l'API FastAPI pour récupérer les données */
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            });

            const data = await response.json();

            // Stockage de la session via le contexte
            login(data.access_token, data.user);

            // Redirection vers l'espace client
            navigate("/account");
            
        } catch (err: any) {
            console.error("Erreur de connexion :", err);
            setError(err.message);
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