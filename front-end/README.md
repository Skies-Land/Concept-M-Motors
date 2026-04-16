📂 Architecture du projet

```text
├── .env                        # Variables d'environnement (Secrètes)
├── .env.example                # Modèle de variables d'environnement à remplir
│
src/
│   App.tsx                     # Composant principal (Provider de navigation)
│   main.tsx                    # Point d'entrée React
│   index.css                   # Styles CSS globaux (Tailwind)
│
├── assets/                     # Médias et ressources statiques du projet
│
├── components/                 # Composants réutilisables
│   ├── design-system/          # Composants de base d'interface (Typography)
│   ├── layout/                 # Composants de structure (RootLayout, Container)
│   ├── navigation/             # Composants de navigation (Header, Footer)
│   └── seo/                    # Composants liés au référencement (Seo)
│
├── config/                     # Configuration des services tiers
│   └── firebase-config.ts      # Initialisation et export de l'instance Firebase
│
├── pages/                      # Différentes pages de l'application
│   ├── 1-landing-page/         # Composants et vue pour la page d'accueil
│   ├── 2-about-page/           # Composants pour la page "À propos"
│   ├── 3-catalog-page/         # Composants pour le catalogue
│   ├── 4-login-page/           # Composants pour la page de connexion
│   └── 5-customer-area/        # Composants pour l'espace client
│
├── routes/                     # Fichiers de configuration du routage
│   └── router.tsx              # Définition des routes avec React Router
│
└── types/                      # Interfaces TypeScript partagées
    └── Vehicle.tsx             # Définition du contrat de données "Vehicle"
```


## 👤 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
