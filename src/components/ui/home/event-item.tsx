import { EventType } from '@/types'
import React from 'react'

export default function EventItem({data}: { data: EventType}) {
    return (
        <div className='p-2 md:p-3 rounded-lg flex flex-row justify-between items-center text-black border border-gray-200 divide-x hover:bg-[#EEDEE1] '>
            <div className='w-10 text-primary text-center flex-col justify-center items-center '>
                <p className='font-extrabold text-sm md:text-sm'>{data.jour}</p>
                <p className='text-xs'>{data.mois}</p>
            </div>
            <div className='flex-1 pl-2 md:pl-3'>
                <h3 className='text-sm font-semibold'>{data.heure}</h3>
                <p className='text-xs text-gray-500'>{data.lieu}</p>
            </div>
            <div className='flex-1 pl-2 md:pl-3'>
                <h3 className='text-xs font-semibold line-clamp-1'>{data.title}</h3>
                <p className='text-[11px] text-gray-500'>Type: {data.type}</p>
            </div>
        </div>
    )
}