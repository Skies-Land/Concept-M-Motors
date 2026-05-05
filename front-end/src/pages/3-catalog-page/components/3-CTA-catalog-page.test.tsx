// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import CTACatalogPage from './3-CTA-catalog-page';

describe("CTACatalogPage - affichage de l'appel à l'action de la page catalogue", () => {
    it("doit afficher l'image de fond avec le bon texte alternatif", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <CTACatalogPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage de l'image de fond)
        const image = screen.getByAltText(/Photographie de course à grande vitesse/i);
        expect(image).toBeInTheDocument();
    });

    it("doit afficher les titres et la description du service de conciergerie", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <CTACatalogPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage des titres et de la description du service de conciergerie)
        expect(screen.getByText(/Conciergerie M-Motors/i)).toBeInTheDocument();
        expect(screen.getByText(/Un Service Au-Delà de la Possession/i)).toBeInTheDocument();
        expect(screen.getByText(/Nous n'offrons pas seulement des clés/i)).toBeInTheDocument();
    });

    it("doit afficher le bouton d'appel à l'action vers la page contact", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <CTACatalogPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - affichage du bouton d'appel à l'action vers la page contact)
        const button = screen.getByRole('link', { name: /Consulter un Expert/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('href', '/contact');
    });
});
