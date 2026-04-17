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
├── assets/                     # Médias et ressources statiques du projet (favicon, images)
│
├── api/                        # Appels réseau et communication base de données
│   └── Get-vehicles.tsx        # Fonction de récupération des véhicules depuis Firebase
│
├── components/                 # Composants réutilisables
│   ├── design-system/          # Composants de base d'interface (Container, Typography, Button, Logo)
│   ├── layout/                 # Composants de structure (RootLayout)
│   ├── navigation/             # Composants de navigation (Header, Footer)
│   └── seo/                    # Composants liés au référencement (Seo)
│
├── config/                     # Configuration des services tiers
│   └── firebase-config.ts      # Initialisation et export de l'instance Firebase
│
├── pages/                      # Différentes pages de l'application
│   ├── 1-landing-page/         # Composants et vue pour la page "d'accueil"
│   ├── 2-about-page/           # Composants et vue pour la page "À propos"
│   ├── 3-catalog-page/         # Composants et vue pour la page du "Catalogue"
│   │   └── components/         # Sous-composants propres à la page
│   │       └── features/       # Composants de fonctionnalités (Filtres, Pagination)
│   │       └── functions/      # Fonctions utilitaires propres à la page
│   ├── 4-contact-page/         # Composants et vue pour la page de "Contact"
│   ├── 5-login-page/           # Composants et vue pour la page de "Connexion"
│   └── 6-customer-area/        # Composants et vue pour la page de "l'Espace client"
│
├── routes/                     # Fichiers de configuration du routage
│   └── router.tsx              # Définition des routes avec React Router
│
└── types/                      # Interfaces TypeScript partagées
    └── Vehicle.tsx             # Définition du contrat de données "Vehicle"
```

## 👤 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
