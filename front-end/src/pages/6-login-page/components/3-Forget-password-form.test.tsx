// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// LOGIQUE - Mock du hook personnalisé
import { useForgetPassword } from './functions/Forget-password-function';

// COMPOSANT À TESTER
import ForgetPasswordForm from './3-Forget-password-form';

// Mock du hook useForgetPassword
vi.mock('./functions/Forget-password-function', () => ({
    useForgetPassword: vi.fn()
}));

describe("ForgetPasswordForm - Composant du formulaire d'oubli de mot de passe", () => {
    // Props factices pour les callbacks
    const mockOnBackToLogin = vi.fn();

    // Configuration par défaut du mock avant chaque test
    beforeEach(() => {
        vi.clearAllMocks();
        (useForgetPassword as any).mockReturnValue({
            email: "",
            setEmail: vi.fn(),
            error: null,
            success: false,
            loading: false,
            handleSubmit: vi.fn((e) => e.preventDefault())
        });
    });

    it("doit afficher les éléments du formulaire", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ForgetPasswordForm onBackToLogin={mockOnBackToLogin} />);

        // 2. ASSERT (vérification - affichage des éléments du formulaire)
        expect(screen.getByText(/Mot de passe oublié \?/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Envoyer le lien/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Annuler/i })).toBeInTheDocument();
    });

    it("doit afficher le message de succès après l'envoi", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec message de succès)
        (useForgetPassword as any).mockReturnValue({
            email: "test@example.com",
            setEmail: vi.fn(),
            error: null,
            success: true,
            loading: false,
            handleSubmit: vi.fn()
        });
        render(<ForgetPasswordForm onBackToLogin={mockOnBackToLogin} />);

        // 2. ASSERT (vérification - affichage du message de succès d'envoie)
        expect(screen.getByText(/Un e-mail de réinitialisation a été envoyé/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Retourner à la connexion/i })).toBeInTheDocument();
    });

    it("doit appeler `onBackToLogin` quand l'utilisateur clique sur Annuler ou Retourner à la connexion", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<ForgetPasswordForm onBackToLogin={mockOnBackToLogin} />);

        // 2. ACT (agir/action - interaction avec le DOM pour le bouton Annuler ou Retourner à la connexion)
        fireEvent.click(screen.getByRole('button', { name: /Annuler/i }));

        // 3. ASSERT (vérification - appel de la fonction `onBackToLogin` pour retourner à la page de connexion)
        expect(mockOnBackToLogin).toHaveBeenCalledTimes(1);
    });

    it("doit afficher un message d'erreur", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec message d'erreur)
        (useForgetPassword as any).mockReturnValue({
            email: "inconnu@example.com",
            setEmail: vi.fn(),
            error: "Aucun utilisateur ne correspond à cette adresse e-mail.",
            success: false,
            loading: false,
            handleSubmit: vi.fn()
        });
        render(<ForgetPasswordForm onBackToLogin={mockOnBackToLogin} />);

        // 2. ASSERT (vérification - affichage du message d'erreur d'envoie)
        expect(screen.getByText(/Aucun utilisateur ne correspond à cette adresse e-mail/i)).toBeInTheDocument();
    });

    it("doit afficher l'état de chargement lors de l'envoi", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec état de chargement)
        (useForgetPassword as any).mockReturnValue({
            email: "test@example.com",
            setEmail: vi.fn(),
            error: null,
            success: false,
            loading: true,
            handleSubmit: vi.fn()
        });
        render(<ForgetPasswordForm onBackToLogin={mockOnBackToLogin} />);

        // 2. ASSERT (vérification - affichage de l'état de chargement lors de l'envoi)
        const submitButton = screen.getByRole('button', { name: /progress_activity/i });
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });
});