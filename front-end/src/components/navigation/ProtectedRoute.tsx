// DÉPENDANCE
import { Navigate } from "react-router-dom";

// CONTEXTE (afin de récupérer les informations de l'utilisateur connecté)
import { useAuth } from "../../context/AuthUserContext";

// CONSTANTES (afin de vérifier le statut de la session)
import { REGISTERED } from "../../constants/Session-status";

// TYPES
import type { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

/** Composant servant à sécuriser les routes nécessitant une authentification.
 * Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion.
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { sessionStatus, loading } = useAuth();

    // Affichage d'un état de chargement pendant la vérification de la session
    if (loading) {
        return (
            <div className="min-h-screen bg-stone-950 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    // Si l'utilisateur n'est pas enregistré, redirection vers la page de connexion
    if (sessionStatus !== REGISTERED) {
        return <Navigate to="/login" replace />;
    }

    // Si l'utilisateur est authentifié, affichage du contenu de la route
    return <>{children}</>;
}
