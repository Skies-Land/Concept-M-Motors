// DÉPENDANCES
import { useState, useEffect } from 'react';

// API
import { getVehicles } from '../../../api/Get-vehicles';

// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";

// COMPONENTS
import VehicleCardPage from "./2-1-Vehicle-card-catalog-page";
import PaginationCatalog from "./features/Pagination-catalog-page";

// FONCTIONS DE LOGIQUE
import { filterVehiclesCatalog, type FilterState } from "./functions/Filter-vehicles-catalog-page";
import { paginateVehiclesCatalog } from "./functions/Paginate-vehicles-catalog-page";

// TYPES
import { type Vehicle } from '../../../types/Vehicle';
interface VehiclesGridCardsCatalogPageProps {
    filters: FilterState;
}

/** Composant servant à présenter les véhicules disponibles sous forme de grille avec pagination */
export default function VehiclesGridCardsCatalogPage({ filters }: VehiclesGridCardsCatalogPageProps) {
    // État pour stocker les véhicules
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    // État pour stocker la page actuelle
    const [currentPage, setCurrentPage] = useState(1);
    // Nombre de véhicules à afficher par page
    const itemsPerPage = 6;

    // Récupération des données de la collection vehicles à partir de Firebase
    useEffect(() => {
        const fetchVehiclesData = async () => {
            try {
                const data = await getVehicles();
                setVehicles(data);
            } catch (error) {
                console.error("Erreur détaillée lors de la récupération des véhicules:", error);
            }
        };

        fetchVehiclesData();
    }, []);

    // On réinitialise la page à 1 quand les filtres changent
    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    // Application des filtres
    const filteredVehicles = filterVehiclesCatalog(vehicles, filters);

    // Calcul de la pagination
    const { totalPages, currentVehicles } = paginateVehiclesCatalog(filteredVehicles, currentPage, itemsPerPage);

    return (
        <section className="flex-1 py-32 bg-surface-dim" data-pg-name="Section de présentation des véhicules de la page de catalogue">

            {/* Conteneur principal */}
            <Container>

                {/* En-tête de la section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    {/* Titre et description de la section */}
                    <div>
                        <Typography variant="headline-lg" component="h1" color="on-surface" className="uppercase mb-2">
                            Nos Modèles disponible
                        </Typography>
                        <Typography variant="body-md" color="on-surface-variant" className="max-w-md">
                            Explorez notre inventaire d'exception. Chaque véhicule a été expertisé selon des 
                            standards d'excellence dépassant les normes industrielles habituelles.
                        </Typography>
                    </div>
                    {/* Affichage dynamique du nombre de véhicule disponible en fonction du système de filtres */}
                    <div className="flex gap-4">
                        <Typography 
                            variant="label-sm" 
                            component="span" 
                            color="on-surface" 
                            className="px-4 py-2 bg-surface-container border border-outline-variant/10 rounded-md">
                            {/* Condition : Ajout du 'S' à 'RÉSULTAT' si le nombre de véhicule est supérieur à 1 */}
                            {filteredVehicles.length} RÉSULTAT{filteredVehicles.length > 1 ? "S" : ""}
                        </Typography>
                    </div>
                </div>

                {/* Affichage dynamique des cartes de véhicules trouvé dans la base de données */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredVehicles.length > 0 ? (
                        currentVehicles.map(vehicle => (
                            <VehicleCardPage key={vehicle.id} vehicle={vehicle} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <Typography variant="body-lg" color="on-surface-variant">
                                Aucun véhicule ne correspond à vos critères de recherche.
                            </Typography>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <PaginationCatalog 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />

            </Container>

        </section>
    );
}