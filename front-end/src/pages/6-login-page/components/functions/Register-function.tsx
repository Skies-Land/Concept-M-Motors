// DÉPENDANCES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API
import { API_BASE_URL } from "../../../../config/api-config";

// CONTEXTE
import { useAuth } from "../../../../context/AuthUserContext";

/** Fonction servant à gérer la logique du formulaire d'inscription */
export const useRegister = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    // État pour les données du formulaire
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // État pour les erreurs et le chargement
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    /** Fonction gérant la soumission du formulaire */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validation simple
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        if (password.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères.");
            return;
        }

        setLoading(true);

        try {
            /** Requête `POST` vers l'API FastAPI pour l'inscription */
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    displayName: username,
                    firstName: "", 
                    lastName: "",
                }),
            });

            /** Conversion de la réponse en JSON */
            const data = await response.json();

            /** Stockage du token et des infos utilisateur via le contexte */
            login(data.access_token, data.user);

            /** Redirection vers le catalogue */
            navigate("/catalog");

        } catch (err: any) {
            console.error("Erreur d'inscription :", err);
            setError(err.message || "Impossible de contacter le serveur.");
        } finally {
            setLoading(false);
        }
    };

    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        loading,
        handleSubmit,
    };
};