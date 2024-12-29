'use client';

import { Button } from '@/components/ui/shared/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: './assets/img/image 2.png',
    title: "Bienvenue à l'archidiocèse de Moncton",
    description: 'Découvrez nos paroisses, participez à nos événements, et explorez notre riche héritage spirituel.',
    cta: [
      { text: 'Trouver une paroisse', href: '/paroisses' },
      { text: 'Voir nos évènements', href: '/evenements' }
    ]
  },
  {
    image: './assets/img/hero-image-2.png',
    title: 'Trouvez une paroisse près de chez vous',
    description: 'Notre diocèse possède environ une vingtaine de paroisse partout à Moncton, trouvez la votre.',
    cta: [{ text: 'Trouver une paroisser', href: '/paroisses' }]
  },
  {
    image: './assets/img/hero-image-1.png',
    title: 'Participez à nos activités',
    description: 'Découvrez nos paroisses, participez à nos événements, et explorez notre riche héritage spirituel.',
    cta: [{ text: 'Voir nos évènements', href: '/evenements' }]
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {
        slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40">
              <div className='container max-margin py-0 h-full flex flex-col justify-center items-center'>
                <div className='w-full h-full my-16 flex flex-col justify-between' >
                  <div className=' md:hidden' />
                  <div className="w-full md:w-3/4 flex flex-col justify-between">
                    <div className="w-full md:w-3/4 flex flex-col gap-3 md:gap-0">
                      <p className='legend text-white'>Réjoinez-nous dans notre mission spirituelle</p>
                      <h1 className="heading-1 font-extrabold text-white">
                        {slide.title}
                      </h1>
                      <p className="body-1 text-white my-4">{slide.description}</p>
                      <div className='flex flex-col md:flex-row gap-3 md:gap-2'>
                        {
                          slide.cta.map((cta, index) => (
                            <Button key={index} variant={`${index === 0 ? 'default' : 'outline'}`}
                              size="sm"
                              className={`md:mt-8 ${index === 0 ? '' : 'text-black'} hover:bg-primary/90`}
                              asChild
                            >
                              <a href={cta.href}>{cta.text}</a>
                            </Button>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex flex-row justify-between'>
                    <div className='flex space-x-4'>
                      <div className='h-24 w-24 shrink-0 relative rounded-md overflow-hidden'>
                        <Image
                          src="./assets/img/image.png"
                          alt="Photo de l&lsquo;évêque"
                          fill
                          style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>
                      <div className='space-y-2 w-2/3'>
                        <h5 className='text-xs text-white font-extrabold'>Message de l&lsquo;évêque</h5>
                        <p className='body-3 text-gray-200 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis neque voluptatibus esse dolorum enim quo non. Ea, vel! Minus.</p>
                        <h5 className='text-[11px] text-white font-extrabold'>Mgr Guy Desrochers</h5>
                      </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                      <div className="flex space-x-1">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                              }`}
                            onClick={() => setCurrentSlide(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute border-2 border-red-500 inset-0 flex flex-col justify-between pt-20 container md:px-0 ">
              <div className="text-white w-1/2">
                <p className='text-white text-[10px] font-garamond'>Réjoinez-nous dans notre mission spirituelle</p>
                <h1 className="font-garamond text-xl font-bold md:text-3xl">
                  {slide.title}
                </h1>
                <p className="mt-4 text-xs md:text-sm">{slide.description}</p>
                <div className='flex space-x-2'>
                  {
                    slide.cta.map((cta, index) => (
                      <Button key={index} variant={`${index === 0 ? 'default' : 'outline'}`}
                        size="sm"
                        className={`mt-8 ${index === 0 ? '' : 'text-black'} hover:bg-primary/90`}
                        asChild
                      >
                        <a href={cta.href}>{cta.text}</a>
                      </Button>
                    ))
                  }
                </div>
              </div>

              <div className='mb-10'>
                <div className='flex space-x-4 w-1/3'>
                  <div className='h-24 w-24 shrink-0 relative rounded-md overflow-hidden'>
                    <Image
                      src="./assets/img/image.png"
                      alt="Logo Archidiocèse de Moncton"
                      fill
                      style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                  <div className='space-y-3 py-2'>
                    <p className='text-[10px] text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis neque voluptatibus esse dolorum enim quo non. Ea, vel! Minus.</p>
                    <h5 className='text-[11px] text-white font-bold'>Mgr Guy Desrochers</h5>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button> */}
    </div>
  );
}