// DÉPENDANCE
import { useNavigate } from "react-router-dom"

// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography"
import { Button } from "../../../components/design-system/Button"
import Container from "../../../components/design-system/Container"

/** Composant servant à afficher le contenu de la page d'erreur 404 */
export default function ErrorContent() {
    // Hook pour la navigation
    const navigate = useNavigate();

    return (
        <Container className="flex-grow flex items-center justify-center relative min-h-screen">

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
                {/* Typographie - 404 */}
                <div className="relative mb-8">
                    <h1 className="font-headline text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-surface-container-highest flex items-center justify-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-surface-variant to-surface-dim drop-shadow-[0_4px_24px_rgba(255,145,87,0.15)]">4</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container mx-[-0.05em] z-10">0</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-surface-variant to-surface-dim drop-shadow-[0_4px_24px_rgba(255,145,87,0.15)]">4</span>
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="material-symbols-outlined text-primary/20 text-8xl blur-md" data-icon="warning">warning</span>
                    </div>
                </div>

                {/* Message d'erreur */}
                <Typography 
                    variant="headline-md" 
                    component="h2" 
                    className="mb-4"
                >
                    Oops... Erreur 404
                </Typography>
                <Typography 
                    variant="body-lg" 
                    color="on-surface-variant" 
                    className="max-w-2xl mb-12"
                >
                    La page que vous recherchez n'a pas été trouvée. Elle a peut-être été déplacée ou n'existe plus dans notre base de données technique.
                </Typography>

                {/* Boutons de navigation */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-lg">
                    {/* <!-- Bouton 1 - Retour à l'accueil --> */}
                    <Button 
                        variant="primary" 
                        size="medium"
                        className="w-full sm:w-auto"
                        baseUrl="/"
                    >
                        Retourner à l'accueil
                    </Button>
                    {/* <!-- Bouton 2 - Revenir à la page précédente --> */}
                    <Button 
                        variant="secondary" 
                        size="medium"
                        className="w-full sm:w-auto"
                        onClick={() => navigate(-1)}
                    >
                        Page précédente
                    </Button>
                </div>
            </div>

        </Container>
    )
}