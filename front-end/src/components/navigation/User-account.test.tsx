// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter, useNavigate } from 'react-router-dom';

// COMPOSANT À TESTER
import UserAccount from './User-account';

// Mocking `useNavigate` from `react-router-dom`
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

describe("UserAccount - Lien dynamique dans le `Header` menant au compte utilisateur et bouton de déconnexion", () => {
    // Simulation de l'objet Firebase User pour les tests
    const mockUser = {
        uid: '123',
        displayName: 'John Doe',
        email: 'john@example.com',
        photoURL: '',
        emailVerified: true,
        phoneNumber: null,
        isAnonymous: false,
        metadata: {},
        providerData: [],
        tenantId: null,
        delete: vi.fn(),
        getIdToken: vi.fn(),
        getIdTokenResult: vi.fn(),
        reload: vi.fn(),
        toJSON: vi.fn(),
        refreshToken: '',
        providerId: 'firebase',
    } as any;

    const mockOnLogout = vi.fn();
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
    });

    it("doit afficher le nom de l'utilisateur", () => {
        // 1. ARRANGE (préparation - rendu du composant)
        render(
            <MemoryRouter>
                <UserAccount user={mockUser} onLogout={mockOnLogout} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - le nom de l'utilisateur est affiché)
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it("doit contenir un lien vers la page de compte", () => {
        // 1. ARRANGE (préparation - rendu du composant)
        render(
            <MemoryRouter>
                <UserAccount user={mockUser} onLogout={mockOnLogout} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - le lien vers la page de compte est présent)
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/account');
    });

    it("doit appeler onLogout et rediriger vers /login lors de la déconnexion", async () => {
        // 1. ARRANGE (préparation - simulation du logout et rendu du composant)
        mockOnLogout.mockResolvedValueOnce(undefined);
        render(
            <MemoryRouter>
                <UserAccount user={mockUser} onLogout={mockOnLogout} />
            </MemoryRouter>
        );

        // 2. ACT (action - clic sur le bouton de déconnexion)
        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);

        // 3. ASSERT (vérification - onLogout est appelé et l'utilisateur est redirigé)
        expect(mockOnLogout).toHaveBeenCalledTimes(1);
        // On attend que la redirection se produise (car handleLogout est async)
        await vi.waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });
});
