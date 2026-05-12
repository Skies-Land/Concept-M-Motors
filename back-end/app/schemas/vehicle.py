from pydantic import BaseModel, Field
from typing import Optional

class TechnicalSpecs(BaseModel):
    acceleration: str
    topSpeed: int
    power: int
    engine: str

class Acquisition(BaseModel):
    purchasePrice: Optional[float] = None
    rentalPrice: Optional[float] = None
    isAvailableForSale: bool
    isAvailableForRent: bool

class VehicleBase(BaseModel):
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
    pass

class VehicleUpdate(VehicleBase):
    # Rendre tous les champs optionnels pour les mises à jour partielles
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
