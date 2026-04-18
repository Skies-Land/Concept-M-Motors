// COMPOSANTS
import Seo from "../../components/seo/Seo";
import HeroVehiclePage from "./components/Hero-vehicle-page";
import DescriptionVehiclePage from "./components/description-vehicle-page";
import AcquisitionMethodVehiclePage from "./components/Acquisition-method-vehicle-page";
import TarifCatalogDescription from "./components/Tarif-catalog-description";

// Composant principal de la page de description d'un véhicule
export default function VehiclePageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page de description du véhicule */}
            <Seo
                title="Concept M-Motors - Plus d'information sur le véhicule"
                description="Page de description du véhicule"
            />

            {/* Composants de contenu de la page de description du véhicule */}
            <HeroVehiclePage />
            <DescriptionVehiclePage />
            <AcquisitionMethodVehiclePage />
            <TarifCatalogDescription />
        </>
    )
}