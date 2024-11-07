import { Link } from '@/i18n/routing'
import React from 'react'

export default function Actualite() {
  return (
    <>
      <div className='px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
        <div className="flex justify-between ">
        </div>
      </div>
      <section className='px-10' >
        <div className='grid grid-cols-6 gap-10 py-8'>
          <div className='h-96 col-span-4 rounded-lg bg-gray-200'></div>
          <div className='h-96 col-span-2 '>
            <h1 className='text-lg font-bold'>Articles relatifs</h1>
            {
              [1, 2, 3, 4].map((item) => (
                <Link key={item} href="#" className='text-blue-600'>
                  <Actualite />
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
