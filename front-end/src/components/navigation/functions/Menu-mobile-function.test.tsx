// TESTING LIBRARY - utils de rendu et sélection DOM
import { renderHook, act } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { useLocation } from 'react-router-dom';

// COMPOSANT À TESTER
import useMenuMobile from './Menu-mobile-function';

// Mocking `useLocation` from `react-router-dom`
vi.mock('react-router-dom', () => ({
    useLocation: vi.fn(),
}));

describe("useMenuMobile - Gère l'ouverture et la fermeture du menu Header en mode mobile", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (useLocation as any).mockReturnValue({ pathname: '/' });
        document.body.style.overflow = 'unset';
    });

    it("doit avoir isMenuOpen à false par défaut", () => {
        // 1. ARRANGE (préparation - rendu du hook)
        const { result } = renderHook(() => useMenuMobile());

        // 2. ASSERT (vérification - `isMenuOpen` est false)
        expect(result.current.isMenuOpen).toBe(false);
    });

    it("doit basculer isMenuOpen quand toggleMenu est appelé", () => {
        // 1. ARRANGE (préparation - rendu du hook)
        const { result } = renderHook(() => useMenuMobile());

        // 2. ACT (agir/action - `toggleMenu` pour ouvrir)
        act(() => {
            result.current.toggleMenu();
        });

        // 3. ASSERT (vérification - `isMenuOpen` est true)
        expect(result.current.isMenuOpen).toBe(true);

        // 2. ACT (agir/action - `toggleMenu` pour fermer)
        act(() => {
            result.current.toggleMenu();
        });

        // 3. ASSERT (vérification - `isMenuOpen` est false) 
        expect(result.current.isMenuOpen).toBe(false);
    });

    it("doit fermer le menu quand le chemin de navigation change", () => {
        // 1. ARRANGE (préparation - rendu du hook)
        const { rerender, result } = renderHook(() => useMenuMobile());

        // 2. ACT (agir/action - `toggleMenu` pour ouvrir)
        act(() => {
            result.current.toggleMenu();
        });

        // 3. ASSERT (vérification - `isMenuOpen` est true)
        expect(result.current.isMenuOpen).toBe(true);

        // 2. ACT (agir/action - simulation du changement de page)
        (useLocation as any).mockReturnValue({ pathname: '/about' });
        
        // 2. ACT (agir/action - re-rendu du hook)
        rerender();

        // 3. ASSERT (vérification - `isMenuOpen` est false)
        expect(result.current.isMenuOpen).toBe(false);
    });

    it("doit empêcher le scroll du body quand le menu est ouvert", () => {
        // 1. ARRANGE (préparation - rendu du hook)
        const { result } = renderHook(() => useMenuMobile());

        // 2. ACT (agir/action - ouverture du menu)
        act(() => {
            result.current.toggleMenu();
        });

        // 3. ASSERT (vérification - `overflow` est `hidden`)
        expect(document.body.style.overflow).toBe('hidden');

        // 2. ACT (agir/action - fermeture du menu)
        act(() => {
            result.current.toggleMenu();
        });

        // 3. ASSERT (vérification - `overflow` est `unset`)
        expect(document.body.style.overflow).toBe('unset');
    });
});
