
import { formatDateToLocal } from '@/_lib/utils'
import { ActualiteType } from '@/types'
import Image from 'next/image'

export default function Actualite({ data }: { data: ActualiteType }) {

    return (
        <div className='w-full flex flex-col space-y-2'>
            <div className='relative h-56 md:h-64 w-full rounded-2xl overflow-hidden bg-gray-100'>
                <Image
                    alt={data.title}
                    src={data.image}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <span className='legend font-bold text-primary !-mb-2'>{data.category}</span>
            <h4 className='body-1 font-bold text-black line-clamp-2'>{data.title}</h4>
            <p className='body-2 line-clamp-2 text-[#575757]'>{data.description}</p>
            <p className='legend text-[#575757] text-xs md:text-sm'>Publié le {formatDateToLocal((new Date()).toISOString())}</p>
        </div>
    )
}
