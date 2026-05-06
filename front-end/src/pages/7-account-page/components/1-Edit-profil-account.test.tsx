// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// CONTEXTE - Mock du contexte d'authentification
import { useAuth } from '../../../context/AuthUserContext';

// LOGIQUE
import { useEditProfilAccount } from './functions/Edit-profil-account-function';

// COMPOSANT À TESTER
import EditProfilAccount from './1-Edit-profil-account';

// MOCKS ----------------------------------------------------
vi.mock('../../../context/AuthUserContext', () => ({
    useAuth: vi.fn()
}));

vi.mock('./functions/Edit-profil-account-function', () => ({
    useEditProfilAccount: vi.fn()
}));
// ---------------------------------------------------------

describe("EditProfilAccount - Composant d'édition du profil utilisateur", () => {
    // Données utilisateur factices
    const mockAuthUser = {
        id: "123",
        displayName: "JohnPseudo",
        email: "john@example.com",
        creationDate: new Date("2024-01-01"),
        firstName: "John",
        lastName: "Doe",
        address: "123 Rue de la Paix",
        phoneNumber: "0601020304"
    };

    // Configuration par défaut des mocks
    beforeEach(() => {
        vi.clearAllMocks();
        
        (useAuth as any).mockReturnValue({
            authUser: mockAuthUser
        });

        (useEditProfilAccount as any).mockReturnValue({
            formData: {
                displayName: "JohnPseudo",
                firstName: "John",
                lastName: "Doe",
                address: "123 Rue de la Paix",
                phoneNumber: "0601020304"
            },
            loading: false,
            error: null,
            success: null,
            handleChange: vi.fn(),
            handleSubmit: vi.fn((e) => e.preventDefault())
        });
    });

    it("doit afficher les informations de l'utilisateur dans les champs", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<EditProfilAccount />);

        // 2. ASSERT (vérification - affichage des données utilisateur)
        expect(screen.getByLabelText(/Nom d'utilisateur/i)).toHaveValue("JohnPseudo");
        expect(screen.getByLabelText(/Prénom/i)).toHaveValue("John");
        expect(screen.getByLabelText(/^Nom$/i)).toHaveValue("Doe");
        expect(screen.getByLabelText(/Email/i)).toHaveValue("john@example.com");
        expect(screen.getByLabelText(/Adresse postale/i)).toHaveValue("123 Rue de la Paix");
        expect(screen.getByLabelText(/Téléphone/i)).toHaveValue("0601020304");
    });

    it("doit afficher la date d'inscription formatée", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<EditProfilAccount />);

        // 2. ASSERT (vérification - affichage de la date d'inscription)
        expect(screen.getByText(/Membre depuis janv. 2024/i)).toBeInTheDocument();
    });

    it("doit appeler `handleChange` lors de la saisie", () => {
        // 1. ARRANGE (préparation - initialisation du composant et récupération du mock `handleChange`)
        const { handleChange } = useEditProfilAccount();
        render(<EditProfilAccount />);

        // 2. ACT (agir/action - simulation de saisie dans le champ prénom)
        const input = screen.getByLabelText(/Prénom/i);
        fireEvent.change(input, { target: { value: 'Jonathan', name: 'firstName' } });

        // 3. ASSERT (vérification - `handleChange` a été appelé)
        expect(handleChange).toHaveBeenCalled();
    });

    it("doit afficher l'état de chargement sur le bouton", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec `loading: true`)
        (useEditProfilAccount as any).mockReturnValue({
            formData: {},
            loading: true,
            error: null,
            success: null,
            handleChange: vi.fn(),
            handleSubmit: vi.fn()
        });

        render(<EditProfilAccount />);

        // 2. ASSERT (vérification - affichage de l'état de chargement)
        expect(screen.getByText(/Sauvegarde en cours.../i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it("doit afficher un message d'erreur si la mise à jour échoue", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec un message d'erreu)
        (useEditProfilAccount as any).mockReturnValue({
            formData: {},
            loading: false,
            error: "Erreur lors de la sauvegarde",
            success: null,
            handleChange: vi.fn(),
            handleSubmit: vi.fn()
        });

        render(<EditProfilAccount />);

        // 2. ASSERT (vérification - affichage du message d'erreur)
        expect(screen.getByText(/Erreur lors de la sauvegarde/i)).toBeInTheDocument();
    });

    it("doit afficher un message de succès après une mise à jour réussie", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec un message de succès)
        (useEditProfilAccount as any).mockReturnValue({
            formData: {},
            loading: false,
            error: null,
            success: "Profil mis à jour !",
            handleChange: vi.fn(),
            handleSubmit: vi.fn()
        });

        render(<EditProfilAccount />);

        // 2. ASSERT (vérification - affichage du message de succès)
        expect(screen.getByText(/Profil mis à jour !/i)).toBeInTheDocument();
    });
});