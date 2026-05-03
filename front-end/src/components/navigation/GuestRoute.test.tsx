// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter, Navigate } from 'react-router-dom';

// CONTEXTE ET CONSTANTES DE SESSION UTILISATEUR
import { useAuth } from '../../context/AuthUserContext';
import { REGISTERED, GUEST } from '../../constants/Session-status';

// COMPOSANT À TESTER
import GuestRoute from './GuestRoute';

// Mocking `useAuth` hook
vi.mock('../../context/AuthUserContext', () => ({
    useAuth: vi.fn(),
}));

// Mocking `Navigate` component from `react-router-dom`
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        Navigate: vi.fn(() => <div data-testid="navigate" />),
    };
});

describe("GuestRoute - Route d'accès invité", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("doit afficher un spinner de chargement quand loading est vrai", () => {
        // 1. ARRANGE (préparation - initialisation de la session utilisateur sur "invité" avec chargement en cours)
        (useAuth as any).mockReturnValue({
            sessionStatus: GUEST,
            loading: true
        });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <GuestRoute>
                    <div data-testid="child">Content</div>
                </GuestRoute>
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - état initial avec chargement)
        const spinner = document.querySelector('.animate-spin');
        expect(spinner).toBeInTheDocument();
        expect(screen.queryByTestId('child')).not.toBeInTheDocument();
    });

    it("doit rediriger vers /account si l'utilisateur est déjà connecté", () => {
        // 1. ARRANGE (préparation - initialisation de la session utilisateur sur "connecté" sans chargement)
        (useAuth as any).mockReturnValue({
            sessionStatus: REGISTERED,
            loading: false
        });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <GuestRoute>
                    <div data-testid="child">Content</div>
                </GuestRoute>
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - état initial sans chargement)
        expect(Navigate).toHaveBeenCalledWith(
            expect.objectContaining({ to: '/account', replace: true }),
            undefined
        );
        expect(screen.queryByTestId('child')).not.toBeInTheDocument();
    });

    it("doit afficher les enfants si l'utilisateur n'est pas connecté", () => {
        // 1. ARRANGE (préparation - initialisation de la session utilisateur sur "invité" sans chargement)
        (useAuth as any).mockReturnValue({
            sessionStatus: GUEST,
            loading: false
        });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <GuestRoute>
                    <div data-testid="child">Content</div>
                </GuestRoute>
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - état initial sans chargement)
        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
        expect(Navigate).not.toHaveBeenCalled();
    });
});
