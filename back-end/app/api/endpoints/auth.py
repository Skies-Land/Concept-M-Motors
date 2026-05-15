from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from app.models.user import User
from app.core.security import get_password_hash, verify_password, create_access_token
from pydantic import BaseModel, EmailStr
from typing import Optional

router = APIRouter()

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    firstName: str = ""
    lastName: str = ""
    displayName: str = ""

class Token(BaseModel):
    access_token: str
    token_type: str
    user: User

@router.post("/register", response_model=Token)
async def register(user_in: UserRegister):
    """Enregistre un nouvel utilisateur."""
    # Vérifier si l'utilisateur existe déjà
    user_exists = await User.find_one(User.email == user_in.email)
    if user_exists:
        raise HTTPException(
            status_code=400,
            detail="Un utilisateur avec cet email existe déjà."
        )
    
    # Créer le nouvel utilisateur
    new_user = User(
        email=user_in.email,
        hashed_password=get_password_hash(user_in.password),
        firstName=user_in.firstName,
        lastName=user_in.lastName,
        displayName=user_in.displayName or f"{user_in.firstName} {user_in.lastName}".strip()
    )
    await new_user.insert()
    
    # Générer le token
    access_token = create_access_token(subject=new_user.id)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": new_user
    }

@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """Connecte un utilisateur et renvoie un token."""
    user = await User.find_one(User.email == form_data.username)
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = create_access_token(subject=user.id)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }
