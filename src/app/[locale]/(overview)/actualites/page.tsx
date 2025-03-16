
import { ActualitesSkeleton } from '@/components/ui/shared/skeletons'
import { SlidersHorizontalIcon } from "lucide-react"
import Image from 'next/image'
import { Suspense } from 'react'
import Actualites from './actualites'
import SearchBar from './SearchBar'

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


const Filter = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
      <div className='flex items-center space-x-2'>
        <SlidersHorizontalIcon className="h-4 w-5 text-gray-600" />
        <label className='text-sm font-bold whitespace-nowrap' htmlFor="filter">Filtrer les résultats</label>
        {/* <select id="date" name="date" className="border-2 border-gray-200 p-2 rounded-lg w-full">
              <option value="" disabled>Tous</option>
              <option value="2023-01-01">Janvier 2023</option>
              <option value="2023-02-01">Février 2023</option>
              <option value="2023-03-01">Mars 2023</option>
            </select> */}
      </div>
      <div className='flex items-center flex-wrap gap-2'>
        <label className='text-sm font-bold p-[10px] rounded-xl bg-[#1D0104] text-white cursor-pointer' htmlFor="tous">Tous</label>
        <label className='text-sm p-[10px] rounded-xl border border-gray-100 cursor-pointer' htmlFor="catechese">Catéchèse</label>
        <label className='text-sm p-[10px] rounded-xl border border-gray-100 cursor-pointer' htmlFor="diocese">Diocèse</label>
      </div>
    </div>
  )
}

