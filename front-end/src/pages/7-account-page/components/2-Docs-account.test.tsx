// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen, fireEvent } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi, beforeEach } from 'vitest';

// LOGIQUE
import { SendDocsAccount } from './functions/Send-document-function';

// COMPOSANT À TESTER
import DocsAccount from './2-Docs-account';

// MOCKS ----------------------------------------------------
vi.mock('./functions/Send-document-function', () => ({
    SendDocsAccount: vi.fn()
}));
// Mock des images pour éviter les erreurs d'import
vi.mock("../../../assets/png/IMGDoc-1.png", () => ({ default: "doc1.png" }));
vi.mock("../../../assets/png/IMGDoc-2.png", () => ({ default: "doc2.png" }));
vi.mock("../../../assets/png/IMGDoc-3.png", () => ({ default: "doc3.png" }));
vi.mock("../../../assets/png/IMGDoc-4.png", () => ({ default: "doc4.png" }));
// ---------------------------------------------------------

describe("DocsAccount - Composant de gestion des documents client", () => {
    // Configuration par défaut du mock
    beforeEach(() => {
        vi.clearAllMocks();
        
        (SendDocsAccount as any).mockReturnValue({
            docs: {
                identity: { status: 'missing' },
                address: { status: 'missing' },
                salary: { status: 'missing' },
                license: { status: 'missing' }
            },
            triggerUpload: vi.fn(),
            renderInput: <input data-testid="hidden-input" type="file" style={{ display: 'none' }} />
        });
    });

    it("doit afficher les quatre catégories de documents", () => {
        // 1. ARRANGE (préparation - initialisation du composant)
        render(<DocsAccount />);

        // 2. ASSERT (vérification - affichage des quatre catégories)
        expect(screen.getByText(/Pièce d'identité/i)).toBeInTheDocument();
        expect(screen.getByText(/Justificatif de domicile/i)).toBeInTheDocument();
        expect(screen.getByText(/Bulletins de salaire/i)).toBeInTheDocument();
        expect(screen.getByText(/Permis de conduire/i)).toBeInTheDocument();
    });

    it("doit appeler `triggerUpload` lors du clic sur un bouton d'envoi", () => {
        // 1. ARRANGE (préparation - initialisation du composant et récupération du mock `triggerUpload`)
        const { triggerUpload } = SendDocsAccount();
        render(<DocsAccount />);

        // 2. ACT (agir/action - simulation de clic sur le bouton d'envoi)
        const buttons = screen.getAllByText(/Envoyer votre document/i);
        // Premier boutton correspondant à la pièce d'identité (docs.identity: { status: 'missing' })
        fireEvent.click(buttons[0]);

        // 3. ASSERT (vérification - `triggerUpload` a été appelé)
        expect(triggerUpload).toHaveBeenCalledWith('identity');
    });

    it("doit afficher l'état 'En cours de traitement' quand un document est chargé", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec un document en cours de traitement)
        (SendDocsAccount as any).mockReturnValue({
            docs: {
                identity: { status: 'pending', fileData: 'base64data' },
                address: { status: 'missing' },
                salary: { status: 'missing' },
                license: { status: 'missing' }
            },
            triggerUpload: vi.fn(),
            renderInput: <input data-testid="hidden-input" type="file" style={{ display: 'none' }} />
        });

        render(<DocsAccount />);

        // 2. ASSERT (vérification - affichage de l'état 'En cours de traitement')
        expect(screen.getByText(/En cours de traitement/i)).toBeInTheDocument();
        const pendingButton = screen.getByRole('button', { name: /En cours de traitement/i });
        expect(pendingButton).toBeDisabled();
    });

    it("doit afficher l'indicateur de validation quand un document est validé", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec un document validé)
        (SendDocsAccount as any).mockReturnValue({
            docs: {
                identity: { status: 'accepted', fileData: 'base64data' },
                address: { status: 'missing' },
                salary: { status: 'missing' },
                license: { status: 'missing' }
            },
            triggerUpload: vi.fn(),
            renderInput: null
        });

        render(<DocsAccount />);

        // 2. ASSERT (vérification - affichage de l'indicateur de validation)
        expect(screen.getByText(/Validé/i)).toBeInTheDocument();
    });
});
