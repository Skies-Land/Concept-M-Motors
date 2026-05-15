// DÉPENDANCES
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// CONFIGURATION
import { getUser } from "../api/Get-user";

// TYPES
import type { User } from "../types/UserType";
import type { SessionStatusTypes } from "../types/Session-status-type";

// CONSTANTES (Définissant le statut de la session utilisateur)
import { GUEST, REGISTERED } from "../constants/Session-status";

// INTERFACES
interface AuthUserContextType {
    authUser: User | null;
    sessionStatus: SessionStatusTypes;
    loading: boolean;
    signOut: () => Promise<void>;
    refreshUser: () => Promise<void>;
    login: (token: string, user: User) => void; // Nouvelle méthode
}

// CRÉATION DU CONTEXTE
export const AuthUserContext = createContext<AuthUserContextType>({
    authUser: null,
    sessionStatus: GUEST,
    loading: true,
    signOut: async () => {},
    refreshUser: async () => {},
    login: () => {},
});

/** Provider permettant de partager les données de l'utilisateur authentifié et le statut de sa session entre les composants de l'application */
export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [sessionStatus, setSessionStatus] = useState<SessionStatusTypes>(GUEST);
    const [loading, setLoading] = useState(true);

    /** Fonction pour initialiser la session (login) */
    const login = (token: string, user: any) => {
        /** Normalisation de l'ID */
        const userId = user.id || user._id;
        const normalizedUser = { ...user, id: userId };

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(normalizedUser));
        setAuthUser(normalizedUser);
        setSessionStatus(REGISTERED);
    };

    /** Fonction pour rafraîchir les données de l'utilisateur au chargement */
    const refreshUser = async () => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (storedUser && token) {
            try {
                const userObj = JSON.parse(storedUser);
                
                /** Normalisation de l'ID (MongoDB utilise _id, le front attend id) */
                const userId = userObj.id || userObj._id;
                userObj.id = userId; 

                setAuthUser(userObj);
                setSessionStatus(REGISTERED);
                
                /** Mise à jour en arrière-plan depuis l'API */
                const updatedUser = await getUser(userId);
                if (updatedUser) {
                    setAuthUser(updatedUser);
                }
            } catch (error) {
                console.error("Erreur de récupération utilisateur :", error);
                signOut();
            }
        } else {
            setAuthUser(null);
            setSessionStatus(GUEST);
        }
        setLoading(false);
    };

    /** Fonction de déconnexion */
    const signOut = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuthUser(null);
        setSessionStatus(GUEST);
    };

    /** Utilisation de useEffect pour initialiser la session utilisateur au chargement du composant */
    useEffect(() => {
        refreshUser();
    }, []);

    return (
        <AuthUserContext.Provider value={{ authUser, sessionStatus, loading, signOut, refreshUser, login }}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);
