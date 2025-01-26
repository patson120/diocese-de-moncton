'use client'

import { LanguageSelector } from '@/components/language-selector'
import { Button } from '@/components/ui/shared/button'
import { actualites, archidiocese, mouvements, ressources, sacrements } from '@/constants'
import { MenuType } from '@/types'
import { Heart } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {

    const [menus, setMenus] = useState<MenuType[]>([])

    const onMouseEvent = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, type: string): void => {
        const submenu = document.querySelector('#submenu') as HTMLDivElement

        switch (type) {
            case 'archidiocese':
                setMenus([...archidiocese])
                break;
            case 'sacrements':
                setMenus([...sacrements])
                break;
            case 'actualites':
                setMenus([...actualites])
                break;
            case 'mouvements':
                setMenus([...mouvements])
                break;
            case 'ressources':
                setMenus([...ressources])
                break;

            default:
                alert('Unknown')
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

    return (
        <header className='relative'>
            <div className='bg-gray-100 test'>
                <nav className='container max-margin py-1'>
                    <div className='flex justify-between'>
                        <ul className='flex justify-center items-center space-x-3 text-xs md:text-sm lg:text-sm text-gray-500'>
                            <li>
                                <Link href="https://www.google.com/maps/place/224+Rue+St.+George,+Moncton,+NB+E1C+5J4,+Canada/@46.090801,-64.781807,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca0b93b01f859a1:0xd74f8270dc13186e!8m2!3d46.090801!4d-64.781807!16s%2Fg%2F11c3q4b2z7?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">Adresse: 224 St-George, Moncton, NB. E1C 0V1</Link>
                            </li>
                            <li>
                                <Link href="tel:+(506)857-9531">Tél: (506) 857-9531</Link>
                            </li>
                            <li>
                                <Link href="mailto:webmestre@diocesemoncton.ca">Email: webmestre@diocesemoncton.ca</Link>
                            </li>
                        </ul>
                        <LanguageSelector />
                    </div>
                </nav>
            </div>
            <nav className='container max-margin py-3 relative'>
                <div className='justify-between items-center hidden btn-menu'>
                    <div className='relative shrink-0 w-20 h-14 xl:w-32 xl:h-14 rounded-md'>
                        <Image
                            alt="Logo diocèse de Moncton"
                            src="/brand-logo.png"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    {/* Mobile menu button */}
                    <div className='flex flex-col justify-center items-center'>
                        <button
                            onClick={() => { }}
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 pr-3 pb-0 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            {/* Icon when menu is closed. */}

                            {/* Menu open: "hidden", Menu closed: "block" */}

                            <svg className="block h-8 w-8" fill="none" viewBox="0 0 20 20" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            {/* Icon when menu is open. */}

                            {/* Menu open: "block", Menu closed: "hidden" */}

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <label htmlFor="" className='font-bold'>Menu</label>
                    </div>
                </div>
                {/*  */}

                <div className='flex justify-between h-menu'>
                    <div className='relative shrink-0 w-20 h-10 xl:w-32 xl:h-14 rounded-md'>
                        <Image
                            alt="Logo diocèse de Moncton"
                            src="/brand-logo.png"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <ul className='flex justify-center items-center space-x-4 body-3 text-gray-500'>
                        <li onMouseEnter={onMouseLeave} className='hover:text-black hover:font-extrabold'><Link href="/">Accueil</Link></li>
                        <li onMouseEnter={(e) => onMouseEvent(e, 'archidiocese')} onMouseLeave={(e) => onMouseEvent(e, 'archidiocese')} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>Archidiocèse</li>
                        <li onMouseEnter={(e) => onMouseEvent(e, 'sacrements')} onMouseLeave={(e) => onMouseEvent(e, 'sacrements')} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>Sacréments</li>
                        <li onMouseEnter={(e) => onMouseEvent(e, 'actualites')} onMouseLeave={(e) => onMouseEvent(e, 'actualites')} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>Actualités</li>
                        <li onMouseEnter={(e) => onMouseEvent(e, 'mouvements')} onMouseLeave={(e) => onMouseEvent(e, 'mouvements')} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>Mouvements</li>
                        <li onMouseEnter={(e) => onMouseEvent(e, 'ressources')} onMouseLeave={(e) => onMouseEvent(e, 'ressources')} className='px-2 py-1 cursor-pointer hover:text-black hover:extrabold'>Ressources</li>
                    </ul>
                    <div className='flex'>
                        <Button variant="outline" className='border border-primary hover:text-primary text-primary body-3 font-extrabold py-2' onClick={() => { }}>
                            <Heart className="mr-2 h-4 w-4 xl:h-5 xl:w-5 text-primary" />
                            Contribuer à la mission
                        </Button>
                    </div>
                </div>
                <div id='submenu' className='hidden transition-all border-t border-gray-100 overflow-hidden absolute top-full px-[8%] inset-0 z-50 h-[85vh]' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='bg-white rounded-b-xl overflow-hidden flex'>
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
                            <h3 className='body-1 font-bold mt-2'>Horaires de messe</h3>
                            <p className='body-3 text-gray-500 mt-2 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus adipisci sed dicta est veritatis alias.</p>
                            <Button className='w-full body-2 xl:text-xl' onClick={() => { }}>
                                En savoir plus
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
            </nav>
        </header>
    )
}

const SubmenuItem = ({ menu }: { menu: MenuType }) => {
    return (
        <div className='flex justify-start items-center space-x-4 text-black'>
            <div className='h-[60px] w-[60px] shrink-0 rounded-[12px] bg-[#F9F4F5] overflow-hidden relative'>
                {/* <Image
                    alt=""
                    src="/assets/img/campost.jpg"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                /> */}
            </div>
            <div>
                <h4 className='body-3 font-semibold lg:font-bold'>{menu.title}</h4>
                <p className='legend text-gray-500 line-clamp-2'>{menu.description}</p>
            </div>
        </div>
    )
}
