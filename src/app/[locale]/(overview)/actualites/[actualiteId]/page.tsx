
import { fetchActualites } from '@/_lib/data'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { ActualiteDetailSkeleton, RelativesActualitesSkeleton } from '@/components/ui/shared/skeletons'
import { TypeActualite } from '@/types'
import { Suspense } from 'react'
import ActualiteDetail from './ActualiteDetail'
import Buttons from './Buttons'
import RelativesActualite from './RelativesActualite'

export default async function Page(
  props: {
    params: Promise<{ actualiteId: string }>,
  }) {
  const { actualiteId } = await props.params;
  const actualite: TypeActualite = await fetchActualites(`/${actualiteId}`)
  const response = await fetchActualites(`?paginate=4&page=1&categorie_id=${actualite.categorie_id}`)
  const actualites = response.data
  return (
    <>
      <div className='flex justify-between items-center border-y border-y-gray-100 '>
        <div className="container max-margin py-3 flex justify-between items-center ">
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Accueil', href: '/' },
              {
                label: 'Actualités',
                href: '/actualites',
              },
              {
                label: actualite?.titre_fr ?? "",
                href: '',
                active: true,
              },
            ]}
          />
         <Buttons actualite={actualite} />
        </div>
      </div>
      <section className='md:container md:max-margin py-0' >
        <div className='grid grid-cols-1 lg:grid-cols-6 md:gap-6 lg:gap-14 py-4 lg:py-8'>
          <Suspense fallback={<ActualiteDetailSkeleton />} >
            <ActualiteDetail actualite={actualite} />
          </Suspense>
          <Suspense fallback={<RelativesActualitesSkeleton />} >
            <RelativesActualite actualites={actualites} />
          </Suspense>
        </div>
      </section>
    </>
  )
}
