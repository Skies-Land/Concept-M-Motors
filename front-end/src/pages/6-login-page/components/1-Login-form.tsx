// DÉPENDANCES
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase-config";

// COMPOSANTS
import { Button } from "../../../components/design-system/Button";
import { Typography } from "../../../components/design-system/Typography";

// PROPS
interface LoginFormProps {
    onForgotPassword: () => void;
}

// Composant servant à afficher un formulaire de connexion
export default function LoginForm({ onForgotPassword }: LoginFormProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirection vers l'espace client après connexion réussie
            navigate("/account");
        } catch (err: any) {
            console.error("Erreur de connexion :", err);
            setError("Email ou mot de passe incorrect.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
                <div className="bg-error/10 border border-error/20 rounded p-4">
                    <Typography variant="body-sm" color="error">
                        {error}
                    </Typography>
                </div>
            )}
            
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant" htmlFor="password">
                        Mot de passe
                    </label>
                    <button 
                        type="button"
                        onClick={onForgotPassword}
                        className="font-label text-xs text-primary hover:text-primary-dim transition-colors"
                    >
                        Mot de passe oublié ?
                    </button>
                </div>
                <input 
                    autoComplete="current-password"
                    className="w-full bg-surface-container-high border border-outline-variant/15 rounded text-on-surface font-body px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
                    id="password" 
                    name="password" 
                    placeholder="********" 
                    required
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="pt-2">
                <Button 
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={loading}
                >
                    Se connecter
                </Button>
            </div>
        </form>
    );
}