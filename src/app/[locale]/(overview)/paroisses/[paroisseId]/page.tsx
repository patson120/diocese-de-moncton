
'use client'
import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Button } from "@/components/ui/shared/button";
import { paroisses } from "@/constants";
import { Mail, MapPin, PhoneCall, Play } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

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
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4'>
                        <div className='h-80 xl:h-96 relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/paroisse-detail.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='flex gap-3'>
                            <Button variant='outline' size="sm" onClick={() => { }} className="text-xs lg:text-sm">
                                Visiter le site internet
                            </Button>
                            <Button variant='outline' size="sm" onClick={() => { }} className="text-xs lg:text-sm">
                                <Play className="mr-2 h-4 w-6" />
                                Voir la paroisse en vidéo
                            </Button>
                        </div>
                    </div>
                    <div className='container max-margin md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div>
                            <small className='text-gray uppercase'>Unité pastorale</small>
                            <h1 className='heading-4 font-extrabold mb-4'>Paroisse Immaculée-Conception / Acadieville</h1>
                            <p className='body-2 text-gray line-clamp-2'>L’histoire d’Acadieville est étroitement liée à celle de Rogersville. Les premiers colons (vers 1871) étaient pour la plupart des constructeurs du chemin de fer « Intercolonial...</p>
                            <span className='font-bold cursor-pointer'>voir plus</span>
                        </div>
                        <div className="flex gap-4 my-5 py-3 border-y border-y-[#E5E5E5]">
                            <div className="flex">
                                <span className="text-gray-500 text-sm mr-2">Etabli en</span>
                                <span className="text-sm font-extrabold">1871</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 text-sm mr-2">Ordonné en</span>
                                <span className="text-sm font-extrabold">1871</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 text-sm mr-2">Premier curé</span>
                                <span className="text-sm font-extrabold">1897</span>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Heures des messes</h1>
                            <div className="flex flex-col gap-y-3">
                                <div className="w-min flex justify-center items-center gap-2 border border-[#E5E5E5] rounded-xl py-[6px] px-2">
                                    <p className="text-gray">Mardi</p>
                                    <p className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">12h:00</p>
                                    <p className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">15h:10</p>
                                </div>
                                <div className="w-min flex justify-center items-center gap-2 border border-[#E5E5E5] rounded-xl py-[6px] px-2">
                                    <p className="text-gray">Mercredi</p>
                                    <p className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">09h:00</p>
                                </div>
                                <div className="w-min flex justify-center items-center gap-2 border border-[#E5E5E5] rounded-xl py-[6px] px-2">
                                    <p className="text-gray">Dimanche</p>
                                    <p className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">08h:00</p>
                                    <p className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">12h:00</p>
                                    <p className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">17h:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Secrétariat paroissial</h1>
                            <div className="space-y-2 mt-4 body-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-6 font-extrabold" />
                                    <p className="text-gray">4049, Route 480 Acadieville NB E4Y 1Z3</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <PhoneCall className="h-4 w-6 font-extrabold" />
                                    <p className="text-gray">(506) 775-2421</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-6 font-extrabold" />
                                    <p className="text-gray">paracadi@live.ca</p>
                                </div>
                            </div>
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
                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Autres paroisses</h1>
                        <div>
                            <div className="flex flex-wrap gap-4">
                                {
                                    paroisses.slice(0, 2).map((item, index) => (
                                        <div key={index}>
                                            <div className="h-32 w-48 relative overflow-hidden rounded-md bg-gray-100">
                                                <Image
                                                    alt="Image de la paroisse"
                                                    src={item.image}
                                                    fill
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '100%',
                                                        width: '100%'
                                                    }}
                                                />
                                            </div>
                                            <h3 className="font-extrabold text-xs mt-3 mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500">Rogersville</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action de grace */}
            <ActionGrace />
        </>
    )
}

