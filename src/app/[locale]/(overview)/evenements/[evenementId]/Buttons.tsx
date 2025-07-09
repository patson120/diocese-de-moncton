'use client'

import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { TypeEvent } from '@/types'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Buttons({ event }: { event: TypeEvent }) {
    const { push } = useRouter()
    const t = useTranslations("events")

    const handleSearch = (i: number) => {

        if (i > 0 && event.nextId) push(`/evenements/${event.nextId}`)
        if (i < 0 && event.prevId) push(`/evenements/${event.prevId}`)
    }
    return (
        <div className='space-x-2'>
            <Button
                onClick={() => handleSearch(-1)}
                size={'sm'}
                variant="outline"
                className={`${event.prevId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}
            >{t("precedent")}
            </Button>
            <Button
                onClick={() => handleSearch(1)}
                size={'sm'}
                variant="outline"
                className={`${event.nextId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}
            >{t("suivant")}
            </Button>
        </div>
    )
}
