// TESTING LIBRARY - utils pour tester les hooks
import { renderHook, act } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// REACT ROUTER - mock de navigation
import { useNavigate } from 'react-router-dom';

// FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";

// FONCTION À TESTER
import { useLogin } from './Login-function';

// MOCKS ----------------------------------------------------
// pour simuler des dépendances externes
vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn()
}));

vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
}));

vi.mock('../../../../config/firebase-config', () => ({
    auth: {}
}));
// ---------------------------------------------------------

describe("useLogin - Fonction gérant la logique du formulaire de connexion", () => {
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
    });

    it("doit initialiser les états correctement", () => {
        // 1. ARRANGE (préparation - appel du composant)
        const { result } = renderHook(() => useLogin());

        // 2. ASSERT (vérification - initialisation des états par défaut)
        expect(result.current.email).toBe("");
        expect(result.current.password).toBe("");
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    it("doit mettre à jour l'email et le mot de passe", () => {
        // 1. ARRANGE (préparation - appel du composant)
        const { result } = renderHook(() => useLogin());

        // 2. ACT (agir/action - mise à jour des états)
        act(() => {
            result.current.setEmail("test@example.com");
            result.current.setPassword("password123");
        });

        // 3. ASSERT (vérification - affichage des nouvelles valeurs)
        expect(result.current.email).toBe("test@example.com");
        expect(result.current.password).toBe("password123");
    });

    it("doit rediriger vers /account après une connexion réussie", async () => {
        // 1. ARRANGE (préparation - initialisation du composant et mock d'une connexion réussie)
        (signInWithEmailAndPassword as any).mockResolvedValue({ user: { uid: "123" } });
        const { result } = renderHook(() => useLogin());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2.1 ACT (agir/action - mise à jour des états)
        act(() => {
            result.current.setEmail("test@example.com");
            result.current.setPassword("password123");
        });

        // 2.2 ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - appel à firebase et redirection vers l'espace client)
        expect(signInWithEmailAndPassword).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("/account");
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    it("doit afficher un message d'erreur en cas d'échec de connexion", async () => {
        // 1. ARRANGE (préparation - initialisation du composant et mock d'un échec de connexion)
        (signInWithEmailAndPassword as any).mockRejectedValue(new Error("Auth failed"));
        const { result } = renderHook(() => useLogin());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage du message d'erreur et pas de redirection)
        expect(result.current.error).toBe("Email ou mot de passe incorrect.");
        expect(result.current.loading).toBe(false);
        expect(mockNavigate).not.toHaveBeenCalled();
    });
});
