// DÉPENDANCES
import { useState } from "react";

// COMPOSANTS
import Seo from "../../components/seo/Seo";
import HeroCatalog from "./components/Hero-catalog";
import VehiclesGridCardsCatalog from "./components/Vehicles-grid-cards-catalog";
import CTACatalog from "./components/CTA-catalog";
import OurServicesCatalog from "./components/Our-services-catalog";

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