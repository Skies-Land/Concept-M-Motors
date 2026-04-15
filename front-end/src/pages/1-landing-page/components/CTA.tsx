// Composant servant à afficher un bouton d'appel à l'action correspondant à la landing page

export default function CTA() {
  return (
    <section className="py-24 bg-primary-container text-on-primary-container" data-pg-name="Section : Boutton action">
      <div className="flex flex-col gap-12 items-center justify-between max-w-screen-2xl mx-auto pl-8 pr-16 md:flex-row">
        <h2 className="font-bold font-headline max-w-xl pl-8 text-4xl text-center tracking-tighter uppercase md:text-5xl md:text-left">
          Prêt à démarrer votre expérience ?
        </h2>
        <button className="bg-on-primary-fixed font-bold px-12 py-6 rounded-lg text-white tracking-[0.2em] transition-transform uppercase hover:scale-105">
          Commencer ici
        </button>
      </div>
    </section>
  );
}
