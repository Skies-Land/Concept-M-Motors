// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// COMPOSANT À TESTER
import FormContactPage from './2-Form-contact-page';

describe("FormContactPage - affichage des informations de l'entreprise de la page de contact", () => {
    it("doit afficher les informations de l'entreprise (Siège social, Support, Horaires)", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <FormContactPage />
            </MemoryRouter>
        );

        // 2. ASSERT (vérification - résultat obtenu)
        // Bloc 1 - Siège social
        expect(screen.getByRole('heading', { name: /Siège social/i })).toBeInTheDocument();
        expect(screen.getByText(/14 avenue de la Précision/i)).toBeInTheDocument();
        
        // Bloc 2 - Support Technique
        expect(screen.getByRole('heading', { name: /Support Technique/i })).toBeInTheDocument();
        expect(screen.getByText(/01 00 00 00 00/i)).toBeInTheDocument();
        
        // Bloc 3 - Horaires
        expect(screen.getByRole('heading', { name: /Heures de Service/i })).toBeInTheDocument();
        expect(screen.getByText(/Lun - Ven/i)).toBeInTheDocument();
        expect(screen.getByText(/08:00 - 19:00/i)).toBeInTheDocument();
    });
});