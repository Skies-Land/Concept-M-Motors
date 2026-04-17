// DÉPENDANCES
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

// CONFIGURATION
import { db } from '../../../config/firebase-config';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANTS
import Container from "../../../components/design-system/Container";
import VehicleCard from "./Vehicle-card-catalog";
import { Typography } from "../../../components/design-system/Typography";
import PaginationCatalog from "./Pagination-catalog";

// Composant servant à présenter les véhicules disponibles sous forme de grille avec pagination
export default function VehiclesGridCardsCatalog() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]); // État pour stocker les véhicules
    const [currentPage, setCurrentPage] = useState(1); // État pour stocker la page actuelle
    const itemsPerPage = 6; // Nombre de véhicules à afficher par page

    // Récupération des données de la collection vehicles à partir de Firebase
    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "vehicles"));
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })) as Vehicle[];
                setVehicles(data);
            } catch (error) {
                console.error("Erreur détaillée lors de la récupération des véhicules:", error);
            }
        };

        fetchVehicles();
    }, []);

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(vehicles.length / itemsPerPage);

    // Calcul de l'index de début et de fin pour la pagination
    const startIndex = (currentPage - 1) * itemsPerPage;

    // Récupération des véhicules de la page actuelle
    const currentVehicles = vehicles.slice(startIndex, startIndex + itemsPerPage);

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
                    {/* TODO: Implémenter un affichage dynamique du nombre de véhicule disponible en fonction du système de filtres */}
                    <div className="flex gap-4">
                        <Typography 
                            variant="label-sm" 
                            component="span" 
                            color="on-surface" 
                            className="px-4 py-2 bg-surface-container border border-outline-variant/10 rounded-md">
                            {vehicles.length} RÉSULTATS
                        </Typography>
                    </div>
                </div>

                {/* Affichage dynamique des cartes de véhicules trouvé dans la base de données */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {currentVehicles.map(vehicle => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
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