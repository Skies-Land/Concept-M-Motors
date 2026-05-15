# DÉPENDANCES
from beanie import Document

# MODÈLE DE DONNÉES (MONGODB COLLECTION)
class FAQ(Document):
    """
    Représente une question/réponse de la FAQ dans la collection 'faqs' de MongoDB.
    """
    question: str
    answer: str

    class Settings:
        # Nom de la collection dans MongoDB
        name = "faqs"

    def model_dump(self, **kwargs):
        """
        Normalisation de l'ID pour le Front-End.
        Convertit l'identifiant MongoDB en chaîne de caractères.
        """
        d = super().model_dump(**kwargs)
        if self.id:
            d["id"] = str(self.id)
        return d
