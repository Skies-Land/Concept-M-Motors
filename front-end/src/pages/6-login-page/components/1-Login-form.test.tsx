// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// LOGIQUE - Mock du hook personnalisé
import { useLogin } from './functions/Login-function';

// COMPOSANT À TESTER
import LoginForm from './1-Login-form';

// MOCKS ----------------------------------------------------
vi.mock('./functions/Login-function', () => ({
    useLogin: vi.fn()
}));
// ---------------------------------------------------------

describe("LoginForm - Composant du formulaire de connexion", () => {
    // Props factices pour les callbacks
    const mockOnForgotPassword = vi.fn();

    // Configuration par défaut du mock avant chaque test
    beforeEach(() => {
        vi.clearAllMocks();
        (useLogin as any).mockReturnValue({
            email: "",
            setEmail: vi.fn(),
            password: "",
            setPassword: vi.fn(),
            error: null,
            loading: false,
            handleSubmit: vi.fn((e) => e.preventDefault())
        });
    });

    it("doit afficher les champs du formulaire (E-mail et Mot de passe)", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<LoginForm onForgotPassword={mockOnForgotPassword} />);

        // 2. ASSERT (vérification - affichage des champs E-mail et Mot de passe)
        expect(screen.getByLabelText(/Mot de passe/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/votre-adresse-mail@example.com/i)).toBeInTheDocument();
    });

    it("doit appeler `setEmail` et `setPassword` lors de la saisie", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec `email` et `password` vides)
        const setEmailMock = vi.fn();
        const setPasswordMock = vi.fn();
        (useLogin as any).mockReturnValue({
            email: "",
            setEmail: setEmailMock,
            password: "",
            setPassword: setPasswordMock,
            error: null,
            loading: false,
            handleSubmit: vi.fn()
        });
        render(<LoginForm onForgotPassword={mockOnForgotPassword} />);

        // 2. ACT (agir/action - interaction avec le DOM pour les champs E-mail et Mot de passe)
        fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: 'password123' } });

        // 3. ASSERT (vérification - mise à jour des états lors de la saisie utilisateur)
        expect(setEmailMock).toHaveBeenCalledWith('test@example.com');
        expect(setPasswordMock).toHaveBeenCalledWith('password123');
    });

    it("doit afficher un message d'erreur si présent", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec message d'erreur)
        (useLogin as any).mockReturnValue({
            email: "",
            setEmail: vi.fn(),
            password: "",
            setPassword: vi.fn(),
            error: "Email ou mot de passe incorrect.",
            loading: false,
            handleSubmit: vi.fn()
        });
        render(<LoginForm onForgotPassword={mockOnForgotPassword} />);

        // 2. ASSERT (vérification - affichage d'un message d'erreur)
        expect(screen.getByText(/Email ou mot de passe incorrect/i)).toBeInTheDocument();
    });

    it("doit appeler `onForgotPassword` quand on clique sur le lien dédié", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<LoginForm onForgotPassword={mockOnForgotPassword} />);

        // 2. ACT (agir/action - interaction avec le DOM pour le lien dédié)
        fireEvent.click(screen.getByText(/Mot de passe oublié/i));

        // 3. ASSERT (vérification - appel de la fonction `onForgotPassword`)
        expect(mockOnForgotPassword).toHaveBeenCalledTimes(1);
    });

    it("doit afficher l'état de chargement sur le bouton de connexion", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec état de chargement)
        (useLogin as any).mockReturnValue({
            email: "",
            setEmail: vi.fn(),
            password: "",
            setPassword: vi.fn(),
            error: null,
            loading: true,
            handleSubmit: vi.fn()
        });
        render(<LoginForm onForgotPassword={mockOnForgotPassword} />);

        // 2. ASSERT (vérification - affichage de l'état de chargement sur le bouton de connexion)
        const submitButton = screen.getByRole('button', { name: /progress_activity/i });
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });
});