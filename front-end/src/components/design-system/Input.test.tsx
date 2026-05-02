// FONCTION DE TESTS
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Pattern de tests AAA (Arrange, Act, Assert)
// 1. ARRANGE (préparation : initialisation du composant)
// 2. ACT (agir : action effectuer)
// 3. ASSERT (vérification : résultat obtenu correspondant au résultat attendu)

// COMPOSANT A TESTER
import Input from './Input';

describe("Input - Design System", () => {
    it("affiche correctement l'étiquette et le champ de saisie", () => {
        // 1. ARRANGE (préparation)
        const labelText = "Nom";
        const placeholderText = "Entrez votre nom";

        // 2. ACT (agir/action)
        render(<Input label={labelText} placeholder={placeholderText} />);
        
        // 3. ASSERT (vérification)
        expect(screen.getByText(labelText)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
    });

    it("génère un identifiant valide à partir de l'étiquette lorsque celui-ci n'est pas fourni", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Input label="Prenom" />);
        const input = screen.getByLabelText('Prenom');
        
        // 3. ASSERT (vérification)
        expect(input.id).toBe('prenom');
    });

    it("utilise l'identifiant fourni au lieu d'en générer un", () => {
        // 1. ARRANGE (préparation)
        const customId = "custom-email-id";

        // 2. ACT (agir/action)
        render(<Input label="Email" id={customId} />);
        const input = screen.getByLabelText('Email');

        // 3. ASSERT (vérification)
        expect(input.id).toBe(customId);
    });

    it("affiche un message d'erreur et applique les styles d'erreur lorsque la propriété « error » est fournie", () => {
        // 1. ARRANGE (préparation)
        const errorMessage = "Ce champ est requis";

        // 2. ACT (agir/action)
        render(<Input label="Ville" error={errorMessage} />);
        
        // 3. ASSERT (vérification)
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
        const input = screen.getByLabelText('Ville');
        expect(input).toHaveClass('border-red-500');
    });

    it("appelle la fonction de gestion des événements onChange lorsque du texte est saisi", () => {
        // 1. ARRANGE (préparation)
        const handleChange = vi.fn();
        render(<Input label="Message" onChange={handleChange} />);
        const input = screen.getByLabelText('Message');

        // 2. ACT (agir/action)
        fireEvent.change(input, { target: { value: 'Bonjour' } });
        
        // 3. ASSERT (vérification)
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect((input as HTMLInputElement).value).toBe('Bonjour');
    });

    it("transmet les attributs HTML natifs à l'élément input", () => {
        // 1. ARRANGE (préparation)
        // 2. ACT (agir/action)
        render(<Input label="Password" type="password" required />);
        const input = screen.getByLabelText('Password');
        
        // 3. ASSERT (vérification)
        expect(input).toHaveAttribute('type', 'password');
        expect(input).toBeRequired();
    });
});