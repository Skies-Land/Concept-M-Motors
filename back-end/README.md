# 🏗️ ARCHITECTURE DU PROJET (CÔTÉ BACK-END)

Ce dossier contient l'API personnalisée développée avec **FastAPI** et **MongoDB Atlas** pour le projet Concept M-Motors.

## 📂 Structure des dossiers

```text
back-end/
├── app/
│   ├── api/                    # Logique des routes et endpoints
│   │   └── endpoints/          # Points d'accès de l'API
│   │       ├── auth.py         # Inscription, Connexion et JWT
│   │       ├── users.py        # Gestion des profils utilisateurs
│   │       ├── vehicles.py     # Routes CRUD pour le catalogue
│   │       └── faqs.py         # Récupération de la FAQ
│   ├── core/                   # Configuration et Sécurité (Hachage, JWT)
│   ├── db/                     # Initialisation de la connexion BDD (Beanie)
│   ├── models/                 # Modèles de données (Documents Beanie / MongoDB)
│   ├── schemas/                # Schémas de validation (Pydantic)
│   └── main.py                 # Point d'entrée de l'application (FastAPI)
├── scratch/                    # Scripts utilitaires (peuplement, tests)
├── .env                        # Variables d'environnement (MongoDB URL, Secret Key)
└── requirements.txt            # Dépendances Python
```

## 🛠️ Stack Technique
- **FastAPI** : Framework web asynchrone ultra-performant.
- **Beanie** : ODM (Object Document Mapper) pour MongoDB, utilisant Pydantic pour la validation.
- **Motor** : Driver asynchrone pour MongoDB.
- **Uvicorn** : Serveur ASGI pour l'exécution de l'API.


## 📜 Documentation Interactive
Une fois le serveur lancé, accédez à la documentation automatique de l'API :
- **Swagger UI** : [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc** : [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
