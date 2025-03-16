"use client"

import { MapPin, Search } from 'lucide-react'
import React, { ChangeEvent } from 'react'
import { Button } from './button'
import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/routing'

export default function SearchParoisses() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const params = new URLSearchParams(searchParams)
        if (value) { params.set('query', value) }
        else { params.delete('query') }
        replace(`${pathname}?${params.toString()}#evenements`)
    }, 800)

    return (
        <div className='w-full absolute top-4 left-0 right-0'>
            <div className="px-5 w-[95%] flex gap-2">
                <div className='relative flex-1'>
                    <input type="text"
                        placeholder="Entrez le code postale ou la ville..."
                        onChange={handleSearch}
                        defaultValue={searchParams.get('query')?.toString()}
                        className="w-full border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-10 py-2
                                    text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                                    placeholder:text-xs sm:text-sm sm:leading-6 outline-none"/>
                    <Search className="mr-2 h-4 w-4 text-gray-300 absolute top-3 left-3" />
                </div>
                <Button variant="secondary" className='bg-[#1D0104] text-[12px] text-white hover:bg-[#230105]'>
                    <MapPin className="md:mr-2 h-4 w-4 text-white" />
                    <span className='hidden md:flex !text-white'>Prendre ma position</span>
                </Button>
            </div>
        </div>
    )
}
