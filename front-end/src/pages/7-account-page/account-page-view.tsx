// COMPOSANTS
import Seo from "../../components/seo/Seo"
import EditProfilAccount from "./components/1-Edit-profil-account";
import DocsAccount from "./components/2-Docs-account";
import ServicesAccount from "./components/3-Services-account";
import BookingAccount from "./components/4-Booking-account";
import SidebarAccount from "./components/features/Sidebar-account";

// FONCTIONS
import useActiveLinkSidebar from "./components/functions/Active-link-sidebar-account";

/** Composant principal de la page espace client */
export default function AccountPageView() {
    const { activeHash } = useActiveLinkSidebar();

    return (
        <>
            {/* Composant SEO pour définir les métadonnées de la page */}
            <Seo
                title="Espace client - Concept M-Motors"
                description="Tableau de bord de votre compte client."
            />

            {/* Contenu principal de la page */}
            <div className="bg-surface text-on-surface antialiased min-h-screen flex selection:bg-primary selection:text-on-primary-fixed">

                {/* Menu de navigation latérale gauche de l'espace client */}
                <SidebarAccount />

                {/* Les onglets de l'espace client */}
                <main className="flex-1 flex flex-col w-full min-h-screen pt-24">
                    {activeHash === "#edit-profil" && <section id="edit-profil" className="w-full"><EditProfilAccount /></section>}
                    {activeHash === "#docs" && <section id="docs" className="w-full"><DocsAccount /></section>}
                    {activeHash === "#services" && <section id="services" className="w-full"><ServicesAccount /></section>}
                    {activeHash === "#booking" && <section id="booking" className="w-full"><BookingAccount /></section>}
                </main>
            </div>
        </>
    );
}
