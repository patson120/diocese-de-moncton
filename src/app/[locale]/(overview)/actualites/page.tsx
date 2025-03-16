
import { ActualitesSkeleton } from '@/components/ui/shared/skeletons'
import { SlidersHorizontalIcon } from "lucide-react"
import Image from 'next/image'
import { Suspense } from 'react'
import Actualites from './actualites'
import SearchBar from './SearchBar'
import Filter from './Filter'

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: number;
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = searchParams?.page || 1;
  return (
    <main>
      {/* Hero section */}
      <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
        {/* Hero image */}
        <Image
          alt="hero section background image"
          src="/assets/img/hero-image-2.png"
          fill
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%'
          }}
        />
        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40'>
          <h1 className='container max-margin py-0 md:w-1/2 heading-1 text-center text-white font-extrabold'>Découvrez toute notre actualité</h1>
        </div>
      </section>
      <div className='container max-margin py-0 -translate-y-2'>
        {/* Search bar */}
        <SearchBar placeholder={"Rechercher un actualité..."} />
      </div>
      <section className='container max-margin py-0 pb-10 md:pb-20'>

        {/* filter */}
        <Filter />

        <Suspense fallback={<div className='mt-16'>< ActualitesSkeleton items={8} /></div>}>
          <Actualites currentPage={currentPage} query={query} />
        </Suspense>

      </section>
    </main>
  )
}

