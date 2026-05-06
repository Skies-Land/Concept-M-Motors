// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// FONCTION À TESTER
import { CheckDocumentUpload } from './Check-document-upload-function';

describe("CheckDocumentUpload - Contrôle de la validité du fichier envoyé", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it("doit refuser un fichier trop volumineux (> 5MB)", async () => {
        // 1. ARRANGE (préparation - fichier de 6MB)
        const largeFile = new File(["x".repeat(6 * 1024 * 1024)], "test.png", { type: "image/png" });

        // 2. ACT (agir/action - appel de la fonction de contrôle)
        const result = await CheckDocumentUpload(largeFile);

        // 3. ASSERT (vérification - échec avec message d'erreur)
        expect(result.success).toBe(false);
        expect(result.error).toContain("taille maximale autorisée");
    });

    it("doit refuser un type de fichier non supporté", async () => {
        // 1. ARRANGE (préparation - fichier texte `.txt`)
        const textFile = new File(["content"], "test.txt", { type: "text/plain" });

        // 2. ACT (agir/action - appel de la fonction de contrôle)
        const result = await CheckDocumentUpload(textFile);

        // 3. ASSERT (vérification - affiche un message d'erreur)
        expect(result.success).toBe(false);
        expect(result.error).toContain("Type de fichier non accepté");
    });

    it("doit accepter et convertir un fichier valide (PNG)", async () => {
        // 1. ARRANGE (préparation - petit fichier PNG)
        const validFile = new File(["valid content"], "avatar.png", { type: "image/png" });

        // 2. ACT (agir/action - appel de la fonction de contrôle)
        const result = await CheckDocumentUpload(validFile);

        // 3. ASSERT (vérification - succès et données base64)
        expect(result.success).toBe(true);
        expect(result.fileData).toContain("data:image/png;base64");
        expect(result.fileName).toBe("avatar.png");
        
        // Vérification du stockage local
        expect(localStorage.length).toBe(1);
    });

    it("doit accepter et convertir un fichier PDF", async () => {
        // 1. ARRANGE (préparation - fichier PDF)
        const pdfFile = new File(["pdf content"], "devis.pdf", { type: "application/pdf" });

        // 2. ACT (agir/action - appel de la fonction de contrôle)
        const result = await CheckDocumentUpload(pdfFile);

        // 3. ASSERT (vérification - succès et données base64)
        expect(result.success).toBe(true);
        expect(result.fileData).toContain("data:application/pdf;base64");
    });
});