
import MessageArcheveque from "@/components/message-archeveque";
import RecentActualites from "@/components/recentActualites";
import RecentEvents from "@/components/recentEvents";
import { HeroSection } from "@/components/sections/hero";
import Text from "@/components/Text";
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
    gps?: string;
    page?: number;
  }>
}) {

  
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const gps = searchParams?.gps || ''
  
  return (
    <main className="bg-white">
      <HeroSection />
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
            <h3 className='body-1 font-bold mt-2'><Text keyString="horaires_messe_titre"/></h3>
            <p className='body-3 text-gray-500 mt-2 mb-8'><Text keyString="horaires_messe_desc"/></p>
            <Link href="/horaires-messes">
              <Button className='w-full body-2 xl:text-xl'>
                <Text className="text-inherit" keyString="savoir_plus"/>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container max-margin py-0">
        <div className="vertical-margin">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="heading-3"><Text keyString={"news"} /></h1>
            <Link href="/actualites">
              <Button variant='ghost' className="body-3 font-semibold p-0 hover:bg-transparent">
                <Text className="hidden md:block whitespace-nowrap" keyString="see_more_news"></Text>
                <Text className="md:hidden" keyString="see_more"/>
                <ArrowRight className="ml-1 h-4 w-6 hover:ml-2 hover:transition-all hover:duration-300 " />
              </Button>
            </Link>
          </div>
          <Suspense fallback={< ActualitesSkeleton items={4} />}>
            <RecentActualites />
          </Suspense>
        </div>
        <div className="mb-3 flex justify-between items-center">
          <h1 className="heading-3"><Text keyString={"events"} /></h1>
          <Link href='/evenements' className="hidden md:block" >
            <Button variant='ghost' className="body-3 font-semibold p-0 hover:bg-transparent">
              <Text className="hidden md:block whitespace-nowrap" keyString="see_more_events"></Text>
              <Text className="md:hidden" keyString="see_more"/>
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
            <Text className="whitespace-nowrap text-white" keyString="see_more_events"/>
            <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
          </Button>
        </Link>
        <ParoisseSection query={query} gps={gps} />
      </div>

      <Suspense fallback={ <MessageArchevequeSkeleton />}>
        <MessageArcheveque />
      </Suspense>

      {/* Action de grace */}
      <ActionGrace /> 
    </main>
  );
}