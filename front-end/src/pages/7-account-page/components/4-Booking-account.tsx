// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";

// Composant servant à planifier un rendez-vous ou une réservation
export default function BookingAccount() {
    return (
        <Container className="flex-1 flex flex-col relative w-full pb-16">
            <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <Typography component="h2" className="font-display font-bold text-on-surface tracking-tight">
                        Réservations
                    </Typography>
                    <Typography component="p" className="text-on-surface-variant font-body max-w-2xl">
                        Planifiez et gérez vos rendez-vous en concession ou essais de véhicules.
                    </Typography>
                </div>
                <div className="bg-surface-container-low p-6 md:p-8 rounded-lg relative overflow-hidden flex items-center justify-center min-h-[200px]">
                    <Typography component="p" className="text-on-surface-variant/50 font-body">
                        Historique de vos réservations à venir...
                    </Typography>
                </div>
            </div>
        </Container>
    );
}
