// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANT À TESTER
import DescriptionVehiclePage from './2-Description-vehicle-page';

describe("DescriptionVehiclePage - affichage de la section d'information technique du véhicule", () => {
    const mockVehicle = {
        id: "1",
        brand: "Ferrari",
        model: "F8 Tributo",
        category: "Coupé",
        year: 2023,
        mileage: 5000,
        slogan: "L'art de la performance",
        imageUrl: "ferrari.jpg",
        description: "Une voiture d'exception avec un moteur V8 biturbo.",
        technicalSpecs: {
            acceleration: "2.9",
            topSpeed: 340,
            power: 720,
            engine: "V8 Biturbo"
        },
        acquisition: {
            purchasePrice: 280000,
            rentalPrice: 5000,
            isAvailableForSale: true,
            isAvailableForRent: true
        }
    } as Vehicle;

    it("doit afficher la description du véhicule", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<DescriptionVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/Une voiture d'exception avec un moteur V8 biturbo/i)).toBeInTheDocument();
    });

    it("doit afficher toutes les spécifications techniques", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<DescriptionVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText("2.9")).toBeInTheDocument();
        expect(screen.getByText("340")).toBeInTheDocument();
        expect(screen.getByText("720")).toBeInTheDocument();
        expect(screen.getByText(/^V8 Biturbo$/i)).toBeInTheDocument();
    });

    it("doit afficher les labels des spécifications techniques", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<DescriptionVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/Accélération 0-100/i)).toBeInTheDocument();
        expect(screen.getByText(/Vitesse max/i)).toBeInTheDocument();
        expect(screen.getByText(/Puissance/i)).toBeInTheDocument();
        expect(screen.getByText(/^Moteur$/i)).toBeInTheDocument();
    });
});