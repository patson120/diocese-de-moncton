'use client'

import { Minus } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section clergés"
                    src="/assets/img/clerges.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Tribunal matrimonial ecclésiastique</h1>
                        <p className='body-2 text-center text-white mt-3'>Un ministère de compassion et d'espérance pour les personnes séparées et divorcées</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de tribunal"
                                src="/assets/img/tribunal-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Un lieu d'accueil et d'écoute</h1>
                            <div className='space-y-6'>
                                <p className='body-2 text-gray'>Le tribunal matrimonial ecclésiastique est un ministère de l'Église qui offre un accompagnement compassionnel aux personnes séparées ou divorcées souhaitant demander une déclaration de nullité de leur mariage.</p>
                                <p className='body-2 text-gray'>Dans une atmosphère de confiance, de confidentialité et de non-jugement, nous aidons les fidèles à cheminer vers la guérison et l'espérance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Un ministère au service des familles</h2>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                            <Image
                                alt="les sacrements"
                                src="/assets/icons/vector-3.png"
                                width={20}
                                height={20}
                                style={{ objectFit: 'contain', }}
                            />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Objectif</h1>
                            <p className='body-2 text-gray'>Offrir un soutien pastoral et juridique aux personnes en situation de séparation ou de divorce.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                            <Image
                                alt="les sacrements"
                                src="/assets/icons/vector-4.png"
                                width={22}
                                height={22}
                                style={{ objectFit: 'contain', }}
                            />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Approche</h1>
                            <p className='body-2 text-gray'>Accueillir chaque personne avec compassion, écouter son histoire sans jugement, et l'accompagner dans sa démarche spirituelle et canonique.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                            <Image
                                alt="les sacrements"
                                src="/assets/icons/vector-5.png"
                                width={16}
                                height={16}
                                style={{ objectFit: 'contain', }}
                            />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Valeurs</h1>
                            <p className='body-2 text-gray'>Confidentialité, respect, écoute active et accompagnement personnalisé.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de tribunal"
                                src="/assets/img/tribunal-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Comment demander une déclaration de nullité ?</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Étape 1 : Prendre contact avec le tribunal matrimonial pour exprimer sa demande.</li>
                                <li className='body-2 text-gray list-disc'>Étape 2 : Rencontrer un notaire ou un représentant du tribunal pour expliquer sa situation.</li>
                                <li className='body-2 text-gray list-disc'>Étape 3 : Remplir les documents nécessaires et fournir les informations requises.</li>
                                <li className='body-2 text-gray list-disc'>Étape 4 : Suivre le processus canonique, qui inclut l'examen du dossier par le tribunal.</li>
                                <li className='body-2 text-gray list-disc'>Étape 5 : Recevoir une réponse du tribunal, accompagnée d'un accompagnement pastoral si nécessaire.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-2/3'>
                    <h2 className='heading-3 text-gray-900 mb-'>Questions fréquentes</h2>
                    <p className='body-2 text-gray'>Réponses à vos questions</p>
                    <div className='mt-5 space-y-3'>
                        <div className='pb-4 border-b border-b-gray-300'>
                            <div className='flex justify-between items-center'>
                                <h2 className='body-2 font-bold text-gray-900'>Qu'est-ce qu'une déclaration de nullité ?</h2>
                                <div className='cursor-pointer'>
                                    <Minus className='h-5 w-5' />
                                </div>
                            </div>
                            <p className='body-2 text-gray'>C'est une décision de l'Église qui reconnaît qu'un mariage n'était pas valide selon les critères canoniques.</p>
                        </div>
                        <div className='pb-4 border-b border-b-gray-300'>
                            <div className='flex justify-between items-center'>
                                <h2 className='body-2 font-bold text-gray-900'>Combien de temps dure le processus ?</h2>
                                <div className='cursor-pointer'>
                                    <Minus className='h-5 w-5' />
                                </div>
                            </div>
                            <p className='body-2 text-gray'>La durée varie selon les cas, mais le tribunal s'efforce de traiter chaque dossier avec diligence.</p>
                        </div>
                        <div className='pb-4 border-b border-b-gray-300'>
                            <div className='flex justify-between items-center'>
                                <h2 className='body-2 font-bold text-gray-900'>Dois-je engager un avocat ?</h2>
                                <div className='cursor-pointer'>
                                    <Minus className='h-5 w-5' />
                                </div>
                            </div>
                            <p className='body-2 text-gray'>Non, le tribunal fournit tout le soutien nécessaire pour remplir les formalités.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Contact</h2>
                    <p className='body-2 text-gray'>Pour toute question ou pour entamer une démarche de déclaration de nullité, contactez : Patricia Niles, Notaire au tribunal matrimonial.</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}