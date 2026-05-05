// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, waitFor } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import VehiclesGridCardsCatalogPage from './2-2-Vehicles-grid-cards-catalog-page';

// MOCK API (pour simuler les données des véhicules)
vi.mock('../../../api/Get-vehicles', () => ({
    getVehicles: vi.fn().mockResolvedValue([
        {
            id: "1",
            brand: "Ferrari",
            model: "F8 Tributo",
            mileage: 5000,
            imageUrl: "ferrari.jpg",
            acquisition: { isAvailableForSale: true, purchasePrice: 280000, isAvailableForRent: true, rentalPrice: 5000 }
        },
        {
            id: "2",
            brand: "Lamborghini",
            model: "Huracan",
            mileage: 3000,
            imageUrl: "lambo.jpg",
            acquisition: { isAvailableForSale: true, purchasePrice: 250000, isAvailableForRent: false }
        }
    ])
}));

describe("VehiclesGridCardsCatalogPage - affichage de la grille de présentation des véhicules de la page catalogue", () => {
    const defaultFilters = { brand: "Toutes les Manufactures", maxPrice: 2000000 };

    it("doit afficher le titre et le nombre de résultats initial", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec les props 'filters')
        render(
            <MemoryRouter>
                <VehiclesGridCardsCatalogPage filters={defaultFilters} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des résultats trouvés)
        expect(screen.getByText(/Nos Modèles disponible/i)).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText(/2 RÉSULTATS/i)).toBeInTheDocument();
        });
    });

    it("doit afficher les cartes de véhicules après le chargement", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec les props 'filters')
        render(
            <MemoryRouter>
                <VehiclesGridCardsCatalogPage filters={defaultFilters} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des cartes de véhicules après le chargement)
        await waitFor(() => {
            expect(screen.getByText(/Ferrari F8 Tributo/i)).toBeInTheDocument();
            expect(screen.getByText(/Lamborghini Huracan/i)).toBeInTheDocument();
        });
    });

    it("doit afficher un message d'erreur si aucun véhicule ne correspond aux filtres", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec les props 'filters' avec une recherche précise)
        const strictFilters = { brand: "Porsche", maxPrice: 50000 };
        render(
            <MemoryRouter>
                <VehiclesGridCardsCatalogPage filters={strictFilters} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage du message d'erreur)
        await waitFor(() => {
            expect(screen.getByText(/Aucun véhicule ne correspond à vos critères de recherche/i)).toBeInTheDocument();
            expect(screen.getByText(/0 RÉSULTAT/i)).toBeInTheDocument();
        });
    });
});
