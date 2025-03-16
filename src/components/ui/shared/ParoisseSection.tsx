import { fetchParoisses } from '@/_lib/data'
import RecentParoisses from '@/components/recentParoisses'
import { Paroisse } from '@/types'
import { Suspense } from 'react'
import MapSection from './MapSection'
import SearchParoisses from './SearchParoisses'
import { ParoisseItemSkeleton } from './skeletons'

export default async function ParoisseSection({ query}: { query: string}) {
    const response = await fetchParoisses(`?paginate=4&nom=${query}`)
    const paroisses: Paroisse[] = response.data
    
    return (
        <div className="vertical-margin" >
            <h1 className="heading-3 mb-3">Trouver une paroisse</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12">
                <div className="min-h-96 md:h-auto col-span-3 md:col-span-2 rounded-2xl overflow-hidden bg-gray-50 relative">
                    <MapSection paroisses={paroisses} />
                    <SearchParoisses />
                </div>
                <Suspense fallback={
                    <section className="col-span-3 md:col-span-1 flex flex-col gap-4">
                        { [1, 2, 3, 4, 5].map(i => <ParoisseItemSkeleton key={i} />)}
                    </section>}>
                    <RecentParoisses paroisses={paroisses} total={response.total} />
                </Suspense>
            </section>
        </ div>
    )
}
