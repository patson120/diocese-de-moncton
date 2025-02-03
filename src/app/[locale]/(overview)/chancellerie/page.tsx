'use client'

import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section image"
                    src="/assets/img/hero-image-2.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Chancellerie diocésaine</h1>
                        <p className='body-2 text-center text-white mt-3'>Au service de l'Église de Moncton pour les questions canoniques et historiques</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de chancellerie"
                                src="/assets/img/chancellerie-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>La chancellerie, un service essentiel pour l'Église</h1>
                            <div className='space-y-3'>
                                <p className='body-2 text-gray'>La chancellerie est le bureau central de l'Archidiocèse de Moncton qui veille à répondre aux questions d'ordre canonique et historique. Elle assure la publication officielle des actes de la curie, en vérifiant leur exactitude et leur conformité au droit canonique.</p>
                                <p className='body-2 text-gray'>Le chancelier et son équipe sont des conseillers clés pour l'archevêque et les paroisses, offrant un soutien précieux dans des domaines variés.</p>
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
                            <h1 className='heading-4 font-extrabold mb-4'>Un rôle central dans la vie diocésaine</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Objectif principal : Assurer la conformité des actes et des décisions de l'Église au droit canonique.</p>
                                <p className='body-2 text-gray'>Fonctions clés :</p>
                                <ul className='ml-10'>
                                    <li className='body-2 text-gray list-disc'>Publication et conservation des actes officiels.</li>
                                    <li className='body-2 text-gray list-disc'>Conseil en matière canonique et historique.</li>
                                    <li className='body-2 text-gray list-disc'>Soutien aux paroisses et aux bureaux diocésains.</li>
                                </ul>
                                <p className='body-2 text-gray'>Valeurs : Exactitude, confidentialité, service et respect des traditions de l'Église.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de chancellerie"
                                src="/assets/img/chancellerie-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-1'>Des services variés pour répondre aux besoins de l'Église</h2>
                    <p className='body-2 text-gray'>La chancellerie offre une gamme de services pour soutenir les membres de l'Église diocésaine</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
                    <div className='space-y-1'>
                        <div className='space-y-1'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Questions de droit canonique</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Droit liturgique et sacramentel.</li>
                                <li className='body-2 text-gray list-disc'>Droit du mariage.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='space-y-1'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Préservation du patrimoine</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Conservation des biens culturels et historiques de l'Église.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='space-y-1'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Consultations et formations</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Consultations privées sur des questions spécifiques.</li>
                                <li className='body-2 text-gray list-disc'>Sessions d'information sur des sujets canoniques et pastoraux.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-1'>Des acteurs clés dans la gouvernance diocésaine</h2>
                    <p className='body-2 text-gray'>La chancellerie offre une gamme de services pour soutenir les membres de l'Église diocésaine</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
                    <div className='space-y-1'>
                        <div className='space-y-1'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Chancelier</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Conseiller de l'archevêque en matière canonique et historique.</li>
                                <li className='body-2 text-gray list-disc'>Responsable de la rédaction, de l'expédition et de la conservation des actes de la curie.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='space-y-1'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Vice-chancelier</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Soutient le chancelier dans ses fonctions.</li>
                                <li className='body-2 text-gray list-disc'>Assume le rôle de notaire et de secrétaire de la curie.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='space-y-1'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Références canoniques</h1>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Can. 482,1 : Fonction du chancelier.</li>
                                <li className='body-2 text-gray list-disc'>Can. 475,1 : Rôle du vicaire général.</li>
                                <li className='body-2 text-gray list-disc'>Can. 482,2 : Possibilité de nommer un vice-chancelier.</li>
                                <li className='body-2 text-gray list-disc'>Can. 482,3 : Statut de notaire et secrétaire de la curie.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Contact</h2>
                    <p className='body-2 text-gray'>Pour toute question ou demande de consultation, contactez : Patricia Niles, Vice-chancelière</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}