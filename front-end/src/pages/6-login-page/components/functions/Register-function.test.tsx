// TESTING LIBRARY - utils pour tester les hooks
import { renderHook, act } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - mock de navigation
import { useNavigate } from 'react-router-dom';

// FIREBASE
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// API - mock de la création de document Firestore
import { createUser } from "../../../../api/Create-user";

// COMPOSANT À TESTER
import { useRegister } from './Register-function';

// MOCKS (utilisé pour simuler des dépendances externes)
vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn()
}));

vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    updateProfile: vi.fn(),
}));

vi.mock('../../../../api/Create-user', () => ({
    createUser: vi.fn()
}));

vi.mock('../../../../config/firebase-config', () => ({
    auth: {}
}));

describe("useRegister - Fonction gérant la logique du formulaire d'inscription", () => {
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
    });

    it("doit initialiser les états correctement", () => {
        // 1. ARRANGE (préparation - appel du composant)
        const { result } = renderHook(() => useRegister());

        // 2. ASSERT (vérification - initialisation des états par défaut)
        expect(result.current.username).toBe("");
        expect(result.current.email).toBe("");
        expect(result.current.password).toBe("");
        expect(result.current.confirmPassword).toBe("");
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    it("doit afficher une erreur si les mots de passe ne correspondent pas", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        const { result } = renderHook(() => useRegister());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - saisie de mots de passe différents puis validation)
        act(() => {
            result.current.setPassword("password123");
            result.current.setConfirmPassword("different123");
        });

        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage d'un message d'erreur)
        expect(result.current.error).toBe("Les mots de passe ne correspondent pas.");
        expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
    });

    it("doit afficher une erreur si le mot de passe est trop court", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        const { result } = renderHook(() => useRegister());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - saisie de mots de passe trop courts puis validation)
        act(() => {
            result.current.setPassword("123");
            result.current.setConfirmPassword("123");
        });

        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage d'un message d'erreur)
        expect(result.current.error).toBe("Le mot de passe doit contenir au moins 6 caractères.");
    });

    it("doit créer l'utilisateur et rediriger vers /account en cas de succès", async () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        (createUserWithEmailAndPassword as any).mockResolvedValue({
            user: { uid: "user-id-123" }
        });
        (updateProfile as any).mockResolvedValue(undefined);
        (createUser as any).mockResolvedValue(undefined);

        const { result } = renderHook(() => useRegister());
        const mockEvent = { preventDefault: vi.fn() } as any;

        act(() => {
            result.current.setUsername("JohnDoe");
            result.current.setEmail("john@example.com");
            result.current.setPassword("password123");
            result.current.setConfirmPassword("password123");
        });

        // 2. ACT (agir/action - validation du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - toutes les étapes d'inscription ont été appelées et redirection)
        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), "john@example.com", "password123");
        expect(updateProfile).toHaveBeenCalled();
        expect(createUser).toHaveBeenCalledWith("user-id-123", {
            displayName: "JohnDoe",
            email: "john@example.com",
        });
        expect(mockNavigate).toHaveBeenCalledWith("/account");
        expect(result.current.loading).toBe(false);
    });

    it("doit gérer les erreurs Firebase spécifiques (e-mail déjà utilisé)", async () => {
        // 1. ARRANGE (préparation - initialisation du composant et mock sur une erreur firebase)
        (createUserWithEmailAndPassword as any).mockRejectedValue({
            code: "auth/email-already-in-use"
        });

        const { result } = renderHook(() => useRegister());
        const mockEvent = { preventDefault: vi.fn() } as any;

        act(() => {
            result.current.setPassword("password123");
            result.current.setConfirmPassword("password123");
        });

        // 2. ACT (agir/action - validation du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage d'un message d'erreur)
        expect(result.current.error).toBe("Cette adresse e-mail est déjà utilisée.");
        expect(result.current.loading).toBe(false);
    });
});
