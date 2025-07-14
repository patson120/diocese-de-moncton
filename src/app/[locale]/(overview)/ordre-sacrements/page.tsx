'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {

    const t= useTranslations("ordre_sacrements")
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            <div className='md:mt-10 lg:mt-20'></div>
            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
                    <div className='h-72 xl:h-80 hidden lg:block col-span-5 rounded-3xl overflow-hidden relative'>
                        <Image
                            alt="les sacrements"
                            src="/assets/img/ordre.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='col-span-full md:col-span-7 py-10 space-y-6'>
                        <div>
                            <h2 className='heading-3 text-gray-900 mb-4'>{t("section_1_titre")}</h2>
                            <div className='space-y-3'>
                                <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div className='space-y-6'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='heading-3 text-gray-900 mb-4'>{t("section_3_titre")}</h2>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_1")}</h1>
                                <p className='body-2 text-gray'>{t("section_3_p_1")}</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_2")}</h1>
                                <p className='body-2 text-gray'>{t("section_3_p_2")}</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_3")}</h1>
                                <p className='body-2 text-gray'>{t("section_3_p_3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_4_titre")}</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-3'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Rôle"
                                    src="/assets/img/role-1.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_4_sous_titre_1")}</h1>
                            <p className='body-2 text-gray'>{t("section_4_p_1")}</p>

                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Rôle"
                                    src="/assets/img/role-2.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_4_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>{t("section_4_p_2")}</p>

                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Rôle"
                                    src="/assets/img/role-3.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_4_sous_titre_3")}</h1>
                            <p className='body-2 text-gray'>{t("section_4_p_3")}</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-8 md:mt-16'></div>
            <section className='container max-margin py-0'>
                <div className=''>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_5_p_1")}</p>
                </div>
                <div className='flex flex-row flex-wrap gap-3 items-center mt-5'>
                    <a href='https://www.vatican.va/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p className='whitespace-nowrap'>Site officiel du Vatican</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='https://eglise.catholique.fr/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p className='whitespace-nowrap'>Conférence des Evêques de France</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_6_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_6_p_1")}</p>

                </div>
            </section>
        </main>
    )
}