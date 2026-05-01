// DÉPENDANCES
import { Link, useNavigate } from "react-router-dom";

// DESIGN SYSTEM
import { Typography } from "../../../../components/design-system/Typography"

// ICÔNES
import { MdPerson, MdUploadFile, MdSettingsInputComponent, MdEventAvailable, MdLogout } from "react-icons/md";

// CONTEXTE
import { useAuth } from "../../../../context/AuthUserContext";

// LOGIQUE
import useActiveLinkSidebar from "../functions/Active-link-sidebar-account";

/** Composant servant à afficher la barre latérale de gauche pour la navigation dans l'espace client */
export default function SidebarAccount() {
    // Utilisation des fonctions personnalisées pour l'affichage des liens actifs
    const { getLinkClasses } = useActiveLinkSidebar();
    const { authUser, signOut } = useAuth();
    const navigate = useNavigate();

    /** Fonction gérant la déconnexion et la redirection vers la page de connexion */
    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await signOut();
        navigate("/login");
    };

    return (
        <aside className="fixed bottom-0 left-0 right-0 w-full h-16 md:h-screen md:w-72 md:sticky md:top-0 flex flex-row md:flex-col bg-stone-950/95 md:bg-stone-950/60 border-t md:border-t-0 md:border-r border-white/10 md:border-white/5 z-50 md:pt-24 transition-all duration-300">
            {/* Nom de l'utilisateur connecté - Masqué sur mobile */}
            <div className="p-6 hidden md:block">
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
            <div className="flex-1 flex flex-row md:flex-col justify-around md:justify-start items-center md:items-stretch md:py-6 gap-1 md:gap-2 px-2 md:px-3">
                <Link
                    to="#edit-profil"
                    className={`${getLinkClasses("#edit-profil")} flex-col md:flex-row !gap-1 md:!gap-3 p-2 md:p-3`}
                >
                    <MdPerson className="text-2xl md:text-xl" />
                    <span className="hidden md:block text-[10px] md:text-sm">Mon profil</span>
                </Link>
                <Link
                    to="#docs"
                    className={`${getLinkClasses("#docs")} flex-col md:flex-row !gap-1 md:!gap-3 p-2 md:p-3`}
                >
                    <MdUploadFile className="text-2xl md:text-xl" />
                    <span className="hidden md:block text-[10px] md:text-sm">Documents</span>
                </Link>
                <Link
                    to="#services"
                    className={`${getLinkClasses("#services")} flex-col md:flex-row !gap-1 md:!gap-3 p-2 md:p-3`}
                >
                    <MdSettingsInputComponent className="text-2xl md:text-xl" />
                    <span className="hidden md:block text-[10px] md:text-sm">Services</span>
                </Link>
                <Link
                    to="#booking"
                    className={`${getLinkClasses("#booking")} flex-col md:flex-row !gap-1 md:!gap-3 p-2 md:p-3`}
                >
                    <MdEventAvailable className="text-2xl md:text-xl" />
                    <span className="hidden md:block text-[10px] md:text-sm">Réservations</span>
                </Link>

                {/* Bouton de déconnexion pour le mobile (intégré à la barre) */}
                <button 
                    onClick={handleLogout}
                    className="md:hidden flex flex-col items-center justify-center gap-1 p-2 text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                    <MdLogout className="text-2xl" />
                </button>
            </div>

            {/* Menu de pied de page - Uniquement sur Desktop */}
            <div className="p-6 bg-zinc-900 mt-auto hidden md:flex flex-col gap-2">
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT text-zinc-500 hover:bg-zinc-900/50 cursor-pointer hover:text-zinc-200 font-['Inter'] text-sm font-medium transition-all duration-200 w-full text-left"
                >
                    <MdLogout />
                    Déconnexion
                </button>
            </div>
        </aside>
    );
}
