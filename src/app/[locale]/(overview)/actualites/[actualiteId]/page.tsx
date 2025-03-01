
import Actualite from '@/components/ui/shared/actualite'
import { news } from '@/constants'
import { Link } from '@/i18n/routing'
import { Suspense } from 'react'
import ActualiteDetail from './ActualiteDetail'
import { ActualiteDetailSkeleton, RelativesActualitesSkeleton } from '@/components/ui/shared/skeletons'
import RelativesActualite from './RelativesActualite'

export default function Page() {
  return (
    <>
      <div className='px-5 md:px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
        <div className="flex justify-between ">
        </div>
      </div>
      <section className='md:container md:max-margin py-0' >
        <div className='grid grid-cols-1 lg:grid-cols-6 md:gap-6 lg:gap-14 py-4 lg:py-8'>
          <Suspense fallback={<ActualiteDetailSkeleton />} >
            <ActualiteDetail />
          </Suspense>
          <Suspense fallback={<RelativesActualitesSkeleton />} >
            <RelativesActualite />
          </Suspense>
        </div>
      </section>
    </>
  )
}
