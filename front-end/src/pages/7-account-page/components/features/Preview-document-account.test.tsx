// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// FEATURE À TESTER
import PreviewDocument from './Preview-document-account';

describe("PreviewDocument - Fonction permettant d'afficher l'aperçu d'un document", () => {
    // Constante pour l'image par défaut
    const defaultImage = "path/to/default.png";

    it("affiche l'image par défaut quand aucun document n'est chargé", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une image par défaut)
        render(<PreviewDocument defaultImage={defaultImage} />);

        // 2. ASSERT (vérification - affichage de l'image par défaut)
        const img = screen.getByAltText(/Illustration du document/i);
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', defaultImage);
    });

    it("affiche l'aperçu du document quand une image est chargée", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec une image en base64)
        const base64Image = "data:image/png;base64,xxxx";
        render(<PreviewDocument fileData={base64Image} defaultImage={defaultImage} />);

        // 2. ASSERT (vérification - affichage de l'aperçu de l'image)
        const img = screen.getByAltText(/Aperçu du document/i);
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', base64Image);
    });

    it("affiche l'icône PDF quand un document PDF est chargé", () => {
        // 1. ARRANGE (préparation - initialisation du composant avec un PDF en base64)
        const base64Pdf = "data:application/pdf;base64,xxxx";
        const { container } = render(<PreviewDocument fileData={base64Pdf} defaultImage={defaultImage} />);

        // 2. ASSERT (vérification - affichage de l'icône PDF via react-icons)
        // FaRegFilePdf est rendu en tant que SVG
        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
});