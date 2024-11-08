
import { Link } from '@/i18n/routing'
import Actualite from '@/ui/shared/actualite'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <main>
      {/* Hero section */}
      <section className='h-[50vh] w-full relative bg-gray-200'>
        {/* Hero image */}
        {/* <Image
            alt="Image de la l'actualité"
            src="/assets/img/campost.jpg"
            fill
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }}
          /> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start pt-10 bg-black bg-opacity-40'>
          <h1 className='w-1/2 text-white text-center font-extrabold text-xl md:text-3xl lg:text-5xl'>Découvrez toute notre actualité</h1>
        </div>
      </section>
      <section className='px-5 md:px-10 py-8'>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Link key={item} href="/actualite/1" className='text-blue-600'>
                <Actualite />
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
