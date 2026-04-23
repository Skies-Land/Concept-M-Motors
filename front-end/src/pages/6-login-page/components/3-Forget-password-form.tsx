// COMPOSANTS
import { Button } from "../../../components/design-system/Button";
import { Typography } from "../../../components/design-system/Typography"

// PROPS
interface ForgetPasswordFormProps {
    onBackToLogin: () => void;
}

// Composant servant à afficher un formulaire d'oubli de mot de passe
export default function ForgetPasswordForm({ onBackToLogin }: ForgetPasswordFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique de réinitialisation de mot de passe à implémenter plus tard avec Firebase
        console.log("Demande de réinitialisation de mot de passe");
    };

    return (
        <div className="space-y-6">
            <div className="mb-8">
                <Typography variant="headline-sm" color="on-surface" className="mb-3">
                    Mot de passe oublié ?
                </Typography>
                <Typography variant="body-sm" color="on-surface-variant">
                    Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                </Typography>
            </div>

            {/* Formulaire de réinitialisation de mot de passe */}
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="reset-email">
                        E-mail
                    </label>
                    <input 
                        autoComplete="email"
                        className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                        id="reset-email" 
                        name="email" 
                        placeholder="votre-adresse-mail@example.com"
                        required 
                        type="email" 
                    />
                </div>

                <div className="flex flex-col gap-4 pt-2">
                    {/* Bouton d'envoi */}
                    <Button 
                        type="submit"
                        variant="primary"
                        fullWidth
                    >
                        Envoyer le lien
                    </Button>

                    {/* Bouton retour */}
                    <Button 
                        type="button"
                        variant="tertiary"
                        fullWidth
                        onClick={onBackToLogin}
                    >
                        Annuler et retourner à la connexion
                    </Button>
                </div>
            </form>
        </div>
    );
}