# 🚗 CONCEPT M-MOTORS
**M-Motors** *(entreprise fictive)*, leader dans le secteur des véhicules d'occasion depuis 1987, opère une transformation digitale majeure. Avec un réseau de 800 collaborateurs et un parc servant plus d'un million de clients, l'entreprise modernise son infrastructure pour répondre aux nouveaux usages.

<div align="center">
  <img src="./maquette/preview.png" alt="Aperçu du Concept M-Motors" width="100%">
  <br>
  <a href="https://m-motors-skiesland.netlify.app/" target="_blank">🌐 Voir le site en direct</a>
</div>

### **OBJECTIF DU MVP (Minimum Viable Product)**
Le projet consiste à développer une plateforme web modernisée visant à digitaliser l'intégralité du tunnel de vente et à introduire un service de LLD (Location longue durée).

#### **FONCTIONNALITÉS CLÉS :**
* **Catalogue** : consultation des véhicules disponibles avec affichage des prix d'achat comptant et de location comprenant une grille de tarification pour les mensualités.
* **Espace client** : permettant de suivre l'état d'avancement des dossiers de souscription. Module de dépôt dématérialisé et sécurisé des pièces justificatives.

---
#### Branche Git dédiée aux tests unitaires. Pour consulter la documentation complète ➡️ **[la branche `main`](https://github.com/Skies-Land/Concept-M-Motors)**

### 🧪 **PHASE DE TESTING**
L'application bénéficie d'une suite de tests unitaires pour garantir la fiabilité des composants et de la logique fonctionnelle. Toutes les parties du site ont été testées, de l'interface utilisateur aux fonctionnalités principales. Les tests utilisent les bibliothèques suivantes :
* **[Vitest](https://vitest.dev/)** pour l'exécution des tests,
* **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** pour le rendu des composants,
* **[Testing Library](https://testing-library.com/)** pour la sélection des éléments DOM,
* **[jsdom](https://github.com/jsdom/jsdom)** pour la simulation de l'environnement du navigateur (DOM).

| Composants & Fonctionnalités testés | Libraries / Méthodes utilisées |
| :--- | :--- |
| **[Components](./front-end/src/components)** (Navigation, Design System, UI éléments) | `render()`, `screen.getBy...()`, `fireEvent.click()`, Mocks |
| **[Pages](./front-end/src/pages)** (Landing, About, Catalog, Contact, Login, Account, Error) | `MemoryRouter`, `Routes`, `Route`, Mocks |
| **`Functions`** (Logique métier) | Mocks complexes, `async/await`, `vi.fn()`, `vi.clearAllMocks()` |

J'ai structuré mes tests en suivant le **[Pattern AAA](https://learn.microsoft.com/fr-fr/visualstudio/test/unit-test-basics?view=visualstudio)**, voici ma base de code utilisé pour l'ensemble de mes tests unitaires :

```typescript
// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, screen } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect, vi } from 'vitest';

// REACT ROUTER - composants de navigation pour tests
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT À TESTER
import nomDuComposantATester from './';

describe("nomDuComposantATester", () => {
    it("Description de l'objectif du test", () => {
        // 1. ARRANGE (préparation)

        // 2. ACT (agir/action)

        // 3. ASSERT (vérification)
    });
});
```

#### **Résultats des tests unitaires :**

![Résultats des tests unitaires](./documentation/Unit-test-results.png)

## 👨‍💻 Skies-Land - Jonathan Araldi
- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**
