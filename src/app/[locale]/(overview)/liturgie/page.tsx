'use client'

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
                        <h1 className='heading-2 text-center text-white font-extrabold'>La liturgie dans l'Archidiocèse de Moncton</h1>
                        <p className='body-2 text-center text-white mt-3'> Formation et engagement des laïcs pour une liturgie vivante</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>

            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>La liturgie selon Vatican II</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>Le concile Vatican II a redéfini les principes fondamentaux de la liturgie, mettant en avant le rôle essentiel des laïcs baptisés. Ces derniers sont appelés à participer activement à la vie liturgique de l'Église.</p>
                                <p className='body-2 text-gray'>Pour soutenir cette mission, l'Archidiocèse de Moncton propose une formation approfondie en liturgie, en collaboration avec la Conférence des évêques catholiques du Canada.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/liturgie-1.png"
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
                                alt="Image de détail de l'évènement"
                                src="/assets/img/liturgie-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Un parcours de formation unique</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>L'Archidiocèse de Moncton a mis en place un programme de formation en liturgie et sacrements, échelonné sur 24 mois et comprenant 10 étapes. Ce programme, offert en français, allie théorie et pratique pour une immersion complète dans la liturgie catholique.</p>
                                <p className='body-2 text-gray'>Détails du programme :</p>
                                <ul className='ml-5'>
                                    <li className='body-2 text-gray list-disc'>Durée : 24 mois</li>
                                    <li className='body-2 text-gray list-disc'>Nombre d'heures : 90 heures</li>
                                    <li className='body-2 text-gray list-disc'>Nombre de participants : 39 (dont 35 laïcs)</li>
                                    <li className='body-2 text-gray list-disc'>Financement : Pris en charge par la Fondation de l'Archidiocèse de Moncton</li>
                                </ul>
                                <p className='body-2 text-gray'>Objectif : Préparer les participants à jouer un rôle central dans la liturgie de leurs communautés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>

            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Qui sont les participants ?</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Les 39 participants représentent toutes les unités pastorales francophones de l'Archidiocèse. Parmi eux, on trouve :</p>
                                <ul className='ml-5'>
                                    <li className='body-2 text-gray list-disc'>Des responsables de liturgie</li>
                                    <li className='body-2 text-gray list-disc'>Des responsables de catéchèse</li>
                                    <li className='body-2 text-gray list-disc'>Des prêtres et religieuses</li>
                                    <li className='body-2 text-gray list-disc'>Des membres des comités de liturgie</li>
                                    <li className='body-2 text-gray list-disc'>Quatre employés de l'Archidiocèse</li>
                                </ul>
                                <p className='body-2 text-gray pt-1'>Ces personnes seront mieux outillées pour diriger des célébrations de la Parole, des Assemblées dominicales en attente de Célébration Eucharistique (ADACE), et organiser des rencontres de prière.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/justice-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
                    <div className=''>
                        <h2 className='heading-3 text-gray-900 mb-4'>Des experts au service de la formation</h2>
                        <p className='body-2 text-gray'>L'enseignement est assuré par une équipe de spécialistes de la liturgie, principalement des prêtres du Québec. Leur expertise garantit une formation de qualité, adaptée aux besoins des communautés locales.</p>
                    </div>
                    <div className=''>
                        <h2 className='heading-3 text-gray-900 mb-4'>Les laïcs, acteurs essentiels de la liturgie</h2>
                        <div className='space-y-2'>
                            <p className='body-2 text-gray'>Avec la diminution du nombre de prêtres, les laïcs sont appelés à prendre une place prépondérante dans la vie liturgique. Grâce à cette formation, ils pourront :</p>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Animer des célébrations de la Parole</li>
                                <li className='body-2 text-gray list-disc'>Organiser des ADACE</li>
                                <li className='body-2 text-gray list-disc'>Encadrer des temps de prière communautaire</li>
                                <li className='body-2 text-gray list-disc'>Soutenir la vie spirituelle de leurs paroisses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Contact et inscriptions</h2>
                    <p className='body-2 text-gray'>Pour en savoir plus sur la formation liturgique ou pour vous engager dans la vie liturgique de votre paroisse, contactez : Père Jean-Guy Dallaire Responsable diocésain et président de la commission diocésaine de liturgie</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}