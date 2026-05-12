from beanie import Document
from typing import Optional
from pydantic import BaseModel

class TechnicalSpecs(BaseModel):
    acceleration: float
    topSpeed: int
    power: int
    engine: str

class Acquisition(BaseModel):
    purchasePrice: Optional[float] = None
    rentalPrice: Optional[float] = None
    isAvailableForSale: bool
    isAvailableForRent: bool

class Vehicle(Document):
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
        name = "vehicles"  # Nom de la collection dans MongoDB
