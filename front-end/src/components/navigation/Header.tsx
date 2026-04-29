// DÉPENDANCE
import { Link } from 'react-router-dom';

// DESIGN SYSTEM
import Container from '../design-system/Container';
import { Button } from '../design-system/Button';
import Logo from '../design-system/Logo';
import { Typography } from '../design-system/Typography';

// COMPOSANT
import UserAccount from './User-account';

// CONTEXTE
import { useAuth } from '../../context/AuthUserContext';

/** Composant servant à afficher l'en-tête du site */
export default function Header() {
  const { authUser, signOut } = useAuth();

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-stone-950/60 backdrop-blur-xl">

        {/* Conteneur principal */}
        <Container 
          className="flex justify-between items-center py-6" 
          data-pg-name="Navbar">
          <Logo />

          {/* Liens de navigation */}
          {/* TODO: Ajouter un effet de lien actif */}
          <div className="hidden items-end space-x-12 md:flex" data-pg-name="Liens">
            <Link to="/catalog">
              <Typography 
                variant="label-md" 
                color="on-surface-variant" 
                className="pb-1 transition-colors hover:text-on-surface"
                component="span"
              >
                Catalogue
              </Typography>
            </Link>
            <Link to="/about">
              <Typography 
                variant="label-md" 
                color="on-surface-variant" 
                className="pb-1 transition-colors hover:text-on-surface"
                component="span"
              >
                À propos
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
          </div>
        </Container>

      </nav>
    </header>
  );
}

