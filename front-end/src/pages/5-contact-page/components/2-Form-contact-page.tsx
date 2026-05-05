// COMPOSANT
import { Link } from "react-router-dom"

// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography"

// MODULE
import ModuleFormContactPage from "./contact-form-module/Module-form-contact-page"

// ICÔNES
import { MdOutlineLocationCity, MdOutlineOpenInNew , MdSupportAgent, MdOutlineSchedule  } from "react-icons/md";

/** Composant servant à afficher le formulaire de contact */
export default function FormContactPage() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-24 xl:items-stretch">

                {/* Formulaire de contact */}
                <ModuleFormContactPage />

                {/* Informations sur l'entreprise */}
                <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6 lg:gap-8 h-full">
                    {/* Bloc 1 : Adresse */}
                    <div className="bg-surface-container p-6 sm:p-8 rounded-lg flex flex-col justify-between group relative overflow-hidden flex-1">
                        <div className="mb-6 sm:mb-8">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-primary">
                                <MdOutlineLocationCity className="text-xl sm:text-2xl" />
                                <Typography
                                    variant="headline-sm"
                                    color="on-surface"
                                    component="h3"
                                    className="font-headline font-bold text-lg sm:text-xl uppercase tracking-wide text-on-surface">
                                    Siège social
                                </Typography>
                            </div>
                            <Typography
                                variant="body-lg"
                                color="on-surface-variant"
                                component="p"
                                className="font-body text-on-surface-variant leading-relaxed text-base sm:text-lg">
                                14 avenue de la Précision<br />
                                Secteur Industriel Nord<br />
                                75000 Paris, France
                            </Typography>
                        </div>
                        <div className="mt-auto">
                            <Link
                                to="#"
                                className="inline-flex items-center gap-2 font-label text-xs sm:text-sm text-primary uppercase tracking-wider hover:text-primary-dim transition-colors">
                                Ouvrir dans Maps
                                <MdOutlineOpenInNew className="text-xl sm:text-2xl" />
                            </Link>
                        </div>
                    </div>

                    {/* Deux Blocks : Support Technique & Horaires */}
                    <div className="flex flex-col gap-6 lg:gap-8 flex-1">
                        {/* Block 2 - Support technique */}
                        <div className="bg-surface-container p-5 sm:p-6 rounded-lg flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-primary">
                                <MdSupportAgent className="text-xl sm:text-2xl"/>
                                <Typography
                                    variant="headline-sm"
                                    color="on-surface"
                                    component="h3"
                                    className="font-headline font-bold text-lg sm:text-xl uppercase tracking-wide text-on-surface">
                                    Support Technique
                                </Typography>
                            </div>
                            <Typography
                                variant="body-lg"
                                color="on-surface-variant"
                                component="p"
                                className="font-body text-on-surface-variant leading-relaxed text-base sm:text-lg mb-2"
                                >
                                Ligne direct vers notre support client
                            </Typography>
                            <Link
                                to="#"
                                className="font-headline font-bold text-xl sm:text-2xl text-on-surface text-primary transition-colors block break-words">
                                01 00 00 00 00
                            </Link>
                        </div>
                        {/* Block 3 - Horaires */}
                        <div className="bg-surface-container p-5 sm:p-6 rounded-lg flex-1">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-primary">
                                <MdOutlineSchedule className="text-xl sm:text-2xl"/>
                                <Typography
                                    variant="headline-sm"
                                    color="on-surface"
                                    component="h3"
                                    className="font-headline font-bold text-lg sm:text-xl uppercase tracking-wide text-on-surface">
                                    Heures de Service
                                </Typography>
                            </div>
                            <ul className="space-y-1 sm:space-y-2 font-body text-sm text-on-surface-variant">
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
                                    <span className="font-bold text-primary">Fermé</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}