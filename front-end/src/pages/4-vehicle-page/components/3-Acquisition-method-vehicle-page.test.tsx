// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANT À TESTER
import AcquisitionMethodVehiclePage from './3-Acquisition-method-vehicle-page';

describe("AcquisitionMethodVehiclePage - affichage des méthodes d'acquisition du véhicule", () => {
    const mockVehicle = {
        acquisition: {
            purchasePrice: 280000,
            rentalPrice: 5000,
            isAvailableForSale: true,
            isAvailableForRent: true
        }
    } as Vehicle;

    it("doit afficher les options d'acquisition (Achat et Location)", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<AcquisitionMethodVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/^Achat$/i)).toBeInTheDocument();
        expect(screen.getByText(/^Location \*$/i)).toBeInTheDocument();
    });

    it("doit afficher le prix d'achat formaté", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<AcquisitionMethodVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/280000 €/i)).toBeInTheDocument();
    });

    it("doit afficher le prix de location formaté", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<AcquisitionMethodVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/5000 € \/mois/i)).toBeInTheDocument();
    });

    it("doit afficher 'Nous contacter' si les prix sont absents", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        const vehicleWithoutPrices = {
            acquisition: {
                purchasePrice: null,
                rentalPrice: null
            }
        } as Vehicle;
        render(<AcquisitionMethodVehiclePage vehicle={vehicleWithoutPrices} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getAllByText(/Nous contacter/i)).toHaveLength(2);
    });
});