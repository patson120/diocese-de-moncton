import RecentParoisses from '@/components/recentParoisses'
import React, { Suspense } from 'react'
import { ParoisseItemSkeleton } from './skeletons'
import { Button } from './button'
import { MapPin, Search } from 'lucide-react'
import MapSection from './MapSection'
import { Paroisse } from '@/types'
import { fetchParoisses } from '@/_lib/data'

export default async function ParoisseSection() {
    const paroisses: Paroisse[] = await fetchParoisses()
    return (
        <div className="vertical-margin" >
            <h1 className="heading-3 mb-3">Trouver une paroisse</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12">
                <div className="h-96 md:h-auto col-span-3 md:col-span-2 rounded-2xl overflow-hidden bg-gray-50 relative">
                    <MapSection paroisses={paroisses.slice(0, 4)} />
                    <div className='w-full absolute top-4 left-0 right-0'>
                        <div className="px-5 w-[95%] flex gap-2">
                            <div className='relative flex-1'>
                                <input type="text" placeholder="Entrez le code postale ou la ville..."
                                    className="w-full border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-10 py-2
                        text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                        placeholder:text-xs sm:text-sm sm:leading-6 outline-none"/>
                                <Search className="mr-2 h-4 w-4 text-gray-300 absolute top-3 left-3" />
                            </div>
                            <Button variant="secondary" className='bg-[#1D0104] text-[12px] text-white hover:bg-[#230105]'>
                                <MapPin className="md:mr-2 h-4 w-4 text-white" />
                                <span className='hidden md:flex !text-white'>Prendre ma position</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <Suspense fallback={
                    <section className="col-span-3 md:col-span-1 flex flex-col gap-4">
                        { [1, 2, 3, 4, 5].map(i => <ParoisseItemSkeleton key={i} />)}
                    </section>
                }>
                    <RecentParoisses paroisses={paroisses.slice(0, 4)} total={paroisses.length} />
                </Suspense>
            </section>
        </ div>
    )
}
