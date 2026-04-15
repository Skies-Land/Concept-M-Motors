// COMPONENTS
import Container from "../../../components/layout/Container";
import VehicleCard from "./Vehicle-card";

// Composant servant à afficher une grille de véhicules
export default function VehiclesGridCards() { 
    return (
        <section className="flex-1 py-32 bg-surface-dim" data-pg-name="Section : Véhicules">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="font-headline text-5xl font-black tracking-tighter uppercase mb-2">
                            Nos Modèles disponible
                        </h1>
                        <p className="text-on-surface-variant text-sm max-w-md">
                            Explorez notre inventaire d'exception. Chaque véhicule a été expertisé selon des 
                            standards d'excellence dépassant les normes industrielles habituelles.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="px-4 py-2 bg-surface-container text-xs font-bold tracking-widest border border-outline-variant/10 rounded-md">
                            6 RESULTATS
                        </span>
                    </div>
                </div>

                {/* Présentation des véhicules sous forme de grille 3x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <VehicleCard />
                </div>

                {/* Pagination */}
                <div className="mt-24 flex justify-between items-center border-t border-white/10 pt-12">
                    <button className="text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">west</span> Précédent
                    </button>
                    <div className="flex gap-8 font-headline text-sm font-bold">
                        <span className="text-orange-500 underline underline-offset-8">01</span>
                        <span className="hover:text-white cursor-pointer transition-colors">02</span>
                        <span className="hover:text-white cursor-pointer transition-colors">03</span>
                    </div>
                    <button className="text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                        Suivant <span className="material-symbols-outlined text-sm">east</span>
                    </button>
                </div>
            </Container>
        </section>
    );
};