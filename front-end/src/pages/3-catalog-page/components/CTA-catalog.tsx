// COMPOSANTS
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";

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
                        <Typography variant="label-lg" color="primary" className="mb-4">
                            Conciergerie M-Motors
                        </Typography>
                        <Typography variant="headline-md" component="h2" color="on-surface" className="uppercase mb-8 max-w-2xl">
                            Un Service Au-Delà de la Possession
                        </Typography>
                        <Typography variant="body-lg" className="max-w-xl mb-10">
                            Nous n'offrons pas seulement des clés. Nous offrons une entrée dans un cercle restreint de collectionneurs passionnés et un accès exclusif à nos événements privés.
                        </Typography>
                        <Button variant="primary" size="large">
                            Consulter un Expert
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}