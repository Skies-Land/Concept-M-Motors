# DÉPENDANCES
from pydantic import BaseModel, Field
from typing import Optional

# SOUS-SCHÉMAS
class TechnicalSpecs(BaseModel):
    """Schéma de validation pour les spécifications techniques."""
    acceleration: str
    topSpeed: int
    power: int
    engine: str

class Acquisition(BaseModel):
    """Schéma de validation pour les modalités d'acquisition."""
    purchasePrice: Optional[float] = None
    rentalPrice: Optional[float] = None
    isAvailableForSale: bool
    isAvailableForRent: bool

# SCHÉMAS DE BASE ET OPÉRATIONS
class VehicleBase(BaseModel):
    """Attributs communs d'un véhicule."""
    brand: str
    model: str
    category: str
    year: int
    mileage: int
    slogan: str
    imageUrl: str
    description: str
    technicalSpecs: TechnicalSpecs
    acquisition: Acquisition

class VehicleCreate(VehicleBase):
    """Schéma utilisé lors de la création d'un véhicule (POST)."""
    pass

class VehicleUpdate(VehicleBase):
    """
    Schéma utilisé pour les mises à jour (PATCH).
    Tous les champs sont rendus optionnels.
    """
    brand: Optional[str] = None
    model: Optional[str] = None
    category: Optional[str] = None
    year: Optional[int] = None
    mileage: Optional[int] = None
    slogan: Optional[str] = None
    imageUrl: Optional[str] = None
    description: Optional[str] = None
    technicalSpecs: Optional[TechnicalSpecs] = None
    acquisition: Optional[Acquisition] = None

class Vehicle(VehicleBase):
    """
    Schéma de réponse complet incluant l'identifiant.
    Utilisé pour le retour des données vers le Front-End.
    """
    id: str = Field(..., alias="_id")

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "brand": "Tesla",
                "model": "Model S",
                "category": "Berline",
                "year": 2023,
                "mileage": 5000,
                "slogan": "The future of driving",
                "imageUrl": "https://example.com/image.jpg",
                "description": "Une berline électrique de luxe.",
                "technicalSpecs": {
                    "acceleration": "2.1s",
                    "topSpeed": 322,
                    "power": 1020,
                    "engine": "Tri-motor"
                },
                "acquisition": {
                    "purchasePrice": 100000,
                    "rentalPrice": 1200,
                    "isAvailableForSale": True,
                    "isAvailableForRent": True
                }
            }
        }
