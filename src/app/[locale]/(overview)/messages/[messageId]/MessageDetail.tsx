"use client"

import { formatDateToLocal } from '@/_lib/utils'
import Text from '@/components/Text'
import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { Message } from '@/types'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

export default function MessageDetail({ message }: { message: Message }) {
    const { push } = useRouter()

    const handleSearch = (i: number) => {
        if (i > 0 && message.nextId) push(`/messages/${message.nextId}`)
        if (i < 0 && message.prevId) push(`/messages/${message.prevId}`)
    }


    return (
        <div className='col-span-full lg:col-span-4 pb-10 lg:pb-0 md:pr-10 lg:pr-20 border-b lg:border-r lg:border-r-[#E5E5E5] lg:border-b-transparent'>
            <div className='flex flex-col space-y-3'>
                <div className="heading-2 font-bold">
                    <Text className='text-2xl' labelEn={message.titre_en} labelFr={message.titre_fr} />
                </div>
                <div>
                    <Text labelFr={message?.message_fr} labelEn={message?.message_en} />
                </div>
                {/* <Text labelEn={message.titre_en} labelFr={message.titre_fr} />
                <Text labelEn={message.message_en} labelFr={message.message_fr} /> */}
                {/* <h1 className='heading-2 font-bold'><Text labelEn={message.titre_en} labelFr={message.titre_fr} /></h1>
                <p className='body-2 text-[#575757]'><Text labelEn={message.message_en} labelFr={message.message_fr} /></p> */}
            </div>
            <div className='flex justify-end mt-8'>
                <div className='flex justify-center items-center gap-2 bg-[#8B22360D] rounded-[8px] px-3 py-[5px]'>
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <div className='body-3 whitespace-nowrap flex justify-center items-center'>
                        <Text keyString="publier_le" />
                        <span className="ml-2">{formatDateToLocal((new Date(message.created_at)).toISOString())}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end space-x-2 pt-20'>
                <Button
                    onClick={() => handleSearch(-1)}
                    size={'sm'}
                    variant="outline"
                    className={`${message.prevId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}
                >
                    <ChevronLeft className="mr-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                    <Text keyString='prev_msg' />
                </Button>
                <Button
                    onClick={() => handleSearch(1)}
                    size={'sm'}
                    variant="outline"
                    className={`${message.nextId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}>
                    <Text keyString='next_msg' />
                    <ChevronRight className="ml-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                </Button>
            </div>
        </div>
    )
}
