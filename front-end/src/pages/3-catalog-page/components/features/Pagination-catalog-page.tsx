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
                <button 
                    key={i}
                    type="button"
                    onClick={() => onPageChange(i)}
                    aria-label={`Aller à la page ${i}`}
                    aria-current={currentPage === i ? "page" : undefined}
                    className={`bg-transparent border-none p-0 cursor-pointer transition-colors ${
                        currentPage === i 
                            ? "text-primary underline underline-offset-8" 
                            : "hover:text-white"
                    }`}
                >
                    {i < 10 ? `0${i}` : i}
                </button>
            );
        }
        return pages;
    };

    return (
        // Conteneur de la pagination
        <div className="mt-24 flex justify-between items-center border-t border-white/10 pt-12">
            {/* Bouton précédent */}
            <button 
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Page précédente"
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer ${
                    currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'hover:text-primary'
                }`}
            >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">west</span> Précédent
            </button>
            
            {/* Affichage des numéros de page */}
            <div className="flex gap-8 font-headline text-sm font-bold">
                {renderPageNumbers()}
            </div>
            
            {/* Bouton suivant */}
            <button 
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Page suivante"
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer ${
                    currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'hover:text-primary'
                }`}
            >
                Suivant <span className="material-symbols-outlined text-sm" aria-hidden="true">east</span>
            </button>
        </div>
    );
}