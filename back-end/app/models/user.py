# DÉPENDANCES
from beanie import Document
from datetime import datetime
from typing import Optional
from pydantic import EmailStr, Field

# MODÈLE DE DONNÉES (MONGODB COLLECTION)
class User(Document):
    """
    Représente un utilisateur dans la collection 'users' de MongoDB.
    Utilise Beanie pour le mapping Objet-Document et Pydantic pour la validation.
    """
    firstName: str = ""
    lastName: str = ""
    displayName: Optional[str] = ""
    email: EmailStr
    # Le mot de passe haché est exclu des réponses API pour la sécurité
    hashed_password: str = Field(exclude=True)
    phoneNumber: Optional[str] = ""
    address: Optional[str] = ""
    creationDate: datetime = Field(default_factory=datetime.now)

    class Settings:
        # Nom de la collection dans MongoDB Atlas
        name = "users"

    def model_dump(self, **kwargs):
        """
        Surcharge de la méthode de sérialisation pour normaliser l'ID.
        Transforme l'ObjectId de MongoDB en une chaîne 'id' lisible par le Front-End.
        """
        d = super().model_dump(**kwargs)
        if self.id:
            d["id"] = str(self.id)
        return d
