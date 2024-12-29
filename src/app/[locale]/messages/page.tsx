
import ActionGrace from '@/components/ui/shared/ActionGrace'
import MessageComp from '@/components/ui/shared/MessageComp'
import { messages } from '@/constants'
import { Link } from '@/i18n/routing'
import { SlidersHorizontalIcon } from "lucide-react"
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
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
                <div className='className="absolute inset-0 bg-black/40"'>
                    <div className='container max-margin py-0 h-full flex flex-col justify-center items-center'>
                        
                    </div>
                </div>
            </section>

            <section className='container max-margin py-0 pb-10 md:pb-20'>

                {/* filter */}
                <div className='mb-5 mt-5 md:mt-12'>
                    <Filter />
                </div>
                <div className='my-8 border-b border-b-[#E5E5E5]' />

                <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        [...messages].map((item, index) => (
                            <Link key={index} href="/messages/1" className=''>
                                <MessageComp data={item} />
                            </Link>
                        ))
                    }
                </div>

                {/* Pagination */}
                <div className='flex justify-center mt-12'>
                    <div className='flex gap-3'>
                        <div className='w-40 h-8 rounded-md bg-gray-100'></div>
                    </div>
                </div>
            </section>
            {/* Action de grace */}
            <ActionGrace />
        </main>
    )
}

const Filter = () => {
    return (
        <div className='flex justify-start items-center gap-2'>
            <div className='flex items-center gap-2 lg:gap-4'>
                <div className='flex items-center gap-[6px]'>
                    <SlidersHorizontalIcon className="h-4 w-4 text-gray-600" />
                    <label className='font-bold whitespace-nowrap' htmlFor="filter">Filtrer les résultats</label>
                </div>
                <select id="mois" name="mois" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
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
                <select id="categorie" name="categorie" className="border border-gray-100 outline-primary outline-offset-1 px-3 py-2 rounded-lg w-full">
                    <option value="" disabled>Par type</option>
                    <option value="">Par type</option>
                    <option value="actualite">Actualité</option>
                    <option value="evenement">Evènement</option>
                </select>
            </div>
        </div>
    )
}