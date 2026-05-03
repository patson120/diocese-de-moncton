'use client'

import { fetchMembres } from "@/_lib/data";
import { HeroSectionSecond } from "@/components/sections/hero-second";
import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Membre } from "@/types";
import { useEffect, useState } from 'react';
import MemberComp from "./member-comp";
import { useLocale, useTranslations } from "next-intl";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";





export default function Page() {
    const t = useTranslations('membres')

    const [isFetching, setIsFetching] = useState(false)
    const localActive = useLocale()
    const [etat, setEtat] = useState("1")

    const menus = [
        {
            id: '21',
            title: localActive === "en" ? "Archbishop" : 'Archevêque',
            slug: 'archeveque',
        },
        {
            id: '19',
            title: localActive === "en" ? "Deacons" : 'Diacres',
            slug: 'diacres',
        },
        {
            id: '20',
            title: localActive === "en" ? "Priests" : 'Prêtres',
            slug: 'pretres',
        },
        {
            id: '22',
            title: localActive === "en" ? "Religious" : 'Religieux',
            slug: 'religieux',
        },
        {
            id: '23',
            title: localActive === "en" ? "Others" : 'Autres',
            slug: 'autres',
        },
    ]

    const [selectedMenu, setSelectedMenu] = useState(menus[0])
    const [membres, setMembres] = useState<Membre[]>([])

    const getMembres = async () => {
        setIsFetching(true)
        const response: Membre[] = await fetchMembres(`?categorie_id=${selectedMenu.id}&etat=${etat}`)
        // Classer les membres par ordre alphabétique
        response.sort((a, b) => a.nom.localeCompare(b.nom))
        setMembres(response)
        setIsFetching(false)
    }

    useEffect(() => {
        getMembres()
    }, [selectedMenu, etat])

    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={t("hero_titre")}
                subtitle={t("hero_desc")}
            />
            <div className='mt-10 lg:mt-20'></div>
            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <div>
                    <p className='body-2 text-gray mb-2'>{t("section_1_titre")}</p>
                    <Tabs defaultValue={menus[0].slug} className="space-y-4">
                        <TabsList className='bg-white h-auto flex flex-row justify-start overflow-x-scroll xl:overflow-x-hidden gap-3 pb-4'>
                            {
                                menus.map((menu, index) => (
                                    <TabsTrigger
                                        onClick={() => {
                                            setEtat("1")
                                            setSelectedMenu(menu)
                                        }}
                                        key={index} value={menu.slug}
                                        className={`${selectedMenu.id === menu.id ? '!bg-[#1D0104] !text-white !font-bold' : 'bg-[#F5F5F5]'}  rounded-[8px] py-2`}>
                                        {menu.title}
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                        <TabsContent
                            value={selectedMenu.slug}
                            className="border-none">
                            <Tabs defaultValue="actif" className="w-full">
                                <div className="flex justify-between items-center">
                                    <TabsList className="justify-start h-12 p-0 bg-[#F1F3F6] rounded-md px-3 py-2">
                                        <TabsTrigger
                                            onClick={() => setEtat('1')}
                                            value="actif"
                                            className="h-8 px-2.5 py-2.5 rounded-none data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:shadow-none data-[state=active]:text-blue data-[state=active]:font-bold data-[state=inactive]:text-gray">
                                            <span className="font-body-3 text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)]">
                                                Actif
                                            </span>
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="en-retraite"
                                            onClick={() => setEtat('0')}
                                            className="h-8 px-2.5 py-2.5 rounded-none data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:shadow-none data-[state=active]:text-blue data-[state=active]:font-bold data-[state=inactive]:text-gray">
                                            <span className="font-body-3 text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)]">
                                                En retraite
                                            </span>
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="decedes"
                                            onClick={() => setEtat('-1')}
                                            className="h-8 px-2.5 py-2.5 rounded-none data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:shadow-none data-[state=active]:text-blue data-[state=active]:font-bold data-[state=inactive]:text-gray">
                                            <span className="font-body-3 text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)]">
                                                Décédés
                                            </span>
                                        </TabsTrigger>
                                    </TabsList>
                                </div>

                                <TabsContent value="actif" className="mt-6 space-y-6">
                                    {
                                        isFetching ?
                                            <div className='h-44 w-full flex justify-center items-center'>
                                                <LoadingSpinner />
                                            </div> : membres.length === 0 ?
                                                <p className="text-gray h-[200px] flex justify-center items-center">Aucune donnée trouvée</p> :
                                                <MemberComp membres={membres} />
                                    }
                                </TabsContent>

                                <TabsContent
                                    value="en-retraite"
                                    className="mt-6 p-0 border-none">
                                    {
                                        isFetching ?
                                            <div className='h-44 w-full flex justify-center items-center'>
                                                <LoadingSpinner />
                                            </div> : membres.length === 0 ?
                                                <p className="text-gray h-[200px] flex justify-center items-center">Aucune donnée trouvée</p> :
                                                <MemberComp membres={membres} />
                                    }
                                </TabsContent>

                                <TabsContent value="decedes" className="mt-6 p-0 border-none">
                                    {
                                        isFetching ?
                                            <div className='h-44 w-full flex justify-center items-center'>
                                                <LoadingSpinner />
                                            </div> : membres.length === 0 ?
                                                <p className="text-gray h-[200px] flex justify-center items-center">Aucune donnée trouvée</p> :
                                                <MemberComp membres={membres} />
                                    }
                                </TabsContent>
                            </Tabs>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
            {/* Action de grace */}
            <ActionGrace />
        </main>
    )
}