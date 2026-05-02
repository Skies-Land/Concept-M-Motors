// FONCTION DE TESTS
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT A TESTER
import Container from './Container';

describe("Container - Design System", () => {
    it("affiche correctement les enfants", () => {
        // 1. ARRANGE (préparation)
        const content = "Contenu du container";

        // 2. ACT (agir/action)
        render(<Container>{content}</Container>);

        // 3. ASSERT (vérification)
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("génère la balise HTML appropriée lorsque la propriété `as` est fournie", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        const { container } = render(<Container as="section">Section</Container>);

        // 3. ASSERT (vérification)
        expect(container.querySelector('section')).toBeInTheDocument();
    });

    it("affiche une balise <div> par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        const { container } = render(<Container>Div par défaut</Container>);

        // 3. ASSERT (vérification)
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    it("applique les classes de conteneur par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Container>Test classes</Container>);
        const element = screen.getByText('Test classes');

        // 3. ASSERT (vérification)
        expect(element).toHaveClass('w-full', 'max-w-7xl', 'mx-auto');
    });

    it("applique le className supplémentaire lorsqu'il est fourni", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Container className="custom-container-class">Custom</Container>);
        const element = screen.getByText('Custom');

        // 3. ASSERT (vérification)
        expect(element).toHaveClass('custom-container-class');
    });
});
