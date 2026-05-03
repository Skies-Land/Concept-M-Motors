// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// COMPOSANT À TESTER
import RootLayout from './RootLayout';

// Mock du contexte d'authentification pour éviter les erreurs liées à Firebase
vi.mock('../../context/AuthUserContext', () => ({
    useAuth: () => ({
        authUser: null,
        signOut: vi.fn(),
    }),
}));

describe("RootLayout - Contenant les éléments communs de toutes les pages", () => {
    it("affiche le header", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <RootLayout />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification de la présence d'un élément clé du Header ex: le lien Catalogue)
        expect(screen.getByText(/Catalogue/i)).toBeInTheDocument();
    });

    it("affiche le footer", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - rendu du composant)
        render(
            <MemoryRouter>
                <RootLayout />
            </MemoryRouter>
        );

        // 3. ASSERT (vérification de la présence d'un élément clé du Footer ex: les crédits)
        expect(screen.getByText(/Concept M-Motors/i)).toBeInTheDocument();
    });

    it("affiche correctement le contenu des pages enfants (Outlet)", () => {
        // 1. ARRANGE (préparation pour tester l'Outlet, on simule une route enfant)
        const MockChild = () => <div>Contenu de la page de test</div>;

        // 2. ACT (agir/action - rendu du composant avec une route enfant)
        render(
            <MemoryRouter initialEntries={['/test']}>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route path="test" element={<MockChild />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        // 3. ASSERT (vérification que le contenu des pages enfants s'affiche correctement)
        expect(screen.getByText('Contenu de la page de test')).toBeInTheDocument();
    });
});