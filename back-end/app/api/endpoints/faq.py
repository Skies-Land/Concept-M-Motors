# DÉPENDANCES
from fastapi import APIRouter, HTTPException
from typing import List

# CONFIGURATION & MODÈLES
from app.models.faq import FAQ

# INITIALISATION DU ROUTER
router = APIRouter()

# ENDPOINTS (ROUTES API)
@router.get("/", response_model=List[FAQ])
async def get_all_faqs():
    """
    Récupère la liste de toutes les questions et réponses de la FAQ.
    Utilisé par la page 'À propos' pour répondre aux questions fréquentes des utilisateurs.
    """
    faqs = await FAQ.find_all().to_list()
    return faqs

@router.get("/{faq_id}", response_model=FAQ)
async def get_faq(faq_id: str):
    """
    Récupère une entrée spécifique de la FAQ par son ID MongoDB.
    """
    faq = await FAQ.get(faq_id)
    if not faq:
        raise HTTPException(status_code=404, detail="Question non trouvée")
    return faq
