// COMPOSANTS
import Container from "../../../components/design-system/Container";
import VehicleCard from "./Vehicle-card";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à présenter les véhicules disponibles sous forme de grille avec pagination
export default function VehiclesGridCards() { 
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
                    {/* TODO: A modifier : Nombre de résultats | Implémenter un affichage dynamique du nombre de véhicule disponible en fonction du système de filtres */}
                    <div className="flex gap-4">
                        <Typography variant="label-sm" component="span" color="on-surface" className="px-4 py-2 bg-surface-container border border-outline-variant/10 rounded-md">
                            6 RESULTATS
                        </Typography>
                    </div>
                </div>

                {/* Présentation des véhicules sous forme de grille 3x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <VehicleCard />
                </div>

                {/* Pagination */}
                {/* TODO: Ajouter la logique de pagination */}
                <div className="mt-24 flex justify-between items-center border-t border-white/10 pt-12">
                    {/* TODO: Bouton précédent | Implémenter le composant `Button` */}
                    <button className="text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" data-pg-name="Bouton précédent">west</span> Précédent
                    </button>
                    {/* TODO: A modifier : Affichage dynamique de la pagination | Implémenter le composant `Pagination` */}
                    <div className="flex gap-8 font-headline text-sm font-bold">
                        <span className="text-orange-500 underline underline-offset-8">01</span>
                        <span className="hover:text-white cursor-pointer transition-colors">02</span>
                        <span className="hover:text-white cursor-pointer transition-colors">03</span>
                    </div>
                    {/* TODO: Bouton suivant | Implémenter le composant `Button` */}
                    <button className="text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                        Suivant <span className="material-symbols-outlined text-sm" data-pg-name="Bouton suivant">east</span>
                    </button>
                </div>

            </Container>

        </section>
    );
};