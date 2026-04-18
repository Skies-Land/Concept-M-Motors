// COMPOSANTS
import Seo from "../../components/seo/Seo";
import ErrorContent from "./components/Error-content";

// Composant principal de la page d'erreur 404
export default function ErrorPageView() {
    return (
        <>
        {/* Composant SEO pour définir les métadonnées de la page d'erreur 404 */}
        <Seo
            title="Concept M-Motors - Page d'erreur 404"
            description="Page d'erreur 404"
        />

        {/* Composant de contenu de la page d'erreur 404 */}
        <ErrorContent />
        </>
    );
}