'use client'

import { Button } from '@/components/ui/shared/button'
import Image from 'next/image'


export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section education de la foi"
                    src="/assets/img/education.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Devenir chrétien : un cheminement de foi et de conversion</h1>
                        <p className='body-2 text-center text-white mt-3'>Accompagner les jeunes dans leur cheminement de foi</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>

            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Qu'est-ce que le R.I.C.A. ?</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>Le R.I.C.A. est un cheminement spirituel pour les adultes qui souhaitent recevoir les sacrements du baptême, de la première communion et de la confirmation. Inspiré du mot grec Katêkhoumenos (« instruit de vive voix »), ce processus se vit en communauté et permet de découvrir la présence de Dieu dans sa vie.</p>
                                <p className='body-2 text-gray'>On ne devient pas chrétien seul : le R.I.C.A. est une expérience de foi partagée, accompagnée par des catéchètes et la communauté paroissiale.</p>
                            </div>
                            <div className='mt-6 mb-8 md:mb-0'>
                                <Button size="sm" className="px-5 w-full md:w-auto">
                                    <span className='hidden md:block'>Inscription</span>
                                    <span className='md:hidden'>Inscrire un enfant</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'eduction de la foi"
                                src="/assets/img/education-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'eduction de la foi"
                                src="/assets/img/education-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Les étapes du parcours catéchuménal</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Le R.I.C.A. est un processus progressif qui respecte le rythme de chaque adulte. Il comprend plusieurs étapes clés :</p>
                                <ul className='ml-5'>
                                    <li className='body-2 text-gray list-disc'>Accueil et premier contact : Découverte de la foi et de la communauté chrétienne.</li>
                                    <li className='body-2 text-gray list-disc'>Catéchuménat : Enseignement, prière et partage pour approfondir la foi.</li>
                                    <li className='body-2 text-gray list-disc'>Étapes liturgiques : Célébrations marquant les moments importants du cheminement.</li>
                                    <li className='body-2 text-gray list-disc'>Préparation immédiate aux sacrements : Baptême, première communion et confirmation.</li>
                                    <li className='body-2 text-gray list-disc'>Mystagogie : Intégration dans la vie de l'Église après la réception des sacrements.</li>
                                </ul>
                            </div>
                            <div className='mt-6 mb-8 md:mb-0'>
                                <Button size="sm" className="px-5 w-full md:w-auto">
                                    <span className='hidden md:block'>Inscription</span>
                                    <span className='md:hidden'>Inscrire un enfant</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Contact et inscriptions</h2>
                    <div>
                        <p className='body-2 text-gray'>Pour plus d'informations sur le R.I.C.A. ou pour entamer ce cheminement, contactez :</p>
                        <ul>
                            <li className='body-2 text-gray'>Dianne Léger</li>
                            <li className='body-2 text-gray'>Coordonnatrice diocésaine</li>
                            <li className='body-2 text-gray'>Téléphone : (506) 857-9531, poste 1229</li>
                            <li className='body-2 text-gray'>Email : catechese.dianneleger@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}