# DÉPENDANCES
from fastapi import APIRouter, HTTPException
from typing import List, Optional
from pydantic import BaseModel

# CONFIGURATION & MODÈLES
from app.models.user import User

# INITIALISATION DU ROUTER
router = APIRouter()

# SCHÉMAS DE DONNÉES (PYDANTIC)
class UserUpdate(BaseModel):
    """Schéma pour la validation des mises à jour partielles du profil (PATCH)."""
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    displayName: Optional[str] = None
    email: Optional[str] = None
    phoneNumber: Optional[str] = None
    address: Optional[str] = None

# ENDPOINTS (ROUTES API)
@router.post("/", response_model=User, status_code=201)
async def create_user(user: User):
    """Crée un nouvel utilisateur (utilisé principalement pour les migrations ou l'admin)."""
    await user.insert()
    return user

@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str):
    """
    Récupère les informations complètes d'un utilisateur par son ID MongoDB.
    Appelé par le Front-End au chargement de l'Espace Client.
    """
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    return user

@router.patch("/{user_id}", response_model=User)
async def update_user(user_id: str, update_data: UserUpdate):
    """
    Met à jour les informations d'un utilisateur (PATCH).
    Seuls les champs envoyés par le formulaire Edit-Profil sont modifiés.
    """
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    # Extraction des données à modifier (exclut les champs non renseignés)
    update_dict = update_data.model_dump(exclude_unset=True)
    await user.set(update_dict)
    return user
