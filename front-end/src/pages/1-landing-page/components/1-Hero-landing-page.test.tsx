// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect} from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import HeroLandingPage from './1-Hero-landing-page';

describe("HeroLandingPage - Présentation de la page d'accueil", () => {
    it("affiche le titre de la section hero", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <HeroLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection du titre)
        const titlePart1 = screen.getByText(/Valoriser la/i);
        const titlePart2 = screen.getByText(/flexibilité/i);

        // 3. ASSERT (vérification - affichage du titre)
        expect(titlePart1).toBeInTheDocument();
        expect(titlePart2).toBeInTheDocument();
    });

    it("affiche les boutons de navigation", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <HeroLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection des boutons)
        const catalogButton = screen.getByRole('link', { name: /Parcourir notre catalogue/i });
        const aboutButton = screen.getByRole('link', { name: /Notre histoire/i });

        // 3. ASSERT (vérification - affichage des boutons et de leurs href)
        expect(catalogButton).toBeInTheDocument();
        expect(catalogButton).toHaveAttribute('href', '/catalog');
        expect(aboutButton).toBeInTheDocument();
        expect(aboutButton).toHaveAttribute('href', '/about');
    });

    it("affiche l'image de fond", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <HeroLandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection de l'image)
        const backgroundImage = screen.getByAltText(/Image de fond de la section hero/i);

        // 3. ASSERT (vérification - affichage de l'image et de sa classe CSS)
        expect(backgroundImage).toBeInTheDocument();
        expect(backgroundImage).toHaveClass('object-cover');
    });
});