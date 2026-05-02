// FONCTION DE TESTS
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT A TESTER
import { Typography } from './Typography';

describe("Typography - Design System", ()  => {
    it("affiche correctement le texte des enfants du composant", () => {
        // 1. ARRANGE (préparation)
        const text = "Texte de test";

        // 2. ACT (agir/action)
        render(<Typography>{text}</Typography>);

        // 3. ASSERT (vérification)
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it("génère la balise HTML appropriée lorsque la propriété du composant est fournie", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        const { container } = render(<Typography component="h1">Titre H1</Typography>);

        // 3. ASSERT (vérification)
        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    it("affiche une balise <p> par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        const { container } = render(<Typography>Paragraphe</Typography>);

        // 3. ASSERT (vérification)
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    it("applique la classe de variante appropriée", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Typography variant="headline-lg">Gros Titre</Typography>);
        const element = screen.getByText('Gros Titre');

        // 3. ASSERT (vérification)
        expect(element).toHaveClass('text-6xl');
    });

    it("applique la classe de couleur appropriée", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Typography color="primary">Texte Jaune</Typography>);
        const element = screen.getByText('Texte Jaune');

        // 3. ASSERT (vérification)
        expect(element).toHaveClass('text-primary');
    });

    it("applique la catégorie de poids (le gras du texte) appropriée", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Typography weight="bold">Texte Gras</Typography>);
        const element = screen.getByText('Texte Gras');

        // 3. ASSERT (vérification)
        expect(element).toHaveClass('font-bold');
    });

    it("ajoute le nom de classe spécifié, le cas échéant", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Typography className="custom-class">Custom</Typography>);
        const element = screen.getByText('Custom');

        // 3. ASSERT (vérification)
        expect(element).toHaveClass('custom-class');
    });
});
