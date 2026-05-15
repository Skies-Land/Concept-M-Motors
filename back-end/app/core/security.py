# DÉPENDANCES
from datetime import datetime, timedelta
from typing import Any, Union
from jose import jwt
from passlib.context import CryptContext
import os
from dotenv import load_dotenv

# CONFIGURATION DES VARIABLES D'ENVIRONNEMENT
load_dotenv()

# PARAMÈTRES DE SÉCURITÉ
# PWD_CONTEXT : Gère le hachage et la vérification des mots de passe avec l'algorithme bcrypt
PWD_CONTEXT = CryptContext(schemes=["bcrypt"], deprecated="auto")

# SECRET_KEY : Utilisée pour signer les jetons JWT (doit être gardée secrète)
SECRET_KEY = os.getenv("SECRET_KEY", "une-cle-tres-secrete-pour-le-developpement")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # Validité du token : 24 heures

# FONCTIONS DE LOGIQUE SÉCURITÉ
def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Vérifie si le mot de passe saisi par l'utilisateur correspond au hash stocké en base.
    Utilisé lors de la phase de login.
    """
    return PWD_CONTEXT.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """
    Transforme un mot de passe en clair en un hash sécurisé via bcrypt.
    Utilisé lors de la phase d'inscription (register).
    """
    return PWD_CONTEXT.hash(password)

def create_access_token(subject: Union[str, Any], expires_delta: timedelta = None) -> str:
    """
    Génère un jeton d'accès JWT (JSON Web Token) signé.
    Le 'subject' contient généralement l'ID de l'utilisateur.
    """
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
