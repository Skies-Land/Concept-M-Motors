import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

async def test_connection():
    mongodb_url = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
    database_name = os.getenv("DATABASE_NAME", "m-motors")
    
    print(f"Tentative de connexion à : {mongodb_url}")
    
    try:
        client = AsyncIOMotorClient(mongodb_url)
        # La commande ping permet de vérifier si le serveur répond
        await client.admin.command('ping')
        print("✅ Connexion réussie à MongoDB !")
        
        db = client[database_name]
        print(f"Base de données cible : {db.name}")
        
    except Exception as e:
        print(f"❌ Erreur de connexion : {e}")

if __name__ == "__main__":
    asyncio.run(test_connection())
