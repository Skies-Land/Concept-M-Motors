// COMPOSANTS
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/** Fonction gérant l'apparence vers les différentes sections de la barre latérale de navigation de l'espace client */
export default function useActiveLinkSidebar() {
    const location = useLocation();
    const [activeHash, setActiveHash] = useState(window.location.hash || "#edit-profil");

    /** Hook servant à récupérer les liens actifs de la barre latérale */
    useEffect(() => {
        if (location.hash) {
            setActiveHash(location.hash);
        }
    }, [location.hash]);

    /** Fonction servant à récupérer les classes CSS pour les liens */
    const getLinkClasses = (hash: string) => {
        const isActive = activeHash === hash;
        const baseClasses = "flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-medium transition-all duration-200";
        const activeClasses = "bg-zinc-900 text-orange-500 border-r-2 border-orange-600 scale-98 active:scale-95";
        const inactiveClasses = "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200";
        
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    return { getLinkClasses, activeHash, setActiveHash };
}