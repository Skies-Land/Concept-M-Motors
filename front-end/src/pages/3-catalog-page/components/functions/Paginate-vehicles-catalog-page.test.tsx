// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// TYPES
import { type Vehicle } from '../../../../types/Vehicle';

// FONCTION À TESTER
import { paginateVehiclesCatalog } from './Paginate-vehicles-catalog-page';

describe("paginateVehiclesCatalog - fonction de calcul de la pagination des véhicules", () => {
    // Liste de véhicules factices pour les tests
    const mockVehicles = Array.from({ length: 25 }, (_, i) => ({
        id: `${i + 1}`,
        brand: `Marque ${i + 1}`
    })) as Vehicle[];

    it("Doit retourner le bon nombre total de pages", () => {
        // 1. ARRANGE (préparation - initialisation des données (10 véhicules par page))
        const itemsPerPage = 10;
        const currentPage = 1;

        // 2. ACT (agir/action - exécution de la fonction avec les données de la constante)
        const result = paginateVehiclesCatalog(mockVehicles, currentPage, itemsPerPage);

        // 3. ASSERT (vérification - affichage des résultats trouvés
        // 25 véhicules | 10 par page et 5 restants = 3 pages au total
        expect(result.totalPages).toBe(3);
    });

    it("Doit retourner les bons véhicules pour la première page", () => {
        // 1. ARRANGE (préparation - initialisation des données)
        const itemsPerPage = 10;
        const currentPage = 1;

        // 2. ACT (agir/action - exécution de la fonction avec les données de la constante)
        const result = paginateVehiclesCatalog(mockVehicles, currentPage, itemsPerPage);

        // 3. ASSERT (vérification - affichage des résultats trouvés)
        expect(result.currentVehicles).toHaveLength(10);
        expect(result.currentVehicles[0].id).toBe("1");
        expect(result.currentVehicles[9].id).toBe("10");
    });

    it("Doit retourner les bons véhicules pour la dernière page", () => {
        // 1. ARRANGE (préparation - initialisation des données)
        const itemsPerPage = 10;
        const currentPage = 3; // Dernière page pour 25 éléments avec 10 items/page

        // 2. ACT (agir/action - exécution de la fonction avec les données de la constante)
        const result = paginateVehiclesCatalog(mockVehicles, currentPage, itemsPerPage);

        // 3. ASSERT (vérification - affichage des résultats trouvés)
        expect(result.currentVehicles).toHaveLength(5);
        expect(result.currentVehicles[0].id).toBe("21");
        expect(result.currentVehicles[4].id).toBe("25");
    });

    it("Doit gérer une liste vide", () => {
        // 1. ARRANGE (préparation - initialisation des données)
        const emptyVehicles: Vehicle[] = [];
        const itemsPerPage = 10;
        const currentPage = 1;

        // 2. ACT (agir/action - exécution de la fonction avec les données de la constante)
        const result = paginateVehiclesCatalog(emptyVehicles, currentPage, itemsPerPage);

        // 3. ASSERT (vérification - affichage des résultats trouvés)
        expect(result.totalPages).toBe(0);
        expect(result.currentVehicles).toHaveLength(0);
    });
});