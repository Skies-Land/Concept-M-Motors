// DEPENDANCE
import { Link } from 'react-router-dom';

// COMPONENTS
import Container from '../layout/Container';

// Composant servant à afficher l'en-tête "Header" du site
export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-stone-950/60 backdrop-blur-xl">

        <Container 
          className="flex justify-between items-center py-6" 
          data-pg-name="Navbar">
          <Link 
            to="/" 
            className="text-2xl font-black text-orange-500 tracking-tighter font-['Space_Grotesk']" 
            data-pg-name="Logo">
            M-MOTORS
          </Link>

          {/* Liens de navigation */}
          <div className="hidden items-end space-x-12 md:flex" data-pg-name="Liens">
            <Link 
              className="font-['Space_Grotesk'] pb-1 text-stone-400 text-xs tracking-wider uppercase hover:text-stone-100" 
              to="/catalog">
                Catalogue
            </Link>
            <Link className="font-['Space_Grotesk'] p-1 text-stone-400 text-xs tracking-wider transition-colors uppercase hover:text-stone-100" 
              to="/about">
                À propos
            </Link>
          </div>

          {/* Bouton de connexion */}
          <div className="flex items-center gap-6" data-pg-name="Connexion">
            <Link 
              to="/login" 
              className="font-bold hidden ignition-gradient px-6 py-2 rounded-lg text-on-primary-fixed text-sm tracking-widest transition-transform uppercase active:scale-95 md:block">
              CONNEXION
            </Link>
            <span 
              className="material-symbols-outlined text-stone-100 cursor-pointer" 
              data-icon="menu">
              menu
            </span>
          </div>
        </Container>

      </nav>
    </header>
  );
}

