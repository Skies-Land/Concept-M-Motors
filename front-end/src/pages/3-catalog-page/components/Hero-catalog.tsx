// IMAGE
import imageHero from "../../../assets/IMG_hero-catalog.jpg"

// Composant servant à afficher la section Hero correspondant à la page catalogue
export default function HeroCatalog() { 
    return (
        <section 
            className="bg-center bg-cover border-b border-white/5 flex flex-col h-[614px] items-center justify-center px-8 relative rounded-lg text-center" 
            style={{ backgroundImage: `url(${imageHero})` }}
            data-pg-name="Section : Hero">

            {/* Overlay */}
            <div className="absolute bg-black/60 inset-0"></div>
            <div className="relative z-10 max-w-4xl">
                <span className="block font-headline mb-4 text-orange-500 text-xs tracking-[0.4em] uppercase">
                    La Collection Signature
                </span>
                <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none">
                    L'ART DE <br/><span className="text-white italic">L'EXCEPTION</span>
                </h1>
                <p className="text-neutral-300 text-lg font-light tracking-wide max-w-2xl mx-auto mb-8 font-body">
                    Une sélection d'automobiles, où chaque courbe raconte une histoire de savoir-faire ancestral et d'innovation visionnaire.
                </p>
            </div>

            {/* Filtre de recherche */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8">
                <div className="backdrop-blur-xl bg-surface-container-high border border-white/10 flex flex-wrap gap-6 items-center justify-between p-6 rounded-lg shadow-2xl">
                    <div className="flex-1 min-w-[200px]">
                        <p className="font-bold mb-2 text-[9px] text-orange-500 tracking-widest uppercase">Prestige &amp; Marque</p>
                        <select className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 font-headline uppercase tracking-tight">
                            <option>Toutes les Manufactures</option>
                            <option>Rolls-Royce</option>
                            <option>Bentley</option>
                            <option>Aston Martin</option>
                            <option>Ferrari</option>
                        </select>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                    <div className="flex-1 min-w-[200px]">
                        <p className="font-bold mb-2 text-[9px] text-orange-500 tracking-widest uppercase">Investissement</p>
                        <div className="flex justify-between items-center text-sm font-headline">
                            <span>100k €</span>
                            <input className="accent-primary flex-grow mx-4" max="2000000" min="100000" step="50000" type="range"/>
                            <span>2M €+</span>
                        </div>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                    <button className="bg-primary font-bold font-headline ignition-gradient px-10 py-4 rounded-lg text-[11px] text-on-primary-fixed tracking-[0.2em] transition-all uppercase hover:brightness-110">
                        Filtrer
                    </button>
                </div>
            </div>
        </section>
    );
};