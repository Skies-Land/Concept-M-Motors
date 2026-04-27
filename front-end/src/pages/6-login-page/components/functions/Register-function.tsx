// FIREBASE
import { auth } from "../../../../config/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// DÉPENDANCES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API
import { createUser } from "../../../../api/Create-user";

// Fonction servant à gérer la logique du formulaire d'inscription
export const useRegister = () => {
    const navigate = useNavigate();

    // État pour les données du formulaire
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // État pour les erreurs et le chargement
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Fonction gérant la soumission du formulaire
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
            // 1. Création de l'utilisateur dans Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. Mise à jour du profil Firebase Auth avec le nom d'utilisateur
            await updateProfile(user, {
                displayName: username
            });

            // 3. Création du document utilisateur dans Firestore
            await createUser(user.uid, {
                displayName: username,
                email: email,
            });

            // 4. Redirection vers l'espace client
            navigate("/account");
            
        } catch (err: any) {
            console.error("Erreur lors de l'inscription :", err);
            
            // Gestion des erreurs Firebase communes
            if (err.code === "auth/email-already-in-use") {
                setError("Cette adresse e-mail est déjà utilisée.");
            } else if (err.code === "auth/invalid-email") {
                setError("L'adresse e-mail n'est pas valide.");
            } else if (err.code === "auth/weak-password") {
                setError("Le mot de passe est trop faible.");
            } else {
                setError("Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
            }
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
        handleSubmit
    };
};