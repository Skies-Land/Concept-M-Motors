// DESIGN SYSTEM
import Container from "../../../components/design-system/Container"
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";
import Input from "../../../components/design-system/Input";

// Composant servant à éditer le profil de l'utilisateur (Nom / Prénom / E-mail / Téléphone / Adresse postale)
export default function EditProfilAccount() {
    return (
        <Container className="flex-1 flex flex-col relative w-full pb-16">

            {/* Entête de la section */}
            <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <Typography component="h2" color="primary" variant="headline-md" >
                        Profil
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
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-GSBZWHaI6Ysk5WLIEiNHeen7Jodi0D54y1LRpHDqyX5NxHOnYy4Bf3wSxudndyO3THJ3a3TsyEixNzlzk-TpIRTfIHh2-w1_ANtfPv7cf7nYciHHGm58HGmIvHkb6AVni90EThIg8EKRrlEkdnDIEcHUbVR-be-VcC_TeytvvI0yF9-3GPsjOo08c1YzFWnXQsfSwKzdAri_aDLowEBspdOvrLaBgpPoZlpjULr5ISVfZwqWPV6GdXtqumEpr7svhXuAyRWlnpZ-" />
                            </div>
                            {/* TODO : Afficher la date d'inscription du client en fonction de la base données */}
                            <Typography
                                component="p"
                                className="py-6 font-body text-xs text-on-surface-variant text-center"
                            >
                                Membre depuis Jan 2023
                            </Typography>
                        </div>
                    </div>

                    {/* Formulaire - Informations personnelles */}
                    <div className="lg:w-3/4 flex flex-col gap-8 bg-[#18181b] p-6 md:p-8 rounded-lg relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {/* Prénom */}
                            <Input 
                                label="Prénom" 
                                type="text" 
                                placeholder="Votre prénom" />
                            {/* Nom */}
                            <Input 
                                label="Nom" 
                                type="text" 
                                placeholder="Votre nom" />
                            {/* Adresse e-mail */}
                            <Input 
                                label="email" 
                                type="email" 
                                className="md:col-span-2"
                                readOnly 
                                placeholder="votre-adresse-mail@example.com" 
                                required
                            />
                            {/* Adresse postale */}
                            <Input 
                                label="Adresse postale" 
                                type="text" 
                                className="md:col-span-2" 
                                placeholder="Renseignez votre adresse postale" />
                            {/* Téléphone */}
                            <Input 
                                label="Téléphone" 
                                type="tel" 
                                placeholder="06 12 34 56 78" />
                        </div>

                        {/* Bouton de sauvegarde */}
                        <div className="flex justify-end pt-4 mt-2 relative z-10">
                            <Button
                                className="px-6 py-3 bg-primary text-on-primary font-bold font-body rounded hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
                                Sauvegarder les modifications
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}