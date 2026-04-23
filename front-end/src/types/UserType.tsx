// Ce composant sert à définir les types de données des utilisateurs
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    creation_date: Date;
    displayName: string;
}
