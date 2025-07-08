
import { fetchParoisses } from '@/_lib/data'
import MapSection from '@/components/ui/shared/MapSection'
import { ParoisseItemSkeleton } from '@/components/ui/shared/skeletons'
import { Paroisse } from '@/types'
import { Suspense } from 'react'
import Filter from './Filter'
import Paroisses from './paroisses'
import SearchComp from './SearchComp'


export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        gps?: string;
        langue?: string;
        statut?: number;
    }>
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const gps = searchParams?.gps || '';
    const langue = searchParams?.langue || '';
    const statut = searchParams?.statut || undefined;

    let paroisses: Paroisse[] = []
    let params = '?'
    if (query) params = `${params}&nom=${query}`
    if (gps) params = `${params}&gps=${gps}`
    if (statut) params = `${params}&statut=${statut}`
    if (langue) params = `${params}&langue=${langue}`
    
    paroisses = await fetchParoisses(params)

    return (
        <section className='container max-margin vertical-margin pt-5 mt-0'>
            <SearchComp />
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
                            <Paroisses paroisses={paroisses} />
                        </Suspense>
                    </div>
                    <div className='h-[50vh] md:h-auto col-span-2 bg-gray-100 overflow-hidden'>
                        <MapSection paroisses={paroisses} />
                    </div>
                </div>
            </div>
        </section>
    )
}