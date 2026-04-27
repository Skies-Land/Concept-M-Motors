// Ce composant sert à définir les types de données des utilisateurs
export interface User {
    id: string;
    creationDate: Date;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}
