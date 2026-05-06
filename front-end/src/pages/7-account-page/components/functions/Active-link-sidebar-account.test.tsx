// TESTING LIBRARY - utils pour tester les hooks
import { renderHook } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { useLocation } from 'react-router-dom';

// FONCTION À TESTER
import useActiveLinkSidebar from './Active-link-sidebar-account';

// MOCKS ---------------------------------------------------
vi.mock('react-router-dom', () => ({
    useLocation: vi.fn()
}));
// ---------------------------------------------------------

describe("useActiveLinkSidebar - Fonction de gestion de l'état actif des liens de la barre latérale", () => {
    it("doit retourner les classes actives quand le hash `#docs` correspond", () => {
        // 1. ARRANGE (préparation - initialisation du hook, mock du hash `#docs` actuel)
        (useLocation as any).mockReturnValue({ hash: "#docs" });
        const { result } = renderHook(() => useActiveLinkSidebar());

        // 2. ACT (agir/action - récupération des classes pour le hash #docs)
        const classes = result.current.getLinkClasses("#docs");

        // 3. ASSERT (vérification - présence des classes actives orange)
        expect(classes).toContain("text-orange-500");
        expect(classes).toContain("border-orange-600");
    });

    it("doit retourner les classes inactives quand le hash `#edit-profil` ne correspond pas", () => {
        // 1. ARRANGE (préparation - initialisation du hook, mock du hash `#edit-profil` actuel)
        (useLocation as any).mockReturnValue({ hash: "#edit-profil" });
        const { result } = renderHook(() => useActiveLinkSidebar());

        // 2. ACT (agir/action - récupération des classes pour un hash `#edit-profil`)
        const classes = result.current.getLinkClasses("#docs");

        // 3. ASSERT (vérification - présence des classes inactives zinc/gris)
        expect(classes).toContain("text-zinc-500");
        expect(classes).not.toContain("text-orange-500");
    });

    it("doit utiliser `#edit-profil` par défaut si aucun hash n'est présent", () => {
        // 1. ARRANGE (préparation - initialisation du hook, pas de hash dans l'URL)
        (useLocation as any).mockReturnValue({ hash: "" });
        const { result } = renderHook(() => useActiveLinkSidebar());

        // 3. ASSERT (vérification - hash par défaut)
        expect(result.current.activeHash).toBe("#edit-profil");
    });
});