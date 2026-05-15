from fastapi import APIRouter, HTTPException
from typing import List, Optional
from app.models.user import User
from pydantic import BaseModel

router = APIRouter()

class UserUpdate(BaseModel):
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    displayName: Optional[str] = None
    email: Optional[str] = None
    phoneNumber: Optional[str] = None
    address: Optional[str] = None

@router.post("/", response_model=User, status_code=201)
async def create_user(user: User):
    """Crée un nouvel utilisateur."""
    await user.insert()
    return user

@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str):
    """Récupère un utilisateur par son ID."""
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    return user

@router.patch("/{user_id}", response_model=User)
async def update_user(user_id: str, update_data: UserUpdate):
    """Met à jour les informations d'un utilisateur."""
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    # On ne met à jour que les champs fournis (non None)
    update_dict = update_data.model_dump(exclude_unset=True)
    await user.set(update_dict)
    return user
