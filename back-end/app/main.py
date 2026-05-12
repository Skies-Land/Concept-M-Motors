from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.database import init_db
from app.api.endpoints import vehicles

app = FastAPI(
    title="M-Motors API",
    description="API pour la gestion du catalogue de véhicules M-Motors",
    version="1.0.0"
)

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusion des routes
app.include_router(vehicles.router, prefix="/api/vehicles", tags=["vehicles"])

@app.on_event("startup")
async def startup_event():
    await init_db()

@app.get("/")
async def root():
    return {"message": "Bienvenue sur l'API M-Motors"}
