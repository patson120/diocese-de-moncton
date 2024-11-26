
import { formatDateToLocal } from '@/_lib/utils'
import { news } from '@/constants'
import { Link } from '@/i18n/routing'
import Actualite from '@/components/ui/shared/actualite'
import Image from 'next/image'

export default function Page() {
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
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start pt-10 bg-black bg-opacity-40'>
          <h1 className='w-1/2 text-white text-center font-extrabold text-xl md:text-3xl lg:text-5xl'>Découvrez toute notre actualité</h1>
        </div>
      </section>
      <section className='px-5 md:px-10 pb-8'>
        {/* Search bar */}
        <SearchBar />

        <div className='mt-2' />
        {/* filter */}
        <Filter />

        {/* Important post  */}
        <div className='mt-8 mb-12'>
          <ImportantPost />
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            [...news, ...news].map((item, index) => (
              <Link key={index} href="/actualite/1">
                <Actualite data={item} />
              </Link>
            ))
          }
        </div>

        {/* Pagination */}
        <div className='flex justify-center mt-12'>
          <div className='flex gap-3'>
            <div className='w-40 h-8 rounded-md bg-gray-100'></div>
          </div>
        </div>
      </section>

    </main>
  )
}

const ImportantPost = () => {
  return (
    <div className='w-full text-black  grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='relative h-72 w-full rounded-xl overflow-hidden bg-gray-100'>
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
        <span className='text-sm font-semibold text-primary'>Diocèse</span>
        <h4 className='text-2xl font-bold line-clamp-2'>Quel est la problème avec l&apos;aide médicale à mourir</h4>
        <p className='line-clamp-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure quae ut sunt reprehenderit qui eius, facere incidunt tempore similique aspernatur dolorum minima dolores odit harum id nesciunt libero doloribus beatae eos voluptates dolorem. Commodi non illo rem, eveniet molestias distinctio! Corporis repudiandae provident cum ut amet blanditiis eum exercitationem ipsam numquam nihil porro deleniti aut a impedit cupiditate, nostrum nam? Similique labore, laboriosam ipsam corporis perferendis neque unde mollitia, consectetur blanditiis saepe sequi velit tempore porro corrupti aut maxime molestiae. Ratione quae saepe provident quod asperiores expedita aspernatur atque delectus quo laboriosam necessitatibus quas odit, dolores culpa! Ducimus, ipsa!</p>
        <p className='text-gray-400 text-xs'>Publié le {formatDateToLocal((new Date()).toISOString())}</p>
      </div>
    </div >
  )
}

const Filter = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <div className='flex items-center space-x-2'>
        <div className='h-6 w-6 bg-gray-100 rounded-lg'></div>
        <label className='text-sm font-bold' htmlFor="filter">Filtrer les résultats</label>
        {/* <select id="date" name="date" className="border-2 border-gray-200 p-2 rounded-lg w-full">
              <option value="" disabled>Tous</option>
              <option value="2023-01-01">Janvier 2023</option>
              <option value="2023-02-01">Février 2023</option>
              <option value="2023-03-01">Mars 2023</option>
            </select> */}
      </div>
      <label className='text-sm font-bold px-3 py-1 rounded-full bg-gray-100 cursor-pointer' htmlFor="tous">Tous</label>
      <label className='text-sm px-3 py-1 rounded-full border border-gray-100 cursor-pointer' htmlFor="catechese">Catéchèse</label>
      <label className='text-sm px-3 py-1 rounded-full border border-gray-100 cursor-pointer' htmlFor="diocese">Diocèse</label>
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center gap-2 -translate-y-6'>
      <div className='w-1/2'>
        <input type="text" placeholder="Rechercher un article..."
          className="w-full block flex-1 border border-gray-100 rounded-lg pl-3 pr-14 py-3
        text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
          placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
      </div>
    </div>
  )
}