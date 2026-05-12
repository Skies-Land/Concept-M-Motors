from fastapi import APIRouter, HTTPException
from typing import List
from app.models.vehicle import Vehicle

router = APIRouter()

@router.get("/", response_model=List[Vehicle])
async def get_all_vehicles():
    """Récupère la liste de tous les véhicules."""
    vehicles = await Vehicle.find_all().to_list()
    return vehicles

@router.get("/{vehicle_id}", response_model=Vehicle)
async def get_vehicle(vehicle_id: str):
    """Récupère un véhicule spécifique par son ID."""
    vehicle = await Vehicle.get(vehicle_id)
    if not vehicle:
        raise HTTPException(status_code=404, detail="Véhicule non trouvé")
    return vehicle

@router.post("/", response_model=Vehicle, status_code=201)
async def create_vehicle(vehicle: Vehicle):
    """Ajoute un nouveau véhicule au catalogue."""
    await vehicle.insert()
    return vehicle
