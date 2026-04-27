// COMPOSANTS
import Seo from "../../components/seo/Seo"
import EditProfilAccount from "./components/1-Edit-profil-account";
import DocsAccount from "./components/2-Docs-acount";
import ServicesAccount from "./components/3-Services-acount";
import BookingAccount from "./components/4-Booking-account";
import SidebarAccount from "./components/features/Sidebar-account";

// Composant servant à afficher le tableau de bord de l'espace client
export default function AccountPageView() {
    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page */}
            <Seo
                title="Espace client - Concept M-Motors"
                description="Tableau de bord de votre compte client."
            />

            {/* Contenu principal de la page */}
            <div className="bg-surface text-on-surface antialiased min-h-screen flex selection:bg-primary selection:text-on-primary-fixed">

                {/* Menu de navigation latérale gauche dans l'espace client */}
                <SidebarAccount />

                {/* Contenu principal de la page */}
                <main className="flex-1 flex flex-col w-full min-h-screen pt-24">
                    {/* Section d'édition du profil */}
                    <section id="edit-profil" className="w-full"><EditProfilAccount /></section>

                    {/* Section des documents */}
                    <section id="docs" className="w-full"><DocsAccount /></section>

                    {/* Section des services */}
                    <section id="services" className="w-full"><ServicesAccount /></section>

                    {/* Section des réservations */}
                    <section id="booking" className="w-full"><BookingAccount /></section>
                </main>
            </div>
        </>
    );
}
