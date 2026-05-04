// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import ServicesLandingPage from './3-Services-landing-page';

describe("ServicesLandingPage - Présentation des services proposés dans la landing page", () => {
    it("affiche le titre de la section services", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ServicesLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection du titre)
        const title = screen.getByText(/Services Intégrés/i);

        // 3. ASSERT (vérification - affichage du titre)
        expect(title).toBeInTheDocument();
    });


    it("affiche les différentes cartes de services", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ServicesLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des cartes de services)
        const service1 = screen.getByText(/Tout Inclus/i);
        const service2 = screen.getByText(/Conciergerie 24\/7/i);
        const service3 = screen.getByText(/Entretien Prédictif/i);
        const service4 = screen.getByText(/Garantie Premium Étendue/i);

        // 3. ASSERT (vérification - affichage des cartes de services)
        expect(service1).toBeInTheDocument();
        expect(service2).toBeInTheDocument();
        expect(service3).toBeInTheDocument();
        expect(service4).toBeInTheDocument();
    });
});