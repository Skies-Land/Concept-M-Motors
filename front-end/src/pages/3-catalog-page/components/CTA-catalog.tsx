// COMPONENT
import Container from "../../../components/layout/Container";

// IMAGE
import imageCTA from "../../../assets/IMG_CTA_catalog.png"

// Composant servant à afficher la section d'appel à l'action correspondant de la page catalogue
export default function CTA_catalog() {
    return (
        <section data-pg-name="Section : CTA">
            <Container className="mt-24 group">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        alt="High speed racing photography" 
                        className="w-full h-full object-cover brightness-50" 
                        src= {imageCTA}
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                        <span className="font-bold font-headline mb-4 text-orange-500 text-xs tracking-[0.4em] uppercase">
                            Conciergerie M-Motors
                        </span>
                        <h2 className="font-headline text-5xl font-extrabold uppercase tracking-tighter max-w-2xl mb-8">
                            Un Service Au-Delà de la Possession
                        </h2>
                        <p className="text-neutral-200 max-w-xl font-light leading-relaxed mb-10">
                            Nous n'offrons pas seulement des clés. Nous offrons une entrée dans un cercle restreint de collectionneurs passionnés et un accès exclusif à nos événements privés.
                        </p>
                        <button className="bg-transparent border border-white font-bold font-headline hover:bg-white hover:text-black px-12 py-4 text-[10px] tracking-[0.3em] transition-all uppercase">
                            Consulter un Expert
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}