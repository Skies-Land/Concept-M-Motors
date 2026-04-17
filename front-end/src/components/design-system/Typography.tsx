// DÉPENDANCE
import React from 'react';

// INTERFACES
export type TypographyVariant = 
    | "display-lg" | "headline-lg" | "headline-md" | "headline-sm" 
    | "body-lg" | "body-md" | "body-sm" 
    | "label-lg" | "label-md" | "label-sm";

export type TypographyColor = 
    | "primary" | "on-surface" | "on-surface-variant" | "error" | "inverse" | "inherit";

export type TypographyWeight = "regular" | "medium" | "bold";

interface TypographyProps {
    variant?: TypographyVariant;
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span" | "label";
    color?: TypographyColor;
    weight?: TypographyWeight;
    className?: string;
    children: React.ReactNode;
}

// Composant servant à gérer le style du texte : type de balise, taille, couleur, etc.
export const Typography = ({ 
    variant = "body-md", 
    component: Component = "p", 
    color = "on-surface", 
    weight,
    className = "",
    children 
}: TypographyProps) => {
    
    let variantStyle = "";
    
    // Détermination de la taille et de la typographie (Space Grotesk vs Inter)
    switch (variant) {
        case "display-lg":
            variantStyle = "text-tension-lg font-headline tracking-tighter leading-none";
            break;
        case "headline-lg":
            variantStyle = "text-6xl md:text-7xl font-headline tracking-tight leading-tight";
            break;
        case "headline-md":
            variantStyle = "text-4xl md:text-5xl font-headline tracking-tight leading-snug";
            break;
        case "headline-sm":
            variantStyle = "text-2xl md:text-3xl font-headline tracking-tight leading-snug";
            break;
        case "body-lg":
            variantStyle = "text-lg font-body leading-relaxed";
            break;
        case "body-md":
            variantStyle = "text-base font-body leading-relaxed";
            break;
        case "body-sm":
            variantStyle = "text-sm font-body leading-relaxed";
            break;
        case "label-lg":
            variantStyle = "text-sm font-label uppercase tracking-widest";
            break;
        case "label-md":
            variantStyle = "text-xs font-label uppercase tracking-widest";
            break;
        case "label-sm":
            variantStyle = "text-[10px] font-label uppercase tracking-[0.2em]";
            break;
    }

    let colorStyle = "";
    // Détermination de la couleur en se basant sur le index.css
    switch (color) {
        case "primary":
            colorStyle = "text-primary";
            break;
        case "on-surface": // Texte principal sur fond noir (ex: #e5e2e1)
            colorStyle = "text-on-surface";
            break;
        case "on-surface-variant": // Texte gris secondaire (ex: #dcc1b5)
            colorStyle = "text-on-surface-variant";
            break;
        case "error":
            colorStyle = "text-error";
            break;
        case "inverse":
            colorStyle = "text-inverse-on-surface";
            break;
        case "inherit":
            colorStyle = "text-inherit";
            break;
    }

    let weightStyle = "";
    // Par défaut, certains textes ont des poids pré-définis si `weight` n'est pas envoyé
    if (weight) {
        switch(weight) {
            case "regular": weightStyle = "font-normal"; break;
            case "medium": weightStyle = "font-medium"; break;
            case "bold": weightStyle = "font-bold"; break;
        }
    } else {
        // Poids par défaut selon la variante
        if (variant.includes("display") || variant.includes("headline")) {
            weightStyle = "font-bold"; // L'industriel réclame un font-weight gras par défaut pour les titres
        } else if (variant.includes("label")) {
            weightStyle = "font-bold"; // Les labels techniques sont en gras par défaut
        } else {
            weightStyle = "font-normal";
        }
    }

    // Chaînage propre des classes CSS sans dépendre d'une librairie externe type clsx
    const finalClasses = `${variantStyle} ${colorStyle} ${weightStyle} ${className}`.trim().replace(/\s+/g, ' ');

    return (
        <Component className={finalClasses}>
            {children}
        </Component>
    );
};