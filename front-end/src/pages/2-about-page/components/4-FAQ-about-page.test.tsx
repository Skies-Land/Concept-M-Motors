// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter } from 'react-router-dom';

// API
import { getFAQAboutPage } from "../../../api/Get-faq";

// COMPOSANT À TESTER
import FAQAboutPage from './4-FAQ-about-page';

// MOCKS ----------------------------------------------------
vi.mock("../../../api/Get-faq", () => ({
    getFAQAboutPage: vi.fn(),
}));
// ---------------------------------------------------------

const mockFaqData = [
    {
        id: "1",
        question: "Quelle est la garantie sur vos véhicules ?",
        answer: "Tous nos véhicules bénéficient d'une garantie premium de 24 mois minimum."
    }
];

describe("FAQAboutPage - Foire aux questions de la page à propos", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (getFAQAboutPage as any).mockResolvedValue(mockFaqData);
    });

    it("devrait afficher les questions et réponses de la FAQ", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <FAQAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - attente du chargement et sélection de la question)
        const question = await screen.findByText(/Quelle est la garantie sur vos véhicules \?/i);
        const answer = screen.getByText(/Tous nos véhicules bénéficient d'une garantie premium/i);

        // 3. ASSERT (vérification - affichage de la question et réponse)
        expect(question).toBeInTheDocument();
        expect(answer).toBeInTheDocument();
    });

    it("le menu déroulant s'ouvre au clic sur la question", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <FAQAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - clic sur le bouton de la question)
        const questionButton = await screen.findByRole('button', { name: /Quelle est la garantie sur vos véhicules \?/i });
        
        // Avant le clic, le conteneur de la réponse a max-h-0
        const answerContainer = screen.getByText(/Tous nos véhicules bénéficient d'une garantie premium/i).parentElement;
        expect(answerContainer).toHaveClass('max-h-0');

        fireEvent.click(questionButton);

        // 3. ASSERT (vérification - le conteneur est ouvert)
        expect(questionButton).toHaveAttribute('aria-expanded', 'true');
        expect(answerContainer).toHaveClass('max-h-96');
    });

    it("Au clic sur la question, le style CSS change de couleur sur la question", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(
            <MemoryRouter>
                <FAQAboutPage />
            </MemoryRouter>
        );

        // 2. ACT (agir/action - clic sur la question)
        const questionText = await screen.findByText(/Quelle est la garantie sur vos véhicules \?/i);
        const questionButton = screen.getByRole('button', { name: /Quelle est la garantie sur vos véhicules \?/i });

        // Avant le clic, pas de couleur primaire
        expect(questionText).toHaveClass('text-on-surface');

        fireEvent.click(questionButton);

        // 3. ASSERT (vérification - changement de couleur)
        expect(questionText).toHaveClass('text-primary');
    });
});