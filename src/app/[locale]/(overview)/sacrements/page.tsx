'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
    const router = useRouter()
    const navigateTo = (link: string) => {
        router.push(link)
    }

    const t = useTranslations("sacrements")

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
                    <div className='hidden lg:block col-span-5 rounded-3xl overflow-hidden relative'>
                        <Image
                            alt="les sacrements"
                            src="/assets/img/sacrement-1.png"
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
                            <p className='body-2 text-gray'>{t("section_1_p_1")}</p>
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div className='space-y-3'>
                                <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                    <Image
                                        alt="les sacrements"
                                        src="/assets/icons/vector-1.png"
                                        width={28}
                                        height={28}
                                        style={{ objectFit: 'contain', }}
                                    />
                                </div>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                            </div>
                            <div className='space-y-3'>
                                <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                    <Image
                                        alt="les sacrements"
                                        src="/assets/icons/vector-2.png"
                                        width={20}
                                        height={20}
                                        style={{ objectFit: 'contain', }}
                                    />
                                </div>
                                <p className='body-2 text-gray'>{t("section_1_p_3")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div className='space-y-6'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='heading-3 text-gray-900 mb-4'>{t("section_2_titre")}</h2>
                        <p className='body-2 text-gray'>{t("section_2_p_1")}</p>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                                <h1 className='body-1 text-[#1D0104] font-bold'>{t("section_2_sous_titre_1")}</h1>
                                <p className='body-2 text-gray'>{t("section_2_p_2")}</p>
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
                                <h1 className='body-1 text-[#1D0104] font-bold'>{(t("section_2_sous_titre_2"))}</h1>
                                <p className='body-2 text-gray'>{t("section_2_p_3")}</p>
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
                                <p className='body-2 text-gray'>{t("section_2_p_4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_3_titre")}</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-3'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Célébration de baptême"
                                    src="/assets/img/bapteme.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_3_sous_titre_1")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/bapteme-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >En savoir plus</Button>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Célébration de baptême"
                                    src="/assets/img/confirmation.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_3_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/confirmation-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >En savoir plus</Button>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L'Eucharistie"
                                    src="/assets/img/eucharistie.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_3_sous_titre_3")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/eucharistie-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >En savoir plus</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_4_titre")}</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-2'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="reconciliation"
                                    src="/assets/img/reconciliation.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_4_sous_titre_1")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/reconcilliation-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >En savoir plus</Button>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L'onction des malades"
                                    src="/assets/img/onction-des-malades.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_4_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/onction-malade-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >{t("section_4_savoir_plus")}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>{t("section_5_titre")}</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-2'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L’Ordre"
                                    src="/assets/img/ordre.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_5_sous_titre_1")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/ordre-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >{t("section_4_savoir_plus")}</Button>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Le Mariage"
                                    src="/assets/img/le-mariage.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>{t("section_5_sous_titre_2")}</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Button
                                    variant="outline"
                                    onClick={() => navigateTo("/mariage-sacrements")}
                                    className='font-bold border-[#1D0104] rounded-[8px] mt-3'
                                >{t("section_4_savoir_plus")}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}