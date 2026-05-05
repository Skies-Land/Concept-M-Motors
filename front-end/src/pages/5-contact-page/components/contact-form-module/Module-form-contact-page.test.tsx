// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// COMPOSANT À TESTER
import ModuleFormContactPage from './Module-form-contact-page';

describe("ModuleFormContactPage - Composant du formulaire de contact", () => {
    it("doit afficher le label de l'objet du message", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ModuleFormContactPage />);

        // 2. ASSERT (vérification - résultat obtenu)
        expect(screen.getByText(/Sujet du Message/i)).toBeInTheDocument();
    });

    it("doit afficher le label du corps du message", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ModuleFormContactPage />);

        // 2. ASSERT (vérification - résultat obtenu)
        expect(screen.getByText(/Votre Message/i)).toBeInTheDocument();
    });

    it("doit afficher les champs du formulaire de contact", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ModuleFormContactPage />);

        // 2. ASSERT (vérification - résultat obtenu)
        expect(screen.getByLabelText(/^Prénom$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Nom$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Email$/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Détaillez votre demande/i)).toBeInTheDocument();
    });

    it("doit afficher le bouton d'envoi", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ModuleFormContactPage />);

        // 2. ASSERT (vérification - résultat obtenu)
        expect(screen.getByRole('button', { name: /ENVOYER MA DEMANDE/i })).toBeInTheDocument();
    });
});