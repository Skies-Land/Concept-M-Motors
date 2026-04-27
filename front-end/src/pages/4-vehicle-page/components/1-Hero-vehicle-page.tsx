// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography"
import Container from "../../../components/design-system/Container"

// TYPES
import { type Vehicle } from '../../../types/Vehicle';
export interface VehicleHeroProps {
    vehicle: Vehicle;

}

// Composant servant à afficher la section Hero correspondant à la page de description d'un véhicule
export default function HeroVehiclePage({ vehicle }: VehicleHeroProps) {
    return (
        <>
            <section className="relative w-full h-[614px] md:h-[768px] flex items-end pb-12 md:pb-24 overflow-hidden" data-pg-name="Section Hero de la page de description d'un véhicule">
                {/* Conteneur de l'image de la voiture */}
                <div className="absolute inset-0 z-0">
                    {/* Image de la voiture */}
                    <img 
                        className="w-full h-full object-cover object-center opacity-80" 
                        alt={`${vehicle.brand} ${vehicle.model}`} 
                        src= {vehicle.imageUrl} 
                    />
                    {/* Dégradé pour assombrir l'image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                {/* Conteneur des informations de la voiture */}
                <Container className="relative z-10 flex flex-col items-start px-6 md:px-12">
                    {/* sous-titre de la voiture */}
                    <Typography variant="label-lg" color="primary" component="span" className="mb-4">
                        {vehicle.slogan}
                    </Typography>
                    {/* Nom de la voiture */}
                    <Typography variant="headline-lg" component="h1" color="inverse" className="mb-6 tracking-tighter">
                        {vehicle.brand} {vehicle.model} {vehicle.year}
                    </Typography>
                    {/* Informations sur la voiture */}
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Kilométrage */}
                        <Typography variant="body-md" color="on-surface-variant" component="span" className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">speed</span> 
                            {vehicle.mileage} km
                        </Typography>
                        {/* Séparateur */}
                        <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                        {/* Type de voiture */}
                        <Typography variant="body-md" color="on-surface-variant" component="span" className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">directions_car</span> 
                            {vehicle.category}
                        </Typography>
                        {/* Séparateur */}
                        <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                        {/* Année de la voiture */}
                        <Typography variant="body-md" color="on-surface-variant" component="span" className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">calendar_month</span> 
                            {vehicle.year}
                        </Typography>
                    </div>
                </Container>
            </section>
        </>
    )
}