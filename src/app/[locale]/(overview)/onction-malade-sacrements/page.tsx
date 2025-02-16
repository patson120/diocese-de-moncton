'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title="Le sacrement de l'onction des malades"
                subtitle="Un sacrement de réconfort, de guérison et d'espérance"
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'onction"
                                src="/assets/img/onction-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Une tradition chrétienne d'amour et de compassion</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>Depuis les origines du christianisme, les malades, les vieillards et les nécessiteux ont toujours occupé une place centrale dans la vie de l'Église.</p>
                                <p className='body-2 text-gray'>Comme Sainte Mère Teresa, les chrétiens sont appelés à voir le Christ dans ceux qui souffrent et à leur apporter réconfort et soutien. </p>
                                <p className='body-2 text-gray'>Le sacrement de l'onction des malades est un don de l'Esprit Saint, une source de force et de guérison pour ceux qui traversent l'épreuve de la maladie.</p>
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
                            <h1 className='heading-4 font-extrabold mb-4'>Un sacrement de réconfort et d'espérance</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>L'onction des malades est un sacrement destiné à apporter un soutien spirituel et physique aux personnes gravement malades ou âgées. Ce sacrement n'est pas une "sentence de mort", mais au contraire une "assurance de vie" qui unit le malade à la passion du Christ pour sa guérison et son salut.</p>
                                <p className='body-2 text-gray'>Objectifs du sacrement :</p>
                                <ul className='ml-3'>
                                    <li className='body-2 text-gray list-decimal'>Donner force et réconfort dans l'épreuve</li>
                                    <li className='body-2 text-gray list-decimal'>Pardonner les péchés si le malade ne peut se confesser</li>
                                    <li className='body-2 text-gray list-decimal'>Préparer le malade à rencontrer Dieu en paix</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'onction des malades"
                                src="/assets/img/onction-des-malades.png"
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
                    <h2 className='heading-3 text-gray-900 mb-4'>Qui peut recevoir l'onction des malades ?</h2>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Personnes concernées</h1>
                            <ul className='ml-3'>
                                <li className='body-2 text-gray list-disc'>Tout fidèle dont la santé est gravement atteinte (maladie, vieillesse, opération chirurgicale grave)</li>
                                <li className='body-2 text-gray list-disc'>Les personnes de tout âge, y compris les jeunes confrontés à une situation critique</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Fréquence</h1>
                            <p className='body-2 text-gray'>Ce sacrement peut être reçu plusieurs fois dans la vie, notamment en cas d'aggravation de la maladie.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Association avec la confession</h1>
                            <p className='body-2 text-gray'>Beaucoup de fidèles choisissent de se confesser avant de recevoir l'onction des malades pour se présenter devant Dieu avec une conscience purifiée.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Comment se célèbre l'onction des malades ?</h1>
                            <ul className='space-y-4 ml-3'>
                                <li className='body-2 text-gray list-decimal'><span className='font-bold'>Lieu :</span> Le sacrement est généralement célébré dans une église, mais il peut aussi être administré à domicile ou à l'hôpital.</li>
                                <li className='body-2 text-gray list-decimal'><span className='font-bold'>Rite essentiel :</span> Le prêtre oint le front et les mains du malade avec de l'huile bénite, en prononçant des paroles de réconfort et de prière.</li>
                                <li className='body-2 text-gray list-decimal'><span className='font-bold'>Accompagnement :</span> La célébration est souvent accompagnée de prières communautaires pour soutenir le malade.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'onction"
                                src="/assets/img/onction-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Vous avez des questions ?</h2>
                    <p className='body-2 text-gray'>Si vous avez des questions sur le sacrement de réconciliation ou si vous souhaitez rencontrer un prêtre pour une confession, n'hésitez pas à nous contacter.</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}