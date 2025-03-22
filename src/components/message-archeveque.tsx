import { fetchMessages } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "./ui/shared/button";
import { Message } from "@/types";

export default async function MessageArcheveque() {
    const response = await fetchMessages(`?paginate=1`)
    const message: Message = response.data[0] ;

    return (
        <section className='vertical-margin bg-yellow100 text-[#1D0104]'>
            <div className='container max-margin py-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12'>
                <div className='order-1 md:order-last md:col-span-2 rounded-2xl bg-yellowColor px-5 md:px-14 py-5 md:py-8 flex flex-col gap-2 md:gap-4 xl:gap-7'>
                    <div className="space-y-1 lg:space-y-2">
                        <span className='heading-3 font-extrabold '>Message de l&lsquo;Archevêque</span>
                        {/* <h1 className='heading-5'>“ Décret de suppression de la paroisse Saint-Timothée de Shemogue ”</h1> */}
                        <h1 className='heading-5'>{message.titre_fr}</h1>
                    </div>
                    {/* <p className='body-2 leading-[25.9px]'>A tous ceux et celles qui liront les présentes, Graces et bénédictions dans le Seigneur.<br /> <br />
                        CONSIDERANT que le code de droit canonique donne à l’évêque diocésain le pouvoir d’ériger, supprimer ou de modifier les paroisses, après avoir entendu le conseil presbtéral et ce conformément au canon 515<br /> <br />
                        CONSIDERANT que la paroisse saint-Timothée de Shemogue a été érigée canoniquement... </p> */}

                    <p className='body-2 leading-[25.9px]'>{message.message_fr}</p>

                    <div className='flex flex-col md:flex-row space-y-3 md:space-x-2 md:space-y-0'>
                        <Link href={`/messages/${message.id}`}>
                            <Button
                                variant="outline"
                                className='font-bold w-full'
                            >En savoir plus</Button>
                        </Link>
                        <Link href="/messages">
                            <Button
                                variant="outline"
                                className='w-full bg-transparent hover:bg-transparent border-black font-bold'
                            >Voir tous les messages</Button>
                        </Link>
                    </div>
                </div>
                <div className='md:order-last min-h-80 md:h-auto md:col-span-1 relative rounded-2xl overflow-hidden bg-gray-200'>
                    <Image
                        alt="Image de la l'archevèque"
                        src="/assets/img/image.png"
                        fill
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                    <div className="absolute inset-0 bg-black/40 md:bg-black/30 " />
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="p-4">
                            {/* <h3 className="text-white body-1 font-semibold">Mgr Guy Desrochers</h3>
                            <p className=" text-white body-2">Archevêque du diocèse de Moncton</p> */}
                            <h3 className="text-white body-1 font-semibold">{message.archeveque.name}</h3>
                            <p className=" text-white body-2">Archevêque du diocèse de Moncton</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}