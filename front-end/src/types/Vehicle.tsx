// Ce composant sert à définir les types de données pour identifier et décrire les véhicules.
export interface Vehicle {
    id: string; // ID unique du véhicule (auto-généré dans Firebase)
    brand: string; // Marque du véhicule
    model: string; // Modèle du véhicule
    category: string; // Catégorie du véhicule
    year: number; // Année de mise en circulation du véhicule
    mileage: number; // Kilométrage du véhicule
    slogan: string; // Slogan du véhicule
    imageUrl: string; // URL de l'image du véhicule
    description: string; // Description du véhicule
    technicalSpecs: { 
        acceleration: string; // Accélération du véhicule
        topSpeed: number; // Vitesse maximale du véhicule
        power: number; // Puissance du véhicule
        engine: string; // Moteur du véhicule
    };
    acquisition: {
        purchasePrice: number | null; // Prix d'achat du véhicule
        rentalPrice: number | null; // Prix de location du véhicule
        isAvailableForSale: boolean; // Indique si le véhicule est disponible à la vente
        isAvailableForRent: boolean; // Indique si le véhicule est disponible à la location
    };
}