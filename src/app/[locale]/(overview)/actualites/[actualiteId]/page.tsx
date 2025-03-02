
import Actualite from '@/components/ui/shared/actualite'
import { news } from '@/constants'
import { Link } from '@/i18n/routing'
import { Suspense } from 'react'
import ActualiteDetail from './ActualiteDetail'
import { ActualiteDetailSkeleton, RelativesActualitesSkeleton } from '@/components/ui/shared/skeletons'
import RelativesActualite from './RelativesActualite'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/shared/button'

export default function Page() {
  return (
    <>
      <div className='flex justify-between items-center border-y border-y-gray-100 '>
        <div className="container max-margin py-4 flex justify-between ">
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Accueil', href: '/' },
              {
                label: 'Actualités',
                href: '/actualites',
              },
              {
                label: 'Quel est le problème avec l’aide médicale...',
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
