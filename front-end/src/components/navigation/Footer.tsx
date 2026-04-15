// DEPENDANCE
import { Link } from 'react-router-dom';

// Composant servant à afficher le pied de page "Footer" du site
export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-800/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="font-['Space_Grotesk'] font-bold mb-6 text-orange-500 text-xl">M-MOTORS</div>
          <p className="text-stone-500 font-['Inter'] text-xs uppercase tracking-[0.2em] leading-relaxed">L'ingénierie de précision au service de votre mobilityé. Achat ou location, nous redéfinissons les standards de l'automobile premium.</p>
          <div className="flex gap-4 mt-8">
            <span className="material-symbols-outlined text-stone-400 hover:text-orange-500 cursor-pointer" data-icon="share">share</span>
            <span className="material-symbols-outlined text-stone-400 hover:text-orange-500 cursor-pointer" data-icon="public">public</span>
            <span className="material-symbols-outlined text-stone-400 hover:text-orange-500 cursor-pointer" data-icon="mail">mail</span>
          </div>
        </div>
        {/* COLONNE ENTREPRISE */}
        <div>
          <h5 className="text-stone-100 font-bold mb-6 text-xs uppercase tracking-widest">Entreprise</h5>
          <ul className="space-y-4">
            <li><Link className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" to="/about">À propos</Link></li>
            <li><Link className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" to="/catalog">Nos services</Link></li>
            <li><Link className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" to="/careers">Carrière</Link></li>
          </ul>
        </div>
        {/* COLONNE LÉGAL */}
        <div>
          <h5 className="text-stone-100 font-bold mb-6 text-xs uppercase tracking-widest">Légal</h5>
          <ul className="space-y-4">
            <li><Link className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" to="/contact">Contact</Link></li>
            <li><Link className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" to="/legal">Mentions Légales</Link></li>
            <li><Link className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" to="/privacy">Confidentialité</Link></li>
          </ul>
        </div>
        {/* COLONNE RÉSEAUX */}
        <div>
          <h5 className="text-stone-100 font-bold mb-6 text-xs uppercase tracking-widest">Réseaux</h5>
          <ul className="space-y-4">
            <li><a className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="text-stone-500 hover:text-orange-500 transition-colors font-['Inter'] text-xs uppercase tracking-[0.2em]" href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      {/* BOTTOM BAR */}
      <div className="px-12 py-8 bg-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-stone-500 font-['Inter'] text-[10px] uppercase tracking-[0.2em]">© 2026 Concept M-Motors. Propulsé par Jonathan Araldi.</div>
        <div className="text-stone-600 font-['Inter'] text-[9px] uppercase tracking-[0.1em] text-center md:text-right max-w-2xl">Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</div>
      </div>
    </footer>
  );
}

