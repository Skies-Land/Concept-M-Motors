// COMPOSANTS
import HeroLandingPage from "./components/1-Hero-landing-page";
import ProcessLandingPage from "./components/2-Process-landing-page";
import ServicesLandingPage from "./components/3-Services-landing-page";
import ShortAboutLandingPage from "./components/4-Short-about-landing-page";
import CTALandingPage from "./components/5-CTA-landing-page";
import Seo from "../../components/seo/Seo"

/** Composant principal de la page d'accueil */
export default function LandingPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page d'accueil */}
            <Seo
                title="Concept M-Motors - Page d'accueil"
                description="Vente de véhicules, achat et location avec services associés"
            />

            {/* Composants de la page d'accueil */}
            <HeroLandingPage />
            <ProcessLandingPage />
            <ServicesLandingPage />
            <ShortAboutLandingPage />
            <CTALandingPage />
        </>
    );
};