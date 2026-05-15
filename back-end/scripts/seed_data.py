# DÉPENDANCES
import asyncio
import json
import os
import re
from app.db.database import init_db
from app.models.vehicle import Vehicle
from app.models.faq import FAQ

# FONCTIONS UTILITAIRES
def clean_json_from_tsx(filepath):
    """Lit un fichier .tsx et extrait le contenu JSON en supprimant les commentaires."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # On ne supprime que les commentaires qui sont en début de ligne (éventuellement précédés d'espaces)
    # Cela évite de casser les "https://" dans les URLs
    content = re.sub(r'^\s*//.*$', '', content, flags=re.MULTILINE)
    
    # Supprime les virgules traînantes à la fin des objets/tableaux
    content = re.sub(r',\s*([\]}])', r'\1', content)
    
    # strict=False permet d'être plus tolérant sur certains caractères de contrôle
    return json.loads(content, strict=False)

async def seed():
    # 1. Initialiser la connexion à la base de données
    await init_db()
    
    print("🚀 Début du peuplement de la base de données...")

    # 2. Peuplement des Véhicules
    try:
        vehicles_data = clean_json_from_tsx('DATA/vehicles-data.tsx')
        # On supprime les anciens documents pour éviter les doublons lors du test
        await Vehicle.find_all().delete()
        
        for item in vehicles_data:
            # On retire l'id manuel de Firebase pour laisser MongoDB générer le sien
            if "id" in item: del item["id"]
            vehicle = Vehicle(**item)
            await vehicle.insert()
        
        print(f"✅ {len(vehicles_data)} véhicules insérés.")
    except Exception as e:
        print(f"❌ Erreur lors de l'insertion des véhicules : {e}")

    # 3. Peuplement des FAQs
    try:
        faq_data = clean_json_from_tsx('DATA/faq-data.tsx')
        await FAQ.find_all().delete()
        
        for item in faq_data:
            faq = FAQ(**item)
            await faq.insert()
            
        print(f"✅ {len(faq_data)} questions FAQ insérées.")
    except Exception as e:
        print(f"❌ Erreur lors de l'insertion des FAQs : {e}")

    print("🏁 Peuplement terminé !")

if __name__ == "__main__":
    asyncio.run(seed())
