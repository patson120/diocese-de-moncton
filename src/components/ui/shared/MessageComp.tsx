import { MessageType } from "@/types"
import { Calendar } from "lucide-react"

const MessageComp = ({ data }: { data: MessageType }) => {
    return (
        <div className='border border-[#E5E5E5] rounded-xl flex flex-col gap-[10px] px-5 py-6'>
            <div className='flex'>
                <div className='flex justify-center items-center gap-2 bg-[#8B22360D] rounded-[8px] px-3 py-[5px]'>
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <span className='body-3'>Publié le {data.date}</span>
                </div>
            </div>
            <h4 className='body-1 font-bold text-black line-clamp-2'>{data.title}</h4>
            <p className='body-2 line-clamp-2 text-gray-500'>{data.description}</p>
        </div>
    )
}
export default MessageComp