
"use client"
import { SlidersHorizontalIcon } from 'lucide-react'
import React, { useState } from 'react'

export default function Filter() {
    const filters = ['Tous', 'Catéchèse', 'Diocèse']
    const [filter, setFilter] = useState('Tous')
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <div className='flex items-center space-x-2'>
                <SlidersHorizontalIcon className="h-4 w-5 text-gray-600" />
                <label className='text-sm font-bold whitespace-nowrap' htmlFor="filter">Filtrer les résultats</label>
                {/* <select id="date" name="date" className="border-2 border-gray-200 p-2 rounded-lg w-full">
                    <option value="" disabled>Tous</option>
                    <option value="2023-01-01">Janvier 2023</option>
                    <option value="2023-02-01">Février 2023</option>
                    <option value="2023-03-01">Mars 2023</option>
                </select> */}
            </div>
            <div className='flex items-center flex-wrap gap-2'>
                {
                    filters.map((item, index) => (
                        <label key={index} onClick={() => { setFilter(item) }} className={`text-sm p-[10px] rounded-xl cursor-pointer ${item === filter ? "font-bold bg-[#1D0104] text-white" : "border border-gray-100"} `}>{item}</label>
                    ))
                }
            </div>
        </div>
    )
}
