// Composant servant à afficher la section Hero correspondant à la page à propos
export default function HeroAbout() {
    return (
        <section className="relative h-[870px] flex items-center justify-center overflow-hidden" data-pg-name="Section : Hero">
            <div className="absolute inset-0 z-0">
                <img alt="Luxury black sports car in a minimalist architectural garage" className="w-full h-full object-cover opacity-40" data-alt="cinematic close up of a sleek matte black supercar headlight in a dark minimalist industrial setting with orange neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4lm-yddyne5xU30gNGX2afT1-RwfFxxPswwRdhJBWnSBQQfhPTms330EVWKp2q6a_M76JhD5ulOnDBe2dORqLt6YW9oi5qYWJRWlPMCEzQnJroWfyIY6IqKfBlyXBT5r-zBz6qffW2j2ivuWAJBrE8g1JfpeifTkAbVrSpkPTTifuvOV0GiQjlM_OHoNsCiEr9kMLkwbplRzCbfwyTmwQWnP0GSiTB2l5bfcKGTIo5jXefxyu6Lc_jsYV6HW8VOEloNKRTt61pXc"/>
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
            </div>
            <div className="relative z-10 text-center max-w-5xl px-6">
                <p className="font-label mb-6 text-orange-500 text-sm tracking-[0.4em] uppercase">
                    Établi en 1994
                </p>
                <h1 className="font-headline text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-8">
                    HÉRITAGE ET 
                    <span className="border-b-4 border-orange-500 text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                        EXCELLENCE
                    </span> 
                    <br />AUTOMOBILE 
                </h1>
                <p className="font-body text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Depuis trois décennies, M-MOTORS redéfinit les standards de l'automobile d'exception. 
                    Notre quête de perfection technique et notre passion pour l'ingénierie nous ont propulsés 
                    au sommet du secteur national.
                </p>
            </div>
        </section>
    )
}
