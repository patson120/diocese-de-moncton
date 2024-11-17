import { events } from '@/constants'
import { Link } from '@/i18n/routing'
import EventItem from '@/ui/home/event-item'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full bg-gray-100'>
                <div className='w-full h-full grid grid-cols-6'>
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
                    <div className='w-full h-full relative overflow-hidden border-r border-gray-50'>
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
                    <div className='w-full h-full relative overflow-hidden border-r border-gray-50'>
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
                    <div className='w-full h-full relative overflow-hidden border-gray-50'>
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
            <section className='px-5 md:px-10 pb-8'>
                {/* Search bar */}
                <SearchBar />

                <div className='mt-2' />
                <div className='w-1/2 mx-auto flex flex-col justify-center'>
                    {/* filter */}
                    <Filter />
                    <h3 className='text-lg text-center font-extrabold mt-8 mb-4 border border-gray-200 rounded-md py-3'>Moi de septembre</h3>
                    <div className='flex flex-col gap-4'>
                        {
                            events.map((item, index) => (
                                <Link key={index} href="/evenement/1" >
                                    <EventItem data={item} />
                                </Link>
                            ))
                        }
                    </div>
                    <h3 className='text-lg text-center font-extrabold my-4 border border-gray-200 rounded-md py-3'>Moi de octobre</h3>
                    <div className='flex flex-col gap-4'>
                        {
                            [1, 2].map((item) => (
                                <div key={item} className='h-16 border border-gray-100 bg-gray-100 rounded-md'></div>
                            ))
                        }
                    </div>

                    {/* Pagination */}
                    <div className='flex justify-center mt-12'>
                        <div className='flex gap-3'>
                            <div className='w-40 h-8 rounded-md bg-gray-100'></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

const Filter = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex items-center space-x-2 w-[90%]'>
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
        <div className='flex justify-center items-center gap-2 -translate-y-6'>
            <div className='w-1/2'>
                <input type="text" placeholder="Rechercher un évènement"
                    className="w-full block flex-1 border border-gray-100 rounded-lg pl-3 pr-14 py-3
                    text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                    placeholder:text-sm sm:text-sm sm:leading-6 outline-none"/>
            </div>
        </div>
    )
}