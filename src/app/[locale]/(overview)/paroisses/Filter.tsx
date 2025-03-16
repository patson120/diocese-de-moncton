"use client"

import { SlidersHorizontalIcon } from 'lucide-react'
import React, { useState } from 'react'

export default function Filter() {
    const filters = ['Tous', 'En activité', 'Fermées']
    const [filter, setFilter] = useState('Tous')
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
                    <label key={index} onClick={()=>{setFilter(item)}} className={`body-2 px-2 py-1 rounded-xl cursor-pointer ${ item === filter ? "font-bold bg-[#1D0104] text-white": "border border-gray-100"} `}>{item}</label>
                ))
            }
        </div>
    )
}
