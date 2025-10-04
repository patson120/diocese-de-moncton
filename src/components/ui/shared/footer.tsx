import Text from '@/components/Text'
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
            <div className='h-14 w-[150px] md:h-12 md:w-[100px] xl:h-16 xl:w-[150px] overflow-hidden'>
              <div className='relative h-10 xl:h-full w-[70px]'>
                <Image
                  alt="Logo du diocèse de moncton"
                  src="/logo-black.png"
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            <p className='body-3 text-[#B5B5B5]'>
              <Text className='text-inherit' keyString='footer_site_description' />
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>
              <Text className='text-inherit' keyString='news' />
            </h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li className='text-[#B5B5B5]'>
                <Text className='text-inherit' keyString='nouvelles_diocesaines' />
              </li>
              <li className='text-[#B5B5B5]'>
                <Link href="/evenements">
                  <Text className='text-inherit' keyString='evenements_venir' />
                </Link>
              </li>
              <li className='text-[#B5B5B5]'>Archives</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>
              <Text className='text-inherit' keyString='paroisse' />
            </h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li className='text-[#B5B5B5]'>
                <Link href="/paroisses">
                  <Text className='text-inherit' keyString='trouver_paroisse' />
                </Link>
              </li>
              <li className='text-[#B5B5B5]'>
                <Link href="/horaires-messes">
                  <Text className='text-inherit' keyString='horaires_messe' />
                </Link>
              </li>
              <li className='text-[#B5B5B5]'>
                <Link href="/clerges">
                  <Text className='text-inherit' keyString='equipe_paroissiale' />
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>
                <Text className='text-inherit' keyString='ressources' />
            </h2>
            <ul className='space-y-2 lg:space-y-4 body-3 '>
              <li className='text-[#B5B5B5]'>
                <Text className='text-inherit' keyString='prieres' />
              </li>
              <li className='text-[#B5B5B5]'>
                <Text className='text-inherit' keyString='textes_religieux' />
              </li>
              <li className='text-[#B5B5B5]'>
                <Text className='text-inherit' keyString='formations' />
              </li>
              <li className='text-[#B5B5B5]'>
                <Link href="/bulletins">
                  <Text className='text-inherit' keyString='documents_officiels' />
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-medium text-xs md:text-sm xl:text-base text-white uppercase'>
              <Text className='text-inherit' keyString='a_propos' />
            </h2>
            <ul className='space-y-2 lg:space-y-4 body-3'>
              <li className='text-[#B5B5B5]'>
                <Link href="/histoire">
                  <Text className='text-inherit' keyString='footer_notre_histoire' />
                </Link>
              </li>
              <li className='text-[#B5B5B5]'>
                <Text className='text-inherit' keyString='missions_valeurs' />
              </li>
              <li className='text-[#B5B5B5]'>
                <Link href="/clerges">
                  <Text className='text-inherit' keyString='clerge' />
                </Link>
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
                <Link className='text-[#B5B5B5]' href="tel:+(506)857-9531"><Text className='text-inherit' keyString='phone' />: (506) 857-9531</Link>
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
          <div className='order-1 md:order-2 pt-1 '>
            <p className='body-3 text-center md:text-left text-[#B5B5B5]'>© {date.getFullYear()} <Text className='text-inherit' keyString='droit_reserver' /></p>
            <p className='body-3 text-center md:text-left text-[#B5B5B5] text-xs'>
              <Text className='text-inherit' keyString='developper_par' />
              <a href="http://www.linkedin.com/in/hadriengayap/" target="_blank" rel="noopener noreferrer"> Acadie Intelligent Inc.</a> E-mail: <a href="mailto:hadrien.gayap@acadieintelligent.ca">hadrien.gayap@acadieintelligent.ca</a> </p>
          </div>
          <div className='md:order-2  flex justify-center items-center gap-4 lg:gap-6'>
            <FacebookIcon className="h-4 w-4 md:h-6 md:w-6 !text-[#B5B5B5]" />
            <TwitterIcon className="h-4 w-4 md:h-6 md:w-6 !text-[#B5B5B5]" />
            <InstagramIcon className="h-4 w-4 md:h-6 md:w-6 !text-[#B5B5B5]" />
            <YoutubeIcon className="h-4 w-4 md:h-6 md:w-6 !text-[#B5B5B5]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
