from passlib.context import CryptContext
try:
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    h = pwd_context.hash("test")
    print(f"Succès ! Hash : {h}")
except Exception as e:
    print(f"Erreur : {e}")
