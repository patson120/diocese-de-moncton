'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Button } from '@/components/ui/shared/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const items = [
    {
        id: 1,
        title: 'Niveau 1',
        image: '/assets/img/pourquoi-inscrire 1.png'
    },
    {
        id: 2,
        title: 'Niveau 2',
        image: '/assets/img/pourquoi-inscrire 2.png'
    },
    {
        id: 3,
        title: 'Niveau 3',
        image: '/assets/img/pourquoi-inscrire 4.png'
    },
    {
        id: 4,
        title: 'Niveau 4',
        image: '/assets/img/pourquoi-inscrire 5.png'
    },
    {
        id: 5,
        title: 'Niveau 5',
        image: '/assets/img/pourquoi-inscrire 6.png'
    },
    {
        id: 6,
        title: 'Niveau 6',
        image: '/assets/img/pourquoi-inscrire 7.png'
    },
]


export default function Page() {
    const t = useTranslations("catechese")
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/mouvements.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_1_titre")}</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                            </div>
                            <div className='mt-6 mb-8 md:mb-0'>
                                <Button size="sm" className="px-5 w-full md:w-auto">
                                    <span className='text-inherit'>{t("section_btn")}</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de la catéchèse"
                                src="/assets/img/faire-un-don.png"
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
                                alt="Image de la catéchèse"
                                src="/assets/img/catechese-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_2_titre")}</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>{t("section_2_p_1")} </p>
                                <p className='body-2 text-gray'>{t("section_2_p_2")}</p>
                            </div>
                            <div className='mt-6 mb-8 md:mb-0'>
                                <Button size="sm" className="px-5 w-full md:w-auto">
                                    <span className='text-inherit'>{t("section_btn")}</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <h2 className='heading-3 text-gray-900 mb-6'>{t("section_3_titre")}</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-3'>
                        <div className='h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="catéchèse"
                                src="/assets/img/catechese-2.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>{t("section_3_sous_titre_1")} <span className='text-base font-normal'>{t("section_3_sous_titre_2")}</span></h1>
                        <p className='body-2 text-gray'>{t("section_3_p_1")}</p>
                        <div className='pt-6 mb-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span className='text-inherit'>{t("section_btn")}</span>
                            </Button>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="catéchèse"
                                src="/assets/img/catechese-3.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>{t("section_3_sous_titre_3")} <span className='text-base font-normal'>{t("section_3_sous_titre_2")}</span></h1>
                        <p className='body-2 text-gray'>{t("section_3_p_2")}</p>
                        <div className='pt-6 mb-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span className='text-inherit'>{t("section_btn")}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <h2 className='heading-3 text-gray-900 mb-6'>{t("section_4_titre")}</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-3 rounded-xl lg:rounded-3xl border px-5 py-8'>
                        <h1 className='heading-4'>{t("section_4_sous_titre_1")}</h1>
                        <p className='body-2 text-gray'>{t("section_4_p_1")}</p>
                        <div className='pt-4 lg:pt-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span className='text-inherit'>{t("section_btn")}</span>
                            </Button>
                        </div>
                    </div>
                    <div className='space-y-3 rounded-xl lg:rounded-3xl border px-5 py-8'>
                        <h1 className='heading-4'>{t("section_4_sous_titre_2")}</h1>
                        <p className='body-2 text-gray'>{t("section_4_p_2")}</p>
                        <div className='pt-4 lg:pt-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span className='text-inherit'>{t("section_btn")}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <div className='md:mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div>
                    <h2 className='heading-3 text-gray-900 mb-6'>{t("section_5_titre")}</h2>
                    <div className='flex flex-row overflow-x-scroll xl:overflow-hidden h-scroll pb-8 space-x-6'>
                        {
                            items.map(item => (
                                <div key={item.id} className='space-y-3'>
                                    <div className='w-[175px] h-[250px] relative overflow-hidden'>
                                        <Image
                                            alt={item.title}
                                            src={item.image}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_6_titre")}</h2>
                    <div>
                        <p className='body-2 text-gray'>{t("section_6_p_1")}</p>
                        <ul className='ml-5'>
                            <li className='body-2 list-disc font-bold'>{t("section_6_li_1")}</li>
                            <li className='body-2 list-disc font-bold'>{t("section_6_li_2")}</li>
                        </ul>
                        <p className='body-2 text-gray'>{t("section_6_p_2")}</p>
                        <p className='body-2 text-gray'><span className='text-black font-semibold'>Note :</span> {t("section_6_p_3")}</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                    <div>
                        <h2 className='heading-3 text-gray-900 mb-4'>{t("section_7_titre")}</h2>
                        <p className='body-2 text-gray'>{t("section_7_p_1")}</p>
                    </div>
                    <div className='flex flex-col-reverse'>
                        <ul className='text-right'>
                            <li className='body-2 text-gray'>{t("section_7_li_1")}</li>
                            <li className='body-2 text-gray'>{t("section_7_li_2")} : <span className='text-black font-semibold'>(506) 857-9531, poste 1229</span></li>
                            <li className='body-2 text-gray'>{t("section_7_li_3")} : <span className='text-black font-semibold'>catechese.dianneleger@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}