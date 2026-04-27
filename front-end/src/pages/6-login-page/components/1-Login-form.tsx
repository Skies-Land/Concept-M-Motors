// FONCTION
import { useLogin } from "./functions/Login-function";

// DESIGN SYSTEM
import { Button } from "../../../components/design-system/Button";
import { Typography } from "../../../components/design-system/Typography";
import { Input } from "../../../components/design-system/Input";

// PROPS
interface LoginFormProps {
    onForgotPassword: () => void;
}

// Composant servant à afficher un formulaire de connexion (Composant graphique pur)
export default function LoginForm({ onForgotPassword }: LoginFormProps) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        error,
        loading,
        handleSubmit
    } = useLogin();

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
                <div className="bg-error/10 border border-error/20 rounded p-4">
                    <Typography variant="body-sm" color="error">
                        {error}
                    </Typography>
                </div>
            )}
            
            <Input 
                label="E-mail"
                id="email" 
                name="email" 
                type="email" 
                placeholder="votre-adresse-mail@example.com"
                required 
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
                <Input 
                    label="Mot de passe"
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="********" 
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type="button"
                    onClick={onForgotPassword}
                    className="absolute top-0 right-0 font-label text-xs text-primary hover:text-primary-dim transition-colors cursor-pointer"
                >
                    Mot de passe oublié ?
                </button>
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
