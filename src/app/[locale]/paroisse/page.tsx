
'use client'
import { paroisses } from '@/constants'
import ParoisseItem from '@/components/ui/home/paroisse-item'
import ButtonIcon from '@/components/ui/shared/button-icon'
import React from 'react'

export default function Page() {
    return (
        <>
            <div className='my-10'>
                <div className='flex justify-center items-center gap-2 my-7'>
                    <div className='w-1/2 flex gap-2'>
                        <input type="text" placeholder="Entrez le code postale ou la ville..."
                            className="block flex-1 border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-14 py-2
                                text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                                placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
                        <ButtonIcon
                            title='Prendre ma position'
                            handleClick={() => { }}
                            containerStyle='px-3 py-2 text-xs bg-gray-800 text-white whwhitespace-nowrapite'
                        />
                    </div>
                </div>
                <div className='pl-5 md:pl-10 border-t border-gray-100'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh]'>
                        <div className='col-span-1 flex flex-col gap-3 pb-3 overflow-y-scroll'>
                            <div className='sticky top-0 bg-white z-20 py-3'>
                                <Filter />
                            </div>
                            {
                                [...paroisses, ...paroisses].map((item, index) => (
                                    <ParoisseItem key={index} data={item} />
                                ))
                            }
                        </div>
                        <div className='col-span-2 bg-gray-100 overflow-hidden'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Filter = () => {
    return (
      <div className='flex justify-center items-center gap-2'>
        <div className='flex items-center space-x-2'>
          <div className='h-6 w-6 bg-gray-100 rounded-lg'></div>
          <label className='text-xs font-bold' htmlFor="filter">Filtrer les résultats</label>
        </div>
        <label className='text-xs font-bold px-3 py-1 rounded-full bg-gray-100 cursor-pointer' htmlFor="tous">Tous</label>
        <label className='text-xs px-3 py-1 rounded-full border border-gray-100 cursor-pointer' htmlFor="catechese">En activité</label>
        <label className='text-xs px-3 py-1 rounded-full border border-gray-100 cursor-pointer' htmlFor="diocese">Déjà fermé</label>
      </div>
    )
  }
