import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='h-[85vh] w-full overflow-hidden relative bg-gray-100'>
      <Image
        alt="Hero background image"
        src="/assets/img/hero-image-1.png"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
