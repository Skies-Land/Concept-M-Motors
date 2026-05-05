// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANT À TESTER
import HeroVehiclePage from './1-Hero-vehicle-page';

describe("HeroVehiclePage - affichage de la section Hero de la page de description d'un véhicule", () => {
    const mockVehicle = {
        id: "1",
        brand: "Ferrari",
        model: "F8 Tributo",
        year: 2023,
        mileage: 5000,
        category: "Coupé",
        slogan: "L'art de la performance",
        imageUrl: "ferrari.jpg",
    } as Vehicle;

    it("doit afficher les informations principales du véhicule (Marque, Modèle, Année)", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<HeroVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/Ferrari F8 Tributo 2023/i)).toBeInTheDocument();
        expect(screen.getByText(/L'art de la performance/i)).toBeInTheDocument();
    });

    it("doit afficher les caractéristiques secondaires (kilométrage, catégorie)", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<HeroVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        expect(screen.getByText(/5000 km/i)).toBeInTheDocument();
        expect(screen.getByText(/Coupé/i)).toBeInTheDocument();
    });

    it("doit avoir une image avec un texte alternatif correct", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<HeroVehiclePage vehicle={mockVehicle} />);

        // 2. ASSERT (vérification - résultat attendu)
        const image = screen.getByAltText(/Ferrari F8 Tributo/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'ferrari.jpg');
    });
});