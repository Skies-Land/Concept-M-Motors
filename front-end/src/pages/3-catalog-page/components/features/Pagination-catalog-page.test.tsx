// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi } from 'vitest';

// FEATURE À TESTER
import PaginationCatalog from './Pagination-catalog-page';

describe("PaginationCatalog - affichage de la pagination de la page catalogue", () => {
    it("Ne doit rien afficher si `totalPages` est inférieur ou égal à 1", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une page et un nombre total de pages inférieur ou égal à 1)
        const { container } = render(
            <PaginationCatalog currentPage={1} totalPages={1} onPageChange={vi.fn()} />
        );

        // 2. ASSERT (vérification - le conteneur de la pagination est vide)
        expect(container).toBeEmptyDOMElement();
    });

    it("Doit afficher les numéros de page et les boutons précédent/suivant", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une page et un nombre total de pages supérieur à 1)
        const mockOnPageChange = vi.fn();
        render(
            <PaginationCatalog currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />
        );

        // 3. ASSERT (vérification - présence des numéros de page et des boutons précédent/suivant)
        expect(screen.getByText("01")).toBeInTheDocument();
        expect(screen.getByText("02")).toBeInTheDocument();
        expect(screen.getByText("05")).toBeInTheDocument();
        expect(screen.getByText(/Précédent/i)).toBeInTheDocument();
        expect(screen.getByText(/Suivant/i)).toBeInTheDocument();
    });

    it("Doit appeler `onPageChange` avec la bonne page au clic sur un numéro", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une page et un nombre total de pages supérieur à 1)
        const mockOnPageChange = vi.fn();
        render(
            <PaginationCatalog currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />
        );

        // 2. ACT (agir/action - clic sur le bouton 3)
        fireEvent.click(screen.getByText("03"));

        // 3. ASSERT (vérification - la fonction `mockOnPageChange` a été appelée avec le bon numéro de page)
        expect(mockOnPageChange).toHaveBeenCalledWith(3);
        expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    });

    it("Doit désactiver le bouton précédent sur la première page et l'activer", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une page et un nombre total de pages supérieur à 1)
        const { rerender } = render(
            <PaginationCatalog currentPage={1} totalPages={3} onPageChange={vi.fn()} />
        );

        // 2.1 ASSERT (vérification - le bouton précédent est désactivé)
        let prevButton = screen.getByRole("button", { name: /Précédent/i });
        expect(prevButton).toBeDisabled();

        // 2.2 Re-rendu - (la prop `currentPage` change)
        rerender(<PaginationCatalog currentPage={2} totalPages={3} onPageChange={vi.fn()} />);
        prevButton = screen.getByRole("button", { name: /Précédent/i });
        expect(prevButton).not.toBeDisabled();
    });

    it("Doit désactiver le bouton suivant sur la dernière page et l'activer sinon", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une page et un nombre total de pages supérieur à 1)
        const { rerender } = render(
            <PaginationCatalog currentPage={3} totalPages={3} onPageChange={vi.fn()} />
        );

        // 2.1 ASSERT (vérification - le bouton suivant est désactivé)
        let nextButton = screen.getByRole("button", { name: /Suivant/i });
        expect(nextButton).toBeDisabled();

        // 2.2 Re-rendu - (re-rendu - la prop `currentPage` change)
        rerender(<PaginationCatalog currentPage={2} totalPages={3} onPageChange={vi.fn()} />);
        nextButton = screen.getByRole("button", { name: /Suivant/i });
        expect(nextButton).not.toBeDisabled();
    });

    it("Doit déclencher onPageChange au clic sur Précédent ou Suivant", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une page et un nombre total de pages supérieur à 1)
        const mockOnPageChange = vi.fn();
        render(
            <PaginationCatalog currentPage={2} totalPages={4} onPageChange={mockOnPageChange} />
        );

        // 2. ACT (agir/action - clic sur les boutons précédent et suivant)
        fireEvent.click(screen.getByRole("button", { name: /Précédent/i }));
        fireEvent.click(screen.getByRole("button", { name: /Suivant/i }));

        // 3. ASSERT (vérification - la fonction `mockOnPageChange` a été appelée avec les bons numéros de page)
        expect(mockOnPageChange).toHaveBeenNthCalledWith(1, 1);
        expect(mockOnPageChange).toHaveBeenNthCalledWith(2, 3);
    });
});