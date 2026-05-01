// DÉPENDANCES
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Fonction gérant la logique d'ouverture et de fermeture du menu mobile */
export default function useMenuMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Fermer le menu mobile lors d'un changement de page
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Empêcher le scroll quand le menu est ouvert
    useEffect(() => {
        if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return {
        isMenuOpen,
        toggleMenu
    };
}
