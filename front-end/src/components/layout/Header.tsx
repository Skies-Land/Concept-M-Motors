export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-stone-950/60 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto" data-pg-name="Navbar">
          <div className="text-2xl font-black text-orange-500 tracking-tighter font-['Space_Grotesk']" data-pg-name="Logo">
            M-MOTORS
          </div>
          {/* Liens de navigation */}
          <div className="hidden items-end space-x-12 md:flex" data-pg-name="Liens">
            <a className="font-['Space_Grotesk'] pb-1 text-stone-400 text-xs tracking-wider uppercase hover:text-stone-100" href="/catalogue">Catalogue</a>
            <a className="font-['Space_Grotesk'] p-1 text-stone-400 text-xs tracking-wider transition-colors uppercase" href="/a-propos">À propos</a>
          </div>
          {/* Bouton de connexion */}
          <div className="flex items-center gap-6" data-pg-name="Connexion">
            <button className="font-bold hidden ignition-gradient px-6 py-2 rounded-lg text-on-primary-fixed text-sm tracking-widest transition-transform uppercase active:scale-95 md:block">
              CONNEXION
            </button>
            <span className="material-symbols-outlined text-stone-100 cursor-pointer" data-icon="menu">
              menu
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
