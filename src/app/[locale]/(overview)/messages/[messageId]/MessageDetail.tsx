import { Button } from '@/components/ui/shared/button'
import { Message } from '@/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default async function MessageDetail({ message }: { message: Message }) {

    return (
        <div className='col-span-full lg:col-span-4 pb-10 lg:pb-0 md:pr-10 lg:pr-20 border-b lg:border-r lg:border-r-[#E5E5E5] lg:border-b-transparent'>
            <div className='flex flex-col space-y-3'>
                <h1 className='heading-2 font-bold'>{message.message}</h1>
                <p className='body-2 text-[#575757]'>{message.message_fr}</p>
            </div>
            <div className='flex justify-end space-x-2 pt-20'>
                <Button
                    size={'sm'}
                    variant="outline"
                    className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                >
                    <ChevronLeft className="mr-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                    Message précédent
                </Button>
                <Button
                    size={'sm'}
                    variant="outline"
                    className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                >Message suivant
                    <ChevronRight className="ml-1 h-4 w-4 xl:h-5 xl:w-5 text-gray-500" />
                </Button>
            </div>
        </div>
    )
}
