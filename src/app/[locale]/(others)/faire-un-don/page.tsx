'use client'

import { createDon } from '@/_lib/data';
import { Button } from '@/components/ui/shared/button';
import { useRouter } from '@/i18n/routing';
import { Description } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';


export default function Page() {

    const router = useRouter()
    const types = ["Unique", "Mensuel", "En hommage"]
    const typeComptes = ["Compte chèque", "Compte d'épargne"]
    const montants = ["20$", "50$", "100$", "250$", "Autre",]
    const choices = ["Oui", "Non",]
    const moyenPaiements = ["Virement bancaire", "Carte bancaire", "Interac", "Stripes",]

    const [step, setStep] = useState(1)
    const [typeDon, setTypeDon] = useState<any>()
    const [montant, setMontant] = useState<any>()
    const [moyen, setMoyen] = useState<any>()
    const [choice, setChoice] = useState<any>()
    const [compte, setCompte] = useState<any>()

    const handleSubmit = async () => {
        console.log("Submit...");
        
        const data = {
            nom: "Test",
            email: "test.email@gmail.com",
            telephone: "237670993737",
            type_don: "espèce",
            montant: 200,
            description: "description",
        }

        // Call api method
        const response = await createDon(data)
        console.log(response);
    }   

    return (
        <>
            <section className="h-screen overflow-hidden">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-10'>
                    <div className='h-screen hidden md:block col-span-full lg:col-span-2'>
                        <div className='min-h-full relative overflow-hidden bg-gray-100'>
                            <Image
                                alt="Faire un don"
                                src="/assets/img/hero-image-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className='absolute inset-0 bg-[#33050A]/60 '>
                                <div className='container h-full max-margin flex flex-col justify-between'>
                                    <div>
                                        <Button size={'sm'} variant={'link'} onClick={() => { router.back() }} className="px-0 hidden md:block body-3 font-normal text-white/70">
                                            Page retour
                                        </Button>
                                    </div>
                                    <div className='bg-white rounded-xl p-5'>
                                        <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container max-margin h-screen overflow-y-scroll v-scroll col-span-full lg:col-span-3 py-10'>
                        <div className='flex justify-center items-center gap-20'>
                            <div className='flex-1 grid grid-cols-4 gap-2'>
                                {
                                    [1, 2, 3, 4].map((item) => (
                                        <div key={item} className={`${step >= item ? 'opacity-100' : 'opacity-5'} h-[6px] rounded-full bg-[#1D0104] `}></div>
                                    ))
                                }
                            </div>
                            <div className='w-28 h-10'>
                                {
                                    (step === 1) &&
                                    <Button size={'sm'} variant={'link'} onClick={() => { router.push("/") }} className="pr-0 hidden md:block body-2 text-gray">
                                        Retour à l’accueil
                                    </Button>
                                }
                            </div>
                        </div>
                        <div className='mt-'>
                            {step === 1 && <h1 className='body-3 font-extrabold mb-4'>1. Votre don</h1>}
                            {step === 2 && <h1 className='body-3 font-extrabold mb-4'>2. Informations personnelles</h1>}
                            {step === 3 && <h1 className='body-3 font-extrabold mb-4'>3. Adresse</h1>}
                            {step === 4 && <h1 className='body-3 font-extrabold mb-4'>4. Paiement</h1>}
                        </div>
                        {
                            (step < 4) && (
                                <div className='mt-8 w-2/3'>
                                    <h1 className='heading-3 font-extrabold mb-4'>Contribuer à la mission du diocèse.</h1>
                                    <p className='body-2 text-gray line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            )
                        }
                        {
                            (step === 4) && (
                                <div className='mt-8 w-2/3'>
                                    <h1 className='heading-3 font-extrabold mb-4'>Résumé</h1>
                                    <div className='bg-[#F8F8F8] rounded-xl p-4'>
                                        <p className='body-2 text-gray'>Montant du don : <span className='font-semibold text-gray-600'>{montant}</span></p>
                                        <p className='body-2 text-gray'>Type de don : <span className='font-semibold text-gray-600'>{typeDon}</span></p>
                                        <p className='body-2 text-gray'>Le don est en hommage à : <span className='font-semibold text-gray-600'>Don mensuel</span></p>
                                    </div>
                                </div>
                            )
                        }

                        <div className='mt-5' />
                        <div className='w-full lg:w-2/3 space-y-6'>
                            {
                                (step === 1) && (
                                    <>
                                        <div className='space-y-2'>
                                            <h4 className='body-2 text-gray'>Type de don</h4>
                                            <div className='space-x-2 flex flex-wrap'>
                                                {
                                                    types.map((item, index) => (
                                                        <Button key={index} onClick={() => { setTypeDon(item) }} className={` ${item === typeDon ? 'bg-[#1D0104] text-white hover:bg-[#1D0104]' : 'bg-[#F5F5F5] text-gray hover:bg-[#F5F5F5]'} rounded-xl px-3 md:px-6 py-5 body-3`}>
                                                            {item}
                                                        </Button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        {
                                            (typeDon === "En hommage") &&
                                            <div className=''>
                                                <label className='inline-block mb-2' htmlFor="nom">Nom de la personne honorée</label>
                                                <input type="text" placeholder="Entrez son nom" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                            </div>
                                        }
                                        <div className='space-y-2'>
                                            <h4 className='body-2 text-gray'>Montant</h4>
                                            <div className='space-x-2 flex flex-wrap'>
                                                {
                                                    montants.map((item, index) => (
                                                        <Button key={index} onClick={() => { setMontant(item) }} className={` ${item === montant ? 'bg-[#1D0104] text-white hover:bg-[#1D0104]' : 'bg-[#F5F5F5] text-gray hover:bg-[#F5F5F5]'} rounded-xl px-3 md:px-6 py-5 body-3`}>
                                                            {item}
                                                        </Button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='space-y-2'>
                                            <h4 className='body-2 text-gray'>Je contribue de la part d'une organisation</h4>
                                            <div className='space-x-2 flex flex-wrap'>
                                                {
                                                    choices.map((item, index) => (
                                                        <Button key={index} onClick={() => { setChoice(item) }} className={` ${item === choice ? 'bg-[#1D0104] text-white hover:bg-[#1D0104]' : 'bg-[#F5F5F5] text-gray hover:bg-[#F5F5F5]'} rounded-xl px-3 md:px-6 py-5 body-3`}>
                                                            {item}
                                                        </Button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            {
                                (step === 2) && (
                                    <>
                                        <div className=''>
                                            <label className='inline-block mb-2' htmlFor="nom">Nom</label>
                                            <input type="text" placeholder="Entrez votre nom" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                        </div>
                                        <div className=''>
                                            <label className='inline-block mb-2' htmlFor="prenom">Téléphone</label>
                                            <input type="tel" placeholder="Entrez votre téléphone" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                        </div>
                                        <div className=''>
                                            <label className='inline-block mb-2' htmlFor="email">Courriel</label>
                                            <input type="email" placeholder="Entrez votre adresse électronique" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                        </div>
                                    </>
                                )
                            }
                            {
                                (step === 3) && (
                                    <>
                                        <div className='space-y-5'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="pays">Pays</label>
                                                    <input type="text" placeholder="Entrez votre pays" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="region">Région</label>
                                                    <input type="text" placeholder="Entrez votre région" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <label className='inline-block mb-2' htmlFor="ville">Ville</label>
                                                <input type="text" placeholder="Entrez votre ville" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                            </div>
                                            <div className=''>
                                                <label className='inline-block mb-2' htmlFor="code_postal">Code postal</label>
                                                <input type="text" placeholder="Code postal" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        {
                            (step === 4) && (
                                <div className="mt-8">
                                    <h4 className='body-2 text-gray mb-2'>Choisir le moyen de paiement</h4>
                                    <div className='space-x-2 flex flex-wrap'>
                                        {
                                            moyenPaiements.map((item, index) => (
                                                <Button key={index} onClick={() => { setMoyen(item) }} className={` ${item === moyen ? 'bg-[#1D0104] text-white hover:bg-[#1D0104]' : 'bg-[#F5F5F5] text-gray hover:bg-[#F5F5F5]'} rounded-xl px-3 md:px-6 py-5 body-3`}>
                                                    {item}
                                                </Button>
                                            ))
                                        }
                                    </div>
                                    {
                                        (moyen === moyenPaiements[0]) &&
                                        <div className='w-full lg:w-2/3 space-y-6 mt-6'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="titulaire">Nom du titulaire du compte</label>
                                                    <input type="text" placeholder="Nom du titulaire" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="numCompte">N° de compte</label>
                                                    <input type="text" placeholder="N° de compte" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="num_banque">N° de banque</label>
                                                    <input type="text" placeholder="N° de banque" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="num_transit">N° de transit</label>
                                                    <input type="text" placeholder="N° de transit" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                            </div>
                                            <div className='space-y-2'>
                                                <h4 className='body-2 text-gray'>Type de compte</h4>
                                                <div className='space-x-2 flex flex-wrap'>
                                                    {
                                                        typeComptes.map((item, index) => (
                                                            <Button key={index} onClick={() => { setCompte(item) }} className={` ${item === compte ? 'bg-[#1D0104] text-white hover:bg-[#1D0104]' : 'bg-[#F5F5F5] text-gray hover:bg-[#F5F5F5]'} rounded-xl px-3 md:px-6 py-5 body-3`}>
                                                                {item}
                                                            </Button>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        (moyen === moyenPaiements[1]) &&
                                        <div className='w-full lg:w-2/3 space-y-6 mt-6'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="numCarte">Numéro de la carte</label>
                                                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="numCompte">N° de compte</label>
                                                    <input type="text" placeholder="N° de compte" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="num_banque">CVC</label>
                                                    <input type="text" placeholder="CVC" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block mb-2' htmlFor="num_transit">Validité</label>
                                                    <input type="text" placeholder="MM/AA" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        (moyen === moyenPaiements[0] || moyen === moyenPaiements[1]) &&
                                        <div className='flex justify-start items-center space-x-2 mt-4'>
                                            <input type="radio" className="border-2 border-gray-200 p-2 rounded-full" />
                                            <label className='inline-block' htmlFor="frais">Couvrir les frais de transaction de 0.27 $.</label>
                                        </div>
                                    }
                                </div>
                            )
                        }
                        {
                            (step < 4) && (
                                <div className='w-full lg:w-2/3 mt-10 flex justify-between items-center'>
                                    <Button onClick={() => { setStep(prev => prev + 1) }} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
                                        Etape suivante
                                    </Button>
                                    {
                                        (step > 1) &&
                                        <Button variant='ghost' onClick={() => { setStep(prev => prev - 1) }} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
                                            Retour
                                        </Button>
                                    }
                                </div>
                            )
                        }
                        {
                            (step === 4) && (
                                <div className='w-full lg:w-2/3 mt-10 flex justify-between items-center'>
                                    <Button onClick={handleSubmit} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
                                        Finaliser le paiement
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
