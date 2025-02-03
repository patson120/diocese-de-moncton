'use client'

import { Button } from '@/components/ui/shared/button'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useState } from 'react'

const items = [
    {
        id: 1,
        title: 'ALLARD, Dc. Louis',
        description: 'Unité pastorale Providence',
        link: '',
        image: '/assets/img/clerge-1.png'
    },
    {
        id: 2,
        title: 'DEVEAUX, Dc. André',
        description: "Unité pastorale Marie-Reine-de-l'Acadie",
        link: '',
        image: '/assets/img/clerge-2.png'
    },
    {
        id: 3,
        title: 'DUPUIS, Dc. Jules',
        description: 'Unité pastorale Sainte-Famille',
        link: '',
        image: '/assets/img/clerge-3.png'
    },
    {
        id: 4,
        title: 'LEBLANC, Dc. Armand',
        description: 'Unité pastorale Saint-Jean-Paul II',
        link: '',
        image: '/assets/img/clerge-4.png'
    },
    {
        id: 5,
        title: 'LEBLANC, Dc. Calixte',
        description: 'Unité pastorale Saint-Jean XXIII',
        link: '',
        image: '/assets/img/clerge-5.png'
    },
]

const menus = [
    {
        id: 1,
        title: 'Diacres permanents',
    },
    {
        id: 2,
        title: 'Prêtres diocésains',
    },
    {
        id: 3,
        title: 'Les pères redemptoristes',
    },
    {
        id: 4,
        title: 'Clergé diocésains',
    },
    {
        id: 5,
        title: 'Congrégations des saintes croix',
    },
]



export default function Page() {

    const [selectedMenu, setSelectedMenu] = useState(menus[0])

    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section clergés"
                    src="/assets/img/clerges.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Clergé</h1>
                        <p className='body-2 text-center text-white mt-3'>Retrouvez tous les membres derrière notre diocèse</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>

            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <div>
                    <p className='body-2 text-gray mb-2'>Sélectionnez le profil recherché</p>
                    <div className='mb-10 flex items-center flex-wrap gap-2'>
                        {
                            menus.map(menu => (
                                <div key={menu.id}>
                                    <Button
                                        variant={selectedMenu.id === menu.id ?  'default': 'ghost'}
                                        onClick={() => { setSelectedMenu(menu) }}
                                        className={`${ selectedMenu.id === menu.id ?  'font-bold bg-[#1D0104] hover:bg-[#1D0104] text-white':  'bg-[#F5F5F5] hover:bg-[#F5F5F5]'}  rounded-[8px]  `}
                                    >{menu.title}</Button>
                                </div>
                            ))
                        }
                    </div>
                    <div className='lg:flex lg:flex-row pb-8 lg:pb-0 grid gap-6 grid-cols-2 md:grid-cols-3'>
                        {
                            items.map(item => (
                                <div key={item.id} className='space-y-3 w-full' >
                                    <div className='h-[240px] relative rounded-xl overflow-hidden'>
                                        <Image
                                            alt="Célébration de baptême"
                                            src={item.image}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    <h1 className='body-2 font-bold'>{item.title}</h1>
                                    <p className='body-2 text-gray'>{item.description}</p>
                                    <div className="">
                                        <Link href="" className="body-3 font-semibold underline">
                                            Coordonnées
                                        </Link> 
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}