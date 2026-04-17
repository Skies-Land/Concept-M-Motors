// COMPOSANTS
import Seo from "../../components/seo/Seo";
import HeroCatalog from "./components/Hero-catalog";
import VehiclesGridCards from "./components/Vehicles-grid-cards";
import CTA_catalog from "./components/CTA-catalog";
import OurServices from "./components/Our-services";

// Composant principal de la page catalogue
export default function CatalogPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page catalogue */}
            <Seo
                title="Concept M-Motors - Catalogue"
                description="Découvrez notre catalogue de véhicules disponibles en achat ou location."
            />
            {/* Composants de la page catalogue */}
            <HeroCatalog />
            <VehiclesGridCards />
            <CTA_catalog />
            <OurServices />
        </>
    );
};