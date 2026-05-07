// DÉPENDANCE
import { Navigate } from "react-router-dom";

// CONTEXTE (afin de récupérer les informations de l'utilisateur connecté)
import { useAuth } from "../../context/AuthUserContext";

// COMPOSANT
import Spinner from "../design-system/Spinner";

// CONSTANTES (afin de vérifier le statut de la session)
import { REGISTERED } from "../../constants/Session-status";

// TYPES
import type { ReactNode } from "react";

interface GuestRouteProps {
    children: ReactNode;
}

/** Composant servant à sécuriser les routes `/login` et `/register`.
 * Si l'utilisateur est déjà authentifié, il sera redirigé vers son espace client `/account`.
 */
export default function GuestRoute({ children }: GuestRouteProps) {
    const { sessionStatus, loading } = useAuth();

    // Affichage d'un état de chargement pendant la vérification de la session
    if (loading) {
        return <Spinner />;
    }

    // Si l'utilisateur est déjà enregistré, redirection vers son espace client
    if (sessionStatus === REGISTERED) {
        return <Navigate to="/account" replace />;
    }

    // Si l'utilisateur n'est pas authentifié, affichage du contenu de la route (formulaire de connexion, etc.)
    return <>{children}</>;
}
