// DESIGN SYSTEM
import Container from "../../../components/design-system/Container";
import { Typography } from "../../../components/design-system/Typography";
import { Button } from "../../../components/design-system/Button";

// LOGIQUES
import { SendDocsAccount } from "./functions/Send-document-function";
import PreviewDocument from "./features/Preview-document-account";
import ValidationDocument from "./functions/Validation-document-function";

// IMAGES
import IMGDoc1 from "../../../assets/png/IMGDoc-1.png"; // Piece d'identité
import IMGDoc2 from "../../../assets/png/IMGDoc-2.png"; // Justificatif de domicile
import IMGDoc3 from "../../../assets/png/IMGDoc-3.png"; // Bulletins de salaire
import IMGDoc4 from "../../../assets/png/IMGDoc-4.png"; // Permis de conduire

/** Composant servant à uploader les documents de l'utilisateur */
export default function DocsAccount() {
    // Logique permettant de gérer le processus d'envoi des documents client
    const { docs, triggerUpload, renderInput } = SendDocsAccount();
    return (
        <Container className="flex-1 flex flex-col relative w-full pb-16">
            {/* Input caché pour l'upload de fichier (géré par la logique) */}
            {renderInput}

            <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex flex-col gap-12">
                {/* Entête de la section */}
                <div className="flex flex-col gap-2">
                    <Typography component="h2" color="primary" variant="headline-md">
                        Mes documents
                    </Typography>
                    <Typography component="p" variant="body-lg">
                        Gérez vos justificatifs pour votre dossier chez M-Motors.
                        Les types de fichiers acceptés sont : PDF, JPG, PNG • Max 5MB
                    </Typography>
                </div>

                {/* Upload des documents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Carte 1 : Pièce d'identité */}
                    <article className="glass-card rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors relative">
                        <Typography component="h3" color="primary" variant="body-lg" weight="medium">
                            Pièce d'identité
                        </Typography>
                        {/* Aperçu du document et statut de validation du document */}
                        <div className="relative mt-8 mb-16 w-fit mx-auto">
                            <PreviewDocument fileData={docs.identity.fileData} defaultImage={IMGDoc1} />
                            <ValidationDocument status={docs.identity.status} />
                        </div>
                        {/* Information sur l'acceptation du document (recto/verso) */}
                        <Typography component="p" variant="body-sm" className="text-slate-400 mb-6">
                            Recto/Verso
                        </Typography>
                        {/* Bouton d'upload */}
                        <div className="mt-auto w-full">
                            <Button 
                                variant={docs.identity.status === 'missing' ? "primary" : "secondary"} 
                                fullWidth 
                                onClick={() => triggerUpload('identity')}
                                disabled={docs.identity.status !== 'missing'}
                            >
                                {docs.identity.status === 'missing' ? "Envoyer votre document" : "En cours de traitement"}
                            </Button>
                        </div>
                    </article>

                    {/* Carte 2 : Justificatif de domicile */}
                    <article className="glass-card rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors relative">
                        <Typography component="h3" color="primary" variant="body-lg" weight="medium">
                            Justificatif de domicile
                        </Typography>
                        {/* Aperçu du document et statut de validation du document */}
                        <div className="relative mt-8 mb-16 w-fit mx-auto">
                            <PreviewDocument fileData={docs.address.fileData} defaultImage={IMGDoc2} />
                            <ValidationDocument status={docs.address.status} />
                        </div>
                        {/* Information sur l'acceptation du document (date d'expiration) */}
                        <Typography component="p" variant="body-sm" className="text-slate-400 mb-6">
                            Moins de 3 mois
                        </Typography>
                        {/* Bouton d'upload */}
                        <div className="mt-auto w-full">
                            <Button 
                                variant={docs.address.status === 'missing' ? "primary" : "secondary"} 
                                fullWidth 
                                onClick={() => triggerUpload('address')}
                                disabled={docs.address.status !== 'missing'}
                            >
                                {docs.address.status === 'missing' ? "Envoyer votre document" : "En cours de traitement"}
                            </Button>
                        </div>
                    </article>

                    {/* Carte 3 : Bulletins de salaire */}
                    <article className="glass-card rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors relative">
                        <Typography component="h3" color="primary" variant="body-lg" weight="medium">
                            Bulletins de salaire
                        </Typography>
                        {/* Aperçu du document et statut de validation du document */}
                        <div className="relative mt-8 mb-16 w-fit mx-auto">
                            <PreviewDocument fileData={docs.salary.fileData} defaultImage={IMGDoc3} />
                            <ValidationDocument status={docs.salary.status} />
                        </div>
                        {/* Information sur l'acceptation du document (6 derniers mois) */}
                        <Typography component="p" variant="body-sm" className="text-slate-400 mb-6">
                            6 derniers mois
                        </Typography>
                        {/* Bouton d'upload */}
                        <div className="mt-auto w-full">
                            <Button 
                                variant={docs.salary.status === 'missing' ? "primary" : "secondary"} 
                                fullWidth 
                                onClick={() => triggerUpload('salary')}
                                disabled={docs.salary.status !== 'missing'}
                            >
                                {docs.salary.status === 'missing' ? "Envoyer votre document" : "En cours de traitement"}
                            </Button>
                        </div>
                    </article>

                    {/* Carte 4 : Permis de conduire */}
                    <article className="glass-card rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors relative">
                        <Typography component="h3" color="primary" variant="body-lg" weight="medium">
                            Permis de conduire
                        </Typography>
                        {/* Aperçu du document et statut de validation du document */}
                        <div className="relative mt-8 mb-16 w-fit mx-auto">
                            <PreviewDocument fileData={docs.license.fileData} defaultImage={IMGDoc4} />
                            <ValidationDocument status={docs.license.status} />
                        </div>
                        {/* Information sur l'acceptation du document (recto/verso) */}
                        <Typography component="p" variant="body-sm" className="text-slate-400 mb-6">
                            Recto/Verso
                        </Typography>
                        {/* Bouton d'upload */}
                        <div className="mt-auto w-full">
                            <Button 
                                variant={docs.license.status === 'missing' ? "primary" : "secondary"} 
                                fullWidth 
                                onClick={() => triggerUpload('license')}
                                disabled={docs.license.status !== 'missing'}
                            >
                                {docs.license.status === 'missing' ? "Envoyer votre document" : "En cours de traitement"}
                            </Button>
                        </div>
                    </article>
                </div>
            </div>
        </Container>
    );
}