
'use client'
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
            <section className="container px-0 py-0">
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
        </>
    )
}


// export default function Page() {
//     const [selectedParish, setSelectedParish] = useState<any>(null);
//     return (
//         <main>
//             {/* Hero section */}
//             <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
//                 {/* Hero image */}
//                 <Image
//                     alt="hero section background image"
//                     src="/assets/img/hero-image-2.png"
//                     fill
//                     style={{
//                         objectFit: 'cover',
//                         height: '100%',
//                         width: '100%'
//                     }}
//                 />
//                 <div className='absolute top-0 left-0 right-0 bottom-0 flex items-start pt-10 bg-black bg-opacity-40'>
//                     <div className="container md:px-0 flex items-end gap-10">
//                         <div className="">
//                             <Button
//                                 variant="ghost"
//                                 onClick={() => console.log("Retour")}
//                                 className="text-gray-300 px-0 text-sm hover:bg-transparent">Retour</Button>
//                             <div className="relative h-48 w-52 rounded-lg overflow-hidden translate-y-14 bg-gray-100">
//                                 <Image
//                                     alt="Image de la l'actualité"
//                                     src="/assets/img/paroisse-detail.png"
//                                     fill
//                                     style={{
//                                         objectFit: 'cover',
//                                         height: '100%',
//                                         width: '100%'
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <span className="text-white uppercase text-[10px]">Unité pastorale</span>
//                             <h1 className='text-white font-extrabold text-xl mb-8'>Paroisse Immaculé-Conception / Acadieville</h1>
//                             <Button
//                                 variant="ghost"
//                                 onClick={() => console.log("Visiter le site internet")}
//                                 className="font-semibold text-sm bg-gray-100 rounded-lg px-3 py-2 mb-3"
//                             >Visiter le site internet</Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className='container md:px-0 pb-20'>
//                 <div className="grid grid-cols-5 gap-10 relative">
//                     <div className="col-span-3">
//                         <div className="h-16" />
//                         <h1 className="text-2xl font-extrabold text-black mb-4">Histoire</h1>
//                         <p className="text-gray-500 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, arcu sed aliquet condimentum, velit nisi faucibus velit, at lobortis neque velit at velit. Nulla facilisi. Sed euismod orci id turpis molestie, at tempor est posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere...</p>
//                         <div className="flex gap-4">
//                             <div className="flex">
//                                 <span className="text-gray-500 text-sm mr-2">Etabli en</span>
//                                 <span className="text-sm font-extrabold">1871</span>
//                             </div>
//                             <div className="flex">
//                                 <span className="text-gray-500 text-sm mr-2">Ordonné en</span>
//                                 <span className="text-sm font-extrabold">1871</span>
//                             </div>
//                             <div className="flex">
//                                 <span className="text-gray-500 text-sm mr-2">Premier curé</span>
//                                 <span className="text-sm font-extrabold">1897</span>
//                             </div>
//                         </div>
//                         <h1 className="text-2xl font-extrabold text-black mt-10 mb-2">Sur la carte</h1>
//                         {/* Map */}
//                         <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
//                             <Map
//                                 parishes={parishes}
//                                 selectedParish={selectedParish}
//                                 onParishSelect={setSelectedParish}
//                             />
//                         </div>
//                         <h1 className="text-2xl font-extrabold text-black mt-10 mb-2">La paroisse en vidéo</h1>
//                         {/* Video */}
//                         <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
//                             {/* show video with controls panel */}
//                             <VideoPlayer />
//                         </div>

//                         <h1 className="text-2xl font-extrabold text-black mt-10 mb-2">Autres pariosses</h1>
// <div>
//     <div className="flex flex-wrap gap-4">
//         {
//             paroisses.slice(0, 2).map((item, index) => (
//                 <div key={index}>
//                     <div className="h-32 w-48 relative overflow-hidden rounded-md bg-gray-100">
//                         <Image
//                             alt="Image de la paroisse"
//                             src={item.image}
//                             fill
//                             style={{
//                                 objectFit: 'cover',
//                                 height: '100%',
//                                 width: '100%'
//                             }}
//                         />
//                     </div>
//                     <h3 className="font-extrabold text-xs mt-3 mb-1">{item.title}</h3>
//                     <p className="text-xs text-gray-500">Rogersville</p>
//                 </div>
//             ))
//         }
//     </div>
// </div>
//                     </div>
//                     <div className="col-span-2 pt-4">
//                         <div className="bg-[#F9F4F5] rounded-lg sticky top-5 p-5 space-y-4">

//                             <div className="pb-4 border-b-[1.5px] border-b-gray-200 space-y-2">
//                                 <div className="flex items-center space-x-1">
//                                     <TimerIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
//                                     <h4 className="text-sm font-semibold">Heure des messes</h4>
//                                 </div>
//                                 <p className="text-xs">Dimanche - 9h00 Jeudi - 9h00</p>
//                             </div>

//                             <div className="pb-4 border-b-[1.5px] border-b-gray-200 space-y-3">
//                                 <div className="flex items-center space-x-1">
//                                     <UserCheck className="h-5 w-5 text-gray-500 cursor-pointer" />
//                                     <h4 className="text-sm font-semibold">Modérateur</h4>
//                                 </div>
//                                 <p className="text-xs">P. Charles Lokoka</p>
//                             </div>

//                             <div className="pb-4 border-b-[1.5px] border-b-gray-200 space-y-2">
//                                 <div className="flex items-center space-x-1">
//                                     <MapPin className="h-5 w-5 text-gray-500 cursor-pointer" />
//                                     <h4 className="text-sm font-semibold">Coordonnées</h4>
//                                 </div>
//                                 <p className="text-xs">Adresse : 4049, Route 480, Acadieville</p>
//                             </div>

//                             <div className="pb-4 border-b-[1.5px] border-b-gray-200 space-y-2">
//                                 <div className="flex items-center space-x-1">
//                                     <MapPin className="h-5 w-5 text-gray-500 cursor-pointer" />
//                                     <h4 className="text-sm font-semibold">Secrétariat paroissial</h4>
//                                 </div>
//                                 <p className="text-xs">Adresse : 4049, Route 480 Acadieville NB E4Y 1Z3</p>
//                                 <p className="text-xs">Téléphone : (506) 775-2421</p>
//                                 <p className="text-xs">Télécopieur : (506) 775-2446</p>
//                                 <p className="text-xs">Courriel :  paracadi@live.ca</p>
//                             </div>

//                             <div className="pb-4 space-y-2">
//                                 <div className="flex items-center space-x-1">
//                                     <MapPin className="h-5 w-5 text-gray-500 cursor-pointer" />
//                                     <h4 className="text-sm font-semibold">Catéchèse</h4>
//                                 </div>
//                                 <p className="text-xs">Téléphone : (506) 775-6744</p>
//                             </div>

//                             <Button
//                                 variant="ghost"
//                                 onClick={() => console.log("Contacter la paroisse")}
//                                 className="w-full py-2 text-white bg-primary rounded-lg"
//                             >Contacter la paroisse</Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </main>
//     )
// }

// const VideoPlayer = () => {
//     // Video player component using third-party library (e.g., react-player)
//     return (
//         <div className="relative h-full w-full">
//             <video controls className="absolute top-0 left-0 w-full h-full" />
//             {/* Controls panel */}
//             {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40">
//                 <button className="text-white font-semibold text-sm px-3 py-1">Pause</button>
//                 <button className="text-white font-semibold text-sm px-3 py-1 ml-4">Stop</button>
//             </div> */}
//         </div>
//     )
// }