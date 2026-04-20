// DEPENDANCES
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// COMPOSANTS
import Seo from "../../components/seo/Seo";
import HeroVehiclePage from "./components/1-Hero-vehicle-page";
import DescriptionVehiclePage from "./components/2-Description-vehicle-page"
import AcquisitionMethodVehiclePage from "./components/3-Acquisition-method-vehicle-page";
import TarifCatalogDescription from "./components/4-Tarif-catalog-vehicle-page";

// FONCTIONS DE LOGIQUE
import { getVehicleDescription } from "./components/functions/Get-description-vehicle-page";

// TYPES
import { type Vehicle } from "../../types/Vehicle";

// Composant principal de la page de description d'un véhicule
export default function VehiclePageView() {
    const { id } = useParams<{ id: string }>(); // Récupération de l'ID du véhicule dans l'URL
    const [vehicle, setVehicle] = useState<Vehicle | null>(null); // État pour stocker les données du véhicule
    const [loading, setLoading] = useState<boolean>(true); // État pour gérer le chargement des données
    const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

    // Hook pour récupérer les données du véhicule
    useEffect(() => {
        const fetchVehicle = async () => {
            if (!id) {
                setError("Aucun identifiant de véhicule fourni.");
                setLoading(false);
                return;
            }
            try {
                const data = await getVehicleDescription(id);
                if (data) {
                    setVehicle(data);
                } else {
                    setError("Véhicule non trouvé dans la base de données.");
                }
            } catch (err) {
                console.error(err);
                setError("Une erreur est survenue lors du chargement des données.");
            } finally {
                setLoading(false);
            }
        };

        fetchVehicle();
    }, [id]);

    // Affichage d'un indicateur de chargement pendant la récupération des données
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] bg-background text-on-background w-full">
                <span className="material-symbols-outlined animate-spin text-5xl text-primary">autorenew</span>
            </div>
        );
    }

    // Affichage d'un message d'erreur si le véhicule n'a pas été trouvé dans la base de données
    if (error || !vehicle) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] bg-background text-on-background w-full">
                <p className="text-xl text-error font-body font-bold">{error}</p>
            </div>
        );
    }

    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page de description du véhicule */}
            <Seo
                title={`Concept M-Motors - ${vehicle.brand} ${vehicle.model}`}
                description={`Découvrez le véhicule ${vehicle.brand} ${vehicle.model} sur Concept M-Motors.`}
            />

            {/* Composants de contenu de la page de description du véhicule */}
            <HeroVehiclePage vehicle={vehicle} />
            <DescriptionVehiclePage vehicle={vehicle} />
            <AcquisitionMethodVehiclePage vehicle={vehicle} />
            <TarifCatalogDescription vehicle={vehicle} />
        </>
    )
}