// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import ShortAboutLandingPage from './4-Short-about-landing-page';

describe("ShortAboutLandingPage - Présentation de la mission et des valeurs dans la landing page", () => {
    it("affiche le titre de la section mission et valeurs", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ShortAboutLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des titres)
        const titlePart1 = screen.getByText(/Héritage et/i);
        const titlePart2 = screen.getByText(/Excellence/i);

        // 3. ASSERT (vérification - affichage des titres)
        expect(titlePart1).toBeInTheDocument();
        expect(titlePart2).toBeInTheDocument();
    });

    it("affiche les chiffres clés de l'entreprise", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ShortAboutLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des chiffres clés)
        const stat1 = screen.getByText(/30\+ Ans/i);
        const stat2 = screen.getByText(/Top 10/i);
        const stat3 = screen.getByText(/15k\+/i);
        const stat4 = screen.getByText(/12/i);

        // 3. ASSERT (vérification - affichage des chiffres clés)
        expect(stat1).toBeInTheDocument();
        expect(stat2).toBeInTheDocument();
        expect(stat3).toBeInTheDocument();
        expect(stat4).toBeInTheDocument();
    });

    it("affiche l'écosystème M-Motors avec ses services", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <ShortAboutLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des élémentsde l'écosystème)
        const ecosystemTitle = screen.getByText(/L'Écosystème M-Motors/i);
        const serviceVente = screen.getByText(/Vente/i);
        const serviceFinancement = screen.getByText(/Financement/i);

        // 3. ASSERT (vérification - affichage de l'écosystème)
        expect(ecosystemTitle).toBeInTheDocument();
        expect(serviceVente).toBeInTheDocument();
        expect(serviceFinancement).toBeInTheDocument();
    });
});