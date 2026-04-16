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

## Stack Back-end (Services)
- **Base de données :** Firebase Firestore (NoSQL)
- **Authentification :** Firebase Auth (Prévu)
- **Stockage d'Images :** Cloudinary

## Organisation du Code (Front-end)
- **Design System :** Centralisation du style textuel (Font, Size, Color) avec le composant `Typography`.
- **Layouts :** Utilisation d'un `RootLayout` centralisé et du `Container` pour la cohérence des marges.
- **Pages :** Découpage par fonctionnalités dans `/src/pages/`.
- **Navigation :** Composants `Header` et `Footer` utilisant `<Link>` pour le mode SPA.
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

## 👤 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
