// TESTING LIBRARY - utils de rendu et sélection DOM
import { render, waitFor } from '@testing-library/react';

// VITEST - framework de test
import { describe, it, expect } from 'vitest';

// REACT HELMET ASYNC - gestion des balises HTML head de manière asynchrone
import { HelmetProvider } from 'react-helmet-async';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT À TESTER
import Seo from './Seo';

describe("Seo - pour le référencement des pages", () => {
    
    it("met à jour le titre du document", async () => {
        // 1. ARRANGE (préparation - initialisation des variables de test)
        const testTitle = "Ma Page de Test";
        const testDesc = "Description de test";
        
        // 2. ACT (agir/action - exécution du composant)
        render(
            <HelmetProvider>
                <Seo title={testTitle} description={testDesc} />
            </HelmetProvider>
        );

        // 3. ASSERT (vérification - Helmet met à jour le document.title de manière asynchrone)
        await waitFor(() => {
            expect(document.title).toBe(testTitle);
        });
    });

    it("ajoute la meta description correcte", async () => {
        // 1. ARRANGE (préparation - initialisation des variables de test)
        const testTitle = "Titre";
        const testDesc = "Ceci est une description unique pour le SEO";
        
        // 2. ACT (agir/action - exécution du composant)
        render(
            <HelmetProvider>
                <Seo title={testTitle} description={testDesc} />
            </HelmetProvider>
        );

        // 3. ASSERT (vérification - la meta description est correcte)
        await waitFor(() => {
            const metaDescription = document.querySelector('meta[name="description"]');
            expect(metaDescription?.getAttribute('content')).toBe(testDesc);
        });
    });

    it("contient le favicon par défaut", async () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action - exécution du composant)
        render(
            <HelmetProvider>
                <Seo title="Titre" description="Desc" />
            </HelmetProvider>
        );

        // 3. ASSERT (vérification - le favicon est correct)
        await waitFor(() => {
            const favicon = document.querySelector('link[rel="icon"]');
            expect(favicon?.getAttribute('href')).toBe('/favicon.ico');
        });
    });
});