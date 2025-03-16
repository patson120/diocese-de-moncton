
"use client"
import { Button } from '@/components/ui/shared/button'
import { usePathname, useRouter } from '@/i18n/routing'
import { TypeActualite } from '@/types'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Buttons({ actualites, actualiteId }: { actualites: TypeActualite[], actualiteId: number }) {
    const { replace } = useRouter()

    const index = actualites.findIndex(item => item.id === actualiteId)

    const handleSearch = (i: number) => {
        if ( i > 0 && index < actualites.length -1 ) {
            replace(`/actualites/${actualites[index + 1].id}`)
        } 
        if (i < 0 && index > 0 ) {
            replace(`/actualites/${actualites[index - 1].id}`)
        }
    }
    return (
        <div className='space-x-2'>
            <Button
                onClick={() => handleSearch(-1)}
                size={'sm'}
                variant="outline"
                className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'>
                Article précédent
            </Button>
            <Button
                onClick={() => handleSearch(1)}
                size={'sm'}
                variant="outline"
                className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'>
                Article suivant
            </Button>
        </div>
    )
}
