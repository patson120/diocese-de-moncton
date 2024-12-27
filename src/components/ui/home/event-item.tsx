import { EventType } from '@/types'
import React from 'react'

export default function EventItem({data}: { data: EventType}) {
    return (
        <div className='p-2 md:p-3 rounded-lg flex flex-row justify-between items-center text-black border border-gray-200 divide-x hover:bg-[#EEDEE1] '>
            <div className='w-[70px] text-primary text-center flex-col justify-center items-center '>
                <p className='font-extrabold text-sm lg:text-base'>{data.jour}</p>
                <p className='text-xs md:text-sm lg:text-base'>{data.mois}</p>
            </div>
            <div className='flex-1 pl-2 md:pl-3'>
                <h3 className='text-sm lg:text-base font-semibold'>{data.heure}</h3>
                <p className='text-xs md:text-sm lg:text-base text-gray-500'>{data.lieu}</p>
            </div>
            <div className='flex-3 pl-2 md:pl-3'>
                <h3 className='text-sm lg:text-base font-semibold line-clamp-1'>{data.title}</h3>
                <p className='text-xs md:text-sm text-gray-500'>Type: {data.type}</p>
            </div>
        </div>
    )
}