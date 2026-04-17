# 🚗 Concept M-Motors
Ce projet est structuré en deux parties principales pour séparer les responsabilités du client *(front-end)* et du serveur *(back-end)*.

## Structure du dossier
- `/front-end` : Application React + Vite + TypeScript + Tailwind CSS v4. Cette partie contient également l'intégration au service de base de données.
    > *Consulter le fichier **[README.md](./front-end/README.md)** pour les détails l'architecture du projet côté front-end.*
- `/back-end` : Architecture "Serverless" utilisant **Firebase** comme base de données NoSQL (Firestore) et pour la future authentification, ainsi que **Cloudinary** pour le stockage et l'optimisation des images.

## Installation et lancement

### Front-end
```bash
cd front-end
npm install
npm run dev
```

### Back-end
*À venir...*

---
> *Consulter le fichier **[PROJECT_CONFIG.md](./PROJECT_CONFIG.md)** pour les détails techniques de configuration.*
---
## Déroulement du projet

### Phase de conception et préparation
Le dossier **[Maquette](./maquette/)** contient la maquette du projet en HTML et Tailwind CSS.

- **Étape 1 :** J'ai utilisé **[Google Stitch](https://stitch.withgoogle.com/)** pour générer les maquettes comme point de départ.
- **Étape 2 :** J'ai affiné les maquettes en éditant certains éléments avec le logiciel de conception **[Pinegrow](https://www.pinegrow.com/)**.
- **Étape 3 :** À partir des fichiers de maquettes du dossier **[Maquette](./maquette/)**, j'ai procédé au découpage en identifiant les éléments et sections avec des commentaires, pour prévoir une meilleure adaptation en plusieurs composants React réutilisables et de les intégrer dans le dossier **[front-end](./front-end)**.
- **Étape 4 :** J'ai structuré l'architecture du projet en créant les dossiers et fichiers nécessaires à prévoir. Plus d'information sur cette structure dans le fichier **[README.md](./front-end/README.md)**.

### Phase de développement côté Front-end
- **Étape 1 :** Développement de chaque composant qui compose les différentes pages du site. Intégration de ces composants dans des pages de vues *(Landing-page-view, About-page-view, Catalog-page-view, Login-page-view, Customer-area-page-view)*.
- **Étape 2 :** Développement d'un **Design System**, afin d'avoir une cohérence dans chaque page.
    * Création du composant **[Typography](./front-end/src/components/design-system/Typography.tsx)** pour gérer le style du texte : *type de balise, taille, couleur, etc.*
    * Création du composant **[Button](./front-end/src/components/design-system/Button.tsx)** pour gérer l'apparence et les actions des boutons du site.
    * Création du composant **[Logo](./front-end/src/components/design-system/Logo.tsx)** pour gérer l'apparence du logo du site.
    * Création du composant **[Container](./front-end/src/components/design-system/Container.tsx)** pour avoir une cohérence dans chaque page.
        * Ce composant utilise des marges automatiques *(mx-auto)*, une largeur maximale stricte *(max-w-7xl)*, et des paddings qui s'adaptent progressivement selon les écrans *(px-4 sm:px-6 lg:px-8 xl:px-12)*. Cela évite que les textes ou le contenu ne touchent les bords sur téléphones ou tablettes, tout en limitant la largeur sur très grand écran pour préserver la lisibilité. Il utilise la propriété *as* pour s'adapter sémantiquement si besoin (bien que défini par défaut sur un simple *div*).
    * Intégration de ces composants dans les différentes pages du site. Fonctionnement par *props*, *children*, *switch case*.
- **Étape 3 :** Configuration des routes avec **[React Router](https://reactrouter.com/)** pour la navigation entre les pages.
- **Étape 4 :** Implémentation du composant **[Vehicle-Card](./front-end/src/pages/3-catalog-page/components/Vehicle-card-catalog.tsx)** pour afficher les véhicules du catalogue. Définition des types de données pour les véhicules dans le fichier **[Vehicle](./front-end/src/types/Vehicle.tsx)**.
- **Étape 5 :** Connexion et affichage dynamique des données du Front-end avec Firebase.
    * Installation du SDK Firebase `npm install firebase`.
    * Sécurisation des clés d'API avec un fichier `front-end/.env` *(ignoré par Git pour la sécurité)*.
    * Initialisation de la connexion Firebase dans le fichier de configuration **[firebase-config](./front-end/src/config/firebase-config.ts)**.
    * Centralisation de la récupération des données Firestore dans le composant **[Vehicles-grid-cards-catalog](./front-end/src/pages/3-catalog-page/components/Vehicles-grid-cards-catalog.tsx)** via un `useEffect`, transformant **[Vehicle-card-catalog](./front-end/src/pages/3-catalog-page/components/Vehicle-card-catalog.tsx)** en composant d'affichage pur (props).
    * Création du composant **[Pagination-catalog](./front-end/src/pages/3-catalog-page/components/features/Pagination-catalog.tsx)** et implémentation de la logique de gestion du nombre de page visible des véhicules du catalogue.
    * Limitation du nombre de véhicules affichés par page à 6 dans le composant **[Vehicles-grid-cards-catalog](./front-end/src/pages/3-catalog-page/components/Vehicles-grid-cards-catalog.tsx)**.
- **Étape 6 :** Création du composant **[Search-filter-catalog](./front-end/src/pages/3-catalog-page/components/features/Search-filter-catalog.tsx)** pour permettre de filtrer les véhicules du catalogue.
    * Fonctionnalité de recherche par marque et par budget en fonction de la base de données.
    * Gestion de l'état actif des boutons de filtre. Dès qu'un des boutons est cliqué, il devient le type de recherche "actif" *(sa couleur reste orange)* alors que l'autre bouton devient visuellement "secondaire" *(grisé). Le bouton "grisé" reste néanmoins 100% fonctionnel et interactif au survol, s'il est cliqué à son tour, les états s'inversent.
- **Étape 7 :** Organisation de l'architecture pour séparer la logique métier de l'interface graphique (Single Responsibility Principle).
    * Création du composant d'appels réseau autonome **[Get-vehicles](./front-end/src/api/Get-vehicles.tsx)** dans le dossier `api/` pour centraliser les appels généraux à l'API Firebase Firestore.
    * Création du sous-dossier `functions/` propre à la page catalogue listant la logique fine séparée de ses composants graphiques (logique complète du système de filtre **[Filter-vehicles-catalog](./front-end/src/pages/3-catalog-page/components/functions/Filter-vehicles-catalog.tsx)**, calcul et partition des numéros de pages **[Paginate-vehicles-catalog](./front-end/src/pages/3-catalog-page/components/functions/Paginate-vehicles-catalog.tsx)**, ainsi que la récupération isolée des noms de marques de véhicules **[Get-brands-catalog](./front-end/src/pages/3-catalog-page/components/functions/Get-brands-catalog.tsx)**).

### Phase de développement côté Back-end
- **Étape 1 :** Pour la page de catalogue de véhicules, stockage des images des véhicules dans **[Cloudinary](https://cloudinary.com/)**.
- **Étape 2 :** Configuration d'une base de donnée NoSQL avec Firebase, collection nommée `vehicles` avec la structure suivante  :
    *   **ID du document** : (`id` auto-généré dans Firebase)
    *   **Champs** :
        *   `brand` (string) # Marque du véhicule
        *   `model` (string) # Modèle du véhicule
        *   `mileage` (number) # Kilométrage du véhicule
        *   `imageUrl` (string) # Lien web de Cloudinary de l'image du véhicule
        *   `acquisition` (map) : # Acquisition du véhicule
            *   `purchasePrice` (number | null) # Prix d'achat du véhicule
            *   `rentalPrice` (number | null) # Prix de location du véhicule
            *   `isAvailableForSale` (boolean) # Disponibilité à la vente
            *   `isAvailableForRent` (boolean) # Disponibilité à la location
- **Étape 3 :** Configuration des règles Firestore pour la base de données pour n'autoriser que la lecture publique et l'écriture authentifiée *(pour l'admin)*.

## 👤 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
