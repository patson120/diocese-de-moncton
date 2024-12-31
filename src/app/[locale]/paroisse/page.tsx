'use client'
import { Button } from '@/components/ui/shared/button'
import ParoisseItem from '@/components/ui/home/paroisse-item'
import { paroisses } from '@/constants'
import { MapPin, Search, SlidersHorizontalIcon } from 'lucide-react'
import dynamic from "next/dynamic"
import { useState } from 'react'

// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false });

const parishes = [
    {
        id: 1,
        name: "Cathédrale Notre-Dame de l'Assomption",
        address: '220 St George St, Moncton, NB E1C 1V8',
        phone: '+1 506-857-4223',
        email: 'cathedrale@diocesemoncton.ca',
        website: 'https://www.cathedralemoncton.ca',
        location: { lat: 46.0878, lng: -64.7782 }
    },
    {
        id: 2,
        name: 'Église Saint-Anselme',
        address: '1014 Rue Amirault, Dieppe, NB E1A 1C9',
        phone: '+1 506-382-8018',
        email: 'stanselme@diocesemoncton.ca',
        website: 'https://www.paroissestanselme.ca',
        location: { lat: 46.0978, lng: -64.7482 }
    }
];
export default function Page() {
    const [selectedParish, setSelectedParish] = useState<any>(null);
    return (
        <>
            <div className='container px-0 py-0 my-10'>
                <div className='flex justify-center items-center gap-2 my-7'>
                    <div className='w-1/2 flex gap-2'>
                        <div className='relative flex-1'>
                            <input type="text" placeholder="Entrez le code postale ou la ville..."
                                className="w-full border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-10 py-2
                                text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                                placeholder:text-xs sm:text-sm sm:leading-6 outline-none"/>

                            <Search className="mr-2 h-4 w-4 text-gray-300 absolute top-3 left-3" />
                        </div>
                        <Button variant="secondary" className='bg-[#1D0104] text-[12px] text-white hover:bg-[#230105] ' onClick={() => { }}>
                            <MapPin className="mr-2 h-4 w-4 text-white" />
                            Prendre ma position
                        </Button>
                    </div>
                </div>
                <div className='border-t border-gray-100'>
                    <div className='h-[60vh] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12 '>
                        <div className='col-span-1 flex flex-col gap-3 pb-3 overflow-y-scroll'>
                            <div className='sticky top-0 bg-white z-20 py-3'>
                                <Filter />
                            </div>
                            {
                                [...paroisses, ...paroisses].map((item, index) => (
                                    <ParoisseItem key={index} data={item} />
                                ))
                            }
                        </div>
                        <div className='col-span-2 bg-gray-100 overflow-hidden'>
                            <Map
                                parishes={parishes}
                                selectedParish={selectedParish}
                                onParishSelect={setSelectedParish}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Filter = () => {
    return (
        <div className='flex flex-wrap items-center gap-2 !text-nowrap text-[10px]'>
            <div className='flex items-center gap-[6px]'>
                <SlidersHorizontalIcon className="h-4 w-4 text-gray-600" />
                <label className='font-bold xl:text-sm whitespace-nowrap' htmlFor="filter">Filtrer les résultats</label>
            </div>
            <label className='body-2 px-2 py-1 font-bold rounded-xl bg-[#1D0104] text-white cursor-pointer' htmlFor="tous">Tous</label>
            <label className='body-2 px-2 py-1 rounded-xl border border-gray-100 cursor-pointer' htmlFor="catechese">En activité</label>
            <label className='body-2 px-2 py-1 rounded-xl border border-gray-100 cursor-pointer' htmlFor="diocese">Fermées</label>
        </div>
    )
}