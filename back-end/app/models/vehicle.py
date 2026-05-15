# DÉPENDANCES
from beanie import Document
from typing import Optional
from pydantic import BaseModel

# SOUS-MODÈLES (SCHÉMAS IMBRIQUÉS)
class TechnicalSpecs(BaseModel):
    """Caractéristiques techniques du véhicule (moteur, puissance, etc)."""
    acceleration: float
    topSpeed: int
    power: int
    engine: str

class Acquisition(BaseModel):
    """Informations de vente et de location du véhicule."""
    purchasePrice: Optional[float] = None
    rentalPrice: Optional[float] = None
    isAvailableForSale: bool
    isAvailableForRent: bool

# MODÈLE PRINCIPAL (MONGODB COLLECTION)
class Vehicle(Document):
    """
    Représente un véhicule dans la collection 'vehicles' de MongoDB Atlas.
    """
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

    class Settings:
        # Nom de la collection dans MongoDB
        name = "vehicles"

    def model_dump(self, **kwargs):
        """
        Normalisation de l'ID pour le Front-End.
        Convertit l'identifiant MongoDB en chaîne de caractères.
        """
        d = super().model_dump(**kwargs)
        if self.id:
            d["id"] = str(self.id)
        return d
