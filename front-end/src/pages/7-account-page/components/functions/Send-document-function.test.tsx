// TESTING LIBRARY - utils pour tester les hooks
import { renderHook, act } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// LOGIQUE - fonction de contrôle d'upload
import { CheckDocumentUpload } from './Check-document-upload-function';

// FONCTION À TESTER
import { SendDocsAccount } from './Send-document-function';

// MOCKS ----------------------------------------------------
vi.mock('./Check-document-upload-function', () => ({
    CheckDocumentUpload: vi.fn()
}));
// ---------------------------------------------------------

describe("SendDocsAccount - Fonction gérant le processus d'envoi des documents du client", () => {
    
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("doit initialiser tous les documents au statut 'missing'", () => {
        // 1. ARRANGE (préparation - initialisation du hook)
        const { result } = renderHook(() => SendDocsAccount());

        // 2. ASSERT (vérification - les statuts sont à 'missing')
        expect(result.current.docs.identity.status).toBe('missing');
        expect(result.current.docs.address.status).toBe('missing');
        expect(result.current.docs.salary.status).toBe('missing');
        expect(result.current.docs.license.status).toBe('missing');
    });

    it("doit mettre à jour le statut d'un document après un upload réussi", async () => {
        // 1. ARRANGE (préparation - mock du succès de `CheckDocumentUpload`)
        (CheckDocumentUpload as any).mockResolvedValue({
            success: true,
            fileData: "data:image/png;base64,xxxx"
        });

        const { result } = renderHook(() => SendDocsAccount());
        const mockFile = new File(["content"], "test.png", { type: "image/png" });

        // 2. ACT (agir/action - déclenchement manuel du changement de fichier)
        // simulation de l'appel interne de `triggerUpload` qui définit la catégorie
        act(() => {
            result.current.triggerUpload('identity');
        });

        // simulation de l'événement `onChange` de l'input
        await act(async () => {
            const input = result.current.renderInput;
            const event = { target: { files: [mockFile] } } as any;
            await (input.props as any).onChange(event);
        });

        // 3. ASSERT (vérification - le statut est passé à 'pending')
        expect(result.current.docs.identity.status).toBe('pending');
        expect(result.current.docs.identity.fileData).toBe("data:image/png;base64,xxxx");
    });

    it("ne doit pas mettre à jour le statut si le contrôle échoue", async () => {
        // 1. ARRANGE (préparation - initialisation du composant avec le mock de l'échec de contrôle)
        (CheckDocumentUpload as any).mockResolvedValue({
            success: false,
            error: "Fichier trop gros"
        });
        
        // Mock de window.alert
        const spyAlert = vi.spyOn(window, 'alert').mockImplementation(() => {});

        const { result } = renderHook(() => SendDocsAccount());
        const mockFile = new File(["too big"], "huge.png", { type: "image/png" });

        // 2. ACT (agir/action - déclenchement manuel du changement de fichier)
        // simulation de l'appel interne de `triggerUpload` qui définit la catégorie
        act(() => {
            result.current.triggerUpload('identity');
        });

        // simulation de l'événement `onChange` de l'input
        await act(async () => {
            const input = result.current.renderInput;
            await (input.props as any).onChange({ target: { files: [mockFile] } });
        });

        // 3. ASSERT (vérification - statut inchangé et alerte affichée)
        expect(result.current.docs.identity.status).toBe('missing');
        expect(spyAlert).toHaveBeenCalledWith("Erreur : Fichier trop gros");
        
        spyAlert.mockRestore();
    });
});