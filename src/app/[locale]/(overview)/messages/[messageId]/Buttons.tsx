'use client'

import Text from '@/components/Text'
import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { Message } from '@/types'

export default function Buttons({ message }: { message: Message }) {
    const { push } = useRouter()

    const handleSearch = (i: number) => {

        if (i > 0 && message.nextId) push(`/messages/${message.nextId}`)
        if (i < 0 && message.prevId) push(`/messages/${message.prevId}`)
    }
    return (
        <div className='space-x-2'>
            <Button
                onClick={() => handleSearch(-1)}
                size={'sm'}
                variant="outline"
                className={`${message.prevId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}>
                <Text keyString='prev_msg' />
            </Button>
            <Button
                onClick={() => handleSearch(1)}
                size={'sm'}
                variant="outline"
                className={`${message.nextId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}>
                    <Text keyString='next_msg' />
            </Button>
        </div>
    )
}
