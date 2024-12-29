import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const date = new Date()
  return (
    <footer className='py-10 md:pt-20 bg-[#231517] text-[#B5B5B5]'>
      <div className='container max-margin py-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 '>
        <div className='space-y-3'>
          <div className='relative h-12 w-[100px] xl:h-16 xl:w-[150px] overflow-hidden'>
            <Image
              alt="Logo du diocèse de moncton"
              src="/brand-logo-1.png"
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>
          <p className='body-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora explicabo fugiat corporis.</p>
        </div>
        <div className='space-y-4'>
          <h2 className='font-medium md:text-sm xl:text-base text-white uppercase'>Actualités</h2>
          <ul className='space-y-4 body-3'>
            <li>Nouvelles diocésaines</li>
            <li>Evènements à venir</li>
            <li>Archives</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-medium md:text-sm xl:text-base text-white uppercase'>Paroisse</h2>
          <ul className='space-y-4 body-3'>
            <li>Touver une Paroisse</li>
            <li>Horaires des messes</li>
            <li>Equipe paroissiale</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-medium md:text-sm xl:text-base text-white uppercase'>Ressources</h2>
          <ul className='space-y-4 body-3'>
            <li>Prières</li>
            <li>Textes réligieux</li>
            <li>Formations</li>
            <li>Documents officiels</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-medium md:text-sm xl:text-base text-white uppercase'>A propos</h2>
          <ul className='space-y-4 body-3'>
            <li>Notre histoire</li>
            <li>Missions et valeurs</li>
            <li>Le Clergé</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-medium md:text-sm xl:text-base text-white uppercase'>Contacts</h2>
          <ul className='space-y-4 body-3'>
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
      <div className='container max-margin py-0 mt-10 flex flex-col md:flex-row md:justify-between gap-5 md:gap-3 '>
        <p className='order-1 md:order-2 pt-1 body-3 text-center md:text-left'>© {date.getFullYear()} Diocèse Moncton - Tous droits reservés</p>
        <div className='order-2 md:order-1 flex justify-center items-center gap-4 lg:gap-6'>
          <FacebookIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          <TwitterIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          <InstagramIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          <YoutubeIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </div>
      </div>

    </footer>
  )
}
