'use client'
import { Link } from '@/i18n/routing';
import Actualite from "@/ui/home/actualite";
import ButtonIcon from "@/ui/home/button-icon";
import EventItem from "@/ui/home/event-item";
import ParoisseItem from "@/ui/home/paroisse-item";
import LocalSwitcher from "@/ui/navbar/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index")
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-20"> <LocalSwitcher /> </div>
      <p className="mt-5">{t('hello')}</p>
      <Link href={`/about`} className='text-blue-600'>About</Link>
      <div className="bg-white p-10">
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-lg md:text-3xl text-black">Actualités</h1>
          <button
            onClick={() => console.log("Actualités plus")}
            className="text-black font-medium border-none bg-transparent"
            type="button">Voir plus</button>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Actualite />
          <Actualite />
          <Actualite />
          <Actualite />
        </div>

        <div className="mt-20" />
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-lg md:text-3xl text-black">Calendrier évènements</h1>
          <button
            onClick={() => console.log("Evènement plus")}
            className="text-black font-medium border-none bg-transparent whitespace-nowrap"
            type="button">Voir plus</button>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
        </div>

        <div className="mt-20" />
        <h1 className="font-bold text-lg md:text-3xl text-black mb-3">Trouver une paroisse</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-96 md:h-auto col-span-3 md:col-span-2 rounded-lg bg-gray-100"></div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-3">
            <ParoisseItem />
            <ParoisseItem />
            <ParoisseItem />
            <ParoisseItem />
            <ButtonIcon 
              title="Voir toutes les 23 paroisses"
              handleClick={() => {}}
              containerStyle="mt-4 text-medium"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
