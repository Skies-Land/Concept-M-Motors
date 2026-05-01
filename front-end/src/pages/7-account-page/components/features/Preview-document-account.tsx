// ICÔNE
import { FaRegFilePdf } from "react-icons/fa6";

/** Interface pour définir le document à afficher */
interface PreviewDocumentProps {
    fileData?: string; // Chaîne Base64 pour l'aperçu
    defaultImage: string; // Image à afficher par défaut si aucun document n'est chargé
}

/** Fonction permettant de prévisualiser les documents envoyés par l'utilisateur */
export default function PreviewDocument({ fileData, defaultImage }: PreviewDocumentProps) {
    // Si c'est une image (JPG, PNG)
    if (fileData && fileData.startsWith('data:image')) {
        return (
            <div className="w-40 h-28 bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-inner flex items-center justify-center">
                <img src={fileData} alt="Aperçu du document" className="max-w-full max-h-full object-contain" />
            </div>
        );
    }

    // Si c'est un PDF
    if (fileData && fileData.startsWith('data:application/pdf')) {
        return (
            <div className="w-40 h-28 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 shadow-inner">
                <FaRegFilePdf className="text-6xl text-primary" />
            </div>
        );
    }

    // Par défaut (placeholder avec image spécifique au type de document)
    return (
        <div className="w-40 h-28 bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-inner flex items-center justify-center">
            <img src={defaultImage} alt="Illustration du document" className="max-w-full max-h-full object-contain" />
        </div>
    );
}
