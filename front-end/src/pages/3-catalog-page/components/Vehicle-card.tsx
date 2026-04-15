// DATA
import { vehiclesData } from "../../../../public/Vehicle-data";

// Composant servant à afficher une carte de véhicule
export default function VehicleCard() {
    return (
        <>
            {vehiclesData.map((vehicle) => (
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
                        <h3 className="font-headline text-xl font-bold mb-4 tracking-tight">
                            {vehicle.brand} {vehicle.model}
                        </h3>
                        {/* Kilométrage (Optionnel) */}
                        {vehicle.mileage !== undefined && (
                            <div className="text-xs text-on-surface-variant font-medium mb-4">
                                {vehicle.mileage.toLocaleString()} km
                            </div>
                        )}
                        {/* Achat / Location */}
                        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
                            {vehicle.acquisition.isAvailableForSale && (
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                                        Achat
                                    </span>
                                    <span className="font-bold font-headline text-lg text-orange-500">
                                        {vehicle.acquisition.purchasePrice 
                                            ? `${vehicle.acquisition.purchasePrice.toLocaleString()} €` 
                                            : "Sur demande"}
                                    </span>
                                </div>
                            )}
                            {vehicle.acquisition.isAvailableForRent && (
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                                        Location
                                    </span>
                                    <span className="text-sm font-medium">
                                        {vehicle.acquisition.rentalPrice 
                                            ? `${vehicle.acquisition.rentalPrice.toLocaleString()} €/mois` 
                                            : "Sur demande"}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}