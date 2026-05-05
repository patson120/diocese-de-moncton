import { formatDateToLocal } from "@/_lib/utils"
import Text from "@/components/Text"
import { Link } from "@/i18n/routing"
import { Message } from "@/types"
import { Calendar, Download } from "lucide-react"
import { cookies } from "next/headers"
import { Button } from "./button"

const MessageComp = async ({ message }: { message: Message }) => {
    const cookieStore = await cookies();
    const userLanguage = cookieStore.get('NEXT_LOCALE')?.value || 'fr';

    return (
        <div className='border border-[#E5E5E5] rounded-xl px-5 py-6'>
            <Link href={`/messages/${message.id}`} className="flex flex-col gap-[10px]">
                <div className='flex'>
                    <div className='flex justify-center items-center gap-2 bg-[#8B22360D] rounded-[8px] px-3 py-[5px]'>
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <div className='body-3 whitespace-nowrap flex justify-center items-center'><Text keyString="publier_le" /><span className="ml-2">{formatDateToLocal((new Date(message.created_at)).toISOString(), userLanguage === 'en' ? "en-EN" : 'fr-FR')}</span></div>
                    </div>
                </div>
                {
                    message.image === null ? (
                        <div
                            className="w-full h-[150px] rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: `url("/assets/img/placeholder-vector.png")` }}
                        />
                    ) : (
                        <div
                            className="w-full h-[150px] rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_URL}/${message.image}")` }}
                        />
                    )}
                <div className='body-1 font-bold text-black line-clamp-2'>
                    <Text labelFr={message.titre_fr} labelEn={message.titre_en} />
                </div>
                <div className='body-2 line-clamp-2 text-[#575757]'>
                    <Text labelFr={message.message_fr} labelEn={message.message_en} />
                </div>
                {
                    (message.ressource_en && message.ressource_fr) &&
                    <div className="flex gap-1 text-gray-600 text-sm">
                        Document :
                        <Text className="line-clamp-6 text-gray-600" labelEn={message.ressource_en?.titre_en!} labelFr={message.ressource_fr?.titre_fr!} />
                    </div>
                }
            </Link>

            {
                (message.ressource_en && message.ressource_fr) && (
                    <Link download href={`${process.env.NEXT_PUBLIC_BASE_URL}/${userLanguage === "fr" ? message.ressource_fr?.media : message.ressource_en?.media}`} target="_blank" rel="noopener noreferrer" className="mt-3 flex justify-end">
                        <Button variant="outline" className='font-bold w-min'>
                            <Download className="h-4 w-4 text-gray-600 mr-2" />
                            <Text className="text-inherit !text-gray-600 !font-medium" keyString="download_msg" />
                        </Button>
                    </Link>
                )
            }
        </div>
    )
}
export default MessageComp