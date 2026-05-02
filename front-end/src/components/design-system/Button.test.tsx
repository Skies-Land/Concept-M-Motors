// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT À TESTER
import { Button } from './Button';

describe("Button - Design System", () => {
    it("s'affiche correctement avec ses éléments enfants", () => {
        // 1. ARRANGE (préparation - le contenu du bouton)
        const content = "Cliquez ici";

        // 2. ACT (agir/action - rendu du composant)
        render(<Button>{content}</Button>);

        // 3. ASSERT (vérification - le texte doit être présent dans le DOM)
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("s'affiche sous forme de bouton par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(<Button>Bouton</Button>);
        const button = screen.getByRole('button');

        // 3. ASSERT (vérification - le bouton doit être présent dans le DOM)
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe('BUTTON');
    });

    it("s'affiche sous forme de lien lorsque l'URL de base est fournie", () => {
        // 1. ARRANGE (préparation - le chemin de l'URL)
        const linkPath = "/contact";

        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <Button baseUrl={linkPath}>Contact</Button>
            </MemoryRouter>
        );
        const link = screen.getByRole('link');

        // 3. ASSERT (vérification - le lien doit être présent dans le DOM)
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', linkPath);
    });

    it("appelle la fonction de gestion onClick lorsqu'on clique dessus", () => {
        // 1. ARRANGE (préparation - la fonction de gestion onClick)
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Action</Button>);
        const button = screen.getByRole('button');

        // 2. ACT (agir/action - clic sur le bouton)
        fireEvent.click(button);
        
        // 3. ASSERT (vérification - la fonction onClick doit être appelée une fois)
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("est désactivé et ne peut pas être cliqué lorsque la propriété `disabled` est définie sur `true`", () => {
        // 1. ARRANGE (préparation - la fonction de gestion onClick)
        const handleClick = vi.fn();
        render(<Button disabled onClick={handleClick}>Inactif</Button>);
        const button = screen.getByRole('button');

        // 2. ACT (agir/action - clic sur le bouton)
        fireEvent.click(button);

        // 3. ASSERT (vérification - la fonction onClick ne doit pas être appelée)
        expect(button).toBeDisabled();
        expect(handleClick).not.toHaveBeenCalled();
    });

    it("affiche un indicateur de chargement et est désactivé lorsque isLoading est défini sur `true`", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(<Button isLoading>Chargement</Button>);
        const button = screen.getByRole('button');

        // 3. ASSERT (vérification - le bouton doit être désactivé)
        expect(button).toBeDisabled();
        expect(screen.getByText('progress_activity')).toBeInTheDocument();
    });

    it("applique la classe `fullWidth` lorsque la propriété `fullWidth` est définie sur `true`", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(<Button fullWidth>Largeur totale</Button>);
        const button = screen.getByRole('button');

        // 3. ASSERT (vérification - le bouton doit avoir la classe `w-full`)
        expect(button).toHaveClass('w-full');
    });

    it("affiche l'icône lorsqu'elle est fournie", () => {
        // 1. ARRANGE (préparation - l'icône de test)
        const testIcon = <span data-testid="test-icon">🔥</span>;

        // 2. ACT (agir/action - rendu du composant)
        render(<Button icon={testIcon}>Avec Icône</Button>);

        // 3. ASSERT (vérification) - L'icône doit être présente dans le DOM
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
});
