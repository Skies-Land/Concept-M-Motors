// DÉPENDANCE
import { Link } from 'react-router-dom';

// COMPOSANTS
import Container from '../design-system/Container';
import Logo from '../design-system/Logo';
import { Typography } from '../design-system/Typography';

// Composant servant à afficher le pied de page "Footer" du site
export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-800/20">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 w-full">

        {/* COLONNE LOGO + DESCRIPTION */}
        <div className="col-span-2 md:col-span-1">
          <Logo className="mb-6 !text-xl" />
          <Typography 
            variant="label-sm" 
            color="on-surface-variant" 
            className="leading-relaxed !text-xs"
            component="p"
          >
            L'ingénierie de précision au service de votre mobilité. Achat ou location, nous redéfinissons les standards de l'automobile premium.
          </Typography>
        </div>

        {/* COLONNE ENTREPRISE */}
        <div>
          <Typography variant="label-lg" weight="bold" className="mb-6" component="h5">
            Entreprise
          </Typography>
          <ul className="space-y-4">
            <li><Link to="/about"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">À propos</Typography></Link></li>
            <li><Link to="/catalog"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Nos services</Typography></Link></li>
            <li><Link to="/"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Carrière</Typography></Link></li>
          </ul>
        </div>

        {/* COLONNE LÉGAL */}
        <div>
          <Typography variant="label-lg" weight="bold" className="mb-6" component="h5">
            Légal
          </Typography>
          <ul className="space-y-4">
            <li><Link to="/contact"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Contact</Typography></Link></li>
            <li><Link to="/"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Mentions Légales</Typography></Link></li>
            <li><Link to="/"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Confidentialité</Typography></Link></li>
          </ul>
        </div>

        {/* COLONNE RÉSEAUX */}
        <div>
          <Typography variant="label-lg" weight="bold" className="mb-6" component="h5">
            Réseaux
          </Typography>
          <ul className="space-y-4">
            <li>
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Facebook</Typography></Link>
            </li>
            <li>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">Instagram</Typography></Link>
            </li>
            <li>
              <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer"><Typography variant="label-sm" color="on-surface-variant" className="hover:text-primary transition-colors" component="span">YouTube</Typography></Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* BOTTOM BAR */}
      <div className="bg-stone-900 border border-stone-800/20">
        <Container className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="label-sm" color="on-surface-variant" component="div">
            © 2026 Concept M-Motors. Propulsé par  
            <Link 
              className="text-primary hover:text-primary-container transition-colors ml-1" 
              to="https://github.com/Skies-Land" 
              target="_blank" 
              rel="noopener noreferrer">
              Jonathan Araldi
            </Link>.
          </Typography>
          <Typography variant="label-sm" color="on-surface-variant" className="text-center md:text-right max-w-2xl opacity-60" component="div">
            Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
          </Typography>
        </Container>
      </div>

    </footer>
  );
}

