// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import OurVisionAboutPage from './3-Our-vision-about-page';

describe("OurVisionAboutPage - Vision de l'entreprise de la page à propos", () => {
    it("devrait afficher le titre de la section et l'écosystème M-Motors", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <OurVisionAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des éléments de l'écosystème)
        const mainTitle = screen.getByText(/L'Écosystème M-Motors/i);
        const service1 = screen.getByText(/Vente et Qualité/i);
        const service2 = screen.getByText(/Accompagnement/i);
        const service3 = screen.getByText(/Essai Routier/i);
        const service4 = screen.getByRole('heading', { name: /Financement/i });
        const service5 = screen.getByText(/Reprise Optimisée/i);

        // 3. ASSERT (vérification - affichage des éléments)
        expect(mainTitle).toBeInTheDocument();
        expect(service1).toBeInTheDocument();
        expect(service2).toBeInTheDocument();
        expect(service3).toBeInTheDocument();
        expect(service4).toBeInTheDocument();
        expect(service5).toBeInTheDocument();
    });
});