// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";

// IMAGE
import imageHero from "../../../assets/IMG_hero-catalog.jpg"

// Composant servant à afficher la section Hero correspondant à la page catalogue
export default function HeroCatalog() { 
    return (
        <section 
            className="bg-center bg-cover border-b border-white/5 flex flex-col h-[614px] items-center justify-center px-8 relative rounded-lg text-center" 
            style={{ backgroundImage: `url(${imageHero})` }}
            data-pg-name="Section : Hero">

            {/* Overlay */}
            <div className="absolute bg-black/60 inset-0"></div>
            <div className="relative z-10 max-w-4xl">
                <Typography variant="label-lg" color="primary" className="mb-4 block">
                    La Collection Signature
                </Typography>
                <Typography variant="display-lg" component="h1" color="on-surface" className="mb-6 md:text-8xl">
                    L'ART DE <br/><span className="text-white italic">L'EXCEPTION</span>
                </Typography>
                <Typography variant="body-lg" color="on-surface-variant" className="max-w-2xl mx-auto mb-8">
                    Une sélection d'automobiles, où chaque courbe raconte une histoire de savoir-faire ancestral et d'innovation visionnaire.
                </Typography>
            </div>

            {/* Filtre de recherche */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8">
                <div className="backdrop-blur-xl bg-surface-container-high border border-white/10 flex flex-wrap gap-6 items-center justify-between p-6 rounded-lg shadow-2xl">
                    <div className="flex-1 min-w-[200px]">
                        <Typography variant="label-sm" color="primary" className="mb-2 block">Prestige &amp; Marque</Typography>
                        <select className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 font-headline uppercase tracking-tight">
                            <option>Toutes les Manufactures</option>
                            <option>Rolls-Royce</option>
                            <option>Bentley</option>
                            <option>Aston Martin</option>
                            <option>Ferrari</option>
                        </select>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                    <div className="flex-1 min-w-[200px]">
                        <Typography variant="label-sm" color="primary" className="mb-2 block">Investissement</Typography>
                        <div className="flex justify-between items-center text-sm font-headline">
                            <span>100k €</span>
                            <input className="accent-primary flex-grow mx-4" max="2000000" min="100000" step="50000" type="range"/>
                            <span>2M €+</span>
                        </div>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                    <Button variant="primary" size="medium">
                        Filtrer
                    </Button>
                </div>
            </div>
        </section>
    );
};