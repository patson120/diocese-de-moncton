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
                    alt="hero section clergés"
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
                        <h1 className='heading-2 text-center text-white font-extrabold'>L'Eucharistie, source et sommet de la vie chrétienne</h1>
                        <p className='body-2 text-center text-white mt-3'>Le sacrement qui unit les fidèles au sacrifice du Christ</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image eucharistie"
                                src="/assets/img/eucharistie.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>L'Eucharistie, troisième sacrement de l'initiation chrétienne</h1>
                            <div className='space-y-6'>
                                <p className='body-2 text-gray'>Après le baptême et la confirmation, l’eucharistie est le troisième sacrement de l’initiation chrétienne.</p>
                                <p className='body-2 text-gray'>Elle est le centre mystérieux de la vie chrétienne, car elle rend présent le sacrifice historique de Jésus sur la croix de manière non sanglante.</p>
                                <p className='body-2 text-gray'>Comme l’affirme le concile Vatican II, l’eucharistie est « source et sommet de toute la vie chrétienne » (Lumen Gentium, 11).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <h2 className='heading-3 text-gray-900 mb-4'>Le cœur de la communion chrétienne</h2>
                <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-3'>
                    <div className='space-y-3'>
                        <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="eucharistie"
                                src="/assets/img/eucharistie-1.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>La liturgie de la Parole</h1>
                        <p className='body-2 text-gray'>Dieu nous parle à travers les lectures de l’Ancien et du Nouveau Testament, l’Évangile, la prédication et les prières universelles.</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="eucharistie"
                                src="/assets/img/eucharistie-2.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>La célébration eucharistique</h1>
                        <p className='body-2 text-gray'>Elle comprend la présentation du pain et du vin, leur consécration, et la communion.</p>

                    </div>
                    <div className='space-y-3'>
                        <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="eucharistie"
                                src="/assets/img/eucharistie-3.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>Le rôle du prêtre</h1>
                        <p className='body-2 text-gray'>Le prêtre agit in persona Christi capitis (en la personne du Christ-Tête), rendant présent le sacrifice du Christ.</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Préparation à la première communion</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>Dans le Diocèse de Moncton, les jeunes célèbrent leur première communion après avoir complété trois années de catéchèse. Cette étape marque leur pleine participation à la vie eucharistique de l’Église.</p>
                                <ul className='ml-5 space-y-4'>
                                    <li className='body-2 text-gray list-disc'>Processus de préparation : Enseignement sur la signification de l’eucharistie, participation aux célébrations liturgiques, et accompagnement spirituel.</li>
                                    <li className='body-2 text-gray list-disc'>Engagement des familles : Les parents sont invités à soutenir leurs enfants dans ce cheminement de foi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image eucharistie"
                                src="/assets/img/eucharistie-4.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className=''>
                    <h2 className='heading-3 text-gray-900 mb-4'>Ressources</h2>
                    <p className='body-2 text-gray'>Pour approfondir votre compréhension</p>
                </div>
                <div className='flex flex-row gap-3 items-center mt-5'>
                    <a href='https://www.vatican.va/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p>Site officiel du Vatican</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='https://www.catechisme.fr/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p>Catéchèse sur l'eucharistie</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Vous avez des questions ?</h2>
                    <p className='body-2 text-gray'>Pour en savoir plus sur la préparation à la première communion ou sur la célébration de l’eucharistie, contactez votre paroisse ou le service diocésain de catéchèse</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}