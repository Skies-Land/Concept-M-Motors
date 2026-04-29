// DÉPENDANCE
import { Outlet } from 'react-router-dom';

// COMPOSANTS
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

/** Composant servant à afficher les éléments (`Header` & `Footer`) communs à toutes les pages */
export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
