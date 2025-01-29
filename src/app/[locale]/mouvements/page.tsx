'use client'

import { Button } from '@/components/ui/shared/button'
import { Link } from '@/i18n/routing'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const mouvements = [
    {
        id: 1,
        title: 'chevaliers de Colomb',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 2,
        title: 'Comité diocésain de la Bible',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 3,
        title: 'Mouvement des femmes chrétiennes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 4,
        title: 'Cursillo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 5,
        title: 'Developpement et paix',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 6,
        title: 'La vie montante',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 7,
        title: 'Légion de Marie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 8,
        title: 'Renouveau charismatique',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 9,
        title: 'Service d’animation missionnaire',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 10,
        title: 'Protocole ministère responsable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 11,
        title: 'Scouts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 12,
        title: 'Service de préparation au mariage',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 13,
        title: 'Société St-Vincent de Paul',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 14,
        title: 'vivre et aimer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    }

]

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="les mouvements"
                    src="/assets/img/mouvements.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Les mouvements</h1>
                        <p className='body-2 text-center text-white mt-3'>Retrouvez tous les mouvements du diocèse et les informations associées.</p>
                    </div>
                </div>
            </section>

            <div className='mt-6 md:mt-10 lg:mt-20'></div>

            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <h1 className='heading-3 font-extrabold mt-5 mb-5 md:mb-10'>Liste des mouvements</h1>

                <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        mouvements.map(mouvement => (
                            <div key={mouvement.id} className='space-y-3 border rounded-xl p-3 md:p-6'>
                                <div className='space-y-2'>
                                    <h1 className='heading-4 text-[#1D0104] font-bold'>{mouvement.title}</h1>
                                    <p className='body-2 text-gray line-clamp-3'>{mouvement.description}</p>
                                </div>
                                <div className='pt-4'>
                                    <Link href="#" className="">
                                        <Button
                                            variant="ghost"
                                            onClick={() => { }}
                                            className='font-medium border-[#1D0104] rounded-[8px] p-0'
                                        >
                                            <div className='flex justify-center items-center'>
                                                <span>En savoir plus</span>
                                                <ChevronRight className="ml-1 h-5 w-5" />
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}