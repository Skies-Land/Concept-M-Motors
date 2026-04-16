// DEPENDANCES
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

// CONFIGURATION
import { db } from '../../../config/firebase-config';

// TYPES
import { type Vehicle } from '../../../types/Vehicle';

// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher une carte de véhicule
export default function VehicleCard() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    // Récupération des données de la collection vehicles à partir de Firebase
    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                console.log("Début de la récupération Firebase...");
                const querySnapshot = await getDocs(collection(db, "vehicles"));
                console.log("Snapshot Firebase:", querySnapshot.empty ? "VIDE" : "CONTIENT DES DONNEES", querySnapshot.size, "documents");
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })) as Vehicle[];
                console.log("Données formatées:", data);
                setVehicles(data);
            } catch (error) {
                console.error("Erreur détaillée lors de la récupération des véhicules:", error);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <>
            {vehicles.map((vehicle) => (
                <article key={vehicle.id} className="group bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-xl overflow-hidden flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                        <img 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            alt={`${vehicle.brand} ${vehicle.model}`} 
                            src={vehicle.imageUrl}
                        />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        {/* Info véhicule */}
                        <Typography variant="headline-sm" component="h3" color="on-surface" className="mb-4">
                            {vehicle.brand} {vehicle.model}
                        </Typography>
                        {/* Kilométrage (Optionnel) */}
                        {vehicle.mileage !== undefined && (
                            <Typography variant="body-sm" color="on-surface-variant" className="mb-4">
                                {vehicle.mileage.toLocaleString()} km
                            </Typography>
                        )}
                        {/* Achat / Location */}
                        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
                            {vehicle.acquisition?.isAvailableForSale && (
                                <div className="flex justify-between items-center">
                                    <Typography variant="label-sm" component="span" color="on-surface-variant">
                                        Achat
                                    </Typography>
                                    <Typography variant="headline-sm" component="span" color="primary">
                                        {vehicle.acquisition.purchasePrice 
                                            ? `${vehicle.acquisition.purchasePrice.toLocaleString()} €` 
                                            : "Sur demande"}
                                    </Typography>
                                </div>
                            )}
                            {vehicle.acquisition?.isAvailableForRent && (
                                <div className="flex justify-between items-center">
                                    <Typography variant="label-sm" component="span" color="on-surface-variant">
                                        Location
                                    </Typography>
                                    <Typography variant="body-md" component="span" color="on-surface">
                                        {vehicle.acquisition.rentalPrice 
                                            ? `${vehicle.acquisition.rentalPrice.toLocaleString()} €/mois` 
                                            : "Sur demande"}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}