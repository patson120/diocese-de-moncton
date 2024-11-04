import React from 'react'

export default function EventItem() {
    return (
        <div className='p-3 rounded-lg flex flex-row justify-between items-center text-black border border-gray-200 divide-x divide'>
            <div className='pl-3 text-primary text-center flex-col justify-center items-center'>
                <p className='font-extrabold text-lg'>08</p>
                <p className='text-xs'>Sept</p>
            </div>
            <div className='pl-3'>
                <h3 className='text-sm font-semibold'>15h : 00</h3>
                <p className='text-xs text-gray-500'>Au Diocèse de Moncton</p>
            </div>
            <div className='pl-3'>
                <h3 className='text-sm font-semibold line-clamp-1'>Soupé au homard à pointe Sapin</h3>
                <p className='text-xs text-gray-500'>Type: Communautaire, Formation, Célébration</p>
            </div>
        </div>
    )
}