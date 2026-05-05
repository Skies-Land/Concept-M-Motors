// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANT À TESTER
import TarifCatalogDescriptionPage from './4-Tarif-catalog-vehicle-page';

describe("TarifCatalogDescriptionPage - affichage d'un grille tarifaire pour l'acquisition d'un véhicule par location", () => {
    const mockVehicle = {
        acquisition: {
            rentalPrice: 5000 // Prix de base sur 24 mois
        }
    } as Vehicle;

    it("doit afficher le titre de la section", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<TarifCatalogDescriptionPage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/Grille tarifaire pour la location/i)).toBeInTheDocument();
    });

    it("doit afficher les mensualités calculées correctement pour différentes durées", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<TarifCatalogDescriptionPage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - affichage des mensualités celons la durée de location)
        // 24 mois : 5000
        expect(screen.getByText(/5\s000 € \/ mois/i)).toBeInTheDocument();
        
        // 36 mois : (5000 * 24) / 36 = 120000 / 36 = 3333
        expect(screen.getByText(/3\s333 € \/ mois/i)).toBeInTheDocument();
        
        // 48 mois : (5000 * 24) / 48 = 120000 / 48 = 2500
        expect(screen.getByText(/2\s500 € \/ mois/i)).toBeInTheDocument();
        
        // 72 mois : (5000 * 24) / 72 = 120000 / 72 = 1667
        expect(screen.getByText(/1\s667 € \/ mois/i)).toBeInTheDocument();
    });

    it("doit afficher 'Nous contacter' si le prix de location est absent", () => {
        // 1. ARRANGE (préparation - initialisation du composant, avec prix de location = null)
        const vehicleWithoutPrice = {
            acquisition: { rentalPrice: null }
        } as Vehicle;
        render(<TarifCatalogDescriptionPage vehicle={vehicleWithoutPrice} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getAllByText(/Nous contacter/i)).toHaveLength(4);
    });
});