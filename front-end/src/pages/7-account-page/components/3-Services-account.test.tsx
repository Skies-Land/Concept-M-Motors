// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// COMPOSANT À TESTER
import ServicesAccount from './3-Services-account';

describe("ServicesAccount - Composant de gestion des services client", () => {
    it("doit afficher le titre et la description de la section", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ServicesAccount />);

        // 2. ASSERT (vérification - affichage du titre et de la description)
        expect(screen.getByText(/Gestion de mes services/i)).toBeInTheDocument();
        expect(screen.getByText(/Gérez vos services optionnels liés à la location longue durée/i)).toBeInTheDocument();
    });

    it("doit afficher le message d'attente (bientôt disponible)", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ServicesAccount />);

        // 2. ASSERT (vérification - affichage du message d'attente)
        expect(screen.getByText(/Vos services apparaîtront bientôt ici.../i)).toBeInTheDocument();
    });
});