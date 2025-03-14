import { Search } from "lucide-react";
import Image from 'next/image';
import { Suspense } from 'react';
import Evenements from "./evenements";
import { EventsSkeleton } from "@/components/ui/shared/skeletons";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: number;
    }>
}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;
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
                <SearchBar />
            </div>
            <section className='container max-margin pt-0 pb-10'>
                <div className='mt-2' />
                <div className='lg:w-2/3 mx-auto flex flex-col justify-center'>
                    {/* filter */}
                    <Filter />
                    <Suspense fallback={<div className="mt-12"><EventsSkeleton items={4} /></div>}>
                        <Evenements currentPage={currentPage} query={query} />
                    </Suspense>
                </div>
            </section>
        </main>
    )
}

const Filter = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex items-center space-x-2 lg:w-[90%]'>
                <h5 className='text-sm font-bold whitespace-nowrap'>Filtrer par</h5>
                <select id="mois" name="mois" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par mois</option>
                    <option value="janvier">Janvier</option>
                    <option value="fevrier">Février</option>
                    <option value="mars">Mars</option>
                    <option value="avril">Avril</option>
                    <option value="mai">Mai</option>
                    <option value="juin">Juin</option>
                    <option value="juillet">Juillet</option>
                    <option value="aout">Août</option>
                    <option value="septembre">Septembre</option>
                    <option value="actobre">Octobre</option>
                    <option value="novembre">Novembre</option>
                    <option value="decembre">Décembre</option>
                </select>
                <select id="categorie" name="categorie" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par catégorie</option>
                    <option value="actualite">Actualité</option>
                    <option value="evenement">Evènement</option>
                </select>
            </div>
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='w-full md:w-3/4 lg:w-1/2 relative'>
                <input type="text" placeholder="Rechercher un évènement"
                    className="w-full block flex-1 border border-gray-100 rounded-lg pl-3 pr-14 py-3
                    text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                    placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
                <Search className="h-7 w-7 text-gray-300 absolute top-3 right-4 cursor-pointer" />
            </div>
        </div>
    )
}