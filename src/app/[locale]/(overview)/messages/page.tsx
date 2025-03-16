
import ActionGrace from '@/components/ui/shared/ActionGrace'
import { MessagesSkeleton } from '@/components/ui/shared/skeletons'
import { SlidersHorizontalIcon } from "lucide-react"
import Image from 'next/image'
import { Suspense } from 'react'
import Messages from './messages'

export default async function Page(
    props: {
        searchParams?: Promise<{
            query?: string;
            page?: number;
        }>
    }
) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;

    return (
        <main>
            {/* Hero section */}
            <section className='h-[35vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section background image"
                    src="/assets/img/hero-image-2.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className="absolute inset-0 bg-black/40">
                    <div className='container max-margin py-0 h-full flex flex-col justify-center items-center'>
                        <div className='w-full h-full flex flex-col justify-between translate-y-14 md:translate-y-0 '>
                            <div className='' />
                            <div className='flex flex-col sm:-translate-y-3 md:translate-y-0 md:flex-row justify-start items-center gap-5 md:gap-8 xl:gap-10'>
                                <div className='h-64 w-64 shrink-0 relative overflow-hidden border-2 border-gray-400'>
                                    <Image
                                        src="/assets/img/image.png"
                                        alt="Photo de l&lsquo;évêque"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            height: '100%',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <div className='space-y-2 lg:w-1/2'>
                                    <h5 className='heading-2 md:text-white font-extrabold'>Communiqués du bureau de Mgr. Desrochers</h5>
                                    <p className='body-2 md:text-gray-200'>Veuillez cliquer sur les liens suivants pour accéder aux communiqués de notre archevêque, Mgr Guy Desrochers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='my-64 sm:my-56 md:my-0' />

            <section className='container max-margin py-0 pb-10 md:pb-20'>

                {/* filter */}
                <div className='mb-5 mt-5 md:mt-12'>
                    <Filter />
                </div>
                <div className='my-8 border-b border-b-[#E5E5E5]' />

                <Suspense fallback={<MessagesSkeleton items={9} />}>
                    <Messages currentPage={currentPage} />
                </Suspense>

                
            </section>
            {/* Action de grace */}
            <ActionGrace />
        </main>
    )
}

const Filter = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-center gap-3 lg:gap-4 w-full md:w-auto'>
            <div className='flex items-center gap-[6px]'>
                <SlidersHorizontalIcon className="h-5 w-5 text-gray-600" />
                <label className='font-bold whitespace-nowrap' htmlFor="filter">Filtrer les résultats</label>
            </div>
            <select id="mois" name="mois" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full md:w-auto">
                <option value="" disabled>Par date</option>
                <option value="">Par date</option>
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
            <select id="categorie" name="categorie" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full md:w-auto">
                <option value="" disabled>Par type</option>
                <option value="">Par type</option>
                <option value="actualite">Actualité</option>
                <option value="evenement">Evènement</option>
            </select>
        </div>
    )
}