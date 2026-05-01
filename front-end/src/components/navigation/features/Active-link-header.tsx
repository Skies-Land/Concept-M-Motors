// DÉPENDANCE
import { useLocation } from 'react-router-dom';

/** Fonction gérant l'apparence visuelle des liens actifs du `Header` */
export default function useActiveLinkHeader() {
    const location = useLocation();

    /** Détermine si le lien est actif 
     * @param path Le chemin du lien à tester
     * @returns Un objet contenant la couleur et la classe CSS
     */
    const getLinkStyles = (path: string) => {
        const isActive = location.pathname === path;

        return {
            color: isActive ? "on-surface" : "on-surface-variant" as any,
            className: `pb-1 transition-all duration-300 ${
                isActive 
                ? "text-on-surface font-medium border-b-2 border-primary" 
                : "hover:text-on-surface"
            }`
        };
    };

    return { getLinkStyles };
}

