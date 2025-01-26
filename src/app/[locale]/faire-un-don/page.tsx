'use client'

import { Button } from '@/components/ui/shared/button';
import Image from 'next/image';
import { useState } from 'react';


export default function Page() {

    const [step, setStep] = useState(1)

    return (
        <>
            <div className='px-5 md:px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
                <div className="flex justify-between ">
                </div>
            </div>
            {/* container max-margin md:px-0 md:mx-0 */}
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-20 md:py-4 lg:py-8'>
                    <div className='hidden md:block col-span-full lg:col-span-2'>
                        <div className='h-80 xl:h-96 relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Faire un don"
                                src="/assets/img/faire-un-don.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className=' col-span-full lg:col-span-3'>
                        <div>
                            <h1 className='heading-3 font-extrabold mb-4'>Faire un don</h1>
                            <p className='body-2 text-gray line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className='my-10' />
                        <div className='w-full lg:w-3/4'>

                            <div className=' space-y-5 rounded-2xl overflow-hidden border border-[#E5E5E5] pb-10'>
                                <div>
                                    <div className='flex flex-row'>
                                        <Button onClick={() => { }} className="w-full bg-[#1D0104] text-white rounded-none px-3 md:px-6 py-5 body-3">
                                            Don régulier (mensuel)
                                        </Button>
                                        <Button variant='ghost' onClick={() => { }} className="w-full rounded-none px-3 md:px-6 py-5 body-3">
                                            Don unique
                                        </Button>
                                    </div>
                                    <div className='bg-[#F9F4F5] px-6 py-4 flex justify-between items-center'>
                                        <h3 className='body-2 font-bold'>Informations</h3>
                                        <div className='flex flex-row space-x-1'>
                                            {
                                                [1, 2, 3].map((item) => (
                                                    <div key={item} className={`${step >= item ? 'opacity-100' : 'opacity-20'} h-[5px] w-7 rounded-full bg-[#1D0104] `}></div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='px-6'>
                                    {
                                        (step === 1) &&
                                        <div className='space-y-5'>
                                            <div className='flex flex-row space-x-2'>
                                                {
                                                    [10, 15, 50, 100].map(item => (
                                                        <Button variant='outline' onClick={() => { }} className="w-auto px-3 py-2 body-3">
                                                            {item}$
                                                        </Button>
                                                    ))
                                                }
                                                <input type="number" placeholder="Ou entrez un montant..." className="border-2 border-gray-200 flex-1 p-2 rounded-xl w-full" />
                                            </div>
                                            <p className=''>Nous recevons finalement <span className='font-bold'>xx$</span> après déduction fiscale</p>
                                        </div>
                                    }

                                    {
                                        (step === 2) &&
                                        <div className='space-y-5'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div className=''>
                                                    <label className='inline-block font-semibold mb-2' htmlFor="nom">Nom</label>
                                                    <input type="text" placeholder="Entrez votre nom" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block font-semibold mb-2' htmlFor="prenom">Prénom</label>
                                                    <input type="text" placeholder="Entrez votre prénom" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <label className='inline-block font-semibold mb-2' htmlFor="email">Email</label>
                                                <input type="email" placeholder="Adresse email" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                            </div>
                                        </div>
                                    }
                                    {
                                        (step === 3) &&
                                        <div className='space-y-5'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                <div className=''>
                                                    <label className='inline-block font-semibold mb-2' htmlFor="nomeroCarte">Numéro de carte</label>
                                                    <input type="number" placeholder="0000 - 0000 - 0000 - 0000" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                                <div className=''>
                                                    <label className='inline-block font-semibold mb-2' htmlFor="validity">Validity</label>
                                                    <input type="date" placeholder="MM/YY" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <label className='inline-block font-semibold mb-2' htmlFor="cvc">CVC</label>
                                                <input type="text" placeholder="CVC Code" className="border-2 border-gray-200 p-2 rounded-xl w-full" />
                                            </div>
                                        </div>
                                    }
                                    <div className='flex flex-col-reverse gap-4 md:flex-row md:justify-between items-center pt-10'>

                                        {
                                            (step === 3) ?
                                                <Button onClick={() => { }} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
                                                    Faire un don
                                                </Button> :
                                                <Button onClick={() => { setStep(prev => prev + 1) }} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
                                                    Etape suivante
                                                </Button>
                                        }
                                        {
                                            (step > 1) &&
                                            <Button variant='ghost' onClick={() => { setStep(prev => prev - 1) }} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
                                                Retour
                                            </Button>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
