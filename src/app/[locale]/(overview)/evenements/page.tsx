import { fetchCategories } from "@/_lib/data";
import { EventsSkeleton } from "@/components/ui/shared/skeletons";
import { Category } from "@/types";
import Image from 'next/image';
import { Suspense } from 'react';
import Evenements from "./evenements";
import { Filter } from "./Filter";
import SearchBar from "./SearchBar";
import Calendrier from "./calendrier";



export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        categorie_id?: string;
        month?: number;
        page?: number;
    }>
}) {

    // const localActive = useLocale()

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;

    // Fetch categories
    const categories: Category[] = await fetchCategories(`?menu=event`)
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full bg-gray-100'>
                <div className='w-full h-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                    <div className='w-full h-full relative overflow-hidden border-r border-gray-50 '>
                        <Image
                            alt="Hero image 1"
                            src="/assets/img/hero-1.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='w-full h-full relative overflow-hidden border-r border-gray-50'>
                        <Image
                            alt="Hero image 1"
                            src="/assets/img/hero-2.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='w-full h-full relative overflow-hidden border-r border-gray-50'>
                        <Image
                            alt="Hero image 1"
                            src="/assets/img/hero-3.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='hidden md:block w-full h-full relative overflow-hidden border-r border-gray-50'>
                        <Image
                            alt="Hero image 1"
                            src="/assets/img/hero-4.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='hidden lg:block w-full h-full relative overflow-hidden border-r border-gray-50'>
                        <Image
                            alt="Hero image 1"
                            src="/assets/img/hero-5.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='hidden xl:block w-full h-full relative overflow-hidden border-gray-50'>
                        <Image
                            alt="Hero image 1"
                            src="/assets/img/hero-6.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                </div>
            </section>

            <div className='container max-margin py-0 -translate-y-6'>
                {/* Search bar */} 
                <SearchBar placeholder={"rechercher_event"} />
            </div>

            
                <section className='container max-margin pt-0 pb-10'>
                    <div className='mt-2' />
                    <div className='lg:w-2/3 mx-auto flex flex-col justify-center'>
                        {/* filter */}
                        <Filter categories={categories} />
                        <Suspense fallback={<div className="mt-12"><EventsSkeleton items={4} /></div>}>
                            <Evenements
                                currentPage={currentPage}
                                query={query}
                                month={searchParams?.month || 0}
                                categorie_id={searchParams?.categorie_id || ''}
                            />
                        </Suspense>
                    </div>
                </section>
            
    
            {/* <section className='container max-margin pt-0 pb-10'>
                <Suspense fallback={<div className="mt-12"><EventsSkeleton items={4} /></div>}>
                    <Calendrier />
                </Suspense>
            </section>
            */}
        </main>
    )
}
