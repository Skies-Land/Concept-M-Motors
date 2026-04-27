// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography"

// Composant servant à afficher la section Hero correspondant à la page de contact
export default function HeroContactPage() {
    return (
        <section>
            <div className="max-w-3xl pt-16 pb-12">
                <p className="font-label text-primary uppercase tracking-[0.2em] text-sm mb-4">
                    Support &amp; Requêtes
                </p>
                <Typography
                    variant="headline-lg"
                    color="on-surface"
                    component="h1"
                    className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 uppercase">
                    CONTACTER<br />
                    <span className="text-primary-dim">NOTRE ÉQUIPE</span>
                </Typography>
                <Typography
                    variant="body-lg"
                    color="on-surface-variant"
                    component="p"
                    className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
                    Connectez-vous avec notre équipe d'experts,
                    pour des requêtes de performance aux spécifications sur-mesure.
                </Typography>
            </div>
        </section>
    )
}