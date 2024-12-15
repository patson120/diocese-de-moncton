'use client'
import { HeroSection } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import EventItem from "@/components/ui/home/event-item";
import ParoisseItem from "@/components/ui/home/paroisse-item";
import Actualite from "@/components/ui/shared/actualite";
import { events, news, paroisses } from "@/constants";
import { Link } from "@/i18n/routing";
import { ArrowRight, Locate, Search } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false });

const parishes = [
  {
    id: 1,
    name: "Cathédrale Notre-Dame de l'Assomption",
    address: '220 St George St, Moncton, NB E1C 1V8',
    phone: '+1 506-857-4223',
    email: 'cathedrale@diocesemoncton.ca',
    website: 'https://www.cathedralemoncton.ca',
    location: { lat: 46.0878, lng: -64.7782 }
  },
  {
    id: 2,
    name: 'Église Saint-Anselme',
    address: '1014 Rue Amirault, Dieppe, NB E1A 1C9',
    phone: '+1 506-382-8018',
    email: 'stanselme@diocesemoncton.ca',
    website: 'https://www.paroissestanselme.ca',
    location: { lat: 46.0978, lng: -64.7482 }
  }
];

export default function Home() {
  // const t = useTranslations("Index") 
  const router = useRouter()

  const [selectedParish, setSelectedParish] = useState<any>(null);
  return (
    <main className="bg-white">
      <HeroSection />
      <div className="md:py-10 container md:px-0">
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-lg md:text-3xl text-black">Actualités</h1>
          <Link href="/actualite">
            <Button variant='ghost' onClick={() => { }} className="p-0 text-xs hover:bg-transparent">
              Voir plus
              <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            news.map((item, index) => (
              <Link key={index} href="/actualite/1" className='text-blue-600'>
                <Actualite data={item} />
              </Link>
            ))
          }
        </div>
        <div className="mt-20" />
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-lg md:text-3xl text-black">Nos évènements</h1>
          <Link href='/evenement' >
            <Button variant='ghost' onClick={() => { router.push('/evenement') }} className="p-0 text-xs hover:bg-transparent">
              Voir plus
              <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
            </Button>
          </Link>
        </div>
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {
            events.map((item, index) => (
              <Link key={index} href="/evenement/1" className='text-blue-600'>
                <EventItem data={item} />
              </Link>
            ))
          }
        </section>

        <div className="mt-20" />
        <h1 className="font-bold text-lg md:text-3xl text-black mb-3">Trouver une paroisse</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-96 md:h-auto col-span-3 md:col-span-2 rounded-lg overflow-hidden bg-gray-100 relative">
            <Map
              parishes={parishes}
              selectedParish={selectedParish}
              onParishSelect={setSelectedParish}
            />
            <div className='w-full absolute top-4 left-0 right-0'>
              <div className="px-5 w-[95%] flex gap-2">
                <div className='relative flex-1'>
                  <input type="text" placeholder="Entrez le code postale ou la ville..."
                    className="w-full border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-10 py-2
                    text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                    placeholder:text-xs sm:text-sm sm:leading-6 outline-none"/>
                  <Search className="mr-2 h-4 w-4 text-gray-300 absolute top-3 left-3" />
                </div>
                <Button variant="secondary" className='bg-[#230105] text-[12px] text-white hover:bg-[#230105]' onClick={() => { }}>
                  <Locate className="mr-2 h-4 w-4 text-white" />
                  Prendre ma position
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-3">

            {
              paroisses.map((item, index) => (
                <Link key={index} href="/paroisse/1">
                  <ParoisseItem data={item} />
                </Link>
              ))
            }
            <Link href="/paroisse">
              <Button onClick={() => { }} className="w-full ">
                Voir toutes les 23 paroisses
                <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
              </Button>
            </Link>
          </div>
        </section>
        <div className="mt-16" />
      </div>

      <section className='py-10 md:py-20 w-full bg-yellow100 text-black'>
        <div className='container p-0 grid grid-cols-1 md:grid-cols-3 gap:3 md:gap-6'>
          <div className='col-span-full md:col-span-2 rounded-xl bg-yellowColor px-5 md:px-10 py-5 md:py-8'>
            <span className='uppercase text-sm text-gray-600'>Message de l&lsquo;archevêque</span>
            <h1 className='text-lg md:text-2xl font-bold mb-3'>Mise à jour des tarifs diocésains pour les célébrations de funérailles et de mariages.</h1>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae unde harum nulla qui quae ratione. Facilis veniam maiores laboriosam nam sit unde libero officia ratione iure nobis, voluptate autem quos perferendis odit quaerat consequatur voluptatibus! Dolore ipsum earum sunt rerum eos commodi, facere adipisci nesciunt quasi pariatur incidunt, illo cumque! <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cupiditate aspernatur numquam amet quibusdam maxime ea ullam sapiente possimus. Animi, expedita. A, cupiditate consequuntur! Laboriosam quo vero rerum quae animi? Harum itaque libero unde! Pariatur soluta temporibus quaerat id illum.</p>

            <div className='mt-8 flex flex-row space-x-2'>
              <Button
                variant="outline"
                onClick={() => { }}
                className='font-medium'
              >Voir plus</Button>
              <Button
                variant="outline"
                onClick={() => { }}
                className='bg-transparent hover:bg-transparent border-black font-semibold'
              >Voir tous les messages</Button>
            </div>
          </div>
          <div className='col-span-full md:col-span-1 relative rounded-xl overflow-hidden bg-gray-200'>
            <Image
              alt="Image de la l'actualité"
              src="/assets/img/image.png"
              fill
              style={{
                objectFit: 'cover'
              }}
            />

            <div className="absolute bottom-0 left-0 right-0">
              <div className="p-4">
                <h3 className="text-white text-[12px] font-medium">Mgr Guy Desrochers</h3>
                <p className=" text-white text-[9px]">Archevêque du diocèse de Moncton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-20 w-full bg-white'>
        <div className='container p-0 grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden'>
          <div className='h-72 bg-gray-200 relative'>
            <Image
              alt="Faire un don maintenant"
              src="/assets/img/make-gift.png"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <div className='bg-yellow100 px-4 md:px-8 py-10 flex flex-col justify-center items-start text-black space-y-8'>
            <div>
              <h1 className='text-lg md:text-2xl font-bold mb-2'>Soutenez notre mission</h1>
              <p>Contribuez à la vie de notre communauté en faisant un don en ligne. <br />Chaque geste compte!</p>
            </div>
            <div className='flex'>
              <Button onClick={() => { }} className="">
                Faire un don maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
