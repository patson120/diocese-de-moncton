'use client'

import { formatDateToLocal } from '@/_lib/utils'
import ActionGrace from '@/components/ui/shared/ActionGrace'
import { Button } from '@/components/ui/shared/button'
import { news } from '@/constants'
import { Plus, Search } from "lucide-react"
import Image from 'next/image'
import { useState } from 'react'

export default function Page() {
  const [selectedHour, setSelectedHour] = useState<any>({})
  const [hours, setHours] = useState([
    {
      id: 1,
      hour: '09h00',
      items: [
        {
          id: 1,
          title: 'Dieppe (Ste-Thérèse de l’Enfant-Jésus)',
        },
        {
          id: 2,
          title: 'Rich.-Village (St-Antoine-de-Padoue)',
        }
      ]
    },
    {
      id: 2,
      hour: '09h15',
      items: []
    },
    {
      id: 3,
      hour: '09h30',
      items: [
        {
          id: 3,
          title: 'Dieppe (Ste-Thérèse de l’Enfant-Jésus)',
        },
        {
          id: 4,
          title: 'Rich.-Village (St-Antoine-de-Padoue)',
        }
      ]
    },
    {
      id: 4,
      hour: '10h30',
      items: []
    },
    {
      id: 5,
      hour: '11h00',
      items: []
    },
    {
      id: 6,
      hour: '18h00',
      items: []
    },
    {
      id: 7,
      hour: '18h30',
      items: []
    }
  ])
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
          <div className='container max-margin py-0 w-full px-4 md:px-0 md:w-1/2 md:space-y-3'>
            <h1 className='heading-1 text-center text-white font-extrabold'>Horaires des messes</h1>
            <p className='body-2 text-center text-white'>Consultez l'horaire des messes pour chaque jour de la semaine !</p>
          </div>
        </div>
      </section>
      <div className='container max-margin py-0 -translate-y-2'>
        {/* Search bar */}
        <SearchBar />
      </div>
      <section className='container max-margin py-0 pb-10 md:pb-20'>

        <div className='mt-6 lg:mt-12'></div>
        {/* filter */}
        <Filter />

        <div className="mt-8 lg:mt-16 flex flex-col justify-center items-center">
          <div className='w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4'>
            {
              hours.map((item, index) => (
                <div key={item.id}>
                  <div className={`${selectedHour.id === item.id ? 'bg-[#F9F4F5]' : ''} rounded-[8px] h-12 border border-[#D9D9D9] p-3 flex justify-between items-center`}>
                    <h1 className='body-1 font-bold'>{item.hour}</h1>
                    <div>
                      {
                        (selectedHour.id !== item.id) &&
                        <Button onClick={() => { setSelectedHour(item) }}
                          size='sm'
                          variant='ghost'
                          className="pr-0">
                          Voir
                          <Plus className="ml-2 h-4 w-6" />
                        </Button>
                      }
                      {
                        (selectedHour.id === item.id) &&
                        <Button onClick={() => { setSelectedHour({}) }}
                          size='sm'
                          variant='ghost'
                          className="pr-0">
                          Fermer
                          <Plus className="ml-2 h-4 w-6 rotate-45" />
                        </Button>
                      }

                    </div>
                  </div>
                  {
                    ((selectedHour.id === item.id) && (selectedHour?.items.length > 0) ) &&
                    <ul className='my-3 ml-8 space-y-2'>
                      {
                        item.items.map((item, index) => (
                          <li key={index} className='list-disc'>
                            {item.title}
                          </li>
                        ))
                      }
                    </ul>
                  }
                </div>
              ))
            }
          </div>
        </div>

      </section>
      {/* Action de grace */}
      <ActionGrace />
    </main>
  )
}


const Filter = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-4'>
      <div className='flex items-center flex-wrap gap-2'>
        <label className='text-sm font-bold p-[10px] rounded-xl bg-[#1D0104] text-white cursor-pointer' htmlFor="dimanche">Dimanche</label>
        <label className='text-sm p-[10px] rounded-xl bg-[#F5F5F5] cursor-pointer' htmlFor="lundi">Lundi</label>
        <label className='text-sm p-[10px] rounded-xl bg-[#F5F5F5] cursor-pointer' htmlFor="mardi">Mardi</label>
        <label className='text-sm p-[10px] rounded-xl bg-[#F5F5F5] cursor-pointer' htmlFor="mercredi">Mercredi</label>
        <label className='text-sm p-[10px] rounded-xl bg-[#F5F5F5] cursor-pointer' htmlFor="jeudi">Jeudi</label>
        <label className='text-sm p-[10px] rounded-xl bg-[#F5F5F5] cursor-pointer' htmlFor="vendredi">Vendredi</label>
        <label className='text-sm p-[10px] rounded-xl bg-[#F5F5F5] cursor-pointer' htmlFor="samedi">Samedi</label>
      </div>
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center -translate-y-6'>
      <div className='w-full md:w-3/4 lg:w-1/2 relative'>
        <input type="text" placeholder="Rechercher un article..."
          className="w-full block flex-1 border border-gray-100 rounded-lg pl-3 pr-14 py-3
        text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
          placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
        <Search className="h-7 w-7 text-gray-300 absolute top-3 right-4 cursor-pointer" />
      </div>
    </div>
  )
}