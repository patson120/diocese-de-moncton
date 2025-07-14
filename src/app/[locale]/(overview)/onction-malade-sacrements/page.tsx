'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
    const t = useTranslations("onction_malade_sacrements")
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
                                alt="Image de l'onction"
                                src="/assets/img/onction-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_1_titre")}</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_3")}</p>
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
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_2_titre")}</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>{t("section_2_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_2_p_2")}</p>
                                <ul className='ml-3'>
                                    <li className='body-2 text-gray list-decimal'>{t("section_2_li_1")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_2_li_2")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_2_li_3")}</li>
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
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_3_titre")}</h2>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_1")}</h1>
                            <ul className='ml-3'>
                                <li className='body-2 text-gray list-disc'>{t("section_3_li_1")}</li>
                                <li className='body-2 text-gray list-disc'>{t("section_3_li_2")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>{t("section_3_p_1")}</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_3")}</h1>
                            <p className='body-2 text-gray'>{t("section_3_p_2")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_4_titre")}</h1>
                            <ul className='space-y-4 ml-3'>
                                <li className='body-2 text-gray list-decimal'><span className='font-bold'>{t("section_4_li_1")} :</span> {t("section_4_li_2")}</li>
                                <li className='body-2 text-gray list-decimal'><span className='font-bold'>{t("section_4_li_3")}</span> {t("section_4_li_4")}</li>
                                <li className='body-2 text-gray list-decimal'><span className='font-bold'>{t("section_4_li_5")}</span> {t("section_4_li_6")}</li>
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
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_5_p_1")}</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}