"use client"

import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { Message } from '@/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default async function MessageDetail({ message }: { message: Message }) {
    const { push } = useRouter()

    const handleSearch = (i: number) => {
        if (i > 0 && message.nextId) push(`/messages/${message.nextId}`)
        if (i < 0 && message.prevId) push(`/messages/${message.prevId}`)
    }

    return (
        <div className='col-span-full lg:col-span-4 pb-10 lg:pb-0 md:pr-10 lg:pr-20 border-b lg:border-r lg:border-r-[#E5E5E5] lg:border-b-transparent'>
            <div className='flex flex-col space-y-3'>
                <h1 className='heading-2 font-bold'>{message.titre_fr}</h1>
                <p className='body-2 text-[#575757]'>{message.message_fr}</p>
            </div>
            <div className='flex justify-end space-x-2 pt-20'>
                <Button
                    onClick={() => handleSearch(-1)}
                    size={'sm'}
                    variant="outline"
                    className={`${message.prevId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}
                >
                    <ChevronLeft className="mr-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                    Message précédent
                </Button>
                <Button
                    onClick={() => handleSearch(1)}
                    size={'sm'}
                    variant="outline"
                    className={`${message.nextId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}
                >Message suivant
                    <ChevronRight className="ml-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                </Button>
            </div>
        </div>
    )
}
