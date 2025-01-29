'use client'

import { Calendar, Timer } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';


// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false });

const parishes = [
    {
        id: 1,
        name: "Cathédrale Notre-Dame de l'Assomption",
        address: '220 St George St, Moncton, NB E1C 1V8',
        phone: '+1 506-857-4223',
        email: 'cathedrale@diocesemoncton.ca',
        website: 'https://www.cathedralemoncton.ca',
        location: { lat: 46.0878, lng: -64.7782 }
    }
];


export default function Page() {

    const [selectedParish, setSelectedParish] = useState<any>(null);
    return (
        <>
            <div className='px-5 md:px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
                <div className="flex justify-between ">
                </div>
            </div>
            <section className="container  max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2'>
                        <div className='h-80 xl:h-96 relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/event-details.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3'>
                        <div>
                            <small className='text-gray'>Titre évènement</small>
                            <h1 className='heading-4 font-extrabold mb-4'>Grandir ensemble 2025</h1>
                            <p className='body-2 text-gray line-clamp-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe maiores sit ex harum. Reprehenderit labore aspernatur iste voluptatem. Qui reprehenderit doloribus est, odio quisquam impedit mollitia aut excepturi officia. Optio id ex excepturi eum, accusamus voluptatum eveniet iste, sed beatae tempora unde deleniti molestiae suscipit numquam autem facere rerum et perspiciatis animi illo quo facilis qui asperiores magnam! Ratione impedit laborum eum nisi accusamus autem dolor, sit incidunt quia sed.</p>
                        </div>
                        <div className='flex flex-wrap gap-3 items-center font-light text-xs my-4'>
                            <label htmlFor="type_evenement" className='body-2 font-bold w-full md:w-auto'>Type évènement</label>
                            <p className='px-4 py-3 text-gray text-sm rounded-xl border border-gray-100'>Formation</p>
                            <p className='px-4 py-3 text-gray text-sm rounded-xl border border-gray-100'>Célébration</p>
                            <p className='px-4 py-3 text-gray text-sm rounded-xl border border-gray-100'>Communautaire</p>
                        </div>
                        <div className='my-4 border-b border-b-[#E5E5E5]' />
                        <div className='flex flex-col md:flex-row gap-8 mt-4'>
                            <div className='space-y-1'>
                                <div className='flex items-center space-x-1'>
                                    <Calendar className="h-5 w-5 text-gray-400" />
                                    <label htmlFor="date" className='text-gray'>Date</label>
                                </div>
                                <h1 className='text-base font-semibold'>Dimanche 29 Septembre</h1>
                            </div>
                            <div className='space-y-1'>
                                <div className='flex space-x-1'>
                                    <Timer className="h-5 w-5 text-gray-400" />
                                    <label htmlFor="heure" className=' text-gray-500'>Heure</label>
                                </div>
                                <h1 className='text-base font-semibold'>16h00 à 18h00</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Lieu</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Sur la carte</h1>
                        {/* Map */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
                            <Map
                                parishes={parishes}
                                selectedParish={selectedParish}
                                onParishSelect={setSelectedParish}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}