'use client'
import { fetchHoraireMesse } from '@/_lib/data'
import ActionGrace from '@/components/ui/shared/ActionGrace'
import { HoraireMesse } from '@/types'
import { Search } from "lucide-react"
import Image from 'next/image'
import HorairesSection from './HorairesSection'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Page() {
  const [horaires, setHoraires] = useState<HoraireMesse[]>([])
  const t = useTranslations("horaires_messe")

  const getHoraireMesses = async () => {
    const response: HoraireMesse[] = await fetchHoraireMesse()
    setHoraires(response)
  }

  useEffect(() => {
    getHoraireMesses()
  }, [])

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
            <h1 className='heading-1 text-center text-white font-extrabold'>{t("hero_titre")}</h1>
            <p className='body-2 text-center text-white'>{t("hero_desc")}</p>
          </div>
        </div>
      </section>
      <div className='container max-margin py-0 -translate-y-2'>
        {/* Search bar */}
        <SearchBar />
      </div>
      <section className='container max-margin py-0 pb-10 md:pb-20'>

        <div className='mt-6 lg:mt-12'></div>
         <HorairesSection horaires={horaires} />
      </section>
      {/* Action de grace */}
      <ActionGrace />
    </main>
  )
}



const SearchBar = () => {
  const t = useTranslations("horaires_messe")
  return (
    <div className='flex justify-center items-center -translate-y-6'>
      <div className='w-full md:w-3/4 lg:w-1/2 relative'>
        <input type="text" placeholder={t("rechercher_paroisse")}
          className="w-full block flex-1 border border-gray-100 rounded-lg pl-3 pr-14 py-3
        text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
          placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
        <Search className="h-7 w-7 text-gray-300 absolute top-3 right-4 cursor-pointer" />
      </div>
    </div>
  )
}