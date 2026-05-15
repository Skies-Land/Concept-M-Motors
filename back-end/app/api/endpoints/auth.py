# DÉPENDANCES
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from typing import Optional

# CONFIGURATION & MODÈLES
from app.models.user import User
from app.core.security import get_password_hash, verify_password, create_access_token

# INITIALISATION DU ROUTER
router = APIRouter()

# SCHÉMAS DE DONNÉES (PYDANTIC)
class UserRegister(BaseModel):
    """Schéma pour la validation des données d'inscription."""
    email: EmailStr
    password: str
    firstName: str = ""
    lastName: str = ""
    displayName: str = ""

class Token(BaseModel):
    """Schéma pour la réponse d'authentification (Token + Infos User)."""
    access_token: str
    token_type: str
    user: User

# ENDPOINTS (ROUTES API)
@router.post("/register", response_model=Token)
async def register(user_in: UserRegister):
    """
    Endpoint permettant d'enregistrer un nouvel utilisateur dans la base de données MongoDB.
    Vérifie l'unicité de l'email et hache le mot de passe avant insertion.
    """
    # 1. Vérification de l'existence de l'utilisateur
    user_exists = await User.find_one(User.email == user_in.email)
    if user_exists:
        raise HTTPException(
            status_code=400,
            detail="Un utilisateur avec cet email existe déjà."
        )
    
    # 2. Création de l'instance utilisateur (Hachage du mot de passe via security.py)
    new_user = User(
        email=user_in.email,
        hashed_password=get_password_hash(user_in.password),
        firstName=user_in.firstName,
        lastName=user_in.lastName,
        displayName=user_in.displayName or f"{user_in.firstName} {user_in.lastName}".strip()
    )
    await new_user.insert()
    
    # 3. Génération du token JWT et réponse
    access_token = create_access_token(subject=new_user.id)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": new_user
    }

@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """
    Endpoint de connexion. 
    Vérifie les credentials, valide le hachage et retourne un jeton d'accès JWT.
    """
    # 1. Recherche de l'utilisateur par email (username dans le formulaire OAuth2)
    user = await User.find_one(User.email == form_data.username)
    
    # 2. Validation du mot de passe
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # 3. Génération du token JWT et réponse
    access_token = create_access_token(subject=user.id)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }
