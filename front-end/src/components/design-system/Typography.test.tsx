// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// COMPOSANT À TESTER
import { Typography } from './Typography';

describe("Typography - Design System", () => {
    it("affiche correctement le texte des enfants du composant", () => {
        // 1. ARRANGE (préparation - initialisation du texte)
        const text = "Texte de test";

        // 2. ACT (agir/action - rendu du composant)
        render(<Typography>{text}</Typography>);

        // 3. ASSERT (vérification - le texte doit être présent dans le DOM)
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it("génère la balise HTML appropriée lorsque la propriété du composant est fournie", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant avec la propriété 'component' définie sur 'h1')
        const { container } = render(<Typography component="h1">Titre H1</Typography>);

        // 3. ASSERT (vérification - la balise h1 doit être présente dans le DOM)
        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    it("affiche une balise <p> par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        const { container } = render(<Typography>Paragraphe</Typography>);

        // 3. ASSERT (vérification - la balise p doit être présente dans le DOM)
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    it("applique la classe de variante appropriée", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant avec la propriété 'variant' définie sur 'headline-lg')
        render(<Typography variant="headline-lg">Gros Titre</Typography>);
        const element = screen.getByText('Gros Titre');

        // 3. ASSERT (vérification - la classe 'text-6xl' doit être présente dans le DOM)
        expect(element).toHaveClass('text-6xl');
    });

    it("applique la classe de couleur appropriée", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant avec la propriété 'color' définie sur 'primary')
        render(<Typography color="primary">Texte Jaune</Typography>);
        const element = screen.getByText('Texte Jaune');

        // 3. ASSERT (vérification - la classe 'text-primary' doit être présente dans le DOM)
        expect(element).toHaveClass('text-primary');
    });

    it("applique la catégorie de poids (le gras du texte) appropriée", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant avec la propriété 'weight' définie sur 'bold')
        render(<Typography weight="bold">Texte Gras</Typography>);
        const element = screen.getByText('Texte Gras');

        // 3. ASSERT (vérification - la classe 'font-bold' doit être présente dans le DOM)
        expect(element).toHaveClass('font-bold');
    });

    it("ajoute le nom de classe spécifié, le cas échéant", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant avec la propriété 'className' définie sur 'custom-class')
        render(<Typography className="custom-class">Custom</Typography>);
        const element = screen.getByText('Custom');

        // 3. ASSERT (vérification - la classe 'custom-class' doit être présente dans le DOM)
        expect(element).toHaveClass('custom-class');
    });
});
