
import MessageArcheveque from "@/components/message-archeveque";
import RecentActualites from "@/components/recentActualites";
import RecentEvents from "@/components/recentEvents";
import { HeroSection } from "@/components/sections/hero";
import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Button } from "@/components/ui/shared/button";
import ParoisseSection from "@/components/ui/shared/ParoisseSection";
import { ActualitesSkeleton, EventItemSkeleton, MessageArchevequeSkeleton } from "@/components/ui/shared/skeletons";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: number;
  }>
}) {
  // const t = useTranslations("Index") 

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = searchParams?.page || 1;
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
              <Button className='w-full body-2 xl:text-xl'>
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
              <Button variant='ghost' className="body-3 font-semibold p-0 hover:bg-transparent">
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
            <Button variant='ghost' className="body-3 font-semibold p-0 hover:bg-transparent">
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

        <Link id="evenements" href='/evenements' className="block md:hidden mt-5" >
          <Button className="w-full md:py-6 text-sm md:text-base lg:text-xl">
            Voir tous les évènements
            <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
          </Button>
        </Link>

        <ParoisseSection query={query} />
      </div>

      <Suspense fallback={ <MessageArchevequeSkeleton />}>
        <MessageArcheveque />
      </Suspense>

      {/* Action de grace */}
      <ActionGrace />
    </main>
  );
}
