// DÉPENDANCES
import React from 'react';
import { Link } from 'react-router-dom';

/** Types de propriétés pour personnalisé le composant `Button` */
export interface ButtonProps {
    /** Taille proportionnelle du bouton */
    size?: "small" | "medium" | "large";
    /** Variante visuelle */
    variant?: "primary" | "secondary" | "tertiary" | "icon";
    /** Élément React pour l'icône (ex: <span className="material-symbols-outlined">...</span>) */
    icon?: React.ReactNode;
    /** Positionnement de l'icône */
    iconPosition?: "left" | "right";
    /** Désactive les interactions */
    disabled?: boolean;
    /** Affiche un état de chargement et désactive le composant */
    isLoading?: boolean;
    /** Le texte ou contenu intérieur du bouton */
    children?: React.ReactNode;
    /** Si présent, transforme le bouton en lien vers cette adresse */
    baseUrl?: string;
    /** Ouvre le lien dans un nouvel onglet si baseUrl est fourni */
    isExternal?: boolean;
    /** Type HTML natif du boutton */
    type?: "button" | "submit" | "reset";
    /** Prend 100% de la largeur du conteneur parent */
    fullWidth?: boolean;
    /** Fonction déclenchée au clic */
    onClick?: () => void;
    /** Classes CSS supplémentaires pour forcer un style contextuel */
    className?: string;
}

/** Composant servant à gérer l'apparence et les actions des boutons */
export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconPosition = "right",
    disabled = false,
    isLoading = false,
    children,
    baseUrl,
    isExternal = false,
    type = "button",
    fullWidth = false,
    onClick,
    className = ""
}: ButtonProps) => {

    let variantStyles = "";
    let sizeStyles = "";

    // Application selon charte de design
    switch (variant) {
        case "primary":
            // Gradient of primary to primary-container. black text. Radius moderate.
            variantStyles = "ignition-gradient text-black hover:opacity-90 shadow-lg shadow-primary/20 border border-transparent";
            break;
        case "secondary":
            // surface-container-highest background. Ghost Border (outline-variant/15). Machined metal feel.
            variantStyles = "bg-surface-container-highest text-on-surface border border-outline-variant/15 hover:bg-surface-variant";
            break;
        case "tertiary":
            // Ghost button (text only) using primary text for "actionable" weight.
            variantStyles = "bg-transparent text-primary hover:text-primary-container border border-transparent hover:underline underline-offset-4";
            break;
        case "icon":
            // Bouton purement icône, basé sur un style secondaire arrondi
            variantStyles = "bg-surface-container-highest text-on-surface border border-outline-variant/15 hover:bg-surface-variant rounded-full flex items-center justify-center p-0";
            break;
    }

    // Gestion de l'évolution proportionnelle
    switch (size) {
        case "small":
            sizeStyles = variant === "icon" ? "w-10 h-10" : "px-6 py-3 text-xs";
            break;
        case "medium":
            sizeStyles = variant === "icon" ? "w-12 h-12" : "px-8 py-4 text-sm";
            break;
        case "large":
            sizeStyles = variant === "icon" ? "w-14 h-14" : "px-10 py-5 text-base";
            break;
    }

    // Styles de base de tout bouton
    const baseStyles = "font-label uppercase tracking-widest transition-all duration-300 ease-in-out font-bold flex flex-row items-center justify-center gap-3";

    // Radius modéré pour tous les boutons sauf icônes qui sont entièrement arrondies
    const radiusStyles = variant === "icon" ? "rounded-full" : "rounded-md";

    // Gestion de l'état désactivé et du chargement
    const disabledStyles = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    // Gestion de la largeur
    const widthStyles = fullWidth ? "w-full" : "w-auto";

    // Compilation des classes
    const finalClasses = `${baseStyles} ${radiusStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${widthStyles} ${className}`.trim().replace(/\s+/g, ' ');

    const buttonContent = (
        <>
            {isLoading && (
                <span className="material-symbols-outlined animate-spin text-lg">
                    progress_activity
                </span>
            )}
            
            {!isLoading && icon && iconPosition === "left" && (
                <span className="flex-shrink-0">{icon}</span>
            )}
            
            {!isLoading && children && (
                <span>{children}</span>
            )}

            {!isLoading && icon && iconPosition === "right" && (
                <span className="flex-shrink-0">{icon}</span>
            )}
        </>
    );

    const buttonElement = (
        <button
            type={type}
            className={finalClasses}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {buttonContent}
        </button>
    );

    // Gestion de la logique de lien (React Router vs Lien classique externe)
    if (baseUrl) {
        if (isExternal) {
            return (
                <a href={baseUrl} target="_blank" rel="noopener noreferrer" className={fullWidth ? "block w-full" : "inline-block"}>
                    {buttonElement}
                </a>
            );
        }
        return (
            <Link to={baseUrl} className={fullWidth ? "block w-full" : "inline-block"}>
                {buttonElement}
            </Link>
        );
    }

    return buttonElement;
};