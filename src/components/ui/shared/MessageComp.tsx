import { formatDateToLocal } from "@/_lib/utils"
import { Message } from "@/types"
import { Calendar } from "lucide-react"

const MessageComp = ({ message }: { message: Message }) => {
    return (
        <div className='border border-[#E5E5E5] rounded-xl flex flex-col gap-[10px] px-5 py-6'>
            <div className='flex'>
                <div className='flex justify-center items-center gap-2 bg-[#8B22360D] rounded-[8px] px-3 py-[5px]'>
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <span className='body-3'>Publié le {formatDateToLocal((new Date(message.created_at)).toISOString())}</span>
                </div>
            </div>
            <h4 className='body-1 font-bold text-black line-clamp-2'>{message.titre_fr}</h4>
            <p className='body-2 line-clamp-2 text-[#575757]'>{message.message_fr}</p>
        </div>
    )
}
export default MessageComp