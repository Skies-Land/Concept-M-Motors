// DESIGN SYSTEM
import { Typography } from "../../../../components/design-system/Typography"
import { Button } from "../../../../components/design-system/Button"

// Composant servant à afficher le module dédier au formulaire de contact
export default function ModuleFormContactPage() {
    return (
        <div className="lg:col-span-7 bg-surface-container rounded-lg p-8 md:p-12">
            <form className="space-y-8">
                {/* Menu dépliant pour l'objet du message */}
                <div className="space-y-2">
                    <Typography
                        variant="label-sm"
                        color="on-surface-variant"
                        component="span"
                        className="block mb-6"
                        data-pg-name="Label du menu dépliant"
                    >
                        Sujet du Message
                    </Typography>
                    <div className="relative">
                        <select
                            className="w-full bg-surface-container-high text-on-surface font-body text-base px-4 py-4 rounded-DEFAULT border-none focus:ring-0 appearance-none outline-none outline-variant/15 focus:outline focus:outline-primary/50 focus:shadow-[0_0_8px_rgba(255,145,87,0.2)] transition-all"
                            id="subject" name="subject">
                            <option value="vente">Acquisition : Vente &amp; Location</option>
                            <option value="dossier">Mon dossier client</option>
                            <option value="essai">Demande d'essai</option>
                            <option value="support">Support technique</option>
                            <option value="autre">Autre demandes</option>
                        </select>
                        <span
                            className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
                            data-icon="expand_more"
                            data-pg-name="Icône du menu dépliant">
                            expand_more
                        </span>
                    </div>
                </div>
                {/* Prénom & Nom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Typography
                            variant="label-sm"
                            color="on-surface-variant"
                            component="span"
                            className="block mb-6"
                        >
                            Prénom
                        </Typography>
                        <input
                            className="w-full bg-surface-container-high text-on-surface font-body text-base px-4 py-4 rounded-DEFAULT border-none focus:ring-0 placeholder:text-on-surface-variant/50 outline-none outline-variant/15 focus:outline focus:outline-primary/50 focus:shadow-[0_0_8px_rgba(255,145,87,0.2)] transition-all"
                            id="prenom"
                            name="prenom"
                            placeholder="votre prénom"
                            type="text"
                            data-pg-name="Champ de saisie pour le prénom"
                        />
                    </div>
                    <div className="space-y-2">
                        <Typography
                            variant="label-sm"
                            color="on-surface-variant"
                            component="span"
                            className="block mb-6"
                        >
                            Nom
                        </Typography>
                        <input
                            className="w-full bg-surface-container-high text-on-surface font-body text-base px-4 py-4 rounded-DEFAULT border-none focus:ring-0 placeholder:text-on-surface-variant/50 outline-none outline-variant/15 focus:outline focus:outline-primary/50 focus:shadow-[0_0_8px_rgba(255,145,87,0.2)] transition-all"
                            id="nom"
                            name="nom"
                            placeholder="votre nom de famille"
                            type="text"
                            data-pg-name="Champ de saisie pour le nom"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Typography
                        variant="label-sm"
                        color="on-surface-variant"
                        component="span"
                        className="block mb-6"
                    >
                        Email
                    </Typography>
                    <input
                        className="w-full bg-surface-container-high text-on-surface font-body text-base px-4 py-4 rounded-DEFAULT border-none focus:ring-0 placeholder:text-on-surface-variant/50 outline-none outline-variant/15 focus:outline focus:outline-primary/50 focus:shadow-[0_0_8px_rgba(255,145,87,0.2)] transition-all"
                        id="email"
                        name="email"
                        placeholder="votre adresse mail"
                        type="email"
                        data-pg-name="Champ de saisie pour l'email"
                    />
                </div>

                {/* Corps du message */}
                <div className="space-y-2">
                    <Typography
                        variant="label-sm"
                        color="on-surface-variant"
                        component="span"
                        className="block mb-6"
                    >
                        Votre Message
                    </Typography>
                    <textarea
                        className="w-full bg-surface-container-high text-on-surface font-body text-base px-4 py-4 rounded-DEFAULT border-none focus:ring-0 placeholder:text-on-surface-variant/50 outline-none outline-variant/15 focus:outline focus:outline-primary/50 focus:shadow-[0_0_8px_rgba(255,145,87,0.2)] transition-all resize-none"
                        id="message"
                        name="message"
                        placeholder="Détaillez votre demande"
                        rows={5}
                        data-pg-name="Zone de texte pour le message"
                    >
                    </textarea>
                </div>

                {/* Bonton d'envoi */}
                <Button
                    variant="primary"
                    size="large"
                    iconPosition="right"
                >
                    ENVOYER MA DEMANDE
                </Button>
            </form>
        </div>
    )
}