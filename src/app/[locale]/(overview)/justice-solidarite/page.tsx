'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { useTranslations } from 'next-intl'
import Image from 'next/image'


export default function Page() {
    const t = useTranslations("justice_solidarite")
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-1 md:order-2 col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/justice-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_1_titre")}</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <div className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_2_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_2_p_1")}</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_3_sous_titre_1")}</h1>
                            <p className='body-2 text-gray'>{t("section_3_p_1")}</p>
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>{t("section_3_p_2")}</p>
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_3")}</h1>
                            <p className='body-2 text-gray'>{t("section_3_p_3")}</p>
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_4")}</h1>
                            <p className='body-2 text-gray'>{t("section_3_p_4")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-1 md:order-2 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/justice-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>{t("section_4_titre")}</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>{t("section_4_p_1")}</p>
                                <ol className='ml-5'>
                                    <li className='body-2 text-gray list-decimal'>{t("section_4_li_1")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_4_li_2")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_4_li_3")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_4_li_4")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_4_li_5")}</li>
                                    <li className='body-2 text-gray list-decimal'>{t('section_4_li_6')}</li>
                                    <li className='body-2 text-gray list-decimal'>{t("section_4_li_7")}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_sous_titre_1")}</h2>
                    <p className='body-2 text-gray'>{t("section_5_p_1")}</p>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_sous_titre_2")}</h2>
                    <p className='body-2 text-gray'>{t("section_5_p_2")}</p>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_sous_titre_1")}</h2>
                    <p className='body-2 text-gray'>{t("section_5_p_1")}</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}