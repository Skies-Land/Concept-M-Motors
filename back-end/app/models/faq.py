from beanie import Document

class FAQ(Document):
    question: str
    answer: str

    class Settings:
        name = "faqs"  # Nom de la collection dans MongoDB
