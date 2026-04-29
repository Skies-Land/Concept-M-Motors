/** Interface définissant les types de données pour les utilisateurs */
export interface User {
    id: string;
    creationDate: Date;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
}
