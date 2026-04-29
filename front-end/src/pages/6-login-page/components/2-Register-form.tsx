// FONCTION
import { useRegister } from "./functions/Register-function";

// DESIGN SYSTEM
import { Button } from "../../../components/design-system/Button";
import { Typography } from "../../../components/design-system/Typography";
import Input from "../../../components/design-system/Input";

/** Composant servant à afficher un formulaire d'inscription */
export default function RegisterForm() {
    const {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        loading,
        handleSubmit
    } = useRegister();

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
                label="Nom d'utilisateur"
                id="sub-username" 
                name="username" 
                placeholder="Un pseudo pour vous identifier"
                required 
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <Input 
                label="E-mail"
                id="sub-email" 
                name="email" 
                placeholder="votre-adresse-mail@example.com"
                required 
                type="email" 
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
                label="Mot de passe"
                id="sub-password" 
                name="password" 
                placeholder="********" 
                required
                type="password" 
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Input 
                label="Confirmer le mot de passe"
                id="sub-confirm-password" 
                name="confirm-password" 
                placeholder="********" 
                required
                type="password" 
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="pt-2">
                <Button 
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={loading}
                >
                    Créer mon compte
                </Button>
            </div>
        </form>
    );
}