// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import OurFigureAboutPage from './2-Our-figure-about-page';

describe("OurFigureAboutPage - Chiffres clés de l'entreprise de la page à propos", () => {
    it("devrait afficher les chiffres clés de l'entreprise", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <OurFigureAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des chiffres clés)
        const stat1Value = screen.getByText(/30\+/i);
        const stat1Label = screen.getByText(/Ans d'Expertise/i);
        const stat2Value = screen.getByText(/Top 10/i);
        const stat2Label = screen.getByText(/National/i);
        const stat3Value = screen.getByText(/800/i);
        const stat3Label = screen.getByText(/Collaborateurs/i);
        const stat4Value = screen.getByText(/1M\+/i);
        const stat4Label = screen.getByText(/Clients Satisfaits/i);

        // 3. ASSERT (vérification - affichage des chiffres clés)
        expect(stat1Value).toBeInTheDocument();
        expect(stat1Label).toBeInTheDocument();
        expect(stat2Value).toBeInTheDocument();
        expect(stat2Label).toBeInTheDocument();
        expect(stat3Value).toBeInTheDocument();
        expect(stat3Label).toBeInTheDocument();
        expect(stat4Value).toBeInTheDocument();
        expect(stat4Label).toBeInTheDocument();
    });
});