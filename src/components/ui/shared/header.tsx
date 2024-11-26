'use client'

import { actualites, archidiocese, mouvements, ressources, sacrements } from '@/constants'
import { MenuType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Heart, Globe, ChevronDown } from "lucide-react";

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
        <header className=''>
            <nav className='bg-gray-100 px-5 md:px-10 py-3 flex justify-between'>
                <ul className='flex justify-center items-center space-x-3 text-[10px] text-gray-500'>
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
                <div className=''>
                    <Button variant="ghost" className='h-8 text-xs' onClick={() => { }}>
                        <Globe className="mr-[5px] h-3 w-3" />
                        Canada(français)
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </nav>
            <nav className='px-5 md:px-10 py-4 flex justify-between relative'>
                <div className='relative w-20 h-9 rounded-md'>
                    <Image
                        alt="Logo diocèse de Moncton"
                        src="/brand-logo.png"
                        fill
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <ul className='flex justify-center items-center space-x-4 text-xs text-gray-500'>
                    <li onMouseEnter={onMouseLeave} className='hover:text-black hover:font-bold'><Link href="/">Accueil</Link></li>
                    <li onMouseEnter={(e) => onMouseEvent(e, 'archidiocese')} onMouseLeave={(e) => onMouseEvent(e, 'archidiocese')} className='px-2 py-1 cursor-pointer hover:text-black hover:font-bold'>Archidiocèse</li>
                    <li onMouseEnter={(e) => onMouseEvent(e, 'sacrements')} onMouseLeave={(e) => onMouseEvent(e, 'sacrements')} className='px-2 py-1 cursor-pointer hover:text-black hover:font-bold'>Sacréments</li>
                    <li onMouseEnter={(e) => onMouseEvent(e, 'actualites')} onMouseLeave={(e) => onMouseEvent(e, 'actualites')} className='px-2 py-1 cursor-pointer hover:text-black hover:font-bold'>Actualités</li>
                    <li onMouseEnter={(e) => onMouseEvent(e, 'mouvements')} onMouseLeave={(e) => onMouseEvent(e, 'mouvements')} className='px-2 py-1 cursor-pointer hover:text-black hover:font-bold'>Mouvements</li>
                    <li onMouseEnter={(e) => onMouseEvent(e, 'ressources')} onMouseLeave={(e) => onMouseEvent(e, 'ressources')} className='px-2 py-1 cursor-pointer hover:text-black hover:font-bold'>Ressources</li>
                </ul>
                <div className='flex'>
                    <Button size="sm" variant="outline" className='border border-primary text-primary' onClick={() => { }}>
                        <Heart className="mr-2 h-4 w-4 text-primary" />
                        Contribuer à la mission
                    </Button>
                </div>
                <div id='submenu' className='hidden transition-all border-t border-gray-100 overflow-hidden absolute top-full left-0 right-0 z-50 px-10 h-[85vh]' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='bg-white rounded-b-xl overflow-hidden flex'>
                        <div className='w-72 p-6 bg-[#F9F4F5]'>
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
                            <h3 className='text-base text-gray-600 font-bold mt-2'>Horaires de messe</h3>
                            <p className='text-xs text-gray-500 mt-2 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus adipisci sed dicta est veritatis alias.</p>
                            <Button className='w-full' onClick={() => { }}>
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
            <div className='h-[60px] w-[80px] rounded-lg bg-[#F9F4F5] overflow-hidden relative'>
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
                <h4 className='text-xs font-semibold'>{menu.title}</h4>
                <p className='text-[10px] text-gray-500 line-clamp-2'>{menu.description}</p>
            </div>
        </div>
    )
}