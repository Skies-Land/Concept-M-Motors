// COMPOSANT
import { Button } from "../../../components/design-system/Button";

// PROPS
interface LoginFormProps {
    onForgotPassword: () => void;
}

// Composant servant à afficher un formulaire de connexion
export default function LoginForm({ onForgotPassword }: LoginFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Logique de connexion à implémenter plus tard avec Firebase
        console.log("Tentative de connexion");
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="email">
                    E-mail
                </label>
                <input 
                    autoComplete="email"
                    className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                    id="email" 
                    name="email" 
                    placeholder="votre-adresse-mail@example.com"
                    required 
                    type="email" 
                />
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant" htmlFor="password">
                        Mot de passe
                    </label>
                    <Button 
                        type="button"
                        onClick={onForgotPassword}
                        variant="tertiary"
                    >
                        Mot de passe oublié ?
                    </Button>
                </div>
                <input 
                    autoComplete="current-password"
                    className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                    id="password" 
                    name="password" 
                    placeholder="********" 
                    required
                    type="password" 
                />
            </div>
            <div className="pt-2">
                <Button 
                    type="submit"
                    variant="primary"
                    fullWidth
                >
                    Se connecter
                </Button>
            </div>
        </form>
    );
}