
import { formatDateToLocal } from '@/_lib/utils'
import { ActualiteType } from '@/types'
import Image from 'next/image'

export default function Actualite({ data }: { data: ActualiteType }) {

    return (
        <div className='w-full text-black flex flex-col space-y-2'>
            <div className='relative h-52 w-full rounded-xl overflow-hidden bg-gray-100'>
                <Image
                    alt={data.title}
                    src={data.image}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <span className='text-sm font-medium text-primary'>{data.category}</span>
            <h4 className='text-xs md:text-sm lg:text-base xl:text-lg font-bold line-clamp-2'>{data.title}</h4>
            <p className='line-clamp-2 text-xs md:text-sm lg:text-base text-gray-500'>{data.description}</p>
            <p className='text-gray-500 text-xs md:text-sm'>Publié le {formatDateToLocal((new Date()).toISOString())}</p>
        </div>
    )
}
