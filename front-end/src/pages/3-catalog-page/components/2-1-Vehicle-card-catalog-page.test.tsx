// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANT À TESTER
import VehicleCardCatalogPage from './2-1-Vehicle-card-catalog-page';

// MOCK DATA (pour simuler les données d'un véhicule)
const mockVehicle = {
    id: "1",
    brand: "Ferrari",
    model: "F8 Tributo",
    mileage: 5000,
    imageUrl: "ferrari.jpg",
    acquisition: {
        isAvailableForSale: true,
        purchasePrice: 280000,
        isAvailableForRent: true,
        rentalPrice: 5000
    }
} as Vehicle;

describe("VehicleCardCatalogPage - affichage d'une carte de véhicule en fonction de plusieurs props sur la page catalogue", () => {
    it("doit afficher les informations de base du véhicule (marque, modèle, kilométrage)", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec la prop 'vehicle')
        render(
            <MemoryRouter>
                <VehicleCardCatalogPage vehicle={mockVehicle} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des résultats trouvés)
        expect(screen.getByText(/Ferrari F8 Tributo/i)).toBeInTheDocument();
        expect(screen.getByText(/5 000 km/i)).toBeInTheDocument();
    });

    it("doit afficher le prix d'achat et le prix de location quand ils sont disponibles", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec la prop 'vehicle')
        render(
            <MemoryRouter>
                <VehicleCardCatalogPage vehicle={mockVehicle} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des résultats trouvés)
        expect(screen.getByText(/280 000 €/i)).toBeInTheDocument();
        expect(screen.getByText(/5 000 €\/mois/i)).toBeInTheDocument();
    });

    it("doit afficher 'Sur demande' si le prix d'achat est absent mais disponible à la vente", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec la prop 'vehicle' avec un prix d'achat absent)
        const vehicleWithoutPrice = {
            ...mockVehicle,
            acquisition: { ...mockVehicle.acquisition, purchasePrice: null }
        };
        render(
            <MemoryRouter>
                <VehicleCardCatalogPage vehicle={vehicleWithoutPrice} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage du résultat "Sur demande")
        expect(screen.getByText(/Sur demande/i)).toBeInTheDocument();
    });

    it("doit afficher 'Nous contacter' si le véhicule n'est pas disponible à la location", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec la prop 'vehicle' avec un prix de location absent)
        const vehicleNotForRent = {
            ...mockVehicle,
            acquisition: { ...mockVehicle.acquisition, isAvailableForRent: false }
        };
        render(
            <MemoryRouter>
                <VehicleCardCatalogPage vehicle={vehicleNotForRent} />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage du résultat "Nous contacter")
        expect(screen.getByText(/Nous contacter/i)).toBeInTheDocument();
    });
});
