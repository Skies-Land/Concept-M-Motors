from fastapi import APIRouter, HTTPException
from typing import List
from app.models.faq import FAQ

router = APIRouter()

@router.get("/", response_model=List[FAQ])
async def get_all_faqs():
    """Récupère toutes les questions de la FAQ."""
    faqs = await FAQ.find_all().to_list()
    return faqs

@router.get("/{faq_id}", response_model=FAQ)
async def get_faq(faq_id: str):
    """Récupère une question spécifique par son ID."""
    faq = await FAQ.get(faq_id)
    if not faq:
        raise HTTPException(status_code=404, detail="Question non trouvée")
    return faq
