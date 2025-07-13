'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
    const t = useTranslations("eucharistie_sacrements")
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
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
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_1_titre")}</h1>
                            <div className='space-y-6'>
                                <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <h2 className='heading-3 text-gray-900 mb-4'>{t("section_2_titre")}</h2>
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
                        <h1 className='heading-4'>{t("section_2_sous_titre_1")}</h1>
                        <p className='body-2 text-gray'>{t("section_2_p_1")}</p>
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
                        <h1 className='heading-4'>{t("section_2_sous_titre_2")}</h1>
                        <p className='body-2 text-gray'>{t("section_2_p_2")}</p>

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
                        <h1 className='heading-4'>{t("section_2_sous_titre_3")}</h1>
                        <p className='body-2 text-gray'>{t("section_2_p_3")}</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_3_titre")}</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>{t("section_3_p_1")}</p>
                                <ul className='ml-5 space-y-4'>
                                    <li className='body-2 text-gray list-disc'>{t("section_3_li_1")}</li>
                                    <li className='body-2 text-gray list-disc'>{t("section_3_li_2")}</li>
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
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_4_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_4_p_1")}</p>
                </div>
                <div className='flex flex-row flex-wrap gap-3 items-center mt-5'>
                    <a href='https://www.vatican.va/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p className='whitespace-nowrap'>Site officiel du Vatican</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='https://www.catechisme.fr/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p className='whitespace-nowrap'>Catéchèse sur l'eucharistie</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_5_p_1")}</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}