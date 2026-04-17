// DÉPENDANCE
import type { ReactNode, ElementType } from 'react';

// PROPS
interface ContainerProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

// Composant servant à contenir les éléments enfants de manière à garder une cohérence sur l'ensemble du site
export default function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
    return (
        <Component className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
            {children}
        </Component>
    );
}
