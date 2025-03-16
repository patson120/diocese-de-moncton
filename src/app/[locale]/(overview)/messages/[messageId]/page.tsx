import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/shared/button'
import { MessageDetailSkeleton, RelativesMessagesSkeleton } from '@/components/ui/shared/skeletons'
import { Suspense } from 'react'
import MessageDetail from './MessageDetail'
import RelativesMessages from './RelativesMessages'
import { Message } from '@/types'
import { fetchMessages } from '@/_lib/data'

export default async function Page(props: {
    params: Promise<{ messageId: string }>,
}) {
    const { messageId } = await props.params;
    const message: Message = await fetchMessages(`/${messageId}`)
    let messages: Message[] = await fetchMessages()
    messages = messages.filter(message => message.id !== Number(messageId))
    return (
        <>
            <div className='flex justify-between items-center border-y border-y-gray-100 '>
                <div className="container max-margin py-4 flex justify-between ">
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: 'Accueil', href: '/' },
                            {
                                label: 'Messages',
                                href: '/messages',
                            },
                            {
                                label: message.message_fr.length > 30 ? `${message.message_fr.slice(0, 30)}...` : message.message_fr,
                                href: '',
                                active: true,
                            },
                        ]}
                    />
                    <div className='space-x-2'>
                        <Button
                            size={'sm'}
                            variant="outline"
                            className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                        >Message précédent
                        </Button>
                        <Button
                            size={'sm'}
                            variant="outline"
                            className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                        >Message suivant
                        </Button>
                    </div>
                </div>
            </div>
            <section className='container max-margin py-0' >
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-10 xl:gap-16 py-4 lg:py-12 xl:pb-20'>

                    <Suspense fallback={<MessageDetailSkeleton />} >
                        <MessageDetail message={message} />
                    </Suspense>

                    <Suspense fallback={<RelativesMessagesSkeleton />} >
                        <RelativesMessages messages={messages.slice(0, 5)} />
                    </Suspense>

                </div>
            </section>
        </>
    )
}
