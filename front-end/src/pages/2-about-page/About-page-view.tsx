// COMPONENTS
import Seo from "../../components/seo/Seo"
import HeroAbout from "./components/Hero-about"
import OurFigure from "./components/Our-figure";
import OurVision from "./components/Our-vision";

// Composant principal de la page à propos
export default function AboutPageView() {
    return (
        <>
            <Seo
                title="Concept M-Motors - À propos"
                description="Découvrez l'histoire de Concept M-Motors, votre concessionnaire automobile de confiance depuis plus de 30 ans."
            />
            <HeroAbout />
            <OurFigure />
            <OurVision />
        </>
    );
};