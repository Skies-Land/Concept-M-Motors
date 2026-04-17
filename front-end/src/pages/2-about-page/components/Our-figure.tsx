// COMPOSANT
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à afficher les chiffres clés de l'entreprise correspondant à la page à propos
export default function OurFigure() {
    return (
        <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto" data-pg-name="Section sur les chiffres clés de l'entreprise de la page à propos">

            {/* Grille des chiffres clés */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-outline-variant/20 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-r border-b border-white/5">
                    <Typography variant="headline-md" component="span" color="primary" className="mb-2">
                        30+
                    </Typography>
                    <Typography variant="label-md" component="span" color="on-surface-variant">
                        Ans d'Expertise
                    </Typography>
                </div>
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-r border-b border-white/5">
                    <Typography variant="headline-md" component="span" color="on-surface" className="mb-2">
                        Top 10
                    </Typography>
                    <Typography variant="label-md" component="span" color="on-surface-variant">
                        National
                    </Typography>
                </div>
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-r border-b border-white/5">
                    <Typography variant="headline-md" component="span" color="on-surface" className="mb-2">
                        800
                    </Typography>
                    <Typography variant="label-md" component="span" color="on-surface-variant">
                        Collaborateurs
                    </Typography>
                </div>
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-b border-white/5">
                    <Typography variant="headline-md" component="span" color="primary" className="mb-2">
                        1M+
                    </Typography>
                    <Typography variant="label-md" component="span" color="on-surface-variant">
                        Clients Satisfaits
                    </Typography>
                </div>
            </div>

        </section>
    )
}