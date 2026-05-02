// FONCTION DE TESTS
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT A TESTER
import { Button } from './Button';

describe("Button - Design System", () => {
    it("s'affiche correctement avec ses éléments enfants", () => {
        // 1. ARRANGE (préparation)
        const content = "Cliquez ici";

        // 2. ACT (agir/action)
        render(<Button>{content}</Button>);

        // 3. ASSERT (vérification)
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("s'affiche sous forme de bouton par défaut", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Button>Bouton</Button>);
        const button = screen.getByRole('button');

        // 3. ASSERT (vérification)
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe('BUTTON');
    });

    it("s'affiche sous forme de lien lorsque l'URL de base est fournie", () => {
        // 1. ARRANGE (préparation)
        const linkPath = "/contact";

        // 2. ACT (agir/action)
        render(
            <MemoryRouter>
                <Button baseUrl={linkPath}>Contact</Button>
            </MemoryRouter>
        );
        const link = screen.getByRole('link');

        // 3. ASSERT (vérification)
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', linkPath);
    });

    it("appelle la fonction de gestion onClick lorsqu'on clique dessus", () => {
        // 1. ARRANGE (préparation)
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Action</Button>);
        const button = screen.getByRole('button');

        // 2. ACT (agir/action)
        fireEvent.click(button);
        
        // 3. ASSERT (vérification)
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("est désactivé et ne peut pas être cliqué lorsque la propriété `disabled` est définie sur `true`", () => {
        // 1. ARRANGE (préparation)
        const handleClick = vi.fn();
        render(<Button disabled onClick={handleClick}>Inactif</Button>);
        const button = screen.getByRole('button');

        // 2. ACT (agir/action)
        fireEvent.click(button);

        // 3. ASSERT (vérification)
        expect(button).toBeDisabled();
        expect(handleClick).not.toHaveBeenCalled();
    });

    it("affiche un indicateur de chargement et est désactivé lorsque isLoading est défini sur `true`", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Button isLoading>Chargement</Button>);
        const button = screen.getByRole('button');

        // 3. ASSERT (vérification)
        expect(button).toBeDisabled();
        expect(screen.getByText('progress_activity')).toBeInTheDocument();
    });

    it("applique la classe `fullWidth` lorsque la propriété `fullWidth` est définie sur `true`", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Button fullWidth>Largeur totale</Button>);
        const button = screen.getByRole('button');

        // 3. ASSERT (vérification)
        expect(button).toHaveClass('w-full');
    });

    it("affiche l'icône lorsqu'elle est fournie", () => {
        // 1. ARRANGE (préparation)
        const testIcon = <span data-testid="test-icon">🔥</span>;

        // 2. ACT (agir/action)
        render(<Button icon={testIcon}>Avec Icône</Button>);
        
        // 3. ASSERT (vérification)
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
});
