# Configuration du Projet : Concept M-Motors

Ce document résume la configuration technique du projet Concept M-Motors.

## Architecture Fullstack
- **Front-end :** `/front-end` (React, React Router, Vite, TypeScript, Tailwind v4)
- **Back-end :** Services BaaS (Firebase Firestore, Firebase Auth, Cloudinary)

## Stack Front-end
- **Framework :** Vite.js 8.x
- **UI :** React 19.x
- **Navigation :** React Router 7.x (Data Router via `createBrowserRouter`)
- **SEO :** React Helmet Async (Gestion dynamique des balises meta)
- **Backend SDK :** Firebase (Module API Client)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS v4 (PostCSS bridge)
- **Icons :** React Icons

## Stack Back-end (Services)
- **Base de données :** Firebase Firestore (NoSQL)
- **Authentification :** Firebase Auth (Opérationnelle - Connexion, Inscription, Réinitialisation)
- **Stockage d'Images :** Cloudinary

## Organisation du Code (Front-end)
- **Design System :** 
    - Centralisation du style textuel (Font, Size, Color) avec le composant `Typography`. 
    - Centralisation du style des boutons avec le composant `Button`. 
    - Centralisation du style des conteneurs avec le composant `Container`.
    - Centralisation du style du design du logo avec le composant `Logo`.
    - Centralisation du style de la balise `<input>` avec le composant `Input` (styles appliqués également aux `select` et `textarea` pour une cohérence visuelle totale).
- **Gestion d'état :** Utilisation de la **React Context API** (`AuthUserContext`) pour centraliser l'état de l'utilisateur et la persistance de la session en temps réel.
- **Sécurisation :** 
    - Centralisation des statuts de session via des constantes (`Session-status`) et des types TypeScript dédiés pour une sécurité maximale du code.
    - **Route Guards :** Utilisation des composants `ProtectedRoute` et `GuestRoute` pour filtrer l'accès aux pages selon l'état d'authentification.
- **Logique de Navigation :**
    - **Tabs dynamiques :** Navigation interne de l'espace client (dashboard) basée sur les ancres URL (hash), permettant un affichage conditionnel des sections sans rechargement.
    - **Navigation Responsive :** Barre latérale (Sidebar) de l'espace client adaptative, se transformant en barre de navigation horizontale (Bottom Tab Bar) sur mobile pour une ergonomie optimisée.
    - **Gestion de l'Upload :** Utilisation d'un "Hidden Input Render Prop" injecté par un hook personnalisé (`SendDocsAccount`) pour centraliser la gestion des fichiers sans encombrer le DOM.
- **API & Logique métier :** Centralisation des appels réseau dans `/src/api/` (ex: `Get-user.tsx`) et isolation de la logique métier (Hooks et utilitaires) dans des dossiers `functions/` au sein des modules de pages. Utilisation d'un système de contrôle de fichiers (`CheckDocumentUpload`) avant traitement.
- **Pages :** Découpage par fonctionnalités dans `/src/pages/`.
- **Navigation :** Composants `Header` et `Footer` adaptatifs (le Header change d'état selon la connexion de l'utilisateur).
- **Référencement :** Composant `Seo` réutilisable par page.

## Thème Visuel
- **Couleur Primaire :** `#EAB308` (Jaune/Orange Radiant)
- **Fond :** `#0F172A` (Bleu Profond/Noir)
- **Polices :** Inter, Sans-serif
- **Esthétique :** Glassmorphisme, dégradés subtils.

## Commandes Utiles
```bash
# Accéder au dossier front-end
cd front-end

# Lancer le développement
npm run dev
```

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**