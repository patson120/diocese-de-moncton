"use client"

import { usePathname } from '@/i18n/routing'
import { SlidersHorizontalIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Filter() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    // const { replace } = useRouter()
    const localActive = useLocale()


    const filters = [
        { label: 'Tous', text: localActive === "fr" ? "Tous" : "All", value: null },
        { label: 'En activité', text: localActive === "fr" ? "En activité" : "In activity", value: 1 },
        { label: 'Fermées', text: localActive === "fr" ? "Fermées" : "Close", value: 0 },
        { label: 'Francophone', text: localActive === "fr" ? "Francophone" : "French-speaking", value: 'fr' },
        { label: 'Anglophone', text: localActive === "fr" ? "Anglophone" : "English-speaking", value: 'en' },
    ]
    const [filter, setFilter] = useState<any>()

    const handleUpdateStatut = (item: any) => {
        setFilter(item)
        const params = new URLSearchParams(searchParams)
        if (item.label !== 'Tous') {
            if(item.value =='fr' || item.value =='en' ){
                params.set('langue', `${item.value}`)
                params.delete('statut')
            }
            else{
                params.set('statut', `${item.value}`)
                params.delete('langue')
            }
        }
        else {
            params.delete('statut')
            params.delete('langue')
        }
        // replace(`${pathname}?${params.toString()}`)
        window.location. href = `/${localActive}/${pathname}?${params.toString()}`
    }

    useEffect(() => {
        const statut = searchParams.get('statut')
        const langue = searchParams.get('langue')
    
        if (statut) 
            setFilter(filters.find(f => f.value === Number(statut)))
        else if (langue)
            setFilter(filters.find(f => f.value === langue))
        else setFilter(filters[0])
    }, [])
    
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
                        className={`body-2 px-2 py-1 rounded-xl cursor-pointer ${item.label === filter?.label ? "font-bold bg-[#1D0104] text-white" : "border border-gray-100"} `}>
                        {item.text}
                    </label>
                ))
            }
        </div>
    )
}
