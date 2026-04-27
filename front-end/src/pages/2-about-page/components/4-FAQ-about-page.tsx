// DÉPENDANCES
import { useState, useEffect } from "react";

// DESIGN SYSTEM
import { Typography } from "../../../components/design-system/Typography";
import Container from "../../../components/design-system/Container";

// API
import { getFAQAboutPage } from "../../../api/Get-faq";

// TYPES
import type { FAQItem as FAQItemType } from "../../../types/FAQItem";
interface FAQItemProps {
    question: string;
    answer: string;
}

// Composant servant à structurer l'affichage d'une question et de sa réponse
const FAQItemVisual = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left group transition-all"
                aria-expanded={isOpen}
            >
                <Typography 
                    variant="headline-sm" 
                    component="span" 
                    color={isOpen ? "primary" : "on-surface"}
                    className="transition-colors duration-300"
                >
                    {question}
                </Typography>
                
                {/* Icône de chevron, bascule avec rotation au clic */}
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </button>

            {/* Menu déroulant, s'ouvre au clic sur la question pour la réponse */}
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                }`}
            >
                <Typography variant="body-md" color="on-surface-variant" className="pr-12">
                    {answer}
                </Typography>
            </div>
        </div>
    );
};

// Composant servant à afficher une section de FAQ pour la page à propos
export default function FAQAboutPage() {
    const [faqData, setFaqData] = useState<FAQItemType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFAQ = async () => {
            try {
                const data = await getFAQAboutPage();
                setFaqData(data);
            } catch (error) {
                console.error("Failed to fetch FAQ:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQ();
    }, []);

    return (
        <Container>
            {/* En-tête de la section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <Typography variant="headline-md" component="h2" color="on-surface" className="uppercase mb-4">
                        Foire Aux Questions
                    </Typography>
                    <Typography variant="body-md" color="on-surface-variant">
                        Retrouvez ici les réponses aux questions les plus fréquentes concernant nos services et nos véhicules.
                    </Typography>
                </div>
                <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block mb-4"></div>
                <Typography variant="label-md" color="primary" className="mb-4 shrink-0">
                    FAQ
                </Typography>
            </div>

            {/* Bloc questions & réponses */}
            <div className="max-w-4xl">
                {loading ? (
                    <Typography variant="body-md" color="on-surface-variant">
                        Chargement de la FAQ...
                    </Typography>
                ) : faqData.length > 0 ? (
                    faqData.map((item) => (
                        <FAQItemVisual 
                            key={item.id} 
                            question={item.question} 
                            answer={item.answer} 
                        />
                    ))
                ) : (
                    <Typography variant="body-md" color="on-surface-variant">
                        Aucune question trouvée.
                    </Typography>
                )}
            </div>
        </Container>
    );
}