
import { formatDateToLocal } from '@/_lib/utils'
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

        {/* Important post  */}
        <div id='actualite-une' className='mt-8 mb-8 md:mb-12 xl:mb-24'>
          <ImportantPost />
        </div>

        <Suspense fallback={< ActualitesSkeleton items={8} />}>
          <Actualites currentPage={currentPage} query={query} />
        </Suspense>

      </section>
    </main>
  )
}

const ImportantPost = () => {
  return (
    <div className='w-full text-black  grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='relative h-72 xl:h-96 w-full rounded-2xl overflow-hidden bg-gray-100'>
        <Image
          alt="Image de la l'actualité"
          src="/assets/img/new-4.png"
          fill
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <div className='space-y-4'>
        <div>
          <span className='legend font-bold text-primary'>Diocèse</span>
          <h4 className='heading-3 line-clamp-2'>Quel est le problème avec l’aide médicale à mourir (AMM)? Le 9 octobre à 19h</h4>
        </div>
        <p className='body-2 line-clamp-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure quae ut sunt reprehenderit qui eius, facere incidunt tempore similique aspernatur dolorum minima dolores odit harum id nesciunt libero doloribus beatae eos voluptates dolorem. Commodi non illo rem, eveniet molestias distinctio! Corporis repudiandae provident cum ut amet blanditiis eum exercitationem ipsam numquam nihil porro deleniti aut a impedit cupiditate, nostrum nam? Similique labore, laboriosam ipsam corporis perferendis neque unde mollitia, consectetur blanditiis saepe sequi velit tempore porro corrupti aut maxime molestiae. Ratione quae saepe provident quod asperiores expedita aspernatur atque delectus quo laboriosam necessitatibus quas odit, dolores culpa! Ducimus, ipsa!</p>
        <p className='body-3 text-gray-400'>Publié le {formatDateToLocal((new Date()).toISOString())}</p>
      </div>
    </div >
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

