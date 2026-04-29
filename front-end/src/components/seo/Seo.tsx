// DÉPENDANCE
import { Helmet } from 'react-helmet-async';

// PROPS
interface Props {
    title: string;
    description: string;
}

/** Composant servant à définir le SEO de la page avec les props "title" et "description" */
export default function Seo({ title, description }: Props) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    );
};