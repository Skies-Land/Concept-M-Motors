// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// COMPOSANT À TESTER
import SearchFilterCatalog from './Search-filter-catalog-page';

// MOCK API (pour simuler les données des filtres)
vi.mock('../../../../api/Get-brands-catalog', () => ({
    getBrandsCatalog: vi.fn().mockResolvedValue(["Ferrari", "Lamborghini", "Porsche"])
}));

vi.mock('../../../../api/Get-max-price-catalog', () => ({
    getMaxPriceCatalog: vi.fn().mockResolvedValue(500000)
}));

describe("SearchFilterCatalog - gestion des filtres de recherche des véhicules de la page catalogue", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("Doit afficher les filtres de recherche par marque et par prix", async () => {
        // 1. ARRANGE (preparation - initialisation du composant avec sa props)
        const mockOnFilterChange = vi.fn();
        render(<SearchFilterCatalog onFilterChange={mockOnFilterChange} />);

        // 2. ASSERT (verification - presence des labels des filtres de recherche)
        expect(screen.getByText("Marque")).toBeInTheDocument();
        expect(screen.getByText("Budget")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Recherche par marque/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Recherche par budget/i })).toBeInTheDocument();

        // Attendre que les données mockées soient chargées
        await waitFor(() => {
            expect(screen.getByText("Ferrari")).toBeInTheDocument();
            expect(screen.getByText("Lamborghini")).toBeInTheDocument();
        });
    });

    it("Doit déclencher `onFilterChange` lors du clic sur 'Recherche par marque'", async () => {
        // 1. ARRANGE (preparation - initialisation du composant avec sa props)
        const mockOnFilterChange = vi.fn();
        render(<SearchFilterCatalog onFilterChange={mockOnFilterChange} />);

        await waitFor(() => {
            expect(screen.getByText("Ferrari")).toBeInTheDocument();
        });

        // 2. ACT (agir/action - sélection d'une marque et clic sur le bouton de recherche)
        const select = screen.getByRole("combobox");
        fireEvent.change(select, { target: { value: "Ferrari" } });
        
        const button = screen.getByRole("button", { name: /Recherche par marque/i });
        fireEvent.click(button);

        // 3. ASSERT (vérification - la fonction mockée a bien été appelée avec les bons paramètres)
        expect(mockOnFilterChange).toHaveBeenCalledWith({
            brand: "Ferrari",
            maxPrice: 500000
        });
    });

    it("Doit déclencher `onFilterChange` lors du clic sur 'Recherche par budget'", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec sa props)
        const mockOnFilterChange = vi.fn();
        render(<SearchFilterCatalog onFilterChange={mockOnFilterChange} />);

        await waitFor(() => {
            expect(screen.getByText("0.5M €+")).toBeInTheDocument();
        });

        // 2. ACT (agir/action - changement de la valeur du slider et clic sur le bouton de recherche)
        const slider = screen.getByRole("slider");
        fireEvent.change(slider, { target: { value: "300000" } });

        const button = screen.getByRole("button", { name: /Recherche par budget/i });
        fireEvent.click(button);

        // 3. ASSERT (vérification - la fonction mockée a bien été appelée avec les bons paramètres)
        expect(mockOnFilterChange).toHaveBeenCalledWith({
            brand: "Toutes les Manufactures",
            maxPrice: 300000
        });
    });
});