// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography";

// IMPORT
import imageHeroAboutPage from "../../../assets/IMG-Hero-about-page.png"

/** Composant servant à afficher la section Hero correspondant à la page à propos */
export default function HeroAboutPage() {
    return (
        <section className="relative h-[870px] flex items-center justify-center overflow-hidden" data-pg-name="Section hero de la page à propos">
            {/* Image de fond et dégradé */}
            <div className="absolute inset-0 z-0">
                <img 
                    alt="Une voiture de sport noire de luxe dans un garage à l'architecture minimaliste" 
                    className="w-full h-full object-cover opacity-40" 
                    data-alt="Plan cinématographique sur une supercar au design épuré, noir mat, dans un décor industriel sombre et minimaliste" 
                    src={imageHeroAboutPage}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
            </div>

            {/* Contenu de la section Hero */}
            <div className="relative z-10 text-center max-w-5xl px-6">
                <Typography variant="label-lg" color="primary" className="mb-6">
                    Établi en 1994
                </Typography>
                <Typography variant="display-lg" component="h1" color="on-surface" className="italic mb-8 md:text-8xl">
                    HÉRITAGE ET 
                    <span className="border-b-4 border-primary text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                        EXCELLENCE
                    </span> 
                    <br />AUTOMOBILE 
                </Typography>
                {/* Description de la section Hero */}
                <Typography variant="body-lg" component="p" color="on-surface-variant" className="max-w-2xl mx-auto md:text-xl">
                    Depuis trois décennies, M-MOTORS redéfinit les standards de l'automobile d'exception. 
                    Notre quête de perfection technique et notre passion pour l'ingénierie nous ont propulsés 
                    au sommet du secteur national.
                </Typography>
            </div>
        </section>
    )
}
