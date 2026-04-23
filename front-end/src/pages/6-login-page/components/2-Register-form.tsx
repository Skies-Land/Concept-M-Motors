// COMPOSANT
import { Button } from "../../../components/design-system/Button";

// Composant servant à afficher un formulaire d'inscription
export default function RegisterForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'inscription à implémenter plus tard avec Firebase
        console.log("Tentative d'inscription");
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="sub-email">
                    E-mail
                </label>
                <input 
                    autoComplete="email"
                    className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                    id="sub-email" 
                    name="email" 
                    placeholder="votre-adresse-mail@example.com"
                    required 
                    type="email" 
                />
            </div>
            <div>
                <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="sub-password">
                    Mot de passe
                </label>
                <input 
                    autoComplete="new-password"
                    className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                    id="sub-password" 
                    name="password" 
                    placeholder="********" 
                    required
                    type="password" 
                />
            </div>
            <div>
                <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="sub-confirm-password">
                    Confirmer le mot de passe
                </label>
                <input 
                    autoComplete="new-password"
                    className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                    id="sub-confirm-password" 
                    name="confirm-password" 
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
                    Créer un compte
                </Button>
            </div>
        </form>
    );
}