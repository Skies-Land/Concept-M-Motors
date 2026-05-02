// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT À TESTER
import Logo from './Logo';

describe("Logo - Design System", () => {
  it("affiche correctement le texte du logo", () => {
    // 1. ARRANGE (préparation)
    // 2. ACT (agir/action)
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    
    // 3. ASSERT (vérification)
    const logoElement = screen.getByText(/M-MOTORS/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("contient le lien correct vers la page d'accueil", () => {
    // 1. ARRANGE (préparation)
    // 2. ACT (agir/action)
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    
    // 3. ASSERT (vérification)
    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
