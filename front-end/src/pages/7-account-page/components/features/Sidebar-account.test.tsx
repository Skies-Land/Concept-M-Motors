// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter, useNavigate } from 'react-router-dom';

// CONTEXTE - contexte d'authentification
import { useAuth } from '../../../../context/AuthUserContext';

// LOGIQUE
import useActiveLinkSidebar from '../functions/Active-link-sidebar-account';

// FEATURE À TESTER
import SidebarAccount from './Sidebar-account';

// MOCKS ----------------------------------------------------
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn()
    };
});
vi.mock('../../../../context/AuthUserContext', () => ({
    useAuth: vi.fn()
}));
vi.mock('../functions/Active-link-sidebar-account', () => ({
    default: vi.fn()
}));
// ---------------------------------------------------------

describe("SidebarAccount - Composant de la barre latérale du compte utilisateur", () => {
    
    const mockSignOut = vi.fn();
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        
        (useAuth as any).mockReturnValue({
            authUser: { displayName: "John Doe" },
            signOut: mockSignOut
        });

        (useNavigate as any).mockReturnValue(mockNavigate);

        (useActiveLinkSidebar as any).mockReturnValue({
            getLinkClasses: vi.fn(() => "")
        });
    });

    it("affiche le nom de l'utilisateur connecté", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <SidebarAccount />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage du nom d'utilisateur)
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    });

    it("affiche les liens de navigation principaux", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <SidebarAccount />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - présence des liens)
        expect(screen.getByText(/Mon profil/i)).toBeInTheDocument();
        expect(screen.getByText(/Documents/i)).toBeInTheDocument();
        expect(screen.getByText(/Services/i)).toBeInTheDocument();
        expect(screen.getByText(/Réservations/i)).toBeInTheDocument();
    });

    it("doit gérer la déconnexion et rediriger vers la page de connexion", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <SidebarAccount />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - clic sur le bouton déconnexion)
        const logoutButton = screen.getByRole('button', { name: /Déconnexion/i });
        fireEvent.click(logoutButton);

        // 3. ASSERT (vérification - appel de `signOut` et redirection)
        expect(mockSignOut).toHaveBeenCalled();
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith("/login");
        });
    });
});