// COMPOSANTS
import { Typography } from "../../../components/design-system/Typography"
import { Button } from "../../../components/design-system/Button"
import Container from "../../../components/design-system/Container"

// Composant servant à afficher une grille tarifaire pour la méthode d'acquisition par location
export default function TarifCatalogDescription() {
    return (
        <>
            {/* TODO: Ajouter le prix de la location sur 24 mois et appliquer la formule de calcul pour les autres durées */}
            <section className="max-w-7xl mx-auto px-12 py-24 rounded-lg w-full" data-pg-name="Section : Grille tarifaire pour la location">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface uppercase mb-8">
                    Grille tarifaire pour la location
                </h2>

                {/* Grille de tarification pour la location */}
                <div className="bg-surface-container overflow-hidden rounded-lg">
                    <div className="bg-surface-container-highest border-b border-outline-variant/15 font-body font-semibold grid grid-cols-2 p-4 text-on-surface-variant text-sm tracking-widest uppercase">
                        <div>Durée</div>
                        <div>Mensualités</div>
                    </div>
                    <div className="bg-surface-container grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <div className="font-headline font-bold text-on-surface">
                            24 mois
                        </div>
                        <div className="font-body text-on-surface-variant group-hover:text-primary transition-colors">
                            3 200 € / mois
                        </div>
                    </div>
                    <div className="bg-surface-container-highest grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <div className="font-headline font-bold text-on-surface">
                            36 mois
                        </div>
                        <div className="font-body text-on-surface-variant group-hover:text-primary transition-colors">
                            2 850 € / mois
                        </div>
                    </div>
                    <div className="bg-surface-container grid grid-cols-2 group items-center p-4 transition-colors hover:bg-surface-container-low">
                        <div className="font-headline font-bold text-on-surface">
                            48 mois
                        </div>
                        <div className="font-body text-on-surface-variant group-hover:text-primary transition-colors">
                            2 600 € / mois
                        </div>
                    </div>
                </div>
                <p className="font-body text-xs text-on-surface-variant mt-4 text-right">
                    Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
                </p>
            </section>
        </>
    )
}