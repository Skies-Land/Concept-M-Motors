from beanie import Document

class FAQ(Document):
    question: str
    answer: str

    class Settings:
        name = "faqs"

    def model_dump(self, **kwargs):
        """Assure que 'id' est présent et converti en string dans le JSON."""
        d = super().model_dump(**kwargs)
        d["id"] = str(self.id)
        return d
