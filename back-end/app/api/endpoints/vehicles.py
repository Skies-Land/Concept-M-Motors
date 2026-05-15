# DÉPENDANCES
from fastapi import APIRouter, HTTPException
from typing import List

# CONFIGURATION & MODÈLES
from app.models.vehicle import Vehicle

# INITIALISATION DU ROUTER
router = APIRouter()

# ENDPOINTS (ROUTES API)
@router.get("/", response_model=List[Vehicle])
async def get_all_vehicles():
    """
    Récupère la liste intégrale des véhicules disponibles.
    Utilisé par le catalogue Front-End pour l'affichage de la grille de cartes.
    """
    vehicles = await Vehicle.find_all().to_list()
    return vehicles

@router.get("/{vehicle_id}", response_model=Vehicle)
async def get_vehicle(vehicle_id: str):
    """
    Récupère les détails d'un véhicule spécifique par son ID MongoDB.
    Utilisé par la page de description d'un véhicule.
    """
    vehicle = await Vehicle.get(vehicle_id)
    if not vehicle:
        raise HTTPException(status_code=404, detail="Véhicule non trouvé")
    return vehicle

@router.post("/", response_model=Vehicle, status_code=201)
async def create_vehicle(vehicle: Vehicle):
    """
    Endpoint d'administration permettant d'ajouter un nouveau véhicule au catalogue MongoDB.
    """
    await vehicle.insert()
    return vehicle
