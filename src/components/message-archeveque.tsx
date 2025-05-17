import { fetchMessages } from "@/_lib/data";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "./ui/shared/button";
import { Message } from "@/types";
import Text from "./Text";
import { Calendar } from "lucide-react";
import { formatDateToLocal } from "@/_lib/utils";

export default async function MessageArcheveque() {
    const response = await fetchMessages(`?paginate=1&etat=1`)
    const message: Message = response.data[0];

    return (
        <section className='vertical-margin bg-yellow100 text-[#1D0104]'>
            <div className='container max-margin py-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 xl:gap-12'>
                <div className='order-1 md:order-last md:col-span-2 rounded-2xl bg-yellowColor px-5 md:px-14 py-5 md:py-8 flex flex-col gap-2 md:gap-4 xl:gap-7'>
                    <div className="space-y-1 lg:space-y-2">
                        <h1 className='heading-3 font-extrabold mb-3'>
                            <Text keyString="msg_archeveque" />
                        </h1>
                        <Text className='heading-5 text-xl' labelEn={message.titre_en} labelFr={message.titre_fr} />
                    </div>
                    <p className='body-2 leading-[25.9px]'>
                        <Text className="line-clamp-6" labelEn={message.message_en} labelFr={message.message_fr} />
                    </p>
                    <div className='flex justify-end'>
                        <div className='flex justify-center items-center gap-2 bg-[#8B22360D] rounded-[8px] px-3 py-[5px]'>
                            <Calendar className="h-4 w-4 text-gray-600" />
                            <div className='body-3 whitespace-nowrap flex justify-center items-center'><Text keyString="publier_le" /><span className="ml-2">{formatDateToLocal((new Date(message.created_at)).toISOString())}</span></div>
                        </div>
                    </div>

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
                                className='w-full bg-transparent hover:bg-transparent border-black font-bold '
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