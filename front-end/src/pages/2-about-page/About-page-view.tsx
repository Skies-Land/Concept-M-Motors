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
                title="À Propos | M-Motors - Excellence Automobile"
                description="L'histoire de M-Motors : une vision redéfinie de l'automobile d'exception. Découvrez notre expertise, nos valeurs et notre engagement envers la qualité."
            />

            {/* Composants de la page à propos */}
            <HeroAboutPage />
            <OurFigureAboutPage />
            <OurVisionAboutPage />
            <FAQAboutPage />
        </>
    );
};