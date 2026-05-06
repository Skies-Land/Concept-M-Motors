// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter, useNavigate } from 'react-router-dom';

// COMPOSANT À TESTER
import ErrorContent from './1-Content-error-page';

// MOCKS ---------------------------------------------------
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn()
    };
});
// ---------------------------------------------------------

describe("ErrorContent - Affichage du composant de contenu de la page d'erreur 404", () => {
    
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
    });

    it("Devrait afficher les éléments du contenu de la page d'erreur", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ErrorContent />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des éléments textuels)
        expect(screen.getAllByText("4")).toHaveLength(2);
        expect(screen.getByText("0")).toBeInTheDocument();
        expect(screen.getByText(/Oops... Erreur 404/i)).toBeInTheDocument();
        expect(screen.getByText(/La page que vous recherchez n'a pas été trouvée/i)).toBeInTheDocument();
    });

    it("doit afficher les boutons de navigation", () => {
        // 1. ARRANGE
        render(
            <MemoryRouter>
                <ErrorContent />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - présence des boutons)
        expect(screen.getByText(/Retourner à l'accueil/i)).toBeInTheDocument();
        expect(screen.getByText(/Page précédente/i)).toBeInTheDocument();
    });

    it("doit appeler navigate(-1) lors du clic sur le bouton 'Page précédente'", () => {
        // 1. ARRANGE
        render(
            <MemoryRouter>
                <ErrorContent />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - clic sur le bouton retour)
        const backButton = screen.getByText(/Page précédente/i);
        fireEvent.click(backButton);

        // 3. ASSERT (vérification - appel de navigate avec -1)
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
});