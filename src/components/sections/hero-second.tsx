'use client';

import Image from 'next/image';

export function HeroSectionSecond({
  title,
  subtitle,
  image,
} : {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className='h-[35vh] md:h-[50vh] w-full relative bg-gray-200'>
      {/* Hero image */}
      <Image
        alt="hero section background image"
        src={image}
        fill
        style={{
          objectFit: 'cover',
          height: '100%',
          width: '100%'
        }}
      />
      <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
        <div className='container max-margin py-0 w-full h-full flex flex-col justify-center items-center'>
          <h1 className='heading-2 text-center text-white font-extrabold'>{title}</h1>
          <p className='body-2 text-center text-white mt-3'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}