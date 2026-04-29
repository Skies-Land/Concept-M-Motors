// COMPOSANTS
import Seo from "../../components/seo/Seo"
import HeroAboutPage from "./components/1-Hero-about-page"
import OurFigureAboutPage from "./components/2-Our-figure-about-page";
import OurVisionAboutPage from "./components/3-Our-vision-about-page";
import FAQAboutPage from "./components/4-FAQ-about-page";

/** Composant principal de la page à propos */
export default function AboutPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page à propos */}
            <Seo
                title="Concept M-Motors - À propos"
                description="Découvrez l'histoire de Concept M-Motors, votre concessionnaire automobile de confiance depuis plus de 30 ans."
            />

            {/* Composants de la page à propos */}
            <HeroAboutPage />
            <OurFigureAboutPage />
            <OurVisionAboutPage />
            <FAQAboutPage />
        </>
    );
};