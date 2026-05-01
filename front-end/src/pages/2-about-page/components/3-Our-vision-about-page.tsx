// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography";
import Container from "../../../components/design-system/Container";

// ICÔNES
import { MdVerified, MdHandshake, MdSpeed, MdPayments, MdAutorenew } from "react-icons/md";

/** Composant servant à afficher les services de l'entreprise correspondant à la page à propos */
export default function OurVisionAboutPage() {
    return (
        <Container>
            <section className="py-24 px-6 max-w-7xl mx-auto" data-pg-name="Section sur les services de l'entreprise de la page à propos">
                {/* En-tête de la section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <Typography variant="headline-md" component="h2" color="on-surface" className="uppercase mb-4">
                            L'Écosystème M-Motors
                        </Typography>
                        <Typography variant="body-md" color="on-surface-variant">
                            Une approche intégrée pour une expérience automobile sans compromis, 
                            alliant technologie de pointe et service personnalisé.
                        </Typography>
                    </div>
                    <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block mb-4"></div>
                    <Typography variant="label-md" color="primary" className="mb-4 shrink-0">
                        Services Précision
                    </Typography>
                </div>

                {/* Grille des services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Vente et Qualité */}
                    <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                            <MdVerified className="text-primary text-2xl" />
                        </div>
                        <Typography variant="headline-sm" component="h3" color="on-surface">
                            Vente et Qualité
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant">
                            Une sélection rigoureuse des modèles les plus performants, garantissant 
                            une intégrité mécanique totale.
                        </Typography>
                    </div>
                    {/* Accompagnement Client */}
                    <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                        <div className="bg-primary/10 duration-500 flex h-12 items-center justify-center rounded-lg transition-colors w-12">
                            <MdHandshake className="text-primary text-2xl" />
                        </div>
                        <Typography variant="headline-sm" component="h3" color="on-surface">
                            Accompagnement
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant">
                            Un conseiller dédié pour chaque étape de votre parcours, assurant une 
                            transition fluide vers votre nouveau véhicule.
                        </Typography>
                    </div>
                    {/* Essai Routier */}
                    <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                            <MdSpeed className="text-primary text-2xl" />
                        </div>
                        <Typography variant="headline-sm" component="h3" color="on-surface">
                            Essai Routier
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant">
                            Prenez les commandes de nos modèles exclusifs sur des parcours sélectionnés 
                            pour révéler leur plein potentiel.
                        </Typography>
                    </div>
                    {/* Financement */}
                    <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                            <MdPayments className="text-primary text-2xl" />
                        </div>
                        <Typography variant="headline-sm" component="h3" color="on-surface">
                            Financement
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant">
                            Des solutions de financement sur mesure, adaptées à votre structure fiscale et 
                            à vos ambitions patrimoniales.
                        </Typography>
                    </div>
                    {/* Reprise */}
                    <div className="bg-surface-container-low duration-500 flex flex-col gap-6 group p-8 rounded-lg transition-all hover:bg-surface-container-high md:col-span-2">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 rounded-lg transition-colors duration-500">
                                <MdAutorenew className="text-primary text-2xl" />
                            </div>
                            <div>
                                <Typography variant="headline-sm" component="h3" color="on-surface" className="mb-2">
                                    Reprise Optimisée
                                </Typography>
                                <Typography variant="body-sm" color="on-surface-variant">
                                    Une expertise transparente de votre véhicule actuel pour une offre de reprise 
                                    au plus juste des valeurs du marché premium.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Container>
    )
}