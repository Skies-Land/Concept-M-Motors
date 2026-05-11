# CONFIGURATION TECHNIQUE

Ce document résume la configuration technique du projet **Concept M-Motors**.

## 🏗️ Architecture
- **Front-end :** `/front-end` *(React, React Router, Vite, TypeScript, Tailwind v4)*
- **Back-end :** **[Services BaaS](https://www.goweb.fr/esn/web-sur-mesure/firebase-pt1/)** *(Firebase Firestore, Firebase Auth, Cloudinary)*
- **Déploiement :** **[Netlify](https://www.netlify.com/)** *(CI/CD via GitHub)*

## 🎨 Stack - front-end
- **Framework :** **[Vite.js](https://vite.dev/)**
- **UI :** **[React](https://react.dev/)**
- **Navigation :** **[React Router](https://reactrouter.com/)** *(Data Router via `createBrowserRouter`)*
- **SEO :** **[React Helmet Async](https://www.npmjs.com/package/react-helmet-async)** *(Gestion dynamique des balises meta)*
- **Backend SDK :** **[Firebase](https://firebase.google.com/docs)** *(Module API Client)*
- **Langage :** **[TypeScript](https://www.typescriptlang.org/)**
- **Styling :** **[Tailwind CSS](https://tailwindcss.com/)** *(PostCSS bridge)*
- **Hébergement :** **[Netlify](https://www.netlify.com/)** *(Support SPA via `_redirects`)*
- **Icons :** **[React Icons](https://react-icons.github.io/react-icons/)**
- **Outils d'audit :** **[Lighthouse / PageSpeed Insights](https://pagespeed.web.dev/)** *(Performance, SEO, Accessibilité)*

## 🗄️ Stack - back-end (services)
- **Base de données :** **[Firebase Firestore](https://firebase.google.com/docs/firestore)** *(NoSQL)*
- **Authentification :** **[Firebase Auth](https://firebase.google.com/docs/auth)** *(Opérationnelle - Connexion, Inscription, Réinitialisation)*
- **Stockage d'images :** **[Cloudinary](https://cloudinary.com/)**

## 🧪 Stack - testing
- **Type de test :** Unitaire - *Chaque composant est testé individuellement.*
- **Framework :** **[Vitest](https://vitest.dev/)** *(Framework de test JavaScript rapide et léger)*
- **Librairie :** **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** *(Librairie de tests pour React)*
- **Environnement de rendu :** **[JSDOM](https://github.com/jsdom/jsdom)** *(Environnement virtuel léger qui simule un navigateur)*
- **Méthodologie :** **[Pattern AAA](https://learn.microsoft.com/fr-fr/visualstudio/test/unit-test-basics?view=visualstudio)** - ***Arrange** - préparation | **Act** - agir/action | **Assert** - vérification*
- **Organisation :** Phase de tests effectués à partir de la branche : **[feature-tests](https://github.com/Skies-Land/Concept-M-Motors/tree/feature-tests)**

## 🧩 Organisation du code (front-end)
- **Design system :** 
    - Centralisation du style textuel *(Font, Size, Color)* avec le composant `Typography`. 
    - Centralisation du style des boutons avec le composant `Button`. 
    - Centralisation du style des conteneurs avec le composant `Container`.
    - Centralisation du style du design du logo avec le composant `Logo`.
    - Centralisation du style de la balise `<input>` avec le composant `Input` *(styles appliqués également aux `select` et `textarea` pour une cohérence visuelle totale)*.
- **Gestion d'état :** Utilisation de la **[React Context API](https://www.bureaudestalents.com/glossaire-tech/context-api)** `AuthUserContext` pour centraliser l'état de l'utilisateur et la persistance de la session en temps réel.
- **Sécurisation :** 
    - Centralisation des statuts de session via des constantes `Session-status` et des types TypeScript dédiés pour une sécurité maximale du code.
    - **Route guards :** Utilisation des composants `ProtectedRoute` et `GuestRoute` pour filtrer l'accès aux pages selon l'état d'authentification.
- **Logique de navigation :**
    - **Tabs dynamiques :** Navigation interne de l'espace client *(dashboard)* basée sur les ancres URL *(hash)*, permettant un affichage conditionnel des sections sans rechargement.
    - **Navigation responsive :** Barre latérale *(Sidebar)* de l'espace client adaptative, se transformant en barre de navigation horizontale *(Bottom Tab Bar)* sur mobile pour une ergonomie optimisée.
    - **Gestion de l'upload :** Utilisation d'un "Hidden Input Render Prop" injecté par un hook personnalisé `SendDocsAccount` pour centraliser la gestion des fichiers sans encombrer le DOM.
    - **Performance :** Utilisation du Lazy Loading (*Code Splitting* via `React.lazy`) dans le routeur pour un chargement optimisé des pages.
- **API & logique métier :** Centralisation des appels réseau dans `/src/api/` *(ex: `Get-user.tsx`)*.
    - **Filtrage dynamique :** Implémentation d'un calcul automatique du prix maximum du catalogue via une requête Firestore dédiée `Get-max-price-catalog.tsx`, permettant au curseur de budget de s'adapter en temps réel au véhicule le plus cher en stock.
    - **Isolation :** Séparation de la logique métier *(Hooks et utilitaires)* dans des dossiers `functions/` au sein des modules de pages. Utilisation d'un système de contrôle de fichiers `CheckDocumentUpload` avant traitement.
- **Pages :** Découpage par fonctionnalités dans `/src/pages/`.
- **Navigation :** Composants `Header` et `Footer` adaptatifs *(le Header change d'état selon la connexion de l'utilisateur)*.
- **Référencement :** Composant `Seo` réutilisable par page.

## 🎨 Thème visuel
- **Couleur primaire :** `#EAB308` *(jaune/orange radiant)*
- **Fond :** `#0F172A` *(bleu profond/noir)*
- **Polices :** Inter, Sans-serif
- **Esthétique :** Glassmorphisme, dégradés subtils.

## 🚀 Commandes utiles
```bash
# Accéder au dossier front-end
cd front-end

# Lancer le développement
npm run dev

# Lancer le build de production
npm run build

# Lancer tous les tests unitaires
npm test

# Lancer les tests en mode interactif (Watch mode)
npm run test:watch
```

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**