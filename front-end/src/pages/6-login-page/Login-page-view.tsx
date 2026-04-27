// DÉPENDANCES
import { useState } from "react";
import { Link } from "react-router-dom";

// DESIGN SYSTEM
import Container from "../../components/design-system/Container";

// COMPOSANTS
import Seo from "../../components/seo/Seo";
import LoginForm from "./components/1-Login-form";
import RegisterForm from "./components/2-Register-form";
import ForgetPasswordForm from "./components/3-Forget-password-form";

// Différents "types" de vues de la page de connexion/inscription
type FormView = "login" | "subscribe" | "forget-password";

// Composant servant à afficher la page de connexion/inscription
export default function LoginPageView() {
    // État définissant la vue active de la page de connexion/inscription
    const [currentView, setCurrentView] = useState<FormView>("login");

    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page (définies de manière conditionnelle selon la vue active) */}
            <Seo
                title={currentView === "subscribe" ? "Inscription - Concept M-Motors" : "Connexion - Concept M-Motors"}
                description={currentView === "subscribe" ? "Créez votre compte pour accéder à votre espace personnel." : "Connectez-vous à votre compte pour accéder à votre espace personnel."}
            />

            {/* Composants de contenu de la page permettant la connexion ou l'inscription */}
            <Container as="main" className="flex-grow flex items-center justify-center py-12 relative z-10 overflow-hidden">
                <div className="w-full max-w-lg">
                    <div className="mt-16 bg-surface-variant/60 backdrop-blur-[20px] rounded-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-outline-variant/15 p-8 sm:p-10">

                        {/* Onglets de connexion/inscription - Ces onglets sont masqués si l'utilisateur clique sur "Mot de passe oublié ?" */}
                        {currentView !== "forget-password" && (
                            <div className="flex gap-8 mb-8 border-b border-outline-variant/15 pb-4">
                                <button 
                                    className={`font-headline font-bold text-lg pb-4 -mb-[18px] transition-colors cursor-pointer ${currentView === 'login' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                    onClick={() => setCurrentView('login')}
                                >
                                    Se connecter
                                </button>
                                <button 
                                    className={`font-headline font-bold text-lg pb-4 -mb-[18px] transition-colors cursor-pointer ${currentView === 'subscribe' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                    onClick={() => setCurrentView('subscribe')}
                                >
                                    S'inscrire
                                </button>
                            </div>
                        )}

                        {/* Affichage conditionnel des formulaires */}
                        {currentView === "login" && <LoginForm onForgotPassword={() => setCurrentView('forget-password')} />}
                        {currentView === "subscribe" && <RegisterForm />}
                        {currentView === "forget-password" && <ForgetPasswordForm onBackToLogin={() => setCurrentView('login')} />}
                    </div>

                    {/* Lien de retour à l'accueil */}
                    <div className="text-center mt-8">
                        <Link 
                            to="/" 
                            className="font-label text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined text-lg" data-alt="Flèche">arrow_back</span>
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}