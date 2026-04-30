// DÉPENDANCES
import React, { useState, useRef } from "react";

// LOGIQUE
import { CheckDocumentUpload } from "./Check-document-upload-function";

/** Fonction permettant de gérer le processus d'envoi des documents du client */
export const SendDocsAccount = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);
    
    // État pour gérer les documents de chaque catégorie
    const [docs, setDocs] = useState<{ [key: string]: { status: 'accepted' | 'pending' | 'rejected' | 'missing', fileData?: string } }>({
        identity: { status: 'missing' }, 
        address: { status: 'missing' },  
        salary: { status: 'missing' },   
        license: { status: 'missing' },  
    });

    /** Fonction permettant de gérer l'événement de sélection de fichier */
    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && currentCategory) {
            const result = await CheckDocumentUpload(file);
            if (result.success) {
                setDocs(prev => ({
                    ...prev,
                    [currentCategory]: { 
                        status: 'pending', 
                        fileData: result.fileData 
                    }
                }));
            } else {
                alert(`Erreur : ${result.error}`);
            }
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    /** Fonction permettant de déclencher l'upload du document */
    const triggerUpload = (category: string) => {
        setCurrentCategory(category);
        fileInputRef.current?.click();
    };

    /** Élément HTML Input caché, configuré avec sa logique interne */
    const renderInput = (
        <input 
            key="hidden-file-input"
            type="file" 
            className="hidden" 
            ref={fileInputRef} 
            accept=".pdf,.jpg,.jpeg,.png" 
            onChange={onFileChange} 
        />
    );

    return {
        docs,
        triggerUpload,
        renderInput
    };
};
