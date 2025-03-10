
import { fetchMessages } from '@/_lib/data'
import { Button } from '@/components/ui/shared/button'
import MessageComp from '@/components/ui/shared/MessageComp'
import { Link } from '@/i18n/routing'
import { Message } from '@/types'
import { ArrowRight } from 'lucide-react'

export default async function RelativesMessages() {
    // Fetch messages data from API
    const messages: Message[] = await fetchMessages()
    
    return (
        <div className='col-span-full lg:col-span-2 flex flex-col space-y-4 mb-10 pt-4 md:pt-0'>
            <h1 className='heading-3 font-extrabold'>Autres message</h1>
            <div className="hidden md:flex flex-col gap-4 lg:gap-6">
                {
                    messages.slice(0, 5).map((item, index) => (
                        <Link key={index} href={`/messages/${item.id}`}>
                            <MessageComp message={item} />
                        </Link>
                    ))
                }
            </div>
            <div className="md:hidden flex flex-col gap-4">
                {
                    messages.slice(0, 3).map((item, index) => (
                        <Link key={index} href={`/messages/${item.id}`}>
                            <MessageComp message={item} />
                        </Link>
                    ))
                }
            </div>
            <Link href='/messages' className="block md:hidden mt-5" >
                <Button className="w-full md:py-6 text-sm md:text-base lg:text-xl">
                    Voir toutes les messages
                    <ArrowRight className="ml-2 h-4 w-6 hover:ml-4 hover:transition-all hover:duration-300 " />
                </Button>
            </Link>
        </div>
    )
}
