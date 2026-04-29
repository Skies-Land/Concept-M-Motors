// DÉPENDANCES
import { useState, useEffect } from "react";

// API
import { updateUser } from "../../../../api/Update-user";

// CONTEXTE
import { useAuth } from "../../../../context/AuthUserContext";

/** Fonction permettant de mettre à jour les informations de l'utilisateur dans son espace client */
export const useEditProfilAccount = () => {
    const { authUser } = useAuth();

    // État pour les champs du formulaire
    const [formData, setFormData] = useState({
        displayName: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
    });

    // États pour le retour utilisateur (succès, erreur, chargement)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Initialisation du formulaire avec les données de l'utilisateur
    useEffect(() => {
        if (authUser) {
            setFormData({
                displayName: authUser.displayName || "",
                firstName: authUser.firstName || "",
                lastName: authUser.lastName || "",
                address: authUser.address || "",
                phoneNumber: authUser.phoneNumber || "",
            });
        }
    }, [authUser]);

    // Gestion du changement des champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Réinitialiser les messages au début de la saisie
        if (error) setError(null);
        if (success) setSuccess(null);
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!authUser) {
            setError("Utilisateur non connecté.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            await updateUser(authUser.id, formData);
            setSuccess("Vos informations ont été mises à jour avec succès.");
        } catch (err: any) {
            setError(err.message || "Une erreur est survenue lors de la mise à jour.");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        error,
        success,
        handleChange,
        handleSubmit
    };
};