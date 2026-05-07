// COMPOSANTS
import Container from "../../components/design-system/Container";
import Seo from "../../components/seo/Seo";
import HeroContactPage from "./components/1-Hero-contact-page";
import FormContactPage from "./components/2-Form-contact-page";

/** Composant principal de la page de contact */
export default function ContactPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page de contact */}
            <Seo
                title="Contactez M-Motors | Expertise et Accompagnement"
                description="Une question ou un projet automobile ? Contactez l'équipe de M-Motors pour un accompagnement personnalisé et une expertise de haut niveau."
            />

            <Container>
                {/* Composants de contenu de la page de contact */}
                <HeroContactPage />
                <FormContactPage />
            </Container>
        </>
    )
}