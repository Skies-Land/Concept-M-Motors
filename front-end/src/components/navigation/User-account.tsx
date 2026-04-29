// DÉPENDANCES
import { Link, useNavigate } from "react-router-dom";

// DESIGN SYSTEM
import { Button } from "../design-system/Button";
import { Typography } from "../design-system/Typography";

// TYPES
import type { User } from "../../types/UserType";

interface UserAccountProps {
    user: User;
    onLogout: () => Promise<void>;
}

/** Composant servant à afficher, à la place du bouton de connexion, le nom utilisateur dans le `Header` avec un bouton de déconnexion pour fermer sa session */
export default function UserAccount({ user, onLogout }: UserAccountProps) {
    const navigate = useNavigate();

    // Fonction pour fermer la session de l'utilisateur et retourner vers la page de connexion
    const handleLogout = async () => {
        await onLogout();
        navigate("/login");
    };

    return (
        <div className="flex items-center gap-6">
            <Link to="/account" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
                <Typography variant="label-md" color="on-surface" className="hidden sm:block">
                    {user.displayName}
                </Typography>
            </Link>
            <Button variant="tertiary" size="small" onClick={handleLogout} className="px-0">
                <span className="material-symbols-outlined text-lg" aria-label="logout">logout</span>
            </Button>
        </div>
    );
}
