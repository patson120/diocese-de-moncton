'use client'

import { LanguageSelector } from '@/components/language-selector'
import { Button } from '@/components/ui/shared/button'
import { archidiocese, mouvements, ressources, sacrements } from '@/constants'
import { Link, useRouter } from '@/i18n/routing'
import { Lien, MenuType } from '@/types'
import { Heart } from "lucide-react"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

import { fetchLinksByMenu } from '@/_lib/data'
import Text from '@/components/Text'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useLocale, useTranslations } from 'next-intl'



export default function Header() {
    const router = useRouter()
    const localActive = useLocale()
    const t = useTranslations("navigation")

    const [menus, setMenus] = useState<MenuType[]>([])
    const [linksRegistry, setLinksRegistry] = useState<MenuType[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const sections = [
        {
            title: localActive == 'fr' ? "Accueil" : "Home",
            items: [],
            page: '/'
        },
        {
            title: localActive == 'fr' ?  "Archidiocèse": "Archdiocese",
            items: [...archidiocese, ...linksRegistry.filter(item => item.menu! === '2')]
        },
        {
            title: localActive == 'fr' ?  "Sacrements": "Sacraments",
            items: [...sacrements, ...linksRegistry.filter(item => item.menu! === '1')]
        },
        {
            title: localActive == 'fr' ? "Evènements": "Events",
            items: [],
            page: '/evenements'
        },
        {
            title: localActive == 'fr' ?  "Mouvements": "Movements",
            items: [...mouvements, ...linksRegistry.filter(item => item.menu! === '3')]
        },
        {
            title: localActive == 'fr' ?  "Ressources" : "Resources",
            items: [...ressources, ...linksRegistry.filter(item => item.menu! === '4')]
        },
    ]

    const onMouseEvent =  async (event: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>, type: string) => {
        if (event.type === "mouseleave"){
            // setMenus([])
            return
        }
        const submenu = document.querySelector('#submenu') as HTMLDivElement
        
        switch (type) {
            case 'archidiocese':
                setMenus([...archidiocese, ...linksRegistry.filter(item => item.menu! === '2')])
                break;
            case 'sacrements':
                setMenus([...sacrements, ...linksRegistry.filter(item => item.menu! === '1')])
                break;
            case 'mouvements':
                setMenus([...mouvements, ...linksRegistry.filter(item => item.menu! === '3') ])
                break;
            case 'ressources':
                setMenus([...ressources, ...linksRegistry.filter(item => item.menu! === '4') ])
                break;
            default:
                setMenus([])
                break;
        }
        if (submenu.classList.contains("hidden")) {
            submenu.classList.toggle("hidden")
        }
    }

    const onMouseEnter = () => {
        document.querySelector('#submenu')?.classList.remove("hidden")
    }

    const onMouseLeave = () => {
        setTimeout(() => {
            document.querySelector('#submenu')?.classList.add("hidden")
        }, 300);
    }

    const navigateTo = (link: string) => {
        document.querySelector('#submenu')?.classList.add("hidden")
        setIsOpen(prev => !prev)
        router.push(link)

    }

    const fetchLinks = useCallback(
        async (params: string = '?statut=1') => {
            const response: Lien[] = await fetchLinksByMenu(params)
            let data: MenuType[] = []
            for (let index = 0; index < response.length; index++) {
                const item = response[index];
                if (item.lapage.length){
                    data.push({
                        id: item.id,
                        menu: `${item.menu_id}`,
                        image: '/assets/icons/noun-eucharist-7479333 1.png',
                        titre_fr: item.intitule_fr,
                        titre_en: item.intitule_en ?? "",
                        description_fr: item.lapage[0]!.titre_fr ?? item.lapage[0]!.titre_en,
                        description_en: item.lapage[0]!.titre_en ?? "",
                        link: `/pages/${item.pages_id}`
                    })
                }   
            }
            setLinksRegistry(data)
        },
    [])

    useEffect(() => {        
        fetchLinks()
    }, [])

    return (
        <>
            <header className='flex-1 flex-col fixed top-0 left-0 right-0 z-50 shadow-sm bg-white h-[130px]'>
                <div className='relative'>
                    <div className='bg-[#F9F4F5] info-sections'>
                        <nav className='container max-margin py-1 overflow-x-hidden'>
                            <div className='hidden md:flex justify-between'>
                                <ul className='flex justify-center items-center space-x-3 text-xs md:text-sm lg:text-sm text-gray-500'>
                                    <li>
                                        <Link href="https://www.google.com/maps/place/224+Rue+St.+George,+Moncton,+NB+E1C+5J4,+Canada/@46.090801,-64.781807,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca0b93b01f859a1:0xd74f8270dc13186e!8m2!3d46.090801!4d-64.781807!16s%2Fg%2F11c3q4b2z7?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"><Text keyString={'adresse'} />: 224 St-George, Moncton, NB. E1C 0V1</Link>
                                    </li>
                                    <li className='info-section'>
                                        <Link href="tel:+(506)857-9531"><Text keyString={'phone'} />: (506) 857-9531</Link>
                                    </li>
                                    <li className='info-section'>
                                        <Link href="mailto:webmestre@diocesemoncton.ca">Email: webmestre@diocesemoncton.ca</Link>
                                    </li>
                                </ul>
                                <LanguageSelector />
                            </div>
                            <div className='md:hidden h-[50px] flex justify-center items-center'>
                                <Link className='text-xs md:text-base' target='_blank' href="https://www.google.com/maps/place/224+Rue+St.+George,+Moncton,+NB+E1C+5J4,+Canada/@46.090801,-64.781807,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca0b93b01f859a1:0xd74f8270dc13186e!8m2!3d46.090801!4d-64.781807!16s%2Fg%2F11c3q4b2z7?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"><Text keyString={'adresse'} />: 224 St-George, Moncton, NB. E1C 0V1</Link>
                            </div>
                        </nav>
                    </div>
                    <nav className='container max-margin py-3 relative'>
                        <div className='justify-between items-center hidden btn-menu'>
                            {/* <Link href='/' className='relative shrink-0 w-20 h-14 xl:w-32 xl:h-14 cursor-pointer'> */}
                            <Link href='/' className='relative shrink-0 w-20 h-14 xl:h-14 cursor-pointer'>
                                <Image
                                    alt="Logo diocèse de Moncton"
                                    src="/logo.jpeg"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                            {/* Mobile menu button */}
                            <div className='flex flex-col justify-center items-center'>
                                <button
                                    onClick={() => { setIsOpen(prev => !prev) }}
                                    type="button"
                                    className="relative inline-flex items-center justify-center rounded-md p-2 pr-3 pb-0 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>

                                    {/* Icon when menu is closed. */}

                                    {/* Menu open: "hidden", Menu closed: "block" */}

                                    <div className={`${isOpen ? 'hidden' : 'block'} justify-center items-center`}>
                                        <svg className="h-8 w-8 ml-1" fill="none" viewBox="0 0 20 20" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                        <p className='font-bold text-center'>Menu</p>
                                    </div>

                                    {/* Icon when menu is open. */}

                                    {/* Menu open: "block", Menu closed: "hidden" */}

                                    {/* <div className={`${isOpen ? 'flex' : 'hidden'} justify-center items-center gap-2`}>
                                    <p className='font-bold text-center'>Fermer</p>
                                    <svg className=" h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div> */}
                                </button>
                            </div>

                        </div>
                        {/*  */}

                        <div className='flex justify-between items-center h-menu'>
                            <Link href='/' className='relative shrink-0 w-20 h-10 xl:h-14 cursor-pointer'>
                                <Image
                                    alt="Logo diocèse de Moncton"
                                    src="/logo.jpeg"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>

                            <ul className='flex justify-center items-center space-x-4 body-3 text-gray-500'>
                                <li onMouseEnter={onMouseLeave} className='hover:text-black hover:font-extrabold'>
                                    <Link href="/"><Text className='text-inherit' keyString='accueil' /></Link>
                                </li>
                                <li onMouseEnter={(e) => onMouseEvent(e,'archidiocese')} onMouseLeave={(e) => {onMouseEvent(e, 'archidiocese')}} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>
                                    <Text className='text-inherit' keyString='archidiocese' />
                                </li>
                                <li onClick={()=> navigateTo("/sacrements")} onMouseEnter={(e) => onMouseEvent(e,'sacrements')} onMouseLeave={(e) => {onMouseEvent(e, 'sacrements')}} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>
                                    <Text className='text-inherit' keyString='sacrements' />
                                </li>
                                <li onMouseEnter={onMouseLeave} className='hover:text-black hover:font-extrabold'>
                                    <Link href="/evenements"><Text className='text-inherit' keyString='evenements' /></Link>
                                </li>
                                <li onMouseEnter={(e) => onMouseEvent(e, 'mouvements')} onMouseLeave={(e) => {onMouseEvent(e,'mouvements')}} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>
                                    <Text className='text-inherit' keyString='mouvements' />
                                </li>
                                <li onMouseEnter={(e) => onMouseEvent(e, 'ressources')} onMouseLeave={(e) => {onMouseEvent(e, 'ressources')}} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>
                                    <Text className='text-inherit' keyString='ressources' />
                                </li>
                            </ul>
                            <div className='flex'>
                                <Button onClick={() => {
                                    document.querySelector('#submenu')?.classList.add("hidden")
                                    router.push("/faire-un-don")
                                }}
                                    variant="outline" className='border border-primary hover:text-primary text-primary hover:bg-transparent bg-transparent body-3 font-extrabold py-2'>
                                    <Heart className="mr-2 h-4 w-4 xl:h-5 xl:w-5 text-primary" />
                                    <Text className='text-inherit' keyString='faire_don' />
                                </Button>
                                {/* Contribuer à la mission */}
                            </div>
                        </div>
                    </nav>

                    {/* Sous menu desktop  */}
                    <div id='submenu' className='hidden transition-all border-t border-gray-50 overflow-hidden absolute top-full inset-0 z-50 h-[85vh]' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                        <div className='container max-margin py-0'>
                            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='bg-white rounded-b-xl overflow-hidden flex '>
                                <div className='w-72 lg:w-96 p-6 bg-[#F9F4F5]'>
                                    <div className='relative h-36 w-full bg-white rounded-lg overflow-hidden'>
                                        <Image
                                            alt="Submenu banner"
                                            src="/assets/img/submenu-banner.png"
                                            fill
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <h3 className='body-1 font-bold mt-2'>{t("horaires_messe_titre")}</h3>
                                    <p className='body-3 text-gray-500 mt-2 mb-4'>{t("horaires_messe_desc")}</p>
                                    <Button className='w-full body-2' onClick={() => { navigateTo('/horaires-messes') }}>
                                        {t("savoir_plus")}
                                    </Button>
                                </div>
                                <div className='w-full p-6'>
                                    <div className='grid grid-cols-3 gap-5'>
                                        {
                                            menus.map((menu, index) => <SubmenuItem key={index} menu={menu} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            {
                (isOpen) &&
                <div className='hidden mobile-menu fixed top-0 right-0 left-0 min-h-screen bg-white z-50 transition-all'>
                    <div className='container max-margin py-0 h-[70px] flex flex-row justify-between items-center'>
                        <div className='relative shrink-0 w-20 h-14 xl:w-32 xl:h-14 rounded-md'>
                            <a href='/'>
                                <Image
                                    alt="Logo diocèse de Moncton"
                                    src="/logo.jpeg"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </a>
                        </div>
                        {/* Mobile menu button */}
                        <div className='flex flex-col justify-center items-center'>
                            <button
                                onClick={() => { setIsOpen(prev => !prev) }}
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 pr-3 pb-0 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">

                                {/* Icon when menu is open. */}

                                {/* Menu open: "block", Menu closed: "hidden" */}

                                <div className={`flex justify-center items-center gap-2`}>
                                    <p className='font-bold text-center'>{t("fermer")}</p>
                                    <svg className=" h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='container max-margin py-0 flex flex-col justify-between flex-1 h-[calc(100vh-70px)] overflow-y-scroll'>
                        <div>
                            <div className='border-t-2 border-gray-100 mt-3'></div>
                            <div className='mt-6'></div>
                            <h1 className='heading-5 text-2xl mb-4'>Menu</h1>
                            <Accordion type="single" collapsible className="w-full container max-margin py-0 pl-0">
                                {sections.map((section, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className='border-none'>
                                        <AccordionTrigger onClick={() => { if (section.items?.length === 0) { navigateTo(section?.page!) } }}
                                            className="text-lg hover:no-underline hover:text-primary group">
                                            <span className="flex items-center gap-2">
                                                {section.title}
                                            </span>
                                        </AccordionTrigger>
                                        {
                                            section.items?.map((item, i) => (
                                                <AccordionContent key={i} className="text-muted-foreground px-0 ">
                                                    <Button variant='ghost' onClick={() => { navigateTo(item.link) }} className="body-2 pl-0 hover:bg-transparent">
                                                        <span className='text-muted-foreground'> {localActive === 'fr' ? item.titre_fr: item.titre_en}</span>
                                                    </Button>
                                                </AccordionContent>
                                            ))
                                        }
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className='p-6 bg-[#F9F4F5] mb-10 mt-6 rounded-xl'>
                            <h3 className='body-1 font-bold mt-2'>{t("horaires_messe_titre")}</h3>
                            <p className='body-3 text-gray-500 mt-2 mb-6'>{t("horaires_messe_desc")}</p>
                            <Button className='w-full body-2' onClick={() => { navigateTo('/horaires-messes') }}>
                                {t("savoir_plus")}
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const SubmenuItem = ({ menu }: { menu: MenuType }) => {
    const router = useRouter()
    const localActive = useLocale()

    const handleClick = () => {
        if (menu.link) {
            router.push(`${menu.link}`)
        }
        document.querySelector('#submenu')?.classList.add("hidden")
    }
    return (
        <div onClick={handleClick} className='cursor-pointer flex justify-start items-center space-x-4 text-black'>
            <div className='h-[60px] w-[60px] shrink-0 flex justify-center items-center rounded-xl bg-[#F9F4F5] overflow-hidden '>
                <div className='h-[32px] w-[32px] shrink-0 relative'>
                    <Image
                        alt=""
                        src={menu.image}
                        fill
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
            <div>
                <h4 className='body-3 font-semibold lg:font-bold'>{localActive === 'fr' ? menu.titre_fr : menu.titre_en}</h4>
                <p className='legend text-gray-500 line-clamp-2'>{localActive === 'fr' ?  menu.description_fr : menu.description_en}</p>
            </div>
        </div>
    )
}
