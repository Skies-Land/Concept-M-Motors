// COMPOSANTS
import Seo from "../../components/seo/Seo";
import ErrorContent from "./components/1-Content-error-page";

/** Composant principal de la page d'erreur 404 */
export default function ErrorPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page d'erreur 404 */}
            <Seo
                title="Page Introuvable (404) | M-Motors"
                description="Désolé, la page que vous recherchez est introuvable. Retournez à l'accueil pour découvrir notre catalogue de véhicules d'exception."
            />

            {/* Composant de contenu de la page d'erreur 404 */}
            <ErrorContent />
        </>
    );
}