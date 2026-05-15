# DÉPENDANCES
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# CONFIGURATION & BASE DE DONNÉES
from app.db.database import init_db
from app.api.endpoints import vehicles, faq, users, auth

# INITIALISATION DE L'APPLICATION
app = FastAPI(
    title="M-Motors API",
    description="API pour la gestion du catalogue de véhicules M-Motors",
    version="1.0.0"
)

# CONFIGURATION DU MIDDLEWARE (CORS)
# Autorise les requêtes provenant du Front-End (Vite/React)
# Note : Obligation de lister les origins car allow_credentials=True
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://m-motors-skiesland.netlify.app",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ENREGISTREMENT DES ROUTEURS (ENDPOINTS)
app.include_router(vehicles.router, prefix="/api/vehicles", tags=["vehicles"])
app.include_router(faq.router, prefix="/api/faqs", tags=["faq"])
app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])

# ÉVÉNEMENTS AU DÉMARRAGE
@app.on_event("startup")
async def startup_event():
    """Initialise la connexion à MongoDB Atlas via Beanie au lancement du serveur."""
    await init_db()

# ROUTE RACINE (TEST)
@app.get("/")
async def root():
    return {"message": "Bienvenue sur l'API M-Motors - Le serveur est opérationnel."}
