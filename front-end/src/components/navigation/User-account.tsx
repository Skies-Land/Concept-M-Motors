// COMPOSANTS
import { Button } from "../design-system/Button";
import { Typography } from "../design-system/Typography";
import { Link } from "react-router-dom";

// TYPES
import type { User } from "../../types/UserType";

interface UserAccountProps {
    user: User;
    onLogout: () => void;
}

// Composant servant à afficher le compte de l'utilisateur dans le Header avec un bouton de déconnexion pour fermer sa session
export default function UserAccount({ user, onLogout }: UserAccountProps) {
    return (
        <div className="flex items-center gap-6">
            <Link to="/account" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
                <Typography variant="label-md" color="on-surface" className="hidden sm:block">
                    {user.displayName || user.name}
                </Typography>
            </Link>
            <Button variant="tertiary" size="small" onClick={onLogout} className="px-0">
                <span className="material-symbols-outlined text-lg">logout</span>
            </Button>
        </div>
    );
}