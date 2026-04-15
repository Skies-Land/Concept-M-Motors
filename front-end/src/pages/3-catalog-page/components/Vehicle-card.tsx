// Composant servant à afficher une carte de véhicule suivant des props
export default function VehicleCard() {
    return (
        <article className="group bg-surface-container-low hover:bg-surface-container transition-all duration-500 rounded-xl overflow-hidden flex flex-col">
            <div className="relative h-64 overflow-hidden">
                <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    data-alt="Image de la voiture" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJstpUSDZ8hKbGUZdBgHVegUhLYuwbAZOHAnvkCKS4vG_UNjMmME82K-YD90HI3fDDOSSyaGNM-R7EJ0lEz1K8fppHeo10fYlkDgxfkioSqJj5RXCVXmU0GDSz9N3rPXLGkoq7A0wrL1WQJZwaXLWww3TZg5_tiWNldvrmkMiL6xLWAKeGBHA6Wa1yXEfOqXWvQ8dnqYwwmhnSp1_7fgFaAwuCRhYsRkQvS5ONGjwOqyGlNLprEFVteEfCOH4o9LjNnYJmumXtiCm"
                />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                {/* Info véhicule */}
                <h3 className="font-headline text-xl font-bold mb-4 tracking-tight">
                    Porsche 911
                </h3>
                {/* Achat / Location */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                            Achat
                        </span>
                        <span className="font-bold font-headline text-lg text-orange-500">
                            224 900€
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                            Location
                        </span>
                        <span className="text-sm font-medium">
                            2 849€/mois
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}