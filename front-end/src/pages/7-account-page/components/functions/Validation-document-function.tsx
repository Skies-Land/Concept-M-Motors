// REACT ICONS
import { MdCheck, MdOutlineSchedule, MdErrorOutline, MdHelpOutline } from "react-icons/md";

/** Interface pour définir le statut d'un document */
export interface ValidationDocumentProps {
    status: 'accepted' | 'pending' | 'rejected' | 'missing';
}

/** Fonction permettant d'indiquer visuellement dans l'interface client, le statut de validation du document envoyé par l'utilisateur :
 * 
 * - **Validé** : Indicateur vert 🟢, lorsque le document est accepté
 * - **En cours** : Indicateur orange 🟠, lorsque le document est en attente de validation
 * - **Refusé** : Indicateur rouge 🔴, lorsque le document est refusé ou non conforme
 * - **Manquant** : Indicateur gris ⚪, lorsque le document n'est pas encore envoyé
 */
export default function ValidationDocument({ status }: ValidationDocumentProps) {
    // Si aucun document n'est uploadé, on n'affiche aucune indication visuelle
    if (status === 'missing') {
        return null;
    }

    /** Tableau de configuration permettant de définir le statut d'un document */
    const config = {
        accepted: {
            text: 'Validé',
            color: 'text-green-500',
            bgColor: 'bg-green-500',
            icon: MdCheck
        },
        pending: {
            text: 'En cours de validation',
            color: 'text-primary',
            bgColor: 'bg-primary',
            icon: MdOutlineSchedule
        },
        rejected: {
            text: 'Refusé',
            color: 'text-red-500',
            bgColor: 'bg-red-500',
            icon: MdErrorOutline
        },
        missing: {
            text: 'Manquant',
            color: 'text-slate-500',
            bgColor: 'bg-slate-700',
            icon: MdHelpOutline
        }
    };

    const { text, color, bgColor, icon: Icon } = config[status];

    return (
        <>
            {/* Icône de statut */}
            <div className={`absolute -top-3 -right-3 ${bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#121212] z-10 shadow-lg`}>
                <Icon size={24} className="font-bold" />
            </div>
            
            {/* Libellé du statut */}
            <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 whitespace-nowrap">
                <p className={`${color} font-medium text-lg`}>{text}</p>
            </div>
        </>
    );
}

