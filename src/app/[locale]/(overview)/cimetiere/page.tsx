'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
    const t = useTranslations("cimetiere")
    const router = useRouter()


    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/hero-cimetiere.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de cimetière"
                                src="/assets/img/cimetiere-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-3 font-extrabold mb-3'>{t("section_1_titre")}</h1>
                            <div className='space-y-3'>
                                <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                                <div>
                                    <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                                    <p className='body-2 text-gray'>{t("adresse")} : <span className='text-gray-800 font-bold'>{t("section_1_p_3")}</span></p>
                                </div>
                                <div className='flex space-x-3'>
                                    <a href='https://www.sitescapers.com/FindPlot/' target='_blank' rel="noopener noreferrer" >
                                        <Button size="sm" className="px-5 w-full md:w-auto">
                                            <span className='text-inherit'>{t("section_1_btn_1")}</span>
                                        </Button>
                                    </a>
                                    <a href="#tarifs-reservations">
                                        <Button variant="outline" size="sm" className="px-5 w-full md:w-auto">
                                            <span className='text-inherit'>{t("section_1_btn_2")}</span>
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="">
                <div className='h-80 w-full relative bg-gray-100'>
                    <Image
                        alt="hero cimetière"
                        src="/assets/img/hero-cimetiere-2.png"
                        fill
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%'
                        }}
                    />
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section id='tarifs-reservations' className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_2_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_2_desc")}</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_1")}</h1>
                            <p className='body-2 text-gray'>{t("section_2_p_1")}</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>{t("section_2_p_2")}</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_3")}</h1>
                            <p className='body-2 text-gray'>{t("section_2_p_3")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-1'>{t("section_3_titre")}</h2>
                    <p className='body-2 text-gray'>{t("section_3_desc")}</p>
                    <div className='mt-10 space-y-4'>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Lot simple</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>1,000.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Lot double</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>2,000.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Lot triple</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>2,800.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Petit lot (2 urnes)</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>800.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Niche</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>2,500.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Ouverture, fermeture et entretien perpétuel pour cercueil</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>1,000.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Ouverture, fermeture et entretien perpétual pour urne</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>600.00 + taxe</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_4_titre")}</h2>
                    <div>
                        <p className='body-2 text-gray'>Rachel Vienneau</p>
                        <p className='body-2 text-gray'>{t("section_4_p_1")}</p>
                        <p className='body-2 text-gray'>{t("section_4_p_2")}</p>
                        <p className='body-2 text-gray'>{t("section_4_p_3")}</p>
                        <p className='body-2 text-gray'>{t("section_4_p_4")}</p>
                        <p className='body-2 text-gray'>{t("section_4_p_5")}</p>
                        <p className='body-2 text-gray'>{t("section_4_p_6")}</p>
                        <p className='body-2 text-gray'>{t("section_4_p_7")} ; cimetiere@diocesemoncton.ca</p>
                    </div>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}