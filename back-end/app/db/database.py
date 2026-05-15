# DÉPENDANCES
import os
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from dotenv import load_dotenv

# CONFIGURATION & MODÈLES
from app.models.vehicle import Vehicle
from app.models.faq import FAQ
from app.models.user import User

# CHARGEMENT DES VARIABLES D'ENVIRONNEMENT
load_dotenv()

# CONFIGURATION DE LA CONNEXION MONGODB
# Récupère l'URL de connexion Atlas et le nom de la BDD depuis le fichier .env
MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME", "m-motors")

# INITIALISATION DE LA BASE DE DONNÉES
async def init_db():
    """
    Configure la connexion à MongoDB Atlas et initialise l'ODM Beanie.
    Beanie fait le lien entre les classes Python (Modèles) et les collections MongoDB.
    """
    # 1. Création du client asynchrone Motor
    client = AsyncIOMotorClient(MONGODB_URL)

    # 2. Initialisation de Beanie avec les modèles de documents définis
    await init_beanie(
        database=client[DATABASE_NAME], 
        document_models=[
            Vehicle,
            FAQ,
            User
        ]
    )

    print(f"📡 Connexion MongoDB Atlas établie. Beanie initialisé sur : {DATABASE_NAME}")
