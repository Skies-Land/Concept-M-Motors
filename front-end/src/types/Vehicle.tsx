// Ce composant sert à définir les types de données pour les véhicules.
export interface Vehicle {
    id: string; // Slug ou ID unique
    brand: string;
    model: string;
    mileage: number;
    imageUrl: string;
    acquisition: {
        purchasePrice: number | null;
        rentalPrice: number | null; // null si "Nous contacter"
        isAvailableForSale: boolean;
        isAvailableForRent: boolean;
    };
}