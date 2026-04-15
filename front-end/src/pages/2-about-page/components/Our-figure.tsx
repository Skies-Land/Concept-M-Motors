// Composant servant à afficher les chiffres clés de l'entreprise correspondant à la page à propos
export default function OurFigure() {
    return (
        <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto" data-pg-name="Section : Chiffre">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-outline-variant/20 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-r border-b border-white/5">
                    <span className="font-black font-headline mb-2 text-5xl text-orange-500">
                        30+
                    </span>
                    <span className="font-label text-xs uppercase tracking-widest text-zinc-500">
                        Ans d'Expertise
                    </span>
                </div>
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-r border-b border-white/5">
                    <span className="font-headline text-5xl font-black text-white mb-2">
                        Top 10
                    </span>
                    <span className="font-label text-xs uppercase tracking-widest text-zinc-500">
                        National
                    </span>
                </div>
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-r border-b border-white/5">
                    <span className="font-headline text-5xl font-black text-white mb-2">
                        800
                    </span>
                    <span className="font-label text-xs uppercase tracking-widest text-zinc-500">
                        Collaborateurs
                    </span>
                </div>
                <div className="bg-surface-container-high p-10 text-center flex flex-col items-center justify-center border-b border-white/5">
                    <span className="font-black font-headline mb-2 text-5xl text-orange-500">
                        1M+
                    </span>
                    <span className="font-label text-xs uppercase tracking-widest text-zinc-500">
                        Clients Satisfaits
                    </span>
                </div>
            </div>
        </section>
    )
}