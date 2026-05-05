// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// TYPES
import { type Vehicle } from '../../../../types/Vehicle';

// COMPOSANT À TESTER
import { filterVehiclesCatalog } from './Filter-vehicles-catalog-page';

describe("filterVehiclesCatalog - fonction gérant le système de filtres de recherche des véhicules de la page catalogue", () => {
    /** Base de données de tests */
    const mockVehicles: Vehicle[] = [
        {
            id: "1",
            brand: "Ferrari",
            model: "F8",
            mileage: 1000,
            imageUrl: "",
            acquisition: { purchasePrice: 250000, isAvailableForSale: true }
        },
        {
            id: "2",
            brand: "Lamborghini",
            model: "Huracan",
            mileage: 2000,
            imageUrl: "",
            acquisition: { purchasePrice: 300000, isAvailableForSale: true }
        },
        {
            id: "3",
            brand: "Porsche",
            model: "911",
            mileage: 500,
            imageUrl: "",
            acquisition: { purchasePrice: 150000, isAvailableForSale: true }
        },
        {
            // Pas de prix d'achat pour ce véhicule (disponible uniquement à la location)
            id: "4",
            brand: "Ferrari",
            model: "Roma",
            mileage: 3000,
            imageUrl: "",
            acquisition: { isAvailableForSale: false, isAvailableForRent: true, rentalPrice: 5000 }
        }
    ] as Vehicle[]; // Cast as Vehicle[] pour ignorer certaines propriétés requises de l'interface qui ne sont pas nécessaires au test

    it("Doit retourner tous les véhicules dont le prix est inférieur au prix max si 'Toutes les Manufactures' est sélectionné", () => {
        // 1. ARRANGE (préparation - initialisation des données de recherche d'un filtre dans une constante)
        const filters = { brand: "Toutes les Manufactures", maxPrice: 260000 };

        // 2. ACT (agir/action - exécution de la fonction avec la constante de filtre)
        const result = filterVehiclesCatalog(mockVehicles, filters);

        // 3. ASSERT (vérification - affichage des résultats filtrés)
        expect(result).toHaveLength(3);
        expect(result.map(v => v.id)).toEqual(expect.arrayContaining(["1", "3", "4"]));
    });

    it("Doit filtrer uniquement par marque exacte", () => {
        // 1. ARRANGE (préparation - initialisation des données de recherche d'un filtre dans une constante)
        const filters = { brand: "Ferrari", maxPrice: 1000000 };

        // 2. ACT (agir/action - exécution de la fonction avec la constante de filtre)
        const result = filterVehiclesCatalog(mockVehicles, filters);

        // 3. ASSERT (vérification - affichage des résultats filtrés)
        expect(result).toHaveLength(2);
        expect(result[0].brand).toBe("Ferrari");
        expect(result[1].brand).toBe("Ferrari");
    });

    it("Doit filtrer par marque ET par prix maximum combinés", () => {
        // 1. ARRANGE (préparation - initialisation des données de recherche d'un filtre dans une constante)
        const filters = { brand: "Ferrari", maxPrice: 200000 };

        // 2. ACT (agir/action - exécution de la fonction avec la constante de filtre)
        const result = filterVehiclesCatalog(mockVehicles, filters);

        // 3. ASSERT (vérification - affichage des résultats filtrés)
        // Le vehicule Ferrari 1 vaut 250000 (exclu), Ferrari 4 n'a pas de prix d'achat donc 0 (inclus)
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("4");
    });

    it("Doit gérer les véhicules n'ayant pas de `purchasePrice` (prix = 0)", () => {
        // 1. ARRANGE (préparation - initialisation des données de recherche d'un filtre dans une constante)
        const filters = { brand: "Toutes les Manufactures", maxPrice: 1000 };

        // 2. ACT (agir/action - exécution de la fonction avec la constante de filtre)
        const result = filterVehiclesCatalog(mockVehicles, filters);

        // 3. ASSERT (vérification - affichage des résultats filtrés)
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("4");
    });
});