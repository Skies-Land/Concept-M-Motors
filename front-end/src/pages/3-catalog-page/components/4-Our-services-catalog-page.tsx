// DEPENDANCE
import { Link } from "react-router-dom";

// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";

// ICÔNES
import { MdSupportAgent, MdPrecisionManufacturing, MdVerified } from "react-icons/md";

/** Composant servant à afficher les services qu'offre l'entreprise correspondant à la page catalogue */
export default function OurServicesCatalogPage() {
    return (
        <section className="mt-32" data-pg-name="Section services de la page catalogue">

            {/* Conteneur principal */}
            <Container>

                {/* Titre */}
                <div className="text-center mb-16">
                    <Typography variant="label-lg" color="primary" className="mb-4 block">
                        M-Motors Ecosystem
                    </Typography>
                    <Typography variant="headline-lg" component="h2" color="on-surface" className="uppercase">
                        Écosystème de Services
                    </Typography>
                </div>

                {/* Liste en grid des services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 - Assistance 24/7 */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <MdSupportAgent className="text-4xl text-orange-500 transition-transform group-hover:scale-110" />
                        </div>
                        <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-4">
                            Assistance 24/7
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant" className="mb-6">
                            Conciergerie dédiée et assistance routière premium disponible partout en Europe en moins de 45 minutes.
                        </Typography>
                        {/* Bouton de navigation vers la page contact */}
                        <Link 
                            to="/contact"
                            className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline"
                        >
                            Détails techniques
                        </Link>
                    </div>
                    {/* Service 2 - Maintenance Expert */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <MdPrecisionManufacturing className="text-4xl text-orange-500 transition-transform group-hover:scale-110" />
                        </div>
                        <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-4">
                            Maintenance Expert
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant" className="mb-6">
                            Entretien réalisé exclusivement par des techniciens certifiés utilisant des pièces d'origine constructeur.
                        </Typography>
                        {/* Bouton de navigation vers la page contact */}
                        <Link 
                            to="/contact"
                            className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline"
                        >
                            Planifier
                        </Link>
                    </div>
                    {/* Service 3 - Garantie Premium */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <MdVerified className="text-4xl text-orange-500 transition-transform group-hover:scale-110" />
                        </div>
                        <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-4">
                            Garantie Premium
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant" className="mb-6">
                            Couverture intégrale jusqu'à 60 mois, incluant l'ensemble des composants mécaniques et électroniques.
                        </Typography>
                        {/* Bouton de navigation vers la page contact */}
                        <Link 
                            to="/contact"
                            className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline"
                        >
                            Conditions
                        </Link>
                    </div>
                </div>

            </Container>

        </section>
    )
}