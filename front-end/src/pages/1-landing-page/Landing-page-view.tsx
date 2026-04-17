// COMPOSANTS
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import ShortAbout from "./components/ShortAbout";
import CTA from "./components/CTA";
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