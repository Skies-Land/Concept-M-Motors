// FONCTION
import { useForgetPassword } from "./functions/Forget-password-function";

// DESIGN SYSTEM
import { Button } from "../../../components/design-system/Button";
import { Typography } from "../../../components/design-system/Typography"
import Input from "../../../components/design-system/Input";

// PROPS
interface ForgetPasswordFormProps {
    onBackToLogin: () => void;
}

// Composant servant à afficher un formulaire d'oubli de mot de passe
export default function ForgetPasswordForm({ onBackToLogin }: ForgetPasswordFormProps) {
    const {
        email,
        setEmail,
        error,
        success,
        loading,
        handleSubmit
    } = useForgetPassword();

    return (
        <div className="space-y-6">
            <div className="mb-8">
                <Typography variant="headline-sm" color="on-surface" className="mb-3">
                    Mot de passe oublié ?
                </Typography>
                <Typography variant="body-sm" color="on-surface-variant">
                    {success 
                        ? "Un e-mail de réinitialisation a été envoyé à votre adresse. Veuillez vérifier votre boîte de réception et les Spams."
                        : "Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe."
                    }
                </Typography>
            </div>

            {/* Affichage des erreurs */}
            {error && (
                <div className="bg-error/10 border border-error/20 rounded p-4 mb-4">
                    <Typography variant="body-sm" color="error">
                        {error}
                    </Typography>
                </div>
            )}

            {/* Affichage du message de succès */}
            {success ? (
                <div className="pt-4">
                    <Button 
                        type="button"
                        variant="primary"
                        fullWidth
                        onClick={onBackToLogin}
                    >
                        Retourner à la connexion
                    </Button>
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <Input 
                        label="E-mail"
                        id="reset-email" 
                        name="email" 
                        type="email"
                        placeholder="votre-adresse-mail@example.com"
                        autoComplete="email"
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="flex flex-col gap-4 pt-2">
                        {/* Bouton d'envoi */}
                        <Button 
                            type="submit"
                            variant="primary"
                            fullWidth
                            isLoading={loading}
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
                            Annuler
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}