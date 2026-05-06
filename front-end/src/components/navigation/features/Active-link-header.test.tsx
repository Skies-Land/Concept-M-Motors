// TESTING LIBRARY - utils de rendu et sélection DOM
import { renderHook } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { useLocation } from 'react-router-dom';

// FEATURE À TESTER
import useActiveLinkHeader from './Active-link-header';

// MOCKS ----------------------------------------------------
vi.mock('react-router-dom', () => ({
    useLocation: vi.fn(),
}));
// ---------------------------------------------------------

describe("useActiveLinkHeader - Détermine si le lien est actif dans le Header", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("doit retourner des styles actifs si le chemin correspond à la localisation actuelle", () => {
        // 1. ARRANGE (préparation - mock et `useLocation` pour simuler la localisation sur la page "à propos")
        (useLocation as any).mockReturnValue({ pathname: '/about' });
        const { result } = renderHook(() => useActiveLinkHeader());

        // 2. ACT (agir/action - `getLinkStyles` pour obtenir les styles)
        const styles = result.current.getLinkStyles('/about');

        // 3. ASSERT (vérification - style couleur, texte et bordure soient actifs)
        expect(styles.color).toBe('on-surface');
        expect(styles.className).toContain('text-on-surface');
        expect(styles.className).toContain('font-medium');
        expect(styles.className).toContain('border-primary');
    });

    it("doit retourner des styles inactifs si le chemin ne correspond pas", () => {
        // 1. ARRANGE (préparation - mock et `useLocation` pour simuler la localisation sur la page "accueil")
        (useLocation as any).mockReturnValue({ pathname: '/' });
        const { result } = renderHook(() => useActiveLinkHeader());

        // 2. ACT (agir/action - `getLinkStyles` pour obtenir les styles)
        const styles = result.current.getLinkStyles('/about');

        // 3. ASSERT (vérification - style couleur, texte et bordure soient inactifs)
        expect(styles.color).toBe('on-surface-variant');
        expect(styles.className).toContain('hover:text-on-surface');
        expect(styles.className).not.toContain('font-medium');
        expect(styles.className).not.toContain('border-primary');
    });
});
