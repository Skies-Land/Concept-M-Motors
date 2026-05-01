// DESIGN SYSTEM
import { Typography } from "../../../../components/design-system/Typography"
import { Button } from "../../../../components/design-system/Button"
import Input from "../../../../components/design-system/Input"

// ICÔNE
import { IoIosArrowDown } from "react-icons/io";

/** Composant servant à afficher le module dédier au formulaire de contact */
export default function ModuleFormContactPage() {
    return (
        <div className="lg:col-span-7 bg-surface-container rounded-lg p-8 md:p-12">
            <form className="space-y-8">
                {/* Menu dépliant pour l'objet du message */}
                <div className="space-y-2">
                    <Typography
                        color="on-surface-variant"
                        component="span"
                        className="block mb-6 text-xs uppercase tracking-wider text-zinc-400"
                        data-pg-name="Label du menu dépliant"
                    >
                        Sujet du Message
                    </Typography>
                    <div className="relative">
                        <select
                            className="bg-[#202225] text-zinc-100 focus:ring-1 focus:ring-orange-500 rounded px-4 py-3 font-body outline-none transition-all w-full border-none appearance-none"
                            id="subject" name="subject">
                            <option value="vente">Acquisition : Vente &amp; Location</option>
                            <option value="dossier">Mon dossier client</option>
                            <option value="essai">Demande d'essai</option>
                            <option value="support">Support technique</option>
                            <option value="autre">Autre demandes</option>
                        </select>
                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" size={20} />
                    </div>
                </div>
                {/* Prénom & Nom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input
                        label="Prénom"
                        id="prenom"
                        name="prenom"
                        placeholder="votre prénom"
                        type="text"
                    />
                    <Input
                        label="Nom"
                        id="nom"
                        name="nom"
                        placeholder="votre nom de famille"
                        type="text"
                    />
                </div>

                {/* Email */}
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="votre adresse mail"
                    type="email"
                />

                {/* Corps du message */}
                <div className="space-y-2">
                    <Typography
                        color="on-surface-variant"
                        component="span"
                        className="block mb-6 text-xs uppercase tracking-wider text-zinc-400"
                    >
                        Votre Message
                    </Typography>
                    <textarea
                        className="bg-[#202225] text-zinc-100 focus:ring-1 focus:ring-orange-500 rounded px-4 py-3 font-body outline-none transition-all w-full placeholder:text-zinc-500 border-none resize-none"
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