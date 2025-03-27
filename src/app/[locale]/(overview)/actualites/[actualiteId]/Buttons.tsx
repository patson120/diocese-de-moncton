
"use client"
import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { TypeActualite } from '@/types'

export default function Buttons({ actualite }: { actualite: TypeActualite }) {
    const { push } = useRouter()

    const handleSearch = (i: number) => {
        console.log(actualite);
        
        if ( i > 0 && actualite.nextId ) push(`/actualites/${actualite.nextId}`)
        if (i < 0 && actualite.prevId )  push(`/actualites/${actualite.prevId}`)
    }

    return (
        <div className='space-x-2'>
            <Button
                onClick={() => handleSearch(-1)}
                size={'sm'}
                variant="outline"
                className={`${ actualite.prevId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300' } w-min bg-transparent hover:bg-transparent`}>
                Article précédent
            </Button>
            <Button
                onClick={() => handleSearch(1)}
                size={'sm'}
                variant="outline"
                className={`${actualite.nextId ? 'border-gray-300 text-gray-500' : 'border-gray-100 text-gray-300'} w-min bg-transparent hover:bg-transparent`}>
                Article suivant
            </Button>
        </div>
    )
}
