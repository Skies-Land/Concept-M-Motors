// COMPOSANTS
import Seo from "../../components/seo/Seo"
import HeroAbout from "./components/Hero-about"
import OurFigure from "./components/Our-figure";
import OurVision from "./components/Our-vision";

// Composant principal de la page à propos
export default function AboutPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page à propos */}
            <Seo
                title="Concept M-Motors - À propos"
                description="Découvrez l'histoire de Concept M-Motors, votre concessionnaire automobile de confiance depuis plus de 30 ans."
            />

            {/* Composants de la page à propos */}
            <HeroAbout />
            <OurFigure />
            <OurVision />
        </>
    );
};