/** Interface pour gérer la réponse de l'upload du document */
export interface DocumentUploadResponse {
    success: boolean;
    error?: string;
    fileData?: string; 
    fileName?: string;
}

/** Fonction permettant de contrôler la validité du fichier envoyé par l'utilisateur 
 * 
 * - Vérifie la taille du fichier (Max 5MB)
 * - Vérifie le type de fichier (PDF, JPG, PNG)
 * - Convertit le fichier en Base64 pour stockage local
*/
export const CheckDocumentUpload = (file: File): Promise<DocumentUploadResponse> => {
    // Vérification de la taille du fichier (Max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        return Promise.resolve({ success: false, error: "Le fichier dépasse la taille maximale autorisée (5MB)." });
    }

    // Vérification du type de fichier
    const acceptedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!acceptedTypes.includes(file.type)) {
        return Promise.resolve({ success: false, error: "Type de fichier non accepté. Veuillez uploader un PDF, JPG ou PNG." });
    }

    // Conversion du fichier en Base64 pour stockage local
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result as string;

            const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const docId = `doc_${Date.now()}_${safeName}`;

            try {
                localStorage.setItem(docId, base64String);
                resolve({ 
                    success: true, 
                    fileData: base64String, 
                    fileName: file.name 
                });
            } catch (e) {
                // Erreur lors de la sauvegarde locale (quota dépassé ou erreur inattendue)
                resolve({ success: false, error: "Erreur lors de la sauvegarde locale (quota dépassé ou erreur inattendue)." });
            }
        };

        reader.onerror = () => {
            resolve({ success: false, error: "Erreur lors de la lecture du fichier." });
        };

        reader.readAsDataURL(file);
    });
};
