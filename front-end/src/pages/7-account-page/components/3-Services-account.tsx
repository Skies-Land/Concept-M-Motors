// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";

/** Composant servant à choisie les servicesassocié à la location longue durée (service optionnel) */
export default function ServicesAccount() {
    return (
        <Container className="flex-1 flex flex-col relative w-full pb-16">

            <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex flex-col gap-12">
                {/* Entête de la section */}
                <div className="flex flex-col gap-2">
                    <Typography component="h2" color="primary" variant="headline-md" >
                        Gestion de mes services
                    </Typography>
                    <Typography component="p" variant="body-lg">
                        Gérez vos services optionnels liés à la location longue durée de votre véhicule.
                    </Typography>
                </div>

                {/* Gestion des services optionnels */}
                <div className="bg-surface-container-low p-6 md:p-8 rounded-lg relative overflow-hidden flex items-center justify-center min-h-[200px]">
                    <Typography component="p" className="text-on-surface-variant/50 font-body">
                        Vos services apparaîtront bientôt ici...
                    </Typography>
                </div>
            </div>
        </Container>
    );
}