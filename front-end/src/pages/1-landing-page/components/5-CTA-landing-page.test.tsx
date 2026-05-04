// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import CTALandingPage from './5-CTA-landing-page';

describe("CTALandingPage - Présentation du CTA dans la landing page", () => {
    it("affiche le bouton pour le call to action avec redirection sur la page de connexion `/login`", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <CTALandingPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - sélection du bouton)
        const ctaButton = screen.getByRole('link', { name: /Commencer ici/i });

        // 3. ASSERT (vérification - affichage du bouton et de son href)
        expect(ctaButton).toBeInTheDocument();
        expect(ctaButton).toHaveAttribute('href', '/login');
    });
});