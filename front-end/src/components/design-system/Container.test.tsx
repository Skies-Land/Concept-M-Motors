// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT À TESTER
import Container from './Container';

describe("Container - Design System", () => {
    it("affiche correctement les enfants", () => {
        // 1. ARRANGE (préparation - contenu du container)
        const content = "Contenu du container";

        // 2. ACT (agir/action - rendu du composant)
        render(<Container>{content}</Container>);

        // 3. ASSERT (vérification - le contenu doit être présent dans le DOM)
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("génère la balise HTML appropriée lorsque la propriété `as` est fournie", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        const { container } = render(<Container as="section">Section</Container>);

        // 3. ASSERT (vérification - la balise `section` doit être présente dans le DOM)
        expect(container.querySelector('section')).toBeInTheDocument();
    });

    it("affiche une balise <div> par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        const { container } = render(<Container>Div par défaut</Container>);

        // 3. ASSERT (vérification - la balise `div` doit être présente dans le DOM)
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    it("applique les classes de conteneur par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(<Container>Test classes</Container>);
        const element = screen.getByText('Test classes');

        // 3. ASSERT (vérification - les classes de conteneur doivent être présentes dans le DOM)
        expect(element).toHaveClass('w-full', 'max-w-7xl', 'mx-auto');
    });

    it("applique le className supplémentaire lorsqu'il est fourni", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(<Container className="custom-container-class">Custom</Container>);
        const element = screen.getByText('Custom');

        // 3. ASSERT (vérification - la classe `custom-container-class` doit être présente dans le DOM)
        expect(element).toHaveClass('custom-container-class');
    });
});
