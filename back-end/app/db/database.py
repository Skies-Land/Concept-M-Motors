import os
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from dotenv import load_dotenv

# Import des modèles
from app.models.vehicle import Vehicle

# Charger les variables d'environnement
load_dotenv()

MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME", "m-motors")

async def init_db():
    # Créer le client Motor
    client = AsyncIOMotorClient(MONGODB_URL)
    
    # Initialiser Beanie avec les modèles de documents
    await init_beanie(
        database=client[DATABASE_NAME], 
        document_models=[
            Vehicle,
            # Ajoutez d'autres modèles ici plus tard (ex: User)
        ]
    )
    
    print(f"📡 Beanie initialisé avec succès sur la base : {DATABASE_NAME}")
