'use client'

import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section sacrements"
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
                        <h1 className='heading-2 text-center text-white font-extrabold'>Le sacrement de la confirmation</h1>
                        <p className='body-2 text-center text-white mt-3'>Recevoir l'Esprit-Saint et devenir un témoin du Christ</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="confirmation"
                                src="/assets/img/confirmation.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Qu'est-ce que la confirmation ?</h1>
                            <div className='space-y-8'>
                                <p className='body-2 text-gray'>La confirmation est le sacrement qui parfait le baptême. Par l'imposition des mains et l'onction du Saint-Chrême, nous recevons le don de l'Esprit-Saint.</p>
                                <p className='body-2 text-gray'>Ce sacrement nous donne la force de témoigner, en paroles et en actes, de l'amour et de la puissance de Dieu. Il fait de nous des membres à part entière et responsables de l'Église catholique.</p>
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
                            <h1 className='heading-4 font-extrabold mb-4'>Le sens de la confirmation</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>La confirmation est comme un « contrat » avec Dieu. Le confirmant dit :
                                « Oui, je crois en Toi, mon Dieu, donne-moi ton Esprit afin que je t’appartienne totalement, que je ne sois jamais séparé de toi, et que je sois ton témoin durant toute ma vie, de toute mon âme et de tout mon corps, en actes et en paroles, dans les bons et les mauvais jours. »</p>
                                <p className='body-2 text-gray'>Et Dieu répond :
                                « Moi aussi je crois en toi, mon enfant – et je vais te donner mon Esprit, oui, me donner moi-même à toi. »</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de confirmation"
                                src="/assets/img/confirmation-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0 space-y-6" >
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Comment se déroule la confirmation ?</h2>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Administrateur</h1>
                            <p className='body-2 text-gray'>Le sacrement est ordinairement administré par l'évêque.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Rituel</h1>
                            <p className='body-2 text-gray'>Le confirmant reçoit l'onction du Saint-Chrême sur le front, accompagnée des paroles : « Sois marqué de l’Esprit Saint, le don de Dieu ».</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Contexte</h1>
                            <p className='body-2 text-gray'>Dans le Diocèse de Moncton, la confirmation est célébrée avec les jeunes ayant complété sept années de catéchèse.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
                    <div className=''>
                        <h2 className='heading-3 text-gray-900 mb-4'>La préparation à la confirmation</h2>
                        <div className='space-y-2'>
                            <p className='body-2 text-gray'>La préparation à la confirmation implique</p>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Une réflexion personnelle sur la foi et l'engagement chrétien.</li>
                                <li className='body-2 text-gray list-disc'>Un accompagnement par la communauté paroissiale et les catéchètes.</li>
                                <li className='body-2 text-gray list-disc'>Une participation active à la vie de l'Église.</li>
                            </ul>
                            <p className='body-2 text-gray'>Cette préparation concerne toute la communauté ecclésiale, car la confirmation est un événement d'Église qui s’accomplit dans la foi de l'Église.</p>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='heading-3 text-gray-900 mb-4'>Vivre en témoin du Christ</h2>
                        <div className='space-y-2'>
                            <p className='body-2 text-gray'>Après la confirmation, les confirmants sont appelés à :</p>
                            <ul className='ml-5'>
                                <li className='body-2 text-gray list-disc'>Témoigner de leur foi dans leur vie quotidienne.</li>
                                <li className='body-2 text-gray list-disc'>Participer activement à la mission de l'Église.</li>
                                <li className='body-2 text-gray list-disc'>Grandir dans leur relation avec Dieu par la prière et les sacrements. La confirmation n'est pas une fin, mais un nouveau départ pour une vie guidée par l'Esprit-Saint.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Vous avez des questions ?</h2>
                    <p className='body-2 text-gray'>Pour plus d'informations sur la préparation à la confirmation ou pour inscrire un jeune, contactez votre paroisse ou le service diocésain de catéchèse.</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}