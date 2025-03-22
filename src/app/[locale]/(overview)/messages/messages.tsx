import { fetchMessages } from '@/_lib/data'
import MessageComp from '@/components/ui/shared/MessageComp'
import Pagination from '@/components/ui/shared/pagination'
import { Link } from '@/i18n/routing'
import { Message } from '@/types'
import React from 'react'

export default async function Messages({ currentPage }: { currentPage: number }) {
    const response = await fetchMessages(`?paginate=9&page=${currentPage}`)
    const messages: Message[] = response.data
    const totalPages = response.last_page
    return (
        <>
            <div className="grid gap-6 md:gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    messages.map((item, index) => (
                        <Link key={index} href={`/messages/${item.id}`}>
                            <MessageComp message={item} />
                        </Link>
                    ))
                }
            </div>
            {/* Pagination */}
            <div className="mt-20 flex w-full justify-end">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}
