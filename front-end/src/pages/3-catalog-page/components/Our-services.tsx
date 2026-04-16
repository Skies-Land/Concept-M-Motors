// COMPOSANTS
import Container from "../../../components/layout/Container";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher les services qu'offre l'entreprise correspondant à la page catalogue
export default function OurServices() {
    return (
        <section className="mt-32" data-pg-name="Section : Services">
            <Container>
                <div className="text-center mb-16">
                    <Typography variant="label-lg" color="primary" className="mb-4 block">
                        M-Motors Ecosystem
                    </Typography>
                    <Typography variant="headline-lg" component="h2" color="on-surface" className="uppercase">
                        Écosystème de Services
                    </Typography>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <span className="material-symbols-outlined text-4xl text-orange-500 transition-transform group-hover:scale-110">
                                support_agent
                            </span>
                        </div>
                        <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-4">
                            Assistance 24/7
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant" className="mb-6">
                            Conciergerie dédiée et assistance routière premium disponible partout en Europe en moins de 45 minutes.
                        </Typography>
                        <a className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline" href="#">
                            Détails techniques
                        </a>
                    </div>
                    {/* Service 2 */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <span className="material-symbols-outlined text-4xl text-orange-500 transition-transform group-hover:scale-110">
                                precision_manufacturing
                            </span>
                        </div>
                        <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-4">
                            Maintenance Expert
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant" className="mb-6">
                            Entretien réalisé exclusivement par des techniciens certifiés utilisant des pièces d'origine constructeur.
                        </Typography>
                        <a className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline" href="#">
                            Planifier
                        </a>
                    </div>
                    {/* Service 3 */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <span className="material-symbols-outlined text-4xl text-orange-500 transition-transform group-hover:scale-110">
                                verified
                            </span>
                        </div>
                        <Typography variant="headline-sm" component="h4" color="on-surface" className="uppercase mb-4">
                            Garantie Premium
                        </Typography>
                        <Typography variant="body-sm" color="on-surface-variant" className="mb-6">
                            Couverture intégrale jusqu'à 60 mois, incluant l'ensemble des composants mécaniques et électroniques.
                        </Typography>
                        <a className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline" href="#">
                            Conditions
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}