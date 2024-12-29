'use client'
import { HeroSection } from "@/components/sections/hero";
import { Button } from "@/components/ui/shared/button";
import EventItem from "@/components/ui/home/event-item";
import ParoisseItem from "@/components/ui/home/paroisse-item";
import Actualite from "@/components/ui/shared/actualite";
import { events, news, paroisses } from "@/constants";
import { Link } from "@/i18n/routing";
import { ArrowRight, MapPin, Search } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ActionGrace from "@/components/ui/shared/ActionGrace";


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
      {/*  */}
      <div className='container max-margin md:hidden w-full my-[40px]'>
        <div className="bg-[#F9F4F5] rounded-xl overflow-hidden">
          <div className='relative h-72 w-full bg-white overflow-hidden'>
            <Image
              alt="Submenu banner"
              src="/assets/img/submenu-banner.png"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="p-5">
            <h3 className='body-1 font-bold mt-2'>Horaires des messes</h3>
            <p className='body-3 text-gray-500 mt-2 mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus adipisci sed dicta est veritatis alias.</p>
            <Button className='w-full body-2 xl:text-xl' onClick={() => { }}>
              Voir les horaires
            </Button>
          </div>
        </div>
      </div>
      <div className="container md:px- md:py-10 max-margin">
        <div className="mb-3 flex justify-between items-center">
          <h1 className="heading-3">Actualités</h1>
          <Link href="/actualite">
            <Button variant='ghost' onClick={() => { }} className="body-3 font-semibold p-0 hover:bg-transparent">
              Voir toute l’actualité
              <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-scroll pb-6">
          {
            news.map((item, index) => (
              <Link key={index} href="/actualite/1" className='min-w-[280px] md:min-w-[308px]'>
                <Actualite data={item} />
              </Link>
            ))
          }
        </div>
        <div className="mt-10 lg:mt-20" />
        <div className="mb-3 flex justify-between items-center">
          <h1 className="heading-3">Nos évènements</h1>
          <Link href='/evenement' className="hidden md:block" >
            <Button variant='ghost' onClick={() => { router.push('/evenement') }} className="body-3 font-semibold p-0 hover:bg-transparent">
              Voir tous les évènements
              <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
            </Button>
          </Link>
        </div>
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            events.map((item, index) => (
              <Link key={index} href="/evenement/1" className=''>
                <EventItem data={item} />
              </Link>
            ))
          }
        </section>
        <Link href='/evenement' className="block md:hidden mt-5" >
          <Button onClick={() => { }} className="w-full md:py-6 text-sm md:text-base lg:text-xl">
            Voir tous les évènements
            <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
          </Button>
        </Link>

        <div className="mt-10 lg:mt-20" />
        <h1 className="heading-3 mb-3">Trouver une paroisse</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12">
          <div className="h-96 md:h-auto col-span-3 md:col-span-2 rounded-2xl overflow-hidden bg-gray-50 relative">
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
                  <MapPin className="mr-2 h-4 w-4 text-white" />
                  Prendre ma position
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-4 lg:gap-5">
            {
              paroisses.map((item, index) => (
                <Link key={index} href="/paroisse/1">
                  <ParoisseItem data={item} />
                </Link>
              ))
            }
            <Link href="/paroisse">
              <Button onClick={() => { }} className="w-full md:py-6 text-sm md:text-base lg:text-xl">
                Voir toutes les 23 paroisses
                <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
              </Button>
            </Link>
          </div>
        </section>
        <div className="md:mt-16" />
      </div>

      <section className='py-10 md:py-20 bg-yellow100'>
        <div className='container max-margin py-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12'>
          <div className='order-1 md:order-last md:col-span-2 rounded-2xl bg-yellowColor px-5 md:px-14 py-5 md:py-8 flex flex-col gap-4 md:gap-6 xl:gap-10'>
            <div className="space-y-1 lg:space-y-2">
              <span className='heading-3 font-extrabold'>Message de l&lsquo;Archevêque</span>
              <h1 className='heading-5'>“ Décret de suppression de la paroisse Saint-Timothée de Shemogue ”</h1>
            </div>
            <p className='body-2'>A tous ceux et celles qui liront les présentes, Graces et bénédictions dans le Seigneur.<br /> <br />
              CONSIDERANT que le code de droit canonique donne à l’évêque diocésain le pouvoir d’ériger, supprimer ou de modifier les paroisses, après avoir entendu le conseil presbtéral et ce conformément au canon 515<br /> <br />
              CONSIDERANT que la paroisse saint-Timothée de Shemogue a été érigée canoniquement... </p>

            <div className='flex flex-col md:flex-row space-y-3 md:space-x-2 md:space-y-0'>
              <Link href="/messages/1" className="">
                <Button
                  variant="outline"
                  onClick={() => { }}
                  className='font-bold w-full'
                >En savoir plus</Button>
              </Link>
              <Link href="/messages">
                <Button
                  variant="outline"
                  onClick={() => { }}
                  className='w-full bg-transparent hover:bg-transparent border-black font-bold'
                >Voir tous les messages</Button>
              </Link>
            </div>
          </div>
          <div className='md:order-last min-h-80 md:h-auto md:col-span-1 relative rounded-2xl overflow-hidden bg-gray-200'>
            <Image
              alt="Image de la l'archevèque"
              src="/assets/img/image.png"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
            <div className="absolute inset-0 bg-black/40 md:bg-black/30 " />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="p-4">
                <h3 className="text-white body-1 font-semibold">Mgr Guy Desrochers</h3>
                <p className=" text-white body-2">Archevêque du diocèse de Moncton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action de grace */}
      <ActionGrace />
    </main>
  );
}
