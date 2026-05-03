// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import Header from './Header';

// Mocks et composant pour le contexte
import { useAuth } from '../../context/AuthUserContext';
vi.mock('../../context/AuthUserContext', () => ({
    useAuth: vi.fn(),
}));

// Mock pour le lien actif
vi.mock('./features/Active-link-header', () => ({
    default: () => ({
        getLinkStyles: () => ({ color: 'on-surface', className: '' }),
    }),
}));

// Mock pour le menu mobile
vi.mock('./functions/Menu-mobile-function', () => ({
    default: () => ({
        isMenuOpen: false,
        toggleMenu: vi.fn(),
    }),
}));

describe("Header - En-tête", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("affiche le logo", () => {
        // 1. ARRANGE (préparation - mock `authUser` à `null`)
        (useAuth as any).mockReturnValue({ authUser: null });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - assertion de présence du logo)
        expect(screen.getByText(/M-MOTORS/i)).toBeInTheDocument();
    });

    it("affiche les liens de navigation", () => {
        // 1. ARRANGE (préparation - mock `authUser` à `null`)
        (useAuth as any).mockReturnValue({ authUser: null });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - assertion de présence des liens de navigation)
        expect(screen.getByText(/Catalogue/i)).toBeInTheDocument();
        expect(screen.getByText(/À propos/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it("affiche le bouton de connexion quand l'utilisateur n'est pas connecté", () => {
        // 1. ARRANGE (préparation - mock `authUser` à `null`)
        (useAuth as any).mockReturnValue({ authUser: null });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - assertion de présence du bouton connexion)
        expect(screen.getByText(/Connexion/i)).toBeInTheDocument();
    });

    it("affiche le nom de l'utilisateur quand il est connecté", () => {
        // 1. ARRANGE (préparation - mock `authUser` avec `displayName`)
        (useAuth as any).mockReturnValue({ 
            authUser: { displayName: 'John' },
            signOut: vi.fn()
        });

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - assertion de présence du nom utilisateur et absence du bouton connexion)
        expect(screen.getByText('John')).toBeInTheDocument();
        expect(screen.queryByText(/Connexion/i)).not.toBeInTheDocument();
    });
});