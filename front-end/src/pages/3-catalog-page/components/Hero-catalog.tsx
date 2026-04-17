// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography";
import SearchFilterCatalog from "./features/Search-filter-catalog";

// IMAGE
import imageHeroPageCatalog from "../../../assets/IMG_hero-catalog.jpg"

// INTERFACE
interface HeroCatalogProps {
    onFilterChange: (filters: { brand: string; maxPrice: number }) => void;
}

// Composant servant à afficher la section Hero correspondant à la page catalogue
export default function HeroCatalog({ onFilterChange }: HeroCatalogProps) { 
    return (
        <section 
            className="bg-center bg-cover border-b border-white/5 flex flex-col min-h-[614px] items-center justify-center px-4 md:px-8 relative rounded-lg text-center pt-32 pb-16 md:py-0" 
            style={{ backgroundImage: `url(${imageHeroPageCatalog})` }}
            data-pg-name="Section Hero de la page catalogue">

            {/* Overlay */}
            <div className="absolute bg-black/60 inset-0 rounded-lg"></div>

            {/* Conteneur du texte */}
            <div className="relative z-10 max-w-4xl">
                <Typography variant="label-lg" color="primary" className="mb-4 block">
                    La Collection Signature
                </Typography>
                <Typography variant="display-lg" component="h1" color="on-surface" className="mb-6 text-5xl md:text-8xl">
                    L'ART DE <br/><span className="text-white italic">L'EXCEPTION</span>
                </Typography>
                <Typography variant="body-lg" color="on-surface-variant" className="max-w-2xl mx-auto mb-8">
                    Une sélection d'automobiles, où chaque courbe raconte une histoire de savoir-faire ancestral et d'innovation visionnaire.
                </Typography>
            </div>

            {/* Filtre de recherche */}
            <div className="relative md:absolute mt-12 md:mt-0 md:-bottom-10 md:left-1/2 md:-translate-x-1/2 w-full max-w-5xl px-0 md:px-8 z-20">
                <SearchFilterCatalog onFilterChange={onFilterChange} />
            </div>

        </section>
    );
};