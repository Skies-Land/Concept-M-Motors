# RAPPORT D'OPTIMISATION

Ce document consigne les performances du projet mesurées via Google Lighthouse (**[PageSpeed Insights](https://pagespeed.web.dev/)**) sur la version déployée correspondante à la branche `main`.

## 🎯 Objectifs et stratégie d'audit

Pour garantir une expérience utilisateur optimale et un référencement irréprochable, j'ai concentré l'audit Lighthouse sur les trois pages les plus importantes de l'application :

1. **Landing page (Accueil)** : Vitrine de l'image de marque, cruciale pour la première impression, le SEO global et les performances de rendu initial (Hero banner).
2. **Page catalogue** : Défi technique pour le rendu du DOM, testant la performance du chargement dynamique des listes de véhicules et le Lazy Loading des images.
3. **Page détail (véhicule)** : Page de conversion nécessitant une accessibilité parfaite pour les données techniques et tarifaires, et mettant à l'épreuve le chargement d'images haute définition (LCP).


## 🛠️ Optimisations implémentées

Suite aux analyses de Lighthouse, plusieurs actions correctives ont été menées sur la branche : **[feature-lighthouse-optimization](https://github.com/Skies-Land/Concept-M-Motors/tree/feature-lighthouse-optimization)** avant de fusionner les modifications avec la branche `main`.

* **Accessibilité** : 
  * Correction de la hiérarchie des balises HTML (Titres `h1`, `h2`, `h3` structurés logiquement).
  * Amélioration des contrastes de couleurs (ratio > 4.5:1) sur les textes superposés aux fonds sombres.
  * Agrandissement de l'espacement des cibles tactiles (boutons de navigation).
* **SEO** : 
  * Génération dynamique de balises meta (Titre, Description) uniques pour chaque page via le composant `<Seo />`.
  * Ajout d'un fichier `robots.txt` pour guider l'indexation.
* **Performance** : 
  * **Code splitting** : Mise en place du chargement paresseux (`React.lazy` et `<Suspense>`) dans le routeur pour réduire drastiquement le poids du JavaScript initial.
  * **Optimisation des images** : Utilisation de formats modernes (WebP), attributs `loading="lazy"` sur le catalogue, et `fetchPriority="high"` sur l'image LCP de la page détail.