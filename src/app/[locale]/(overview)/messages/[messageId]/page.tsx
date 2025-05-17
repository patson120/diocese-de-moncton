import { fetchMessages } from '@/_lib/data'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { MessageDetailSkeleton, RelativesMessagesSkeleton } from '@/components/ui/shared/skeletons'
import { Message } from '@/types'
import { Suspense } from 'react'
import Buttons from './Buttons'
import MessageDetail from './MessageDetail'
import RelativesMessages from './RelativesMessages'

export default async function Page(props: {
    params: Promise<{ messageId: string }>,
}) {
    const { messageId } = await props.params;
    const message: Message = await fetchMessages(`/${messageId}`)
    let messages: Message[] = await fetchMessages(`?etat=1`)
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
                                label: "",
                                href: '',
                                active: true,
                                data: {
                                    labelEn: message.titre_en.length > 30 ? `${message.titre_en.slice(0, 30)}...`: message.titre_en,
                                    labelFr: message.titre_fr.length > 30 ? `${message.titre_fr.slice(0, 30)}...`: message.titre_fr
                                }
                            },
                        ]}
                    />
                    <Buttons message={message} />
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
