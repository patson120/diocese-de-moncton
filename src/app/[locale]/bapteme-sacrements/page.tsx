'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section background image"
                    src="/assets/img/sacrements.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Le Baptême : Porte d'entrée dans la vie chrétienne</h1>
                        <p className='body-2 text-center text-white mt-3'>Plonger dans l'amour inconditionnel de Dieu et rejoindre la communauté de l'Église</p>
                    </div>
                </div>
            </section>

            <div className='md:mt-10 lg:mt-20'></div>

            <section className='container max-margin py-0 pb-10 md:pb-20'>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
                    <div className='h-72 xl:h-80 hidden lg:block col-span-5 rounded-3xl overflow-hidden relative'>
                        <Image
                            alt="baptême"
                            src="/assets/img/bapteme.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='col-span-full md:col-span-7 py-10 space-y-6'>
                        <div>
                            <h2 className='heading-3 text-gray-900 mb-4'>Le baptême, fondement de la vie chrétienne</h2>
                            <div className='space-y-3'>
                                <p className='body-2 text-gray'>Le baptême est le premier sacrement de la vie chrétienne. Il marque l'entrée dans l'Église et la communion avec Dieu. </p>
                                <p className='body-2 text-gray'>Par le baptême, nous sommes libérés du péché, devenons membres du Christ et entrons dans une vie nouvelle guidée par l'amour du Père, du Fils et du Saint-Esprit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div className='space-y-6'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='heading-3 text-gray-900 mb-4'>Pourquoi recevoir le baptême ?</h2>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Un acte d'amour</h1>
                                <p className='body-2 text-gray'>Le baptême est une plongée dans l'amour inconditionnel de Dieu.</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Une nouvelle vie</h1>
                                <p className='body-2 text-gray'>Il marque le début d'un chemin de foi et de conversion.</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Une appartenance</h1>
                                <p className='body-2 text-gray'>Le baptême nous intègre à la communauté chrétienne, où nous grandissons avec nos frères et sœurs en Christ.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>Comment se déroule le baptême ?</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-2'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="baptême"
                                    src="/assets/img/bapteme.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>Le rite de l'eau</h1>
                            <p className='body-2 text-gray'>Le prêtre ou le diacre verse trois fois de l'eau sur la tête du baptisé en disant : « Je te baptise au nom du Père, et du Fils, et du Saint-Esprit ».</p>

                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L'onction des malades"
                                    src="/assets/img/onction-des-malades.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>Les signes et symboles</h1>
                            <p className='body-2 text-gray'>L'onction : Avec le saint chrême, elle marque l'appartenance au Christ.
                                L'habit blanc : Symbole de pureté et de vie nouvelle.
                                Le cierge baptismal : Allumé au cierge pascal, il représente la lumière du Christ.</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-8 md:mt-16'></div>
            <section className='container max-margin py-0'>
                <div className=''>
                    <h2 className='heading-3 text-gray-900 mb-4'>Ressources</h2>
                    <p className='body-2 text-gray'>Pour approfondir votre compréhension</p>
                </div>
                <div className='flex flex-row gap-3 items-center mt-5'>
                    <a href='#' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p>Introduction et historique</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='#' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p>Le sens de l'eau</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='#' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p>Le baptême d'un enfant</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='#' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p>Parrainage et conclusion</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Vous avez des questions ?</h2>
                    <p className='body-2 text-gray'>Pour en savoir plus sur le sacrement de l'ordre ou pour discuter d'une vocation, contactez votre paroisse ou le service diocésain des vocations</p>

                </div>
            </section>
        </main>
    )
}