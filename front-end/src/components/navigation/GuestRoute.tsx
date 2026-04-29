// DÉPENDANCE
import { Navigate } from "react-router-dom";

// CONTEXTE (afin de récupérer les informations de l'utilisateur connecté)
import { useAuth } from "../../context/AuthUserContext";

// CONSTANTES (afin de vérifier le statut de la session)
import { REGISTERED } from "../../constants/Session-status";

// TYPES
import type { ReactNode } from "react";

interface GuestRouteProps {
    children: ReactNode;
}

/** Composant servant à rediriger les utilisateurs déjà connectés.
 * S'ils tentent d'accéder à une page réservée aux invités (ex: connexion), 
 * ils sont redirigés vers l'espace client.
 */
export default function GuestRoute({ children }: GuestRouteProps) {
    const { sessionStatus, loading } = useAuth();

    // Affichage d'un état de chargement pendant la vérification de la session
    if (loading) {
        return (
            <div className="min-h-screen bg-stone-950 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    // Si l'utilisateur est déjà enregistré, redirection vers son espace client
    if (sessionStatus === REGISTERED) {
        return <Navigate to="/account" replace />;
    }

    // Si l'utilisateur n'est pas authentifié, affichage du contenu de la route (formulaire de connexion, etc.)
    return <>{children}</>;
}
