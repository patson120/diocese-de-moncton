'use client'

import React from 'react'
import Button from './button'

export default function Newsletter() {
  return (
    <section className='py-8 md:py-10 w-full bg-[#FAFAFA]'>
        <div className='container max-margin py-0 flex flex-col md:flex-row justify-between gap-3'>
          <div className='text-black'>
            <h3 className='body-1 font-bold'>Newsletter</h3>
            <p className='text-gray-500 body-2'>Abonnez-vous à notre newsletter pour obtenir les <br />nouveautés sur l&lsquo;église.</p>
          </div>
          <div className='flex flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-2'>
            <input type="email" placeholder="Adresse email" className="border-2 border-gray-200 p-2 rounded-lg w-full" />
            <Button
              title="Je m&lsquo;abonne"
              handleClick={() => { }}
              containerStyle="px-3 md:px-6 rounded-lg py-2 text-sm md:text-base lg:text-xl bg-primary text-white"
            />
          </div>
        </div>
      </section>
  )
}
