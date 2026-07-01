'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations("politique_diocesaine")

    return (
        <main>
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={t("hero_title")}
                subtitle={t("hero_subtitle")}
            />
            
            <div className="mt-10 lg:mt-20"></div>
            
            <section className="container max-margin py-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8">
                    <div className="col-span-full lg:col-span-2 space-y-6">
                        <div className="bg-primary/5 p-6 rounded-xl">
                            <h2 className="heading-5 font-extrabold mb-3">{t("section_principes_titre")}</h2>
                            <p className="body-2 text-gray mb-4">{t("section_principes_p1")}</p>
                            <p className="body-2 text-gray mb-4">{t("section_principes_p2")}</p>
                        </div>

                        <div className="px-4 md:px-8 py-6 md:py-10 space-y-6 relative rounded-xl overflow-hidden bg-[#F9F4F5]">
                            <h3 className="heading-5 font-extrabold mb-4">{t("engagement_titre")}</h3>
                            <p className="body-2 text-gray mb-4">{t("engagement_p1")}</p>
                            <p className="body-2 text-gray">{t("engagement_p2")}</p>
                        </div>
                    </div>

                    <div className="col-span-full lg:col-span-3 space-y-8">
                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("section_eglise_titre")}</h2>
                            <p className="body-2 text-gray mb-4">{t("section_eglise_p1")}</p>
                            <p className="body-2 text-gray mb-4">{t("section_eglise_p2")}</p>
                            <p className="body-2 text-gray mb-4">{t("section_eglise_p3")}</p>
                            <p className="body-2 text-gray">{t("section_eglise_p4")}</p>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("section_portee_titre")}</h2>
                            <p className="body-2 text-gray mb-4">{t("section_portee_p1")}</p>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_portee_li_1")}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_portee_li_2")}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_portee_li_3")}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-3 w-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                    <span className="body-2 text-gray">{t("section_portee_li_4")}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="heading-4 font-extrabold mb-4">{t("section_appel_titre")}</h2>
                            <p className="body-2 text-gray">{t("section_appel_p1")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-10 lg:mt-20"></div>
        </main>
    )
}
