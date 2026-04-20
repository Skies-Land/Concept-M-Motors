// COMPOSANTS
import Hero from "./components/1-Hero-landing-page";
import Process from "./components/2-Process-landing-page";
import Services from "./components/3-Services-landing-page";
import ShortAbout from "./components/4-Short-about-landing-page";
import CTA from "./components/5-CTA-landing-page";
import Seo from "../../components/seo/Seo"

// Composant principal de la page d'accueil
export default function LandingPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page d'accueil */}
            <Seo
                title="Concept M-Motors - Page d'accueil"
                description="Vente de véhicules, achat et location avec services associés"
            />

            {/* Composants de la page d'accueil */}
            <Hero />
            <Process />
            <Services />
            <ShortAbout />
            <CTA />
        </>
    );
};