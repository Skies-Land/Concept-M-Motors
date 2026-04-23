# 🚗 CONCEPT M-MOTORS
**M-Motors** *(entreprise fictive)*, leader dans le secteur des véhicules d'occasion depuis 1987, opère une transformation digitale majeure. Avec un réseau de 800 collaborateurs et un parc servant plus d'un million de clients, l'entreprise modernise son infrastructure pour répondre aux nouveaux usages.

### **OBJECTIF DU MVP (Minimum Viable Product)**
Le projet consiste à développer une plateforme web modernisée visant à digitaliser l'intégralité du tunnel de vente et à introduire un service de LLD (Location longue durée).

#### **FONCTIONNALITÉS CLÉS :**
* **Catalogue** : consultation des véhicules disponibles avec affichage des prix d'achat comptant et de location comprenant une grille de tarification pour les mensualités.
* **Espace client** : permettant de suivre l'état d'avancement des dossiers de souscription. Module de dépôt dématérialisé et sécurisé des pièces justificatives.

---

# 📜 Table des matières
- **[🧰 STACKS UTILISÉS](#stacks-utilises)**
- **[⚙️ INSTALLATION ET LANCEMENT](#installation-et-lancement)**
- **[🔄 DÉROULEMENT DU PROJET](#deroulement-du-projet)**
    - **[🎨 PHASE 1 : CONCEPTION ET PRÉPARATION | MAQUETTAGE](#phase-1--conception-et-preparation--maquettage)**
    - **[💻 PHASE 2 : DÉVELOPPEMENT](#phase-2--developpement)**
        - **[🧩 Design System](#design-system-)**
        - **[🔍 Navigation & Référencement](#navigation--referencement-)**
        - **[🏗️ Structure du projet](#structure-du-projet-)**
        - **[🗄️ Base de données des véhicules](#preparation-et-configuration-de-la-base-de-donnees-des-vehicules)**
        - **[🖥️ Affichage dynamique du catalogue](#affichage-dynamique-de-la-page-catalogue-)**
        - **[🚗 Description d'un véhicule](#affichage-dynamique-de-la-page-description-dun-vehicule-)**
        - **[👤 Espace client](#espace-client)**
        - **[📄 Autres pages](#autres-pages)**
    - **[🧪 PHASE 3 : OPTIMISATION ET TESTING](#phase-3--optimisation-et-testing)**
    - **[🚀 PHASE 4 : DÉPLOIEMENT](#phase-4--deploiement)**
- **[👨‍💻 Skies-Land - Jonathan Araldi](#skies-land---jonathan-araldi)**

---

## 🧰 **STACKS UTILISÉS**
- `front-end` : Application développée avec **[Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)**. Cette partie contient également l'intégration au service de base de données avec **[Firebase](https://firebase.google.com/)**.
    > 💡*Consulter le fichier **[README.md](./front-end/README.md)** pour les détails de l'architecture du projet côté front-end.*
- `back-end` : Architecture "Serverless" utilisant **[Firebase](https://firebase.google.com/)** comme base de données NoSQL (Firestore) et pour la gestion de l'authentification. **[Cloudinary](https://cloudinary.com/)** pour le stockage des images.
    > 💡*Consulter le fichier **[PROJECT_CONFIG.md](./PROJECT_CONFIG.md)** pour les détails techniques de configuration.*

## ⚙️ **INSTALLATION ET LANCEMENT**
```bash
# Accéder au dossier front-end
cd front-end

# Installer les dépendances
npm install

# Lancer le développement
npm run dev
```

---

## 🔄 **DÉROULEMENT DU PROJET**

### 🎨 **PHASE 1 : CONCEPTION ET PRÉPARATION | MAQUETTAGE**
- **Étape 1 :** J'ai utilisé **[Google Stitch](https://stitch.withgoogle.com/)** pour générer les maquettes du site.
- **Étape 2 :** J'ai affiné les maquettes en éditant certains éléments avec le logiciel de conception **[Pinegrow](https://www.pinegrow.com/)**.
- **Étape 3 :** À partir des fichiers du dossier **[Maquette](./maquette/)**, j'ai procédé au découpage en identifiant les éléments et sections, avec l'ajout de commentaires, dans le but d'identifier et prévoir les composants React nécessaires dans l'architecture du dossier **[front-end](./front-end)**.
> 💡*L'utilisation de **[Google Stitch](https://stitch.withgoogle.com/)** m'a permis d'avoir une base de départ que j'ai pu **peaufiner** avec le logiciel **[Pinegrow](https://www.pinegrow.com/)** pour démarrer mon développement.*


### 💻 **PHASE 2 : DÉVELOPPEMENT**

#### **🧩 DESIGN SYSTEM :**
* Composant **[Typography](./front-end/src/components/design-system/Typography.tsx)** : gérant le style du texte : *type de balise, taille, couleur, etc.*
* Composant **[Button](./front-end/src/components/design-system/Button.tsx)** : gérant l'apparence et les actions des boutons du site.
* Composant **[Logo](./front-end/src/components/design-system/Logo.tsx)** : gérant l'apparence du logo du site.
* Composant **[Container](./front-end/src/components/design-system/Container.tsx)** : gérant la cohérence dans chaque page. Ce composant utilise des marges automatiques *(mx-auto)*, une largeur maximale stricte *(max-w-7xl)*, et des paddings qui s'adaptent progressivement selon les écrans *(px-4 sm:px-6 lg:px-8 xl:px-12)*. Cela évite que les textes ou le contenu ne touchent les bords sur téléphones ou tablettes, tout en limitant la largeur sur très grand écran pour préserver la lisibilité. Il utilise la propriété `as` pour s'adapter sémantiquement si besoin (bien que défini par défaut sur un simple `div`).
* Intégration de ces composants dans les différentes pages du site. Fonctionnement par `props`, `children` et `switch case` notamment pour les composants `Button` et `Typography`.
> 💡*Le développement d'un **[Design System](./front-end/src/components/design-system)** m'a servi à **adopter** un design cohérent qui se réplique sur toutes les pages du site et facilement modifiable depuis ces composants.*

#### **🔍 NAVIGATION & RÉFÉRENCEMENT :**
* Composant **[Header](./front-end/src/components/navigation/Header.tsx)** : gérant l'en-tête du site. Regroupant logo, menu de navigation, bouton de connexion.
* Composant **[Footer](./front-end/src/components/navigation/Footer.tsx)** : gérant le pied de page du site. Regroupant logo, liens de navigation, réseaux sociaux, mentions légales.
* Composant **[RootLayout](./front-end/src/components/layout/RootLayout.tsx)** : Servant à structurer la page en intégrant les éléments communs (`Header`, `main`, `Footer`).
* Composant **[SEO](./front-end/src/components/seo/Seo.tsx)** : servant à identifier la page par son titre et sa description.
* Composant **[router.tsx](./front-end/src/routes/router.tsx)** : gérant les routes pour la navigation entre les pages, avec la dépendance **[React Router](https://reactrouter.com/)**
> 💡*Cette structure de navigation me sert à avoir une cohérence des éléments React à charger entre chaque page. Plus d'information sur cette structure dans le fichier **[README.md](./front-end/README.md)**.*

#### **🏗️ STRUCTURE DU PROJET :** 
Chaque partie du site est découpée par dossier qui représente une page. Chaque page est **regroupée** dans ce dossier **[pages](./front-end/src/pages)**. Dans chaque dossier de page, un ou deux sous-dossiers.
* `src/pages/nom-de-la-page/` : Dossier représentant la page et les sous-dossiers associés.
* `src/pages/nom-de-la-page/components/` : Dossier regroupant les différentes éléments graphiques qui composent la page.
* `src/pages/nom-de-la-page/features/` : Dossier regroupant des petites fonctionnalités clés de la page.
* `src/pages/nom-de-la-page/functions/` : Dossier regroupant les fonctions de logique de la page.
>💡*Cette structure de dossier principale par page et de sous-dossier, me sert à séparer la logique fonctionnelle du contenu graphique de la page. Le but **étant** que le code soit plus facilement maintenable et plus facile à comprendre. Plus d'information sur cette structure dans le fichier **[README.md](./front-end/README.md)**.*
    

#### **🗄️ PRÉPARATION ET CONFIGURATION DE LA BASE DE DONNÉES DES VÉHICULES** :
* Pour la page de catalogue de véhicules, j'ai choisi d'opter pour **[Firebase](https://firebase.google.com/)** pour stocker les données des véhicules. Configuré avec **[Firestore](https://firebase.google.com/docs/firestore?hl=fr)** comme base de données NoSQL. 
* J'ai configuré une collection de données nommée `vehicles` avec la structure suivante  :

| Champ | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | ID auto-généré par Firestore |
| `brand` | `string` | Marque du véhicule |
| `model` | `string` | Modèle du véhicule |
| `category` | `string` | Catégorie (ex: Berline, SUV, Sport) |
| `year` | `number` | Année de mise en circulation |
| `mileage` | `number` | Kilométrage |
| `slogan` | `string` | Accroche commerciale |
| `imageUrl` | `string` | URL Cloudinary de l'image principale |
| `description` | `string` | Description détaillée |
| `technicalSpecs` | `map` | Objet contenant les performances (voir ci-dessous) |
| `acquisition` | `map` | Détails financiers et disponibilité (voir ci-dessous) |

**Détails des objets (Maps) :**

* **`technicalSpecs`** :
    * `acceleration` (string) : Accélération du véhicule
    * `topSpeed` (number) : Vitesse max en km/h
    * `power` (number) : Puissance en chevaux
    * `engine` (string) : Type de motorisation
* **`acquisition`** :
    * `purchasePrice` (number \| null) : Prix de vente
    * `rentalPrice` (number \| null) : Loyer mensuel
    * `isAvailableForSale` (boolean) : Disponibilité à la vente
    * `isAvailableForRent` (boolean) : Disponibilité à la location

**Interface TypeScript correspondante :**

```typescript
interface Vehicle {
  id: string;
  brand: string;
  model: string;
  category: string;
  year: number;
  mileage: number;
  slogan: string;
  imageUrl: string;
  description: string;
  technicalSpecs: {
    acceleration: string;
    topSpeed: number;
    power: number;
    engine: string;
  };
  acquisition: {
    purchasePrice: number | null;
    rentalPrice: number | null;
    isAvailableForSale: boolean;
    isAvailableForRent: boolean;
  };
}
```

* Dans l'interface Firebase, j'ai configuré les règles Firestore pour la base de données pour n'autoriser que la lecture publique et l'écriture authentifiée (pour l'admin)
* Concernant les images de chaque véhicule, elles sont stockées avec le service de stockage cloud **[Cloudinary](https://cloudinary.com/)**.
* J'ai initialisé la connexion Firebase dans le front-end avec le fichier de configuration **[firebase-config](./front-end/src/config/firebase-config.ts)**. Les informations de connexion sont sécurisées via des variables d'environnement `.env` *(mais ignoré par Git pour la sécurité)*.
> 💡 *J'ai préféré utiliser **[Firebase](https://firebase.google.com/)** pour la gestion des données des véhicules, car connaissant déjà cette technologie, il **était** plus facile pour moi de l'implémenter dans le projet.*

#### **🖥️ AFFICHAGE DYNAMIQUE DE LA PAGE CATALOGUE :**
* Le composant **[Catalog-page-view](./front-end/src/pages/3-catalog-page/Catalog-page-view.tsx)** sert à afficher la page de catalogue du site. Il est composée de plusieurs éléments :
    * **[Vehicle-card-catalog](./front-end/src/pages/3-catalog-page/components/2-1-Vehicle-card-catalog-page.tsx)** : servant à identifer et présenter les données de véhicule sous forme d'une carte. Les informations sont identifiées via des `props` et intégrer au composant suivant.
    * **[Vehicles-grid-cards-catalog](./front-end/src/pages/3-catalog-page/components/2-2-Vehicles-grid-cards-catalog-page.tsx)** : servant à gérer la disposition des véhicules du catalogue, sous forme d'une grille. Ce composant utilise la fonction **[GetVehicles](./front-end/src/api/Get-vehicles.tsx)** qui sert à récupérer les données de la collection `vehicles` de la base de données Firestore. `useEffect` est utilisé pour récupérer les données une seule fois au montage du composant.

* **Fonctionnalités clés liées à cette page :**
    * **[Pagination-catalog](./front-end/src/pages/3-catalog-page/components/features/Pagination-catalog-page.tsx)** : Gérant l'affichage de la pagination de la page de catalogue. La fonction de logique est **séparée** dans le composant **[Paginate-vehicles-catalog](./front-end/src/pages/3-catalog-page/components/functions/Paginate-vehicles-catalog-page.tsx)**.
    * **[Search-filter-catalog](./front-end/src/pages/3-catalog-page/components/features/Search-filter-catalog-page.tsx)** : Gérant l'affichage de la recherche et du filtrage des véhicules du catalogue. Ce composant est associé à deux fonctions de logique :
        * **[Get-brands-catalog](./front-end/src/api/Get-brands-catalog.tsx)** : sert à récupérer les données par marque de véhicule depuis la collection Firebase `vehicles`.
        * **[Filter-vehicles-catalog](./front-end/src/pages/3-catalog-page/components/functions/Filter-vehicles-catalog-page.tsx)** : sert à filtrer les véhicules du catalogue en fonction de la marque et du budget.

#### **🚗 AFFICHAGE DYNAMIQUE DE LA PAGE DESCRIPTION D'UN VÉHICULE :**
* Le composant **[Vehicle-page-view](./front-end/src/pages/4-vehicle-page/Vehicle-page-view.tsx)** sert à afficher la page de description d'un véhicule en fonction de son ID et des `props` sélectionnées dans chaque sous-composants.
    * **[Hero-vehicle page](./front-end/src/pages/4-vehicle-page/components/1-Hero-vehicle-page.tsx)** : sert à afficher la bannière de la page de description d'un véhicule. L'image est récupérée par la propriété -> `vehicle.imageUrl` de la base de données.
    * **[Description-vehicle-page](./front-end/src/pages/4-vehicle-page/components/2-Description-vehicle-page.tsx)** : sert à afficher un texte explicatif sur le véhicule et ses informations techniques.
    * **[Acquisition-method-vehicle-page](./front-end/src/pages/4-vehicle-page/components/3-Acquisition-method-vehicle-page.tsx)** : sert à afficher deux options d'acquisition (achat ou location) avec les prix correspondants à l' `ID` du véhicule.
    * **[Tarif-catalog-page](./front-end/src/pages/4-vehicle-page/components/4-Tarif-catalog-vehicle-page.tsx)** : sert à afficher une grille tarifaire pour la méthode d'acquisition par location en fonction du prix d'achat du véhicule correspondant à son `ID`. Une formule est utilisée pour calculer le tarif de location en fonction du nombre de mois (36, 48, 72) choisie pour la location.
    * **[Get-description-vehicle](./front-end/src/api/Get-description-vehicle-page.tsx)** : est la fonction de logique permettant de récupérer les détails d'un véhicule spécifique depuis la base de données. Cette fonction est **implémentée** dans le composant **[Vehicle-page-view](./front-end/src/pages/4-vehicle-page/Vehicle-page-view.tsx)**.

> 💡*Les informations textuelles et les images de chaque véhicule ont été générées par IA afin de disposer de contenu à développer pour être affiché sur le site.*

#### **👤 ESPACE CLIENT**
* **Formulaire de connexion / inscription / mot de passe oublié :**
   * Le composant **[Login-page-view](./front-end/src/pages/6-login-page/Login-page-view.tsx)** sert à afficher la page de connexion/inscription et mot de passe oublié pour accéder à l'espace client. Le composant gère l'affichage conditionnel des 3 sous-formulaires :
    * **[Login-form](./front-end/src/pages/6-login-page/components/1-Login-form.tsx)** : sert à afficher le formulaire principale pour la connexion. Au clic sur *"mot de passe oublié ?"*, le composant **[Forget-password-form](./front-end//src//pages//6-login-page//components/3-Forget-password-form.tsx)** est affiché à la place du formulaire de connexion, pour permettre à l'utilisateur de réinitialiser son mot de passe. 
    * **[Register-form](./front-end/src/pages/6-login-page/components/2-Register-form.tsx)** : sert à afficher le formulaire pour l'inscription.

* **Gestion de la session utilisateur :**
    * Activation de l'authentification par e-mail/mot de passe avec **[Firebase Authentication](./https://firebase.google.com/docs/auth)**.
    * **[AuthUserProvider](./front-end/src/context/AuthUserContext.tsx)** : chef d'orchestre de la session utilisateur. Il surveille l'état de connexion en temps réel via Firebase et centralise les données pour l'ensemble de l'application via la Context API de React.
    * **[Get-user](./front-end/src/api/Get-user.tsx)** : logique permettant de récupérer le profil complet de l'utilisateur dans Firestore (collection `users`) en synchronisation avec son identifiant d'authentification (UID).
    * **Hook `useAuth()`** : interface simplifiée permettant aux composants (comme le **Header**) de réagir dynamiquement au statut de connexion.

* **Sécurisation et Typage :**
    * **[Session-status.tsx](./front-end/src/constants/Session-status.tsx)** : définit les constantes de valeurs (`GUEST`, `REGISTERED`) utilisées pour la logique de navigation et d'affichage.
    * **[Session-status-type.tsx](./front-end/src/types/Session-status-type.tsx)** : définit le contrat de type TypeScript pour garantir qu'aucune valeur de statut invalide ne soit utilisée dans le code.

> 💡 *La session est persistante : grâce à l'initialisation de `getAuth()` dans [firebase-config](./front-end/src/config/firebase-config.ts) et à l'écouteur `onAuthStateChanged` du composant [AuthUserProvider](./front-end/src/context/AuthUserContext.tsx), Firebase récupère automatiquement le jeton de connexion stocké dans le navigateur. L'utilisateur reste ainsi connecté même après avoir actualisé la page ou fermé son navigateur.*



#### **📄 AUTRES PAGES**
* **[About-page-view](./front-end/src/pages/2-about-page/About-page-view.tsx)** : servant à afficher une brève description de l'entreprise, les services qu'elle propose et une section FAQ. **[Get-faq](./front-end/src/api/Get-faq.tsx)** : est la fonction de logique permettant de récupérer les questions et réponses de la section FAQ depuis la base de données. Cette fonction est **implémentée** dans le composant **[FAQAboutPage](./front-end/src/pages/2-about-page/components/4-FAQ-about-page.tsx)**. 
J'ai configuré cette collection de données nommée `faq` avec la structure suivante  :

| Champ | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | ID auto-généré par Firestore |
| `question` | `string` | La question posée |
| `answer` | `string` | La réponse à la question |

**Interface TypeScript correspondante :**

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```
> 💡*J'ai choisi d'externaliser les données de la section FAQ vers Firebase, afin de faciliter la gestion des questions/réponses (ajout, modification, suppression) pour l'équipe back-office de M-Motors.*

* **[Contact-page-view](./front-end/src/pages/5-contact-page/Contact-page-view.tsx)** : servant à afficher un formulaire de contact pour permettre aux utilisateurs de contacter l'entreprise en choisisant parmis un menu déroulant le sujet de leur demande. <br> **⚠️ Ce formulaire n'est pas relié à une base de données et n'est donc pas fonctionnel. Il est présent à titre de présentation.⚠️**
* **[Error-page-view](./front-end/src/pages/8-error-page/Error-page-view.tsx)** : servant à afficher une page pour informer l'utilisateur que le contenu demandé n'existe pas *(ou n'est plus référencé)* et lui propose deux solutions pour retrouver ce qu'il cherche *(Retour à l'accueil et Revenir à la page précédente)*.


### 🧪 **PHASE 3 : OPTIMISATION ET TESTING**
*A venir...*

### 🚀 **PHASE 4 : DÉPLOIEMENT**
*A venir...*


## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
