import { EventType } from '@/types'
import React from 'react'

export default function EventItem({ data, row }: { data: EventType, row?: boolean }) {
    return (
        <div className={`${row ? 'flex flex-row'  : 'flex flex-col'}   p-2 md:p-3 space-y-3 rounded-xl text-black border border-gray-200 hover:bg-[#EEDEE1]`}>
            <div className='flex flex-1 flex-row justify-between items-center divide-x'>
                <div className='w-[70px] text-center flex-col justify-center items-center '>
                    <p className='heading-4 font-extrabold text-primary'>{data.jour}</p>
                    <p className='body-1 text-primary'>{data.mois}</p>
                </div>
                <div className='flex-1 pl-2 md:pl-3'>
                    <h3 className='body-2 font-extrabold'>{data.heure}</h3>
                    <p className='body-3 text-gray-500'>{data.lieu}</p>
                </div>
            </div>
            <div className={`${row ? 'divide-x flex-1'  : 'divide-y space-y-2'}`}>
                <div className={`${row ? 'hidden'  : 'flex'}`}></div>
                <div className={`${row ? 'pl-4'  : 'pt-2 pl-2 md:pl-3'}`}>
                    <h3 className='body-2 font-extrabold line-clamp-1'>{data.title}</h3>
                    <p className='legend text-gray-500'>Type: {data.type}</p>
                </div>
            </div>
        </div>
    )
}