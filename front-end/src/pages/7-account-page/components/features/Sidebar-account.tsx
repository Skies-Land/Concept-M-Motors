// DÉPENDANCES
import { Link, useNavigate } from "react-router-dom";

// DESIGN SYSTEM
import { Typography } from "../../../../components/design-system/Typography"

// CONTEXTE
import { useAuth } from "../../../../context/AuthUserContext";

// FONCTIONS
import useActiveLinkSidebar from "../functions/Active-link-sidebar-account";

// Composant servant à afficher la barre latérale de gauche pour la navigation dans l'espace client
export default function SidebarAccount() {
    // Utilisation des fonctions personnalisées pour l'affichage des liens actifs et du défilement
    const { getLinkClasses, handleScroll } = useActiveLinkSidebar();
    const { authUser, signOut } = useAuth();
    const navigate = useNavigate();

    // Fonction gérant la déconnexion et la redirection vers la page de connexion
    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await signOut();
        navigate("/login");
    };

    return (
        <aside className="w-72 flex-shrink-0 flex flex-col sticky top-0 h-screen bg-stone-950/60 border-r border-white/5 hidden md:flex pt-24">
            {/* Nom de l'utilisateur connecté */}
            <div className="p-6">
                <div className="flex flex-col items-center gap-4 mb-6">
                    <Typography component="h1" className="font-bold text-orange-600 text-lg leading-tight tracking-tight">
                        {authUser?.displayName || "Chargement..."}
                    </Typography>

                    <Typography component="p" className="text-sm font-medium text-zinc-400">
                        Bienvenue dans votre espace
                    </Typography>
                </div>
            </div>

            {/* Menu de navigation principal */}
            <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
                <Link
                    to="#edit-profil"
                    className={getLinkClasses("#edit-profil")}
                    onClick={() => handleScroll("#edit-profil")}
                >
                    <span className="material-symbols-outlined" data-alt="Icône de profil">person</span>
                    Mon profil
                </Link>
                <Link
                    to="#docs"
                    className={getLinkClasses("#docs")}
                    onClick={() => handleScroll("#docs")}
                >
                    <span className="material-symbols-outlined" data-alt="Icône de document">upload_file</span>
                    Mes documents
                </Link>
                <Link
                    to="#services"
                    className={getLinkClasses("#services")}
                    onClick={() => handleScroll("#services")}
                >
                    <span className="material-symbols-outlined" data-alt="Icône de service">settings_input_component</span>
                    Gestion de mes services
                </Link>
                <Link
                    to="#booking"
                    className={getLinkClasses("#booking")}
                    onClick={() => handleScroll("#booking")}
                >
                    <span className="material-symbols-outlined" data-alt="Icône de réservation">event_available</span>
                    Réservations
                </Link>
            </div>

            {/* Menu de pied de page */}
            <div className="p-6 bg-zinc-900 mt-auto flex flex-col gap-2">
                {/* <Link className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200 font-['Inter'] text-sm font-medium transition-all duration-200"
                    to="#">
                    <span className="material-symbols-outlined" data-alt="Icône d'aide">help</span>
                    Aide
                </Link> */}
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT text-zinc-500 hover:bg-zinc-900/50 cursor-pointer hover:text-zinc-200 font-['Inter'] text-sm font-medium transition-all duration-200 w-full text-left"
                >
                    <span className="material-symbols-outlined" data-alt="Icône de déconnexion">logout</span>
                    Déconnexion
                </button>
            </div>
        </aside>
    );
}
