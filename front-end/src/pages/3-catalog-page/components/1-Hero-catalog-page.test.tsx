// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, waitFor } from "@testing-library/react";

// VITEST - framework de test
import { describe, it, expect, vi } from "vitest";

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from "react-router-dom";

// COMPOSANT À TESTER
import HeroCatalogPage from "./1-Hero-catalog-page";

// MOCK API
vi.mock("../../../api/Get-brands-catalog", () => ({
    getBrandsCatalog: vi.fn().mockResolvedValue(["Ferrari", "Lamborghini"]),
}));

vi.mock("../../../api/Get-max-price-catalog", () => ({
    getMaxPriceCatalog: vi.fn().mockResolvedValue(2000000),
}));

describe("HeroCatalogPage - affichage de la section Hero de la page catalogue", () => {
    it("doit afficher les titres principaux et le sous-titre de la section Hero", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec sa props)
        const mockOnFilterChange = vi.fn();
        render(
            <MemoryRouter>
                <HeroCatalogPage onFilterChange={mockOnFilterChange} />
            </MemoryRouter>,
        );

        // 2. ASSERT (vérification - présence des titres principaux et du sous-titre)
        await waitFor(() => {
            expect(screen.getByText(/La Collection Signature/i)).toBeInTheDocument();
        });
        expect(screen.getByText(/L'ART DE/i)).toBeInTheDocument();
        expect(screen.getByText(/L'EXCEPTION/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Une sélection d'automobiles/i),
        ).toBeInTheDocument();
    });

    it("doit afficher les labels des filtres de recherche", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec sa props)
        const mockOnFilterChange = vi.fn();
        render(
            <MemoryRouter>
                <HeroCatalogPage onFilterChange={mockOnFilterChange} />
            </MemoryRouter>,
        );

        // 2. ASSERT (vérification - présence des labels des filtres de recherche)
        await waitFor(() => {
            expect(screen.getByText("Marque")).toBeInTheDocument();
        });
        expect(screen.getByText("Budget")).toBeInTheDocument();
    });
});
