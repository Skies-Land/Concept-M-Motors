// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// LOGIQUE - Mock du hook personnalisé
import { useRegister } from './functions/Register-function';

// COMPOSANT À TESTER
import RegisterForm from './2-Register-form';

// MOCKS ----------------------------------------------------
vi.mock('./functions/Register-function', () => ({
    useRegister: vi.fn()
}));
// ---------------------------------------------------------

describe("RegisterForm - Composant du formulaire d'inscription", () => {
    
    // Configuration par défaut du mock avant chaque test
    beforeEach(() => {
        vi.clearAllMocks();
        (useRegister as any).mockReturnValue({
            username: "",
            setUsername: vi.fn(),
            email: "",
            setEmail: vi.fn(),
            password: "",
            setPassword: vi.fn(),
            confirmPassword: "",
            setConfirmPassword: vi.fn(),
            error: null,
            loading: false,
            handleSubmit: vi.fn((e) => e.preventDefault())
        });
    });

    it("doit afficher les champs du formulaire d'inscription", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<RegisterForm />);

        // 2. ASSERT (vérification - affichage des champs du formulaire d'inscription)
        expect(screen.getByLabelText(/Nom d'utilisateur/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^E-mail$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Mot de passe$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirmer le mot de passe/i)).toBeInTheDocument();
    });

    it("doit appeler les fonctions de mise à jour lors de la saisie", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec `username` et `email` vides)
        const setUsernameMock = vi.fn();
        const setEmailMock = vi.fn();
        (useRegister as any).mockReturnValue({
            username: "",
            setUsername: setUsernameMock,
            email: "",
            setEmail: setEmailMock,
            password: "",
            setPassword: vi.fn(),
            confirmPassword: "",
            setConfirmPassword: vi.fn(),
            error: null,
            loading: false,
            handleSubmit: vi.fn()
        });
        render(<RegisterForm />);

        // 2. ACT (agir/action - interaction avec le DOM pour les champs `username` et `email`)
        fireEvent.change(screen.getByLabelText(/Nom d'utilisateur/i), { target: { value: 'JohnDoe' } });
        fireEvent.change(screen.getByLabelText(/^E-mail$/i), { target: { value: 'john@example.com' } });

        // 3. ASSERT (vérification - mise à jour des états lors de la saisie utilisateur)
        expect(setUsernameMock).toHaveBeenCalledWith('JohnDoe');
        expect(setEmailMock).toHaveBeenCalledWith('john@example.com');
    });

    it("doit afficher un message d'erreur", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec message d'erreur)
        (useRegister as any).mockReturnValue({
            username: "",
            setUsername: vi.fn(),
            email: "",
            setEmail: vi.fn(),
            password: "",
            setPassword: vi.fn(),
            confirmPassword: "",
            setConfirmPassword: vi.fn(),
            error: "Le mot de passe ou l'email ne correspondent pas.",
            loading: false,
            handleSubmit: vi.fn()
        });
        render(<RegisterForm />);

        // 2. ASSERT (vérification - affichage d'un message d'erreur)
        expect(screen.getByText(/Le mot de passe ou l'email ne correspondent pas./i)).toBeInTheDocument();
    });

    it("doit afficher l'état de chargement sur le bouton de création de compte", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec état de chargement)
        (useRegister as any).mockReturnValue({
            username: "",
            setUsername: vi.fn(),
            email: "",
            setEmail: vi.fn(),
            password: "",
            setPassword: vi.fn(),
            confirmPassword: "",
            setConfirmPassword: vi.fn(),
            error: null,
            loading: true,
            handleSubmit: vi.fn()
        });
        render(<RegisterForm />);

        // 2. ASSERT (vérification - affichage de l'état de chargement sur le bouton de création de compte)
        const submitButton = screen.getByRole('button', { name: /progress_activity/i });
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });
});