// COMPOSANT
import { Link } from "react-router-dom"
import { Typography } from "../../../components/design-system/Typography"

// MODULES
import FormsModuleContactPage from "./module-form/module-form-contact-page"

// Composant servant à afficher le formulaire de contact
export default function FormContactPage() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                {/* Formulaire de contact */}
                <FormsModuleContactPage />

                {/* Informations sur l'entreprise */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    {/* Block : Adresse */}
                    <div className="bg-surface-container-highest p-8 rounded-lg flex flex-col justify-between h-full group relative overflow-hidden">
                        <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <span className="material-symbols-outlined text-[12rem]"
                                data-icon="location_on"
                                data-pg-name="Icône de localisation">
                                location_on
                            </span>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <span className="material-symbols-outlined"
                                    data-icon="business"
                                    data-pg-name="Icône du siège social">
                                    business
                                </span>
                                <Typography
                                    variant="headline-sm"
                                    color="on-surface"
                                    component="h3"
                                    className="font-headline font-bold text-xl uppercase tracking-wide text-on-surface">
                                    Siège social
                                </Typography>
                            </div>
                            <Typography
                                variant="body-lg"
                                color="on-surface-variant"
                                component="p"
                                className="font-body text-on-surface-variant leading-relaxed text-lg">
                                14 avenue de la Précision<br />
                                Secteur Industriel Nord<br />
                                75000 Paris, France
                            </Typography>
                        </div>
                        <div className="mt-auto">
                            <Link
                                to="#"
                                className="inline-flex items-center gap-2 font-label text-sm text-primary uppercase tracking-wider hover:text-primary-dim transition-colors">
                                Ouvrir dans Maps
                                <span className="material-symbols-outlined text-sm"
                                    data-icon="open_in_new"
                                    data-pg-name="Icône ouvrir dans Maps">
                                    open_in_new
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* Block : Support Technique */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Support Card */}
                        <div className="bg-surface-container p-6 rounded-lg">
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
                                <Typography
                                    variant="headline-sm"
                                    color="on-surface"
                                    component="h3"
                                    className="font-headline font-bold text-xl uppercase tracking-wide text-on-surface">
                                    Support Tech
                                </Typography>
                            </div>
                            <Typography
                                variant="body-lg"
                                color="on-surface-variant"
                                component="p"
                                className="font-body text-on-surface-variant leading-relaxed text-lg">Ligne support client
                            </Typography>
                            <Link
                                to="tel:+33100000000"
                                className="font-headline font-bold text-2xl text-on-surface hover:text-primary transition-colors"
                                data-icon="phone"
                                data-pg-name="Icône téléphone">
                                +33 1 00 00 00 00
                            </Link>
                        </div>
                        {/* Block : Horaires */}
                        <div className="bg-surface-container p-6 rounded-lg">
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <span className="material-symbols-outlined" data-icon="schedule" data-pg-name="Icône horaires">
                                    schedule
                                </span>
                                <Typography
                                    variant="headline-sm"
                                    color="on-surface"
                                    component="h3"
                                    className="font-headline font-bold text-xl uppercase tracking-wide text-on-surface">
                                    Heures de Service
                                </Typography>
                            </div>
                            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                                <li className="flex justify-between border-b border-surface-container-high pb-1">
                                    <span>Lun - Ven</span>
                                    <span className="text-on-surface font-medium">08:00 - 19:00</span>
                                </li>
                                <li className="flex justify-between border-b border-surface-container-high pb-1">
                                    <span>Samedi</span>
                                    <span className="text-on-surface font-medium">09:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between text-error-dim pt-1">
                                    <span>Dimanche</span>
                                    <span className="font-bold">Fermé</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}