"use client"

import { usePathname, useRouter } from '@/i18n/routing'
import { SlidersHorizontalIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Filter() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()


    const filters = [
        { label: 'Tous', value: -1 },
        { label: 'En activité', value: 1 },
        { label: 'Fermées', value: 0 },
    ]
    const [filter, setFilter] = useState(filters[0])

    const handleUpdateStatut = (item: any) => {
        setFilter(item)
        const params = new URLSearchParams(searchParams)
        if (item.label !== 'Tous') {
            params.set('statut', `${item.value}`)
        }
        else {
            params.delete('statut')
            setTimeout(() => {
                window.location.reload();
            },1);
        }
        replace(`${pathname}?${params.toString()}`)
    }

    
    return (
        <div className='flex flex-wrap items-center gap-2 !text-nowrap text-[10px]'>
            <div className='flex items-center gap-[6px]'>
                <SlidersHorizontalIcon className="h-4 w-4 text-gray-600" />
                <label className='font-bold xl:text-sm whitespace-nowrap flex' htmlFor="filter">
                    Filtrer <span className='hidden md:block ml-1'>les résultats</span>
                </label>
            </div>
            {
                filters.map((item, index) => (
                    <label key={index}
                        onClick={() => handleUpdateStatut(item)}
                        className={`body-2 px-2 py-1 rounded-xl cursor-pointer ${item.label === filter.label ? "font-bold bg-[#1D0104] text-white" : "border border-gray-100"} `}>
                        {item.label}
                    </label>
                ))
            }
        </div>
    )
}
