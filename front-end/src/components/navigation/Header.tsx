// DÉPENDANCES
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

// DESIGN SYSTEM
import Container from '../design-system/Container';
import { Button } from '../design-system/Button';
import Logo from '../design-system/Logo';
import { Typography } from '../design-system/Typography';

// COMPOSANTS
import UserAccount from './User-account';
import useActiveLinkHeader from './features/Active-link-header';

// CONTEXTE
import { useAuth } from '../../context/AuthUserContext';

// LOGIQUE
import useMenuMobile from './functions/Menu-mobile-function';

/** Composant servant à afficher l'en-tête du site */
export default function Header() {
  const { authUser, signOut } = useAuth();
  const { isMenuOpen, toggleMenu } = useMenuMobile();
  const { getLinkStyles } = useActiveLinkHeader();

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-stone-950/60 backdrop-blur-xl">

        {/* Conteneur principal */}
        <Container 
          className="flex justify-between items-center py-6" 
          data-pg-name="Navbar">
          <Logo />

          {/* Liens de navigation */}
          <div className="hidden items-end space-x-12 md:flex" data-pg-name="Liens">
            <Link to="/catalog">
              <Typography 
                variant="label-md" 
                color={getLinkStyles('/catalog').color} 
                className={getLinkStyles('/catalog').className}
                component="span"
              >
                Catalogue
              </Typography>
            </Link>
            <Link to="/about">
              <Typography 
                variant="label-md" 
                color={getLinkStyles('/about').color} 
                className={getLinkStyles('/about').className}
                component="span"
              >
                À propos
              </Typography>
            </Link>
            <Link to="/contact">
              <Typography 
                variant="label-md" 
                color={getLinkStyles('/contact').color} 
                className={getLinkStyles('/contact').className}
                component="span"
              >
                Contact
              </Typography>
            </Link>
          </div>

          {/* Bouton de connexion
          Si l'utilisateur est connecté, affichage du nom utilisateur et d'un bouton de déconnexion
          Sinon, affichage du bouton de connexion
          */}
          <div className="flex items-center gap-6" data-pg-name="Connexion">
            <div className="hidden md:block">
              {authUser ? (
                <UserAccount user={authUser} onLogout={signOut} />
              ) : (
                <Button 
                  variant="primary" 
                  size="small" 
                  baseUrl="/login"
                >
                  Connexion
                </Button>
              )}
            </div>

            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden text-on-surface"
              onClick={toggleMenu}
              aria-label="Menu principal"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </Container>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-[100%] left-0 w-full h-screen bg-stone-950/95 backdrop-blur-xl p-6 flex flex-col gap-6 md:hidden">
            <Link to="/catalog" onClick={toggleMenu}>
              <Typography 
                variant="headline-md" 
                color={getLinkStyles('/catalog').color} 
                className={getLinkStyles('/catalog').className}
              >
                Catalogue
              </Typography>
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              <Typography 
                variant="headline-md" 
                color={getLinkStyles('/about').color} 
                className={getLinkStyles('/about').className}
              >
                À propos
              </Typography>
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <Typography 
                variant="headline-md" 
                color={getLinkStyles('/contact').color} 
                className={getLinkStyles('/contact').className}
              >
                Contact
              </Typography>
            </Link>
            
            <div className="mt-8 pt-8 border-t border-stone-800">
              {authUser ? (
                <UserAccount user={authUser} onLogout={signOut} />
              ) : (
                <Button 
                  variant="primary" 
                  size="medium" 
                  baseUrl="/login"
                  className="w-full justify-center"
                >
                  Connexion
                </Button>
              )}
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}