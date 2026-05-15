from beanie import Document
from datetime import datetime
from typing import Optional
from pydantic import EmailStr, Field

class User(Document):
    firstName: str = ""
    lastName: str = ""
    displayName: Optional[str] = ""
    email: EmailStr
    hashed_password: str = Field(exclude=True)
    phoneNumber: Optional[str] = ""
    address: Optional[str] = ""
    creationDate: datetime = Field(default_factory=datetime.now)

    class Settings:
        name = "users"

    def model_dump(self, **kwargs):
        d = super().model_dump(**kwargs)
        if self.id:
            d["id"] = str(self.id)
        return d
