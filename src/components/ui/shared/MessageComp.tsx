import { formatDateToLocal } from "@/_lib/utils"
import Text from "@/components/Text"
import { Message } from "@/types"
import { Calendar } from "lucide-react"

const MessageComp = ({ message }: { message: Message }) => {
    return (
        <div className='border border-[#E5E5E5] rounded-xl flex flex-col gap-[10px] px-5 py-6'>
            <div className='flex'>
                <div className='flex justify-center items-center gap-2 bg-[#8B22360D] rounded-[8px] px-3 py-[5px]'>
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <div className='body-3 whitespace-nowrap flex justify-center items-center'><Text keyString="publier_le" /><span className="ml-2">{formatDateToLocal((new Date(message.created_at)).toISOString())}</span></div>
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
            {/* <h4 className='body-1 font-bold text-black line-clamp-2'><Text labelFr={message.titre_fr} labelEn={message.titre_en} /></h4> */}
            {/* <p className='body-2 line-clamp-2 text-[#575757]'><Text labelFr={message.message_fr} labelEn={message.message_en} /></p> */}
        </div>
    )
}
export default MessageComp