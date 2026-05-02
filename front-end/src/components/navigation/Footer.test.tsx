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
import Footer from './Footer';

describe("Footer - Pied de page", () => {
    it("affiche le logo", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - exécution du composant)
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - affiche le lien du logo)
        expect(screen.getByRole('link', { name: /M-MOTORS/i })).toBeInTheDocument();
    });

    it("affiche les sections de navigation", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - exécution du composant)
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - affiche les sections de navigation)
        expect(screen.getByRole('heading', { name: /Entreprise/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Légal/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Réseaux/i })).toBeInTheDocument();
    });

    it("affiche les liens sociaux", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - exécution du composant)
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - affiche les liens de réseaux sociaux)
        expect(screen.getByText(/Facebook/i)).toBeInTheDocument();
        expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
        expect(screen.getByText(/YouTube/i)).toBeInTheDocument();
    });

    it("affiche les mentions légales et le copyright", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - exécution du composant)
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification - affiche le copyright et les mentions légales)
        expect(screen.getByText(/© 2026 Concept M-Motors/i)).toBeInTheDocument();
        expect(screen.getByText(/Un crédit vous engage/i)).toBeInTheDocument();
    });
});