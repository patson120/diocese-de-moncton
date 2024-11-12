import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='px-5 md:px-10 py-10 md:py-20 w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 '>
        <div className='space-y-3'>
          <div className='relative h-20 rounded-xl overflow-hidden bg-gray-100'>
            <Image
              alt="Logo du diocèse de moncton"
              src="/logo_diomoncton.png"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora explicabo fugiat corporis.</p>
        </div>
        <div className='text-black space-y-4'>
          <h2 className='font-medium text-sm text-gray-400 uppercase'>Actualités</h2>
          <ul className='space-y-4 text-xs text-gray-500'>
            <li>Nouvelles diocésaines</li>
            <li>Evènements à venir</li>
            <li>Archives</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium text-sm text-gray-400 uppercase'>Paroisse</h2>
          <ul className='space-y-4 text-xs text-gray-500'>
            <li>Touver une Paroisse</li>
            <li>Horaires des messes</li>
            <li>Equipe paroissiale</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium text-sm text-gray-400 uppercase'>Ressources</h2>
          <ul className='space-y-4 text-xs text-gray-500'>
            <li>Prières</li>
            <li>Textes réligieux</li>
            <li>Formations</li>
            <li>Documents officiels</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium text-sm text-gray-400 uppercase'>A propos</h2>
          <ul className='space-y-4 text-xs text-gray-500'>
            <li>Notre histoire</li>
            <li>Missions et valeurs</li>
            <li>Le Clergé</li>
          </ul>
        </div>

        <div className='text-black space-y-4'>
          <h2 className='font-medium text-sm text-gray-400 uppercase'>Contacts</h2>
          <ul className='space-y-4 text-xs text-gray-500'>
            <li>
              <Link href="https://www.google.com/maps/place/224+Rue+St.+George,+Moncton,+NB+E1C+5J4,+Canada/@46.090801,-64.781807,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca0b93b01f859a1:0xd74f8270dc13186e!8m2!3d46.090801!4d-64.781807!16s%2Fg%2F11c3q4b2z7?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">224 St-George, Moncton, NB. E1C 0V1</Link>
            </li>
            <li>
              <Link href="tel:+(506)857-9531">Tél: (506) 857-9531</Link>
            </li>
            <li>
              <Link href="mailto:webmestre@diocesemoncton.ca">webmestre@diocesemoncton.ca</Link>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}
