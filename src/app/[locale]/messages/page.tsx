
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
                <div className='absolute inset-0 flex justify-center items-start pt-10 bg-black bg-opacity-40'>
                    <h1 className='w-1/2 heading-1 text-center text-white font-extrabold'>Découvrez toute notre actualité</h1>
                </div>
            </section>

            <section className='container max-margin py-0 pb-10 md:pb-20'>

                {/* filter */}
                <Filter />

                <div className='mt-10'>
                    {/*  */}
                </div>

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

                {/* Action de grace */}
                <ActionGrace />
            </section>
        </main>
    )
}

const Filter = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex items-center space-x-2'>
                <SlidersHorizontalIcon className="h-4 w-4 text-gray-600" />
                <label className='text-sm font-bold' htmlFor="filter">Filtrer les résultats</label>
                {/* <select id="date" name="date" className="border-2 border-gray-200 p-2 rounded-lg w-full">
              <option value="" disabled>Tous</option>
              <option value="2023-01-01">Janvier 2023</option>
              <option value="2023-02-01">Février 2023</option>
              <option value="2023-03-01">Mars 2023</option>
            </select> */}
            </div>
            <label className='text-sm font-bold px-3 py-1 rounded-full bg-gray-100 cursor-pointer' htmlFor="tous">Tous</label>
            <label className='text-sm px-3 py-1 rounded-full border border-gray-100 cursor-pointer' htmlFor="catechese">Catéchèse</label>
            <label className='text-sm px-3 py-1 rounded-full border border-gray-100 cursor-pointer' htmlFor="diocese">Diocèse</label>
        </div>
    )
}