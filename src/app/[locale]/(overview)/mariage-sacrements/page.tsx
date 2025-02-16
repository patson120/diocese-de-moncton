'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title="Le sacrement du mariage"
                subtitle="Une alliance d'amour bénie par Dieu"
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image du mariage"
                                src="/assets/img/le-mariage.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Qu'est-ce que le sacrement du mariage ?</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Le mariage sacramental est un don réciproque que se font l’homme et la femme. Il est célébré en présence d’un prêtre ou d’un diacre, qui représente l’Église et appelle la bénédiction de Dieu sur le couple.</p>
                                <p className='body-2 text-gray mt-3'>Ce sacrement est une alliance d’amour, une image vivante de l’amour du Christ pour son Église.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0 space-y-6" >
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Les conditions pour recevoir le sacrement du mariage</h2>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Le consentement libre</h1>
                            <p className='body-2 text-gray'>Les futurs époux doivent dire "oui" en toute liberté, sans crainte ni contrainte.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>L’engagement exclusif et pour la vie</h1>
                            <p className='body-2 text-gray'>Le mariage est une union indissoluble, ouverte à l’accueil des enfants.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>L’absence d’obstacles</h1>
                            <p className='body-2 text-gray'>Aucun empêchement naturel ou ecclésial (comme un mariage préexistant ou des vœux de célibat) ne doit entraver l’union.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0 space-y-6" >
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Les fondements du mariage chrétien</h2>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Un "oui" libre et conscient</h1>
                            <p className='body-2 text-gray'>Les époux s’engagent volontairement et en toute connaissance de cause.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Une union exclusive et pour la vie</h1>
                            <p className='body-2 text-gray'>Le mariage est une promesse d’amour fidèle et durable.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>L’ouverture à la vie</h1>
                            <p className='body-2 text-gray'>Les époux accueillent les enfants comme un don de Dieu. Ces éléments font du mariage une image vivante de l’amour du Christ pour son Église.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Se préparer au sacrement du mariage</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>Les couples qui désirent se marier à l'Église sont invités à suivre des cours de préparation au mariage. Ces sessions permettent de :</p>
                                <ul className='ml-3'>
                                    <li className='body-2 text-gray list-disc'>Comprendre le sens profond du mariage chrétien.</li>
                                    <li className='body-2 text-gray list-disc'>Réfléchir aux défis de la vie conjugale.</li>
                                    <li className='body-2 text-gray list-disc'>Renforcer la communication et la spiritualité du couple. Contactez votre paroisse pour connaître les dates et les modalités des sessions de préparation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image du mariage"
                                src="/assets/img/mariage-2.png"
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