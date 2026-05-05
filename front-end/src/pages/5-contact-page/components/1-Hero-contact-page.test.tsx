// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// COMPOSANT À TESTER
import HeroContactPage from './1-Hero-contact-page';

describe("HeroContactPage - affichage de la section Hero de la page de contact", () => {
    it("doit afficher le titre de la section" , () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<HeroContactPage />);

        // 2. ASSERT (vérification - résultat obtenu)
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toHaveTextContent(/CONTACTER/i);
        expect(title).toHaveTextContent(/NOTRE ÉQUIPE/i);
    });

    it("doit afficher le paragraphe de la section" , () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<HeroContactPage />);

        // 2. ASSERT (vérification - résultat obtenu)
        expect(screen.getByText(/Connectez-vous avec notre équipe d'experts/i)).toBeInTheDocument();
    });
});