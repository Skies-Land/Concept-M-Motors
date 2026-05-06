// TESTING LIBRARY - utils pour tester les hooks
import { renderHook, act } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// FIREBASE
import { sendPasswordResetEmail } from "firebase/auth";

// FONCTION À TESTER
import { useForgetPassword } from './Forget-password-function';

// MOCKS ----------------------------------------------------
// pour simuler des dépendances externes
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(),
    sendPasswordResetEmail: vi.fn(),
}));

vi.mock('../../../../config/firebase-config', () => ({
    auth: {}
}));
// ---------------------------------------------------------

describe("useForgetPassword - Fonction gérant la logique du formulaire d'oubli de mot de passe", () => {
    
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("doit initialiser les états correctement", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        const { result } = renderHook(() => useForgetPassword());

        // 2. ASSERT (vérification - état initial)
        expect(result.current.email).toBe("");
        expect(result.current.error).toBeNull();
        expect(result.current.success).toBe(false);
        expect(result.current.loading).toBe(false);
    });

    it("doit mettre à jour l'email lors de la saisie", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        const { result } = renderHook(() => useForgetPassword());

        // 2. ACT (agir/action - mise à jour de l'email)
        act(() => {
            result.current.setEmail("test@example.com");
        });

        // 3. ASSERT (vérification - affichage de l'email)
        expect(result.current.email).toBe("test@example.com");
    });

    it("doit envoyer l'e-mail de réinitialisation avec succès", async () => {
        // 1. ARRANGE (préparation - initialisation du composant et mock succès)
        (sendPasswordResetEmail as any).mockResolvedValue(undefined);
        const { result } = renderHook(() => useForgetPassword());
        const mockEvent = { preventDefault: vi.fn() } as any;

        act(() => {
            result.current.setEmail("test@example.com");
        });

        // 2. ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - envoie de l'email et états)
        expect(sendPasswordResetEmail).toHaveBeenCalledWith(expect.anything(), "test@example.com");
        expect(result.current.success).toBe(true);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    it("doit gérer l'erreur utilisateur non trouvé", async () => {
        // 1. ARRANGE (préparation - initialisation du composant et mock erreur firebase)
        (sendPasswordResetEmail as any).mockRejectedValue({
            code: "auth/user-not-found"
        });
        const { result } = renderHook(() => useForgetPassword());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage d'un message d'erreur)
        expect(result.current.error).toBe("Aucun utilisateur ne correspond à cette adresse e-mail.");
        expect(result.current.success).toBe(false);
        expect(result.current.loading).toBe(false);
    });

    it("doit gérer une erreur générique d'envoi", async () => {
        // 1. ARRANGE (préparation - initialisation du composant et mock pour une autre erreur)
        (sendPasswordResetEmail as any).mockRejectedValue({
            code: "auth/other-error"
        });
        const { result } = renderHook(() => useForgetPassword());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage d'un message d'erreur)
        expect(result.current.error).toBe("Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.");
        expect(result.current.success).toBe(false);
    });
});
