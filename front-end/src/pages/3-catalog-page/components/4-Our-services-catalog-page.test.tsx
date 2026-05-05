// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import OurServicesCatalogPage from './4-Our-services-catalog-page';

describe("OurServicesCatalogPage - affichage des services de la page catalogue", () => {
    it("doit afficher les titres de la section", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <OurServicesCatalogPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des titres de la section)
        expect(screen.getByText(/M-Motors Ecosystem/i)).toBeInTheDocument();
        expect(screen.getByText(/Écosystème de Services/i)).toBeInTheDocument();
    });

    it("doit afficher les trois services principaux", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <OurServicesCatalogPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des trois services principaux)
        expect(screen.getByText(/Assistance 24\/7/i)).toBeInTheDocument();
        expect(screen.getByText(/Maintenance Expert/i)).toBeInTheDocument();
        expect(screen.getByText(/Garantie Premium/i)).toBeInTheDocument();
    });

    it("doit contenir des liens vers la page contact pour chaque service", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <OurServicesCatalogPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - contenu des liens vers la page contact pour chaque service)
        const links = screen.getAllByRole('link', { name: /Détails techniques|Planifier|Conditions/i });
        expect(links).toHaveLength(3);
        links.forEach(link => {
            expect(link).toHaveAttribute('href', '/contact');
        });
    });
});
