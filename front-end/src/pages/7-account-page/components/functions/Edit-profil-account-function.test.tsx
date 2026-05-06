// TESTING LIBRARY - utils pour tester les hooks
import { renderHook, act } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// CONTEXTE - contexte d'authentification
import { useAuth } from '../../../../context/AuthUserContext';

// API - mise à jour utilisateur
import { updateUser } from '../../../../api/Update-user';

// FONCTION À TESTER
import { useEditProfilAccount } from './Edit-profil-account-function';

// MOCKS ----------------------------------------------------
vi.mock('../../../../context/AuthUserContext', () => ({
    useAuth: vi.fn()
}));

vi.mock('../../../../api/Update-user', () => ({
    updateUser: vi.fn()
}));
// ---------------------------------------------------------

describe("useEditProfilAccount - Fonction de gestion de la mise à jour du profil", () => {
    
    const mockAuthUser = {
        id: "123",
        displayName: "John",
        firstName: "John",
        lastName: "Doe",
        address: "123 Street",
        phoneNumber: "0600000000"
    };

    beforeEach(() => {
        vi.clearAllMocks();
        (useAuth as any).mockReturnValue({ authUser: mockAuthUser });
    });

    it("doit initialiser le formulaire avec les données de l'utilisateur", () => {
        // 1. ARRANGE (préparation - initialisation du hook avec données utilisateur)
        const { result } = renderHook(() => useEditProfilAccount());

        // 2. ASSERT (vérification - données initiales chargées)
        expect(result.current.formData.displayName).toBe("John");
        expect(result.current.formData.lastName).toBe("Doe");
    });

    it("doit mettre à jour les champs lors de l'appel à `handleChange`", () => {
        // 1. ARRANGE (préparation - initialisation du hook avec données utilisateur)
        const { result } = renderHook(() => useEditProfilAccount());

        // 2. ACT (agir/action - simulation de changement d'input)
        act(() => {
            result.current.handleChange({
                target: { name: "firstName", value: "Jean" }
            } as any);
        });

        // 3. ASSERT (vérification - données mises à jour)
        expect(result.current.formData.firstName).toBe("Jean");
    });

    it("doit appeler `updateUser` et afficher un succès lors de la soumission", async () => {
        // 1. ARRANGE (préparation - initialisation du hook avec données utilisateur et mock du succès API)
        (updateUser as any).mockResolvedValue({});
        const { result } = renderHook(() => useEditProfilAccount());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - appel API et message de succès)
        expect(updateUser).toHaveBeenCalledWith("123", result.current.formData);
        expect(result.current.success).toBe("Vos informations ont été mises à jour avec succès.");
        expect(result.current.loading).toBe(false);
    });

    it("doit gérer les erreurs de mise à jour", async () => {
        // 1. ARRANGE (préparation - initialisation du hook avec données utilisateur et mock de l'erreur API)
        (updateUser as any).mockRejectedValue(new Error("Erreur réseau"));
        const { result } = renderHook(() => useEditProfilAccount());
        const mockEvent = { preventDefault: vi.fn() } as any;

        // 2. ACT (agir/action - soumission du formulaire)
        await act(async () => {
            await result.current.handleSubmit(mockEvent);
        });

        // 3. ASSERT (vérification - affichage du message d'erreur)
        expect(result.current.error).toBe("Erreur réseau");
        expect(result.current.success).toBeNull();
    });
});