'use client'
import MessageArcheveque from "@/components/message-archeveque";
import RecentActualites from "@/components/recentActualites";
import RecentEvents from "@/components/recentEvents";
import RecentParoisses from "@/components/recentParoisses";
import { HeroSection } from "@/components/sections/hero";
import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Button } from "@/components/ui/shared/button";
import { ActualitesSkeleton, EventItemSkeleton, MessageArchevequeSkeleton, ParoisseItemSkeleton } from "@/components/ui/shared/skeletons";
import { Link } from "@/i18n/routing";
import { ArrowRight, MapPin, Search } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";


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
      <div className='container max-margin md:hidden w-full sm:my-[30px]'>
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
            <p className='body-3 text-gray-500 mt-2 mb-8'>Découvrez les horaires des messes dans votre paroisse.</p>
            <Link href="/horaires-messes">
              <Button className='w-full body-2 xl:text-xl' onClick={() => { }}>
                Voir les horaires
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-margin py-0">
        <div className="vertical-margin">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="heading-3">Actualités</h1>
            <Link href="/actualites">
              <Button variant='ghost' onClick={() => { }} className="body-3 font-semibold p-0 hover:bg-transparent">
                <span className="hidden md:block whitespace-nowrap">Voir toute l’actualité</span>
                <span className="md:hidden">Voir plus</span>
                <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
              </Button>
            </Link>
          </div>

          <Suspense fallback={< ActualitesSkeleton items={4} />}>
            <RecentActualites />
          </Suspense>

        </div>
        {/* <div className="mt-10 lg:mt-20"/> */}
        <div className="mb-3 flex justify-between items-center">
          <h1 className="heading-3">Nos évènements</h1>
          <Link href='/evenements' className="hidden md:block" >
            <Button variant='ghost' onClick={() => { router.push('/evenement') }} className="body-3 font-semibold p-0 hover:bg-transparent">
              Voir tous les évènements
              <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
            </Button>
          </Link>
        </div>

        <Suspense fallback={
          <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <EventItemSkeleton />
            <EventItemSkeleton />
            <EventItemSkeleton />
          </section>
        }>
          <RecentEvents />
        </Suspense>

        <Link href='/evenements' className="block md:hidden mt-5" >
          <Button onClick={() => { }} className="w-full md:py-6 text-sm md:text-base lg:text-xl">
            Voir tous les évènements
            <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
          </Button>
        </Link>

        <div className="vertical-margin" >
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
                  <Button variant="secondary" className='bg-[#1D0104] text-[12px] text-white hover:bg-[#230105]' onClick={() => { }}>
                    <MapPin className="md:mr-2 h-4 w-4 text-white" />
                    <span className='hidden md:flex !text-white'>Prendre ma position</span>
                  </Button>
                </div>
              </div>
            </div>

            <Suspense fallback={
              <section className="col-span-3 md:col-span-1 flex flex-col gap-4">
                {
                  [1, 2, 3, 4, 5].map(i => <ParoisseItemSkeleton key={i} />)
                }
              </section>
            }>
              <RecentParoisses />
            </Suspense>
          </section>
        </ div>
      </div>

      <Suspense fallback={ <MessageArchevequeSkeleton />}>
        <MessageArcheveque />
      </Suspense>

      {/* Action de grace */}
      <ActionGrace />
    </main>
  );
}
