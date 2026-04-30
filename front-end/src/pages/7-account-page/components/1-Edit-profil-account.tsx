// DESIGN SYSTEM
import Container from "../../../components/design-system/Container"
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";
import Input from "../../../components/design-system/Input";

// CONTEXTE
import { useAuth } from "../../../context/AuthUserContext";

// IMAGE
import IMGUser from "../../../assets/IMGUser.png";

// LOGIQUE
import { useEditProfilAccount } from "./functions/Edit-profil-account-function";

/** Composant servant à éditer le profil de l'utilisateur (Nom / Prénom / E-mail / Téléphone / Adresse postale) */
export default function EditProfilAccount() {
    const { authUser } = useAuth();
    const { formData, loading, error, success, handleChange, handleSubmit } = useEditProfilAccount();

    return (
        <Container className="flex-1 flex flex-col relative w-full pb-16">

            <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex flex-col gap-12">
                {/* Entête de la section */}
                <div className="flex flex-col gap-2">
                    <Typography component="h2" color="primary" variant="headline-md" >
                        Mes informations
                    </Typography>
                    <Typography component="p" variant="body-lg">
                        Complétez vos informations personnelles et préférences de contact pour une bonne expérience avec M-Motors.
                    </Typography>
                </div>

                {/* Formulaire */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Image d'avatar du client */}
                    <div className="lg:w-1/4 flex flex-col gap-6 items-center">
                        <div className="relative group inline-block text-center">
                            <div className="w-48 h-48 rounded-full bg-[#202225] overflow-hidden relative z-10 flex items-center justify-center">
                                <img alt="User profile avatar"
                                    className="w-full h-full object-cover"
                                    src={IMGUser} />
                            </div>
                            <Typography
                                component="p"
                                className="py-6 font-body text-xs text-on-surface-variant text-center"
                            >
                                Membre depuis {authUser?.creationDate 
                                    ? new Date(authUser.creationDate).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) 
                                    : "Chargement..."}
                            </Typography>
                        </div>
                    </div>

                    {/* Formulaire - Informations personnelles */}
                    <form onSubmit={handleSubmit} className="lg:w-3/4 flex flex-col gap-8 bg-[#18181b] p-6 md:p-8 rounded-lg relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {/* Nom d'utilisateur */}
                            <Input 
                                label="Nom d'utilisateur" 
                                type="text"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                disabled={loading}
                                className="md:col-span-2"
                                placeholder="Pseudo ou nom d'utilisateur qui sera affiché sur l'interface" 
                                required />
                            {/* Prénom */}
                            <Input 
                                label="Prénom" 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                disabled={loading}
                                placeholder="Votre prénom" />
                            {/* Nom */}
                            <Input 
                                label="Nom" 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                disabled={loading}
                                placeholder="Votre nom" />
                            {/* Adresse e-mail */}
                            <Input 
                                label="Email" 
                                type="email" 
                                value={authUser?.email || ""}
                                className="md:col-span-2"
                                readOnly 
                                disabled
                                placeholder="votre-adresse-mail@example.com" 
                                required
                            />
                            {/* Adresse postale */}
                            <Input 
                                label="Adresse postale" 
                                type="text" 
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                disabled={loading}
                                className="md:col-span-2" 
                                placeholder="Renseignez votre adresse postale" />
                            {/* Téléphone */}
                            <Input 
                                label="Téléphone" 
                                type="tel" 
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                disabled={loading}
                                placeholder="06 12 34 56 78" />
                        </div>

                        {/* Messages de retour */}
                        {error && (
                            <Typography component="p" color="error" className="text-center relative z-10">
                                {error}
                            </Typography>
                        )}
                        {success && (
                            <Typography component="p" className="text-center text-green-500 relative z-10">
                                {success}
                            </Typography>
                        )}

                        {/* Bouton de sauvegarde */}
                        <div className="flex justify-end pt-4 mt-2 relative z-10">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-3 bg-primary text-on-primary font-bold font-body rounded hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
                                {loading ? "Sauvegarde en cours..." : "Sauvegarder les modifications"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}