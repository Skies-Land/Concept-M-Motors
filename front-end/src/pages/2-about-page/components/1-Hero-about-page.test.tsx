// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import HeroAboutPage from './1-Hero-about-page';

describe("HeroAboutPage - Présentation de la page à propos", () => {
    it("devrait afficher le titre et le sous-titre de la page Hero", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <HeroAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des titres)
        const titlePart1 = screen.getByText(/HÉRITAGE ET/i);
        const titlePart2 = screen.getByText(/EXCELLENCE/i);
        const subtitle = screen.getByText(/Depuis trois décennies, M-MOTORS redéfinit les standards/i);

        // 3. ASSERT (vérification - affichage des titres)
        expect(titlePart1).toBeInTheDocument();
        expect(titlePart2).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });

    it("devrait afficher l'image de fond de la page Hero", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <HeroAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection de l'image)
        const backgroundImage = screen.getByAltText(/Une voiture de sport noire de luxe/i);

        // 3. ASSERT (vérification - affichage de l'image)
        expect(backgroundImage).toBeInTheDocument();
        expect(backgroundImage).toHaveClass('object-cover');
    });
});