import { Link } from '@/i18n/routing'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const date = new Date()
  return (
    <footer className='bg-[#231517] '>
      <div className='py-10 md:pt-20'>
        <div className='container max-margin py-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-8 md:gap-y-0 '>
          <div className='space-y-3 col-span-full md:col-span-1 pb-4 md:pb-0'>
            <div className='relative h-14 w-[150px] md:h-12 md:w-[100px] xl:h-16 xl:w-[150px] overflow-hidden'>
              <Image
                alt="Logo du diocèse de moncton"
                src="/brand-logo-1.png"
                fill
                style={{
                  objectFit: 'contain'
                }}
              />
            </div>
            <p className='body-3 text-[#B5B5B5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora explicabo fugiat corporis.</p>
          </div>
          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>Actualités</h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li className='text-[#B5B5B5]'>Nouvelles diocésaines</li>
              <li className='text-[#B5B5B5]'>
                <Link href="/evenements">Evènements à venir</Link>
              </li>
              <li className='text-[#B5B5B5]'>Archives</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>Paroisse</h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li className='text-[#B5B5B5]'>
                <Link href="/paroisses">Touver une Paroisse</Link>
              </li>
              <li className='text-[#B5B5B5]'>
                <Link href="/horaires-messes">Horaires des messes</Link>
              </li>
              <li className='text-[#B5B5B5]'>Equipe paroissiale</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>Ressources</h2>
            <ul className='space-y-2 lg:space-y-4 body-3 '>
              <li className='text-[#B5B5B5]'>Prières</li>
              <li className='text-[#B5B5B5]'>Textes réligieux</li>
              <li className='text-[#B5B5B5]'>Formations</li>
              <li className='text-[#B5B5B5]'>Documents officiels</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>A propos</h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li className='text-[#B5B5B5]'>Notre histoire</li>
              <li className='text-[#B5B5B5]'>Missions et valeurs</li>

              <li className='text-[#B5B5B5]'>
                <Link href="/clerges">Le Clergé</Link>
              </li>

            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>Contacts</h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li>
                <Link className='text-[#B5B5B5]' href="https://www.google.com/maps/place/224+Rue+St.+George,+Moncton,+NB+E1C+5J4,+Canada/@46.090801,-64.781807,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca0b93b01f859a1:0xd74f8270dc13186e!8m2!3d46.090801!4d-64.781807!16s%2Fg%2F11c3q4b2z7?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">224 St-George, Moncton, NB. E1C 0V1</Link>
              </li>
              <li>
                <Link className='text-[#B5B5B5]' href="tel:+(506)857-9531">Tél: (506) 857-9531</Link>
              </li>
              <li>
                <Link className='break-words text-[#B5B5B5]' href="mailto:webmestre@diocesemoncton.ca">webmestre@diocesemoncton.ca</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-[#190F10]'>
        <div className='container max-margin py-6  flex flex-col md:flex-row md:justify-between gap-5 md:gap-3'>
          <p className='order-1 md:order-2 pt-1 body-3 text-center md:text-left text-[#B5B5B5]'>© {date.getFullYear()} Diocèse Moncton - Tous droits reservés</p>
          <div className='md:order-2  flex justify-center items-center gap-4 lg:gap-6'>
            <FacebookIcon className="h-4 w-4 md:h-6 md:w-6 text-[#B5B5B5]" />
            <TwitterIcon className="h-4 w-4 md:h-6 md:w-6 text-[#B5B5B5]" />
            <InstagramIcon className="h-4 w-4 md:h-6 md:w-6 text-[#B5B5B5]" />
            <YoutubeIcon className="h-4 w-4 md:h-6 md:w-6 text-[#B5B5B5]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
