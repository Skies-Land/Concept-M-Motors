/** Composant représentant l'état de chargement de l'application */
export default function Spinner() {
    return (
        <div className="flex justify-center items-center min-h-[50vh] bg-background text-on-background w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
}