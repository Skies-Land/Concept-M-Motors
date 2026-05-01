// DÉPENDANCES
import { useState } from "react";

// COMPOSANTS
import Seo from "../../components/seo/Seo";
import HeroCatalogPage from "./components/1-Hero-catalog-page";
import VehiclesGridCardsCatalogPage from "./components/2-2-Vehicles-grid-cards-catalog-page";
import CTACatalogPage from "./components/3-CTA-catalog-page";
import OurServicesCatalogPage from "./components/4-Our-services-catalog-page";

/** Composant principal de la page catalogue */
export default function CatalogPageView() {
    // États des filtres de recherche de la page catalogue
    const [filters, setFilters] = useState({
        brand: "Toutes les Manufactures",
        maxPrice: 100000000 // Valeur initiale élevée pour afficher tous les véhicules par défaut
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
            <HeroCatalogPage onFilterChange={handleFilterChange} />
            <VehiclesGridCardsCatalogPage filters={filters} />
            <CTACatalogPage />
            <OurServicesCatalogPage />
        </>
    );
};