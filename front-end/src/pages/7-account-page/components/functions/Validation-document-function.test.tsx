// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// COMPOSANT À TESTER
import ValidationDocument from './Validation-document-function';

describe("ValidationDocument - Contrôle visuel du statut du fichier", () => {
    
    it("ne doit rien afficher si le statut est 'missing'", () => {
        // 1. ARRANGE (préparation - initialisation avec statut manquant)
        const { container } = render(<ValidationDocument status="missing" />);

        // 2. ASSERT (vérification - le composant retourne null)
        expect(container.firstChild).toBeNull();
    });

    it("doit afficher 'Validé' pour le statut 'accepted'", () => {
        // 1. ARRANGE (préparation - initialisation avec statut accepté)
        render(<ValidationDocument status="accepted" />);

        // 2. ASSERT (vérification - affichage du libellé et couleur verte)
        const label = screen.getByText(/Validé/i);
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass('text-green-500');
    });

    it("doit afficher 'En cours de validation' pour le statut 'pending'", () => {
        // 1. ARRANGE (préparation - initialisation avec statut en attente)
        render(<ValidationDocument status="pending" />);

        // 2. ASSERT (vérification - affichage du libellé et couleur orange)
        expect(screen.getByText(/En cours de validation/i)).toBeInTheDocument();
    });

    it("doit afficher 'Refusé' pour le statut 'rejected'", () => {
        // 1. ARRANGE (préparation - initialisation avec statut refusé)
        render(<ValidationDocument status="rejected" />);

        // 2. ASSERT (vérification - affichage du libellé et couleur rouge)
        expect(screen.getByText(/Refusé/i)).toBeInTheDocument();
        expect(screen.getByText(/Refusé/i)).toHaveClass('text-red-500');
    });
});