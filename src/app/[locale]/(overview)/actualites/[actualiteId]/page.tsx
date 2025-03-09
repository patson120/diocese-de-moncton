
import { fetchActualites } from '@/_lib/data'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/shared/button'
import { ActualiteDetailSkeleton, RelativesActualitesSkeleton } from '@/components/ui/shared/skeletons'
import { TypeActualite } from '@/types'
import { Suspense } from 'react'
import ActualiteDetail from './ActualiteDetail'
import RelativesActualite from './RelativesActualite'

export default async function Page(
  props: {
    params: Promise<{ actualiteId: string }>,
    // searchParams?: Promise<{ query?: string; page?: number }>
  }) {
  const { actualiteId } = await props.params;

  // const searchParams = await props.searchParams;
  // const query = searchParams?.query || '';
  // const currentPage = searchParams?.page || 1;
  
  
  const actualite: TypeActualite = await fetchActualites(`/${actualiteId}`) 
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
          <div className='space-x-2'>
            <Button
              size={'sm'}
              variant="outline"
              className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
            >Article précédent
            </Button>
            <Button
              size={'sm'}
              variant="outline"
              className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
            >Article suivant
            </Button>
          </div>
        </div>
      </div>
      <section className='md:container md:max-margin py-0' >
        <div className='grid grid-cols-1 lg:grid-cols-6 md:gap-6 lg:gap-14 py-4 lg:py-8'>
          <Suspense fallback={<ActualiteDetailSkeleton />} >
            <ActualiteDetail actualite={actualite} />
          </Suspense>
          <Suspense fallback={<RelativesActualitesSkeleton />} >
            <RelativesActualite categorie_id={actualite.categorie_id} />
          </Suspense>
        </div>
      </section>
    </>
  )
}
