// TYPES
interface PaginationCatalogProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

/** Composant servant à gérer la pagination des véhicules de la page catalogue */
export default function PaginationCatalog({ currentPage, totalPages, onPageChange }: PaginationCatalogProps) {
    if (totalPages <= 1) return null;

    /** Fonction pour afficher les numéros de page */
    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <span 
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`cursor-pointer transition-colors ${
                        currentPage === i 
                            ? "text-primary underline underline-offset-8" 
                            : "hover:text-white"
                    }`}
                >
                    {i < 10 ? `0${i}` : i}
                </span>
            );
        }
        return pages;
    };

    return (
        // Conteneur de la pagination
        <div className="mt-24 flex justify-between items-center border-t border-white/10 pt-12">
            {/* Bouton précédent */}
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer ${
                    currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'hover:text-primary'
                }`}
            >
                <span className="material-symbols-outlined text-sm" data-pg-name="Bouton précédent">west</span> Précédent
            </button>
            
            {/* Affichage des numéros de page */}
            <div className="flex gap-8 font-headline text-sm font-bold">
                {renderPageNumbers()}
            </div>
            
            {/* Bouton suivant */}
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer ${
                    currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'hover:text-primary'
                }`}
            >
                Suivant <span className="material-symbols-outlined text-sm" data-pg-name="Bouton suivant">east</span>
            </button>
        </div>
    );
}