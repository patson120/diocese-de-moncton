import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const date = new Date()
  return (
    <footer className='py-10 md:pt-20'>
      <div className='container p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 '>
        <div className='space-y-3'>
          <div className='relative h-12 w-[100px] lg:h-20 lg:w-[180px]  overflow-hidden'>
            <Image
              alt="Logo du diocèse de moncton"
              src="/brand-logo.png"
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>
          <p className='text-xs md:text-sm lg:text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora explicabo fugiat corporis.</p>
        </div>
        <div className='text-black space-y-4'>
          <h2 className='font-medium md:text-sm lg:text-lg text-gray-400 uppercase'>Actualités</h2>
          <ul className='space-y-4 text-xs md:text-sm lg:text-lg text-gray-500'>
            <li>Nouvelles diocésaines</li>
            <li>Evènements à venir</li>
            <li>Archives</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium md:text-sm lg:text-lg text-gray-400 uppercase'>Paroisse</h2>
          <ul className='space-y-4 text-xs md:text-sm lg:text-lg text-gray-500'>
            <li>Touver une Paroisse</li>
            <li>Horaires des messes</li>
            <li>Equipe paroissiale</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium md:text-sm lg:text-lg text-gray-400 uppercase'>Ressources</h2>
          <ul className='space-y-4 text-xs md:text-sm lg:text-lg text-gray-500'>
            <li>Prières</li>
            <li>Textes réligieux</li>
            <li>Formations</li>
            <li>Documents officiels</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium md:text-sm lg:text-lg text-gray-400 uppercase'>A propos</h2>
          <ul className='space-y-4 text-xs md:text-sm lg:text-lg text-gray-500'>
            <li>Notre histoire</li>
            <li>Missions et valeurs</li>
            <li>Le Clergé</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium md:text-sm lg:text-lg text-gray-400 uppercase'>Contacts</h2>
          <ul className='space-y-4 text-xs md:text-sm lg:text-lg text-gray-500'>
            <li>
              <Link href="https://www.google.com/maps/place/224+Rue+St.+George,+Moncton,+NB+E1C+5J4,+Canada/@46.090801,-64.781807,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca0b93b01f859a1:0xd74f8270dc13186e!8m2!3d46.090801!4d-64.781807!16s%2Fg%2F11c3q4b2z7?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">224 St-George, Moncton, NB. E1C 0V1</Link>
            </li>
            <li>
              <Link href="tel:+(506)857-9531">Tél: (506) 857-9531</Link>
            </li>
            <li>
              <Link className='break-words' href="mailto:webmestre@diocesemoncton.ca">webmestre@diocesemoncton.ca</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container px-0 py-0 mt-10  flex flex-col md:flex-row md:justify-between space-y-2 '>
        <p className='text-xs md:text-sm lg:text-lg text-gray-400'>© {date.getFullYear()} Diocèse Moncton - Tous droits reservés</p>
        <div className='flex justify-center items-center gap-4 lg:gap-6'>
          <FacebookIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-gray-600" />
          <TwitterIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-gray-600" />
          <InstagramIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-gray-600" />
          <YoutubeIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-gray-600" />
        </div>
      </div>

    </footer>
  )
}
