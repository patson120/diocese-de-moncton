'use client'

import { Button } from '@/components/ui/shared/button'
import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Mail, Phone, FileText } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'


export default function Page() {
    const t = useTranslations("deposer_plainte")
    const localeActive =  useLocale()

    const handleOpenReportForm = () => {
        const reportFormUrl = localeActive === 'fr' ? 
        'https://docs.google.com/forms/d/e/1FAIpQLScAMxpcZa_yN_3dHEauvcDu9EMKrb5XzQf-yxLAH6hMkbm9NQ/viewform' : 
        'https://docs.google.com/forms/d/e/1FAIpQLSdUOalmyK8mxiS6wNbSIaGVe7z1kGpFXQ-Yj_bOVTStDTEI5g/viewform'
        window.open(reportFormUrl, '_blank')
    }

    return (
        <main>
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            
            <div className="mt-10 lg:mt-20"></div>
            
            <section className="container max-margin py-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8">
                    <div className="col-span-full lg:col-span-2 space-y-6">
                        <div className="bg-primary/5 p-6 rounded-xl">
                            <h2 className="heading-5 font-extrabold mb-3">{t("letter_titre")}</h2>
                            <p className="body-2 text-gray mb-4">{t("letter_date")}</p>
                            <p className="body-2 text-gray mb-6">{t("letter_salutation")}</p>
                            
                            <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    alt="Archevêque de Moncton"
                                    src="/assets/img/archeveque.jpeg"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="object-top"
                                />
                            </div>
                            
                            <p className="body-2 text-gray mb-4">{t("letter_p_1")}</p>
                            <p className="body-2 text-gray mb-4">{t("letter_p_2")}</p>
                            <p className="body-2 text-gray mb-6">{t("letter_p_3")}</p>
                            
                            <Button variant="outline" className="body-2">
                                {t("letter_btn")}
                            </Button>
                        </div>

                        <div className="px-4 md:px-8 py-6 md:py-10 space-y-6 relative rounded-xl overflow-hidden bg-[#F9F4F5]">
                            <h3 className="heading-5 font-extrabold mb-4">{t("section_4_titre")}</h3>
                            <p className="body-2 text-gray mb-4">{t("section_4_p_1")}</p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                    <a href="mailto:responsible.ministry@diocesemoncton.ca" className="body-3 hover:underline">
                                        responsible.ministry@diocesemoncton.ca
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                    <a href="tel:(506)857-9531" className="body-3 hover:underline">
                                        (506) 857-9531
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full lg:col-span-3 space-y-8">
                        <div className="bg-primary/5 p-6 rounded-xl">
                            <div className="flex items-center justify-center mb-4">
                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                                    <FileText className="h-10 w-10 text-primary" />
                                </div>
                            </div>
                            <h2 className="heading-4 font-extrabold mb-4 text-center">{t("report_form_titre")}</h2>
                            <p className="body-2 text-gray mb-4 text-center">{t("report_form_desc")}</p>
                            <Button onClick={handleOpenReportForm} variant="default" className="body-2 w-full md:w-auto">
                                {t("report_form_btn")}
                            </Button>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("section_1_titre")}</h2>
                            <p className="body-2 text-gray mb-2">{t("section_1_p_1")}</p>
                            <p className="body-2 text-gray">{t("section_1_p_2")}</p>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("section_2_titre")}</h2>
                            <p className="body-2 text-gray mb-4">{t("section_2_p_1")}</p>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_2_li_1")}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_2_li_2")}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_2_li_3")}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("section_5_titre")}</h2>
                            <p className="body-2 text-gray mb-2">{t("section_5_p_1")}</p>
                            <p className="body-2 text-gray">{t("section_5_p_2")}</p>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("bishop_report_titre")}</h2>
                            <p className="body-2 text-gray mb-4">{t("bishop_report_desc")}</p>
                            <div className="h-48 relative rounded-xl overflow-hidden bg-gray-100">
                                <Image
                                    alt="Bishop Reporting System"
                                    src="/assets/img/justice-1.png"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="mt-4">
                                <Button variant="outline" className="body-2 w-full md:w-auto">
                                    {t("bishop_report_btn")}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-10 lg:mt-20"></div>
        </main>
    )
}