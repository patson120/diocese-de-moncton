'use client'
import { events, news, paroisses } from "@/constants";
import { Link } from "@/i18n/routing";
import EventItem from "@/ui/home/event-item";
import Hero from "@/ui/home/hero-section";
import ParoisseItem from "@/ui/home/paroisse-item";
import Actualite from "@/ui/shared/actualite";
import Button from '@/ui/shared/button';
import ButtonIcon from "@/ui/shared/button-icon";
import Image from "next/image";

export default function Home() {
  // const t = useTranslations("Index") 

  return (
    <main className="bg-white">
      {/* <div className="w-20"> <LocalSwitcher /> </div>
      <p className="mt-5">{t('hello')}</p>
      <Link href="/about" className='text-blue-600'>About</Link> */}

      {/* Hero section */}
      <Hero />

      <div className="px-4 md:p-10">
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-lg md:text-3xl text-black">Actualités</h1>
          <Link href="/actualite">
            <ButtonIcon
              title="Voir plus"
              handleClick={() => { }}
              containerStyle="px-3 py-1 font-medium border-none bg-transparent"
            />
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
            <ButtonIcon
              title="Voir plus"
              handleClick={() => console.log("Evènement plus")}
              containerStyle="px-3 py-1 font-medium border-none bg-transparent"
            />
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
          <div className="h-96 md:h-auto col-span-3 md:col-span-2 rounded-lg bg-gray-100"></div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-3">

            {
              paroisses.map((item, index) => (
                <Link key={index} href="/paroisse/1">
                  <ParoisseItem data={item} />
                </Link>
              ))
            }
            <Link href="/paroisse">
              <ButtonIcon
                title="Voir toutes les 23 paroisses"
                handleClick={() => { }}
                containerStyle="px-3 py-2 w-full bg-primary text-white mt-4 text-medium"
              />
            </Link>
          </div>
        </section>
        <div className="mt-16" />
      </div>

      <section className='px-5 md:px-10 py-10 md:py-20 w-full bg-yellow100 text-black'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap:3 md:gap-6'>
          <div className='col-span-full md:col-span-2 rounded-xl bg-yelloColor px-5 md:px-10 py-5 md:py-8'>
            <span className='uppercase text-sm text-gray-600'>Message de l&lsquo;archevêque</span>
            <h1 className='text-lg md:text-2xl font-bold mb-3'>Mise à jour des tarifs diocésains pour les célébrations de funérailles et de mariages.</h1>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae unde harum nulla qui quae ratione. Facilis veniam maiores laboriosam nam sit unde libero officia ratione iure nobis, voluptate autem quos perferendis odit quaerat consequatur voluptatibus! Dolore ipsum earum sunt rerum eos commodi, facere adipisci nesciunt quasi pariatur incidunt, illo cumque! <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cupiditate aspernatur numquam amet quibusdam maxime ea ullam sapiente possimus. Animi, expedita. A, cupiditate consequuntur! Laboriosam quo vero rerum quae animi? Harum itaque libero unde! Pariatur soluta temporibus quaerat id illum.</p>

            <div className='mt-8 flex flex-row space-x-2'>
              <Button
                title='Voir plus'
                handleClick={() => { }}
                containerStyle='bg-white p-2 rounded-lg font-semibold text-xs md:text-normal'
              />
              <Button
                title='Voir tous les messages'
                handleClick={() => { }}
                containerStyle='bg-transparent p-2 rounded-lg border border-black text-xs md:text-normal font-semibold'
              />
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

      <section className='px-5 md:px-10 py-10 md:py-20 w-full bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden'>
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
              <Button
                title="Faire un don maintenant"
                handleClick={() => { }}
                containerStyle="px-3 md:px-6 py-2 rounded-lg text-sm md:text-normal text-medium bg-primary text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
