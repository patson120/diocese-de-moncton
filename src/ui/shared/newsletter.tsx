import React from 'react'
import Button from './button'

export default function Newsletter() {
  return (
    <section className='px-5 md:px-10 py-10 md:py-20 w-full bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-between gap-3'>
          <div className='text-black'>
            <h3 className='text-xl font-bold'>Newsletter</h3>
            <p className='text-gray-500 text-sm'>Abonnez-vous à notre newsletter pour obtenir les <br />nouveautés sur l&lsquo;église.</p>
          </div>
          <div className='flex items-center space-x-2'>
            <input type="email" placeholder="Adresse email" className="border-2 border-gray-200 p-2 rounded-lg w-full" />
            <Button
              title="Je m&lsquo;abonne"
              handleClick={() => { }}
              containerStyle="px-6 text-medium bg-primary text-white"
            />
          </div>
        </div>
      </section>
  )
}
