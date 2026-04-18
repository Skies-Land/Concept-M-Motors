// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography"
import { Button } from "../../../components/design-system/Button"
import Container from "../../../components/design-system/Container"

// Composant servant à afficher la section Hero correspondant à la page de description d'un véhicule
export default function HeroVehiclePage() {
    return (
        <>
            {/* TODO: Remplacer les textes et l'image de présentation 
            par ceux de la voiture en fonction de son ID dans la base de données */}

            <section className="relative w-full h-[614px] md:h-[768px] flex items-end pb-12 md:pb-24 overflow-hidden" data-pg-name="Section Hero de la page de description d'un véhicule">
                {/* Conteneur de l'image de la voiture */}
                <div className="absolute inset-0 z-0">
                    {/* Image de la voiture */}
                    <img alt="Audi A4 2022" className="w-full h-full object-cover object-center opacity-80" data-alt="Sleek silver Audi A4 2022 parked in a modern, dimly lit industrial studio setting, dramatic cinematic lighting highlighting its precise engineering lines" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYQbG09rPMiwovI2ulzcHF4CdAMxiGlk423btx_BpND2N__3YfXmrzeaq3kmzAd05d6hvH7R3snCLjkBOyBFwxu5ux8-B_zSqzbBPuEyqLjLhyMgIO8H0GHXKhbUp-qe3TkMrxsolioP3vuB3ft_ZjEy4i_k1s9GF_h0yLpj3-N4SiaSNpyFWUMJL-unjjcsEfsweXQSEq4iOvili-Xg0h0uaVuEjK9LXVraeqykJOvybrh7F3lG23BjRsykuIWIkTLDqcc6ZR-unS"/>
                    {/* Dégradé pour assombrir l'image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                {/* Conteneur des informations de la voiture */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start max-w-7xl">
                    {/* sous-titre de la voiture */}
                    <span className="text-primary font-headline tracking-[0.2em] uppercase text-sm mb-4 font-semibold">
                        Ingénierie de précision
                    </span>
                    {/* Nom de la voiture */}
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-tight mb-6">
                        Audi A4 2022
                    </h1>
                    {/* Informations sur la voiture */}
                    <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-body text-sm md:text-base">
                        {/* Kilométrage */}
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">
                            speed</span> 45,000 km
                        </span>
                        {/* Séparateur */}
                        <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                        {/* Type de voiture */}
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">
                            directions_car</span> Berline
                        </span>
                        {/* Séparateur */}
                        <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                        {/* Année de la voiture */}
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">
                            calendar_month</span> 2022
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}