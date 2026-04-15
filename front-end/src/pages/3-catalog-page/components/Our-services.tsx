// COMPONENT
import Container from "../../../components/layout/Container";

// Composant servant à afficher les services qu'offre l'entreprise correspondant à la page catalogue
export default function OurServices() {
    return (
        <section className="mt-32" data-pg-name="Section : Services">
            <Container>
                <div className="text-center mb-16">
                    <span className="block font-black mb-4 text-[10px] text-orange-500 tracking-[0.4em] uppercase">
                        M-Motors Ecosystem
                    </span>
                    <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase">
                        Écosystème de Services
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="p-10 bg-surface-container-high border border-white/5 rounded-xl hover:bg-surface-container-highest transition-all group">
                        <div className="mb-8">
                            <span className="material-symbols-outlined text-4xl text-orange-500 transition-transform group-hover:scale-110">
                                support_agent
                            </span>
                        </div>
                        <h4 className="font-headline text-lg font-bold mb-4 uppercase tracking-tight">
                            Assistance 24/7
                        </h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                            Conciergerie dédiée et assistance routière premium disponible partout en Europe en moins de 45 minutes.
                        </p>
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
                        <h4 className="font-headline text-lg font-bold mb-4 uppercase tracking-tight">
                            Maintenance Expert
                        </h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                            Entretien réalisé exclusivement par des techniciens certifiés utilisant des pièces d'origine constructeur.
                        </p>
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
                        <h4 className="font-headline text-lg font-bold mb-4 uppercase tracking-tight">
                            Garantie Premium
                        </h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                            Couverture intégrale jusqu'à 60 mois, incluant l'ensemble des composants mécaniques et électroniques.
                        </p>
                        <a className="font-bold text-[10px] text-orange-500 tracking-widest uppercase hover:underline" href="#">
                            Conditions
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}