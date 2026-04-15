# 🚗 Concept M-Motors
Ce projet est structuré en deux parties principales pour séparer les responsabilités du client *(front-end)* et du serveur *(back-end)*.

## Structure du dossier
- `/front-end` : Application React + Vite + TypeScript + Tailwind CSS v4.
- `/back-end` : (En cours de configuration) 

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
> Consulter le fichier **[PROJECT_CONFIG.md](./PROJECT_CONFIG.md)** pour les détails techniques de configuration.
---
## Phase de conception et préparation
Le dossier **[Maquette](./Maquette)** contient la maquette du projet en HTML et Tailwind CSS.

- **Étape 1 :** J'ai utilisé **[Google Stitch](https://stitch.google/)** pour générer les maquettes comme point de départ.
- **Étape 2 :** J'ai affiné les maquettes en éditant certains éléments avec le logiciel de conception **[Pinegrow](https://www.pinegrow.com/)**.
- **Étape 3 :** À partir des fichiers de maquettes du dossier **[Maquette](./Maquette)**, j'ai procédé au découpage en identifiant les éléments et sections avec des commentaires, pour prévoir une meilleure adaptation en plusieurs composants React réutilisables et de les intégrer dans le dossier **[front-end](./front-end)**.
- **Étape 4 :** J'ai structurer l'architecture du projet en créant les dossiers et fichiers nécessaires à prévoir. Plus d'information sur cette structure dans le fichier **[README.md](./front-end/README.md)**.

## Phase de développement côté Front-end
- **Étape 1 :** Développement de chaque composant qui compose les différentes pages du site. Intégration de ces composants dans des pages de vues *(Landing-page-view, About-page-view, Catalog-page-view, Login-page-view, Customer-area-page-view)*.
- **Étape 2 :** Configuration des routes avec **[React Router](https://reactrouter.com/)** pour la navigation entre les pages.
- **Étape 3 :** Implémentation du composant **[Container](./front-end/src/components/layout/Container.tsx)** pour avoir une cohérence dans chaque page.
    Ce composant utilise des marges automatiques *(mx-auto)*, une largeur maximale stricte *(max-w-7xl)*, et des paddings qui s'adaptent progressivement selon les écrans *(px-4 sm:px-6 lg:px-8 xl:px-12)*. Cela évite que les textes ou le contenu ne touchent les bords sur téléphones ou tablettes, tout en limitant la largeur sur très grand écran pour préserver la lisibilité. Il utilise la propriété *as* pour s'adapter sémantiquement si besoin (bien que défini par défaut sur un simple *div*).
- **Étape 4 :** Configuration du composant **[VehicleCard](./front-end/src/components/catalog/VehicleCard.tsx)** pour afficher les véhicules du catalogue. Définition des types de données pour les véhicules dans le fichier **[Vehicle.tsx](./front-end/src/types/Vehicle.tsx)**.

## Phase de développement côté Back-end
- **Étape 1 :** Stockage des images de véhicule de la base de données dans **[Cloudinary](https://cloudinary.com/)**.




## 👤 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
