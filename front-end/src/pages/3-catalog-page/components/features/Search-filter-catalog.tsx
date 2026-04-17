// DÉPENDANCES
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../config/firebase-config";

// COMPOSANTS
import { Typography } from "../../../../components/design-system/Typography";
import { Button } from "../../../../components/design-system/Button";

interface SearchFilterCatalogProps {
    onFilterChange: (filters: { brand: string; maxPrice: number }) => void;
}

// Composant servant à filtrer les véhicules de la base de donnée dans la page catalogue
export default function SearchFilterCatalog({ onFilterChange }: SearchFilterCatalogProps) {
    // État pour stocker la marque sélectionnée
    const [selectedBrand, setSelectedBrand] = useState("Toutes les Manufactures");
    // État pour stocker le prix maximum
    const [maxPrice, setMaxPrice] = useState(2000000);
    // État pour stocker les marques
    const [brands, setBrands] = useState<string[]>([]);
    // État pour gérer le filtre actif
    const [activeFilter, setActiveFilter] = useState<"none" | "brand" | "price">("none");

    // Récupération dynamique des marques présentes dans la base de données
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "vehicles"));
                const vehicleBrands = querySnapshot.docs.map(doc => doc.data().brand as string);
                // On retire les doublons et on trie par ordre alphabétique
                const uniqueBrands = Array.from(new Set(vehicleBrands)).sort();
                setBrands(uniqueBrands);
            } catch (error) {
                console.error("Erreur lors de la récupération des marques:", error);
            }
        };

        fetchBrands();
    }, []);

    // Fonction pour mettre à jour les filtres de recherche par "marque"
    const handleBrandSearch = () => {
        setActiveFilter("brand");
        onFilterChange({
            brand: selectedBrand,
            maxPrice: 5000000
        });
    };

    // Fonction pour mettre à jour les filtres de recherche par "prix"
    const handlePriceSearch = () => {
        setActiveFilter("price");
        onFilterChange({
            brand: "Toutes les Manufactures",
            maxPrice: maxPrice
        });
    };

    return (
        <div className="backdrop-blur-xl bg-surface-container-high border border-white/10 flex flex-col md:flex-row gap-6 items-center justify-between p-6 rounded-lg shadow-2xl">

            {/* Filtre de recherche par marque */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-4 w-full">
                <div>
                    <Typography variant="label-sm" color="primary" className="mb-2 block">Marque</Typography>
                    {/* Menu déroulant */}
                    <select 
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 font-headline uppercase tracking-tight text-on-surface [&>option]:bg-surface-container-high cursor-pointer"
                    >
                        <option value="Toutes les Manufactures">Toutes les Manufactures</option>
                        {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
                {/* Bouton : Recheche par marque */}
                <Button 
                    variant={activeFilter === "price" ? "secondary" : "primary"} 
                    size="small" 
                    fullWidth
                    onClick={handleBrandSearch}
                >
                    Recherche par marque
                </Button>
            </div>

            {/* Barre de séparation verticale */}
            <div className="w-px h-24 bg-white/10 hidden md:block"></div>

            {/* Filtre de recherche par prix */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-4 w-full">
                <div>
                    <Typography variant="label-sm" color="primary" className="mb-2 block">Budget</Typography>
                    <div className="flex justify-between items-center text-sm font-headline">
                        <span className="text-on-surface-variant min-w-[60px]">0 €</span>
                        <input 
                            className="accent-primary flex-grow mx-4 cursor-pointer" 
                            max="5000000" 
                            min="0" 
                            step="50000" 
                            type="range"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                        />
                        <span className="text-primary font-bold">
                            {maxPrice >= 5000000 ? "5M €+" : `${(maxPrice / 1000).toLocaleString()}k €`}
                        </span>
                    </div>
                </div>
                {/* Bouton : Recheche par budget */}
                <Button 
                    variant={activeFilter === "brand" ? "secondary" : "primary"} 
                    size="small"
                    fullWidth
                    onClick={handlePriceSearch}
                >
                    Recherche par budget
                </Button>
            </div>
        </div>
    );
}