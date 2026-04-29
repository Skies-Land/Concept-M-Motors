// DÉPENDANCE
import { Link } from 'react-router-dom';

// PROPS
interface LogoProps {
    className?: string;
}

/** Composant servant à gérer l'apparence du logo du site
 * @param {LogoProps} props - Les propriétés du logo.
 * @returns {React.ReactNode} - Le logo.*/
export default function Logo({ className = "" }: LogoProps) {
    return (
        <Link 
            to="/" 
            className={`text-2xl font-black text-primary tracking-tighter font-['Space_Grotesk'] inline-block ${className}`}
            data-pg-name="Logo"
        >
            M-MOTORS
        </Link>
    );
}