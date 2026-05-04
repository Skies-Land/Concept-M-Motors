// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import ProcessLandingPage from './2-Process-landing-page';

describe("ProcessLandingPage - Présentation du processus d'aquisition dans la landing page", () => {
    it("affiche le titre de la section processus d'aquisition", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ProcessLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection du titre)
        const title = screen.getByText(/Processus d'aquisition/i);

        // 3. ASSERT (vérification - affichage du titre)
        expect(title).toBeInTheDocument();
    });


    it("affiche les différentes étapes du processus d'aquisition", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ProcessLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des étapes du processus)
        const step1 = screen.getByText(/Choisissez votre véhicule/i);
        const step2 = screen.getByText(/Simulez votre financement/i);
        const step3 = screen.getByText(/Déposez vos documents/i);
        const step4 = screen.getByText(/Récupérez vos clés/i);

        // 3. ASSERT (vérification - affichage des étapes du processus)
        expect(step1).toBeInTheDocument();
        expect(step2).toBeInTheDocument();
        expect(step3).toBeInTheDocument();
        expect(step4).toBeInTheDocument();
    });
});