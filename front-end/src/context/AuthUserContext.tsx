// DÉPENDANCES
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, type User as FirebaseUser, signOut as firebaseSignOut } from "firebase/auth";

// CONFIGURATIONS
import { auth } from "../config/firebase-config";
import { getUser } from "../api/Get-user";

// TYPES
import type { User } from "../types/UserType";
import type { SessionStatusTypes } from "../types/Session-status-type";

// CONSTANTES
import { GUEST, REGISTERED } from "../constants/Session-status";

// INTERFACES
interface AuthUserContextType {
    authUser: User | null;
    sessionStatus: SessionStatusTypes;
    loading: boolean;
    signOut: () => Promise<void>;
}

// CRÉATION DU CONTEXTE
export const AuthUserContext = createContext<AuthUserContextType>({
    authUser: null,
    sessionStatus: GUEST,
    loading: true,
    signOut: async () => {},
});

// PROVIDER
export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [sessionStatus, setSessionStatus] = useState<SessionStatusTypes>(GUEST);
    const [loading, setLoading] = useState(true);

    // Fonction de déconnexion
    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    useEffect(() => {
        // Écoute les changements d'état de l'authentification Firebase
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
            setLoading(true);
            if (firebaseUser) {
                // Récupération des données Firestore
                const userDetails = await getUser(firebaseUser.uid);
                setAuthUser(userDetails);
                setSessionStatus(REGISTERED);
            } else {
                setAuthUser(null);
                setSessionStatus(GUEST);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthUserContext.Provider value={{ authUser, sessionStatus, loading, signOut }}>
            {children}
        </AuthUserContext.Provider>
    );
};

// HOOK PERSONNALISÉ
export const useAuth = () => useContext(AuthUserContext);
