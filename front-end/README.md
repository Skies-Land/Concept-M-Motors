## 📂 ARCHITECTURE DU PROJET (CÔTÉ FRONT-END)

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
│   ├── Create-user.tsx         # Fonction de création d'utilisateur dans la collection Firebase `users`
│   ├── Get-vehicles.tsx        # Fonction de récupération des véhicules depuis la collection Firebase `vehicles`
│   ├── Get-brands-catalog.tsx  # Fonction de récupération des données par "marque" de véhicule depuis la collection Firebase `vehicles`
│   ├── Get-description-vehicle-page.tsx  # Fonction de récupération des données par "véhicule" depuis la collection Firebase `vehicles`
│   ├── Get-user.tsx            # Fonction de récupération du profil utilisateur depuis la collection Firebase `users`
│   └── Get-faq.tsx             # Fonction de récupération des questions et réponses de la section FAQ depuis la collection Firebase `faq`
│
├── components/                 # Composants réutilisables
│   ├── design-system/          # Composants de base d'interface (Container, Typography, Button, Logo, Input)
│   ├── layout/                 # Composants de structure (RootLayout)
│   ├── navigation/             # Composants de navigation (Header, Footer, ProtectedRoute, GuestRoute, User-account)
│   └── seo/                    # Composants liés au référencement (Seo)
│
├── config/                     # Configuration des services tiers
│   └── firebase-config.ts      # Initialisation et export de l'instance Firebase
│
├── constants/                  # Constantes du projet
│   └── Session-status.tsx      # Constantes pour les statuts de session (GUEST, REGISTERED)
│
├── context/                    # Contexts React
│   └── AuthUserContext.tsx     # Context pour la gestion de l'utilisateur connecté
│
├── pages/                      # Différentes pages de l'application
│   ├── 1-landing-page/         # Composants et vue pour la page "d'accueil"
│   ├── 2-about-page/           # Composants et vue pour la page "À propos"
│   ├── 3-catalog-page/         # Composants et vue pour la page du "Catalogue"
│   │   └── components/         # Sous-composants propres à la page
│   │       └── features/       # Composants de fonctionnalités (Filtres, Pagination)
│   │       └── functions/      # Hooks de logique fonctionnelle
│   ├── 4-vehicle-page/         # Composants et vue pour la page de description d'un "Véhicule"
│   ├── 5-contact-page/         # Composants et vue pour la page de "Contact"
│   │   └── components/         # Sous-composants propres à la page
│   │       └── module-form/    # Module pour le formulaire de contact
│   ├── 6-login-page/           # Composants et vue pour la page de "Connexion / Inscription"
│   │   └── components/         # Sous-composants propres à la page
│   │       └── functions/      # Hooks de logique fonctionnelle (Connexion, Inscription)
│   ├── 7-account-page/         # Composants et vue pour la page de "l'Espace client"
│   │   └── components/         # Sous-composants propres à la page
│   │       └── features/       # Composants de fonctionnalité (Barre latérale)
│   │       └── functions/      # Hooks de logique fonctionnelle
│   └── 8-error-page/           # Composants et vue pour la page "d'erreur 404"
│
├── routes/                     # Fichiers de configuration du routage
│   └── router.tsx              # Définition des routes avec React Router
│
└── types/                      # Interfaces TypeScript partagées
    ├── FAQItem.tsx            # Définition du contrat de données "FAQItem"
    ├── UserType.tsx            # Définition du contrat de données "User"
    ├── Vehicle.tsx             # Définition du contrat de données "Vehicle"
    └── Session-status-type.tsx # Définition du contrat de type TypeScript pour garantir qu'aucune valeur de statut invalide ne soit utilisée dans le code.
```

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**