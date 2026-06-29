'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { ArrowUpRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    const t = useTranslations("communautes_religieuses")
    const localActive = useLocale()

    const communautesFemines = [
        {
            titre: t("nd_sc_titre"),
            description: t("nd_sc_desc"),
            activites: t("nd_sc_activites"),
            lien: "http://www.ndscacadie.com/visite.html"
        },
        {
            titre: t("fma_titre"),
            description: t("fma_desc"),
            activites: "",
            lien: ""
        },
        {
            titre: t("cnd_titre"),
            description: t("cnd_desc"),
            activites: "",
            lien: "http://www.trappistine.org/francais/index.html"
        },
        {
            titre: t("fj_titre"),
            description: t("fj_desc"),
            activites: "",
            lien: "http://www.fillesdejesus.org/"
        },
        {
            titre: t("ommi_titre"),
            description: t("ommi_desc"),
            activites: "",
            lien: "http://www.ommi-is.org/"
        }
    ]

    const communautesMasculines = [
        {
            titre: t("sc_titre"),
            description: t("sc_desc"),
            lien: ""
        },
        {
            titre: t("redemptoristes_titre"),
            description: t("redemptoristes_desc"),
            lien: ""
        },
        {
            titre: t("fic_titre"),
            description: t("fic_desc"),
            lien: "http://www.villagedessources.com/"
        },
        {
            titre: t("eudistes_titre"),
            description: t("eudistes_desc"),
            lien: "http://www.eudistes.org/"
        }
    ]

    return (
        <main>
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            <div className='md:mt-10 lg:mt-20'></div>
            
            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <div className="bg-primary/5 p-6 md:p-10 rounded-xl mb-10">
                    <p className='body-2 text-gray italic'>
                        "{t("section_intro")}"
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className='heading-3 text-gray-900 mb-6 pb-3 border-b border-gray-200'>
                            {t("section_feminines_titre")}
                        </h2>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                            {communautesFemines.map((communaute, index) => (
                                <div key={index} className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                                    <h3 className='heading-5 font-extrabold mb-3 text-primary'>{communaute.titre}</h3>
                                    <p className='body-2 text-gray mb-3'>{communaute.description}</p>
                                    {communaute.activites && (
                                        <p className='body-3 text-gray mb-4'>{communaute.activites}</p>
                                    )}
                                    {communaute.lien && (
                                        <Link 
                                            href={communaute.lien} 
                                            target='_blank'
                                            className='inline-flex items-center text-primary hover:underline body-3 font-semibold'
                                        >
                                            {t("visiter_site")}
                                            <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='heading-3 text-gray-900 mb-6 pb-3 border-b border-gray-200'>
                            {t("section_masculines_titre")}
                        </h2>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                            {communautesMasculines.map((communaute, index) => (
                                <div key={index} className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                                    <h3 className='heading-5 font-extrabold mb-3 text-primary'>{communaute.titre}</h3>
                                    <p className='body-2 text-gray mb-3'>{communaute.description}</p>
                                    {communaute.lien && (
                                        <Link 
                                            href={communaute.lien} 
                                            target='_blank'
                                            className='inline-flex items-center text-primary hover:underline body-3 font-semibold'
                                        >
                                            {t("visiter_site")}
                                            <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <div className='mt-8 md:mt-16'></div>
        </main>
    )
}