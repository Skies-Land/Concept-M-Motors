// DÉPENDANCES
import { useState } from "react";

// COMPOSANTS
import Seo from "../../components/seo/Seo";
import HeroCatalog from "./components/1-Hero-catalog-page";
import VehiclesGridCardsCatalog from "./components/2-2-Vehicles-grid-cards-catalog-page";
import CTACatalog from "./components/3-CTA-catalog-page";
import OurServicesCatalog from "./components/4-Our-services-catalog-page";

// Composant principal de la page catalogue
export default function CatalogPageView() {
    const [filters, setFilters] = useState({
        brand: "Toutes les Manufactures",
        maxPrice: 2000000
    });

    // Fonction pour mettre à jour les filtres de recherche 
    const handleFilterChange = (newFilters: { brand: string; maxPrice: number }) => {
        setFilters(newFilters);
    };

    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page catalogue */}
            <Seo
                title="Concept M-Motors - Catalogue"
                description="Découvrez notre catalogue de véhicules disponibles en achat ou location."
            />
            {/* Composants de la page catalogue */}
            <HeroCatalog onFilterChange={handleFilterChange} />
            <VehiclesGridCardsCatalog filters={filters} />
            <CTACatalog />
            <OurServicesCatalog />
        </>
    );
};