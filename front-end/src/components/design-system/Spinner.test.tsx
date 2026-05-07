// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// COMPOSANT À TESTER
import Spinner from './Spinner';

describe("Spinner - Design System", () => {
    it("affiche correctement le spinner avec ses attributs d'accessibilité", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<Spinner />);

        // 2. ACT (agir/action - récupération de l'élément du DOM)
        const spinnerElement = screen.getByRole('status');

        // 3. ASSERT (vérification - affichage et attributs d'accessibilité)
        expect(spinnerElement).toBeInTheDocument();
        expect(spinnerElement).toHaveAttribute('aria-label', 'Chargement en cours');
    });

    it("possède les classes CSS d'animation nécessaires", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<Spinner />);

        // 2. ACT (agir/action - récupération de l'élément du DOM)
        const spinnerElement = screen.getByRole('status');

        // 3. ASSERT (vérification - ajout des classes CSS, d'animation et de styles)
        expect(spinnerElement).toHaveClass('animate-spin');
        expect(spinnerElement).toHaveClass('rounded-full');
        expect(spinnerElement).toHaveClass('border-primary');
    });
});
