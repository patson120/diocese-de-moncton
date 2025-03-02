'use client'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/shared/button'
import MessageComp from '@/components/ui/shared/MessageComp'
import { messages } from '@/constants'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'
import { Suspense } from 'react'
import MessageDetail from './MessageDetail'
import { MessageDetailSkeleton, RelativesMessagesSkeleton } from '@/components/ui/shared/skeletons'
import RelativesMessages from './RelativesMessages'

const Page = () => {
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
                                label: 'Décret de suppression de la paroisse Saint...',
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
                        <MessageDetail />
                    </Suspense>

                    <Suspense fallback={<RelativesMessagesSkeleton />} >
                        <RelativesMessages />
                    </Suspense>
                    
                </div>
            </section>
        </>
    )
}
export default Page