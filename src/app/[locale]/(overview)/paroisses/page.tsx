'use client'
import { Button } from '@/components/ui/shared/button'
import { ParoisseItemSkeleton } from '@/components/ui/shared/skeletons'
import { MapPin, Search, SlidersHorizontalIcon } from 'lucide-react'
import dynamic from "next/dynamic"
import { Suspense, useState } from 'react'
import Paroisses from './paroisses'

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
        <section className='container max-margin vertical-margin pt-5 mt-0'>
            <div className='flex justify-center items-center gap-2 my-7'>
                <div className='w-full lg:w-1/2 flex gap-2'>
                    <div className='relative flex-1'>
                        <input type="text" placeholder="Entrez le code postale ou la ville..."
                            className="w-full border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-10 py-2
                                text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                                placeholder:text-xs sm:text-sm sm:leading-6 outline-none"/>

                        <Search className="mr-2 h-4 w-4 text-gray-300 absolute top-3 left-3" />
                    </div>
                    <Button variant="secondary" className='bg-[#1D0104] text-[12px] text-white hover:bg-[#230105] ' onClick={() => { }}>
                        <MapPin className="md:mr-2 h-4 w-4 text-white" />
                        <span className='hidden md:flex text-white'>Prendre ma position</span>
                    </Button>
                </div>
            </div>
            <div className='my-10' />
            <div className='border-t border-gray-100'>
                <div className='h-[100vh] md:h-[50vh] lg:h-[60vh] grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-0 md:gap-6 lg:gap-10 xl:gap-12 '>
                    <div className='col-span-1 flex flex-col gap-3 pb-3 overflow-y-scroll v-scroll pr-3'>
                        <div className='sticky top-0 bg-white z-20 py-3'>
                            <Filter />
                        </div>
                        <Suspense fallback={<>{
                            [1, 2, 3, 4, 5, 6, 7, 8].map(i => <span>
                                <ParoisseItemSkeleton key={i} />
                            </span>)
                        }</>}>
                            <Paroisses />
                        </Suspense>
                    </div>
                    <div className='h-[50vh] md:h-auto col-span-2 bg-gray-100 overflow-hidden'>
                        <Map
                            parishes={parishes}
                            selectedParish={selectedParish}
                            onParishSelect={setSelectedParish}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Filter = () => {
    return (
        <div className='flex flex-wrap items-center gap-2 !text-nowrap text-[10px]'>
            <div className='flex items-center gap-[6px]'>
                <SlidersHorizontalIcon className="h-4 w-4 text-gray-600" />
                <label className='font-bold xl:text-sm whitespace-nowrap flex' htmlFor="filter">
                    Filtrer <span className='hidden md:block ml-1'>les résultats</span>
                </label>
            </div>
            <label className='body-2 px-2 py-1 font-bold rounded-xl bg-[#1D0104] text-white cursor-pointer' htmlFor="tous">Tous</label>
            <label className='body-2 px-2 py-1 rounded-xl border border-gray-100 cursor-pointer' htmlFor="catechese">En activité</label>
            <label className='body-2 px-2 py-1 rounded-xl border border-gray-100 cursor-pointer' htmlFor="diocese">Fermées</label>
        </div>
    )
}