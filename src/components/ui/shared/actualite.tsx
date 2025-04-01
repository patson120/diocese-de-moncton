
import { formatDateToLocal } from '@/_lib/utils'
import Text from '@/components/Text'
import { TypeActualite } from '@/types'
import Image from 'next/image'

export default function Actualite({ data }: { data: TypeActualite }) {

    return (
        <div className='w-full flex flex-col space-y-2'>
            <div className='relative h-56 md:h-64 w-full rounded-2xl overflow-hidden bg-gray-100'>
                <Image
                    alt={data.titre_fr}
                    src={'/assets/img/new-1.png'}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <span className='legend font-bold text-primary !-mb-2'>
                <Text labelEn={data.categorie.intitule_en} labelFr={data.categorie.intitule_fr} />
            </span>
            <h4 className='body-1 font-bold text-black line-clamp-2'>
                <Text labelEn={data.titre_en} labelFr={data.titre_fr} />
            </h4>
            <p className='body-2 line-clamp-2 text-[#575757]'>
                <Text labelEn={data.description_en} labelFr={data.description_fr} />
            </p>
            <p className='legend text-[#575757] text-xs md:text-sm'><Text keyString='publier_le' /> {formatDateToLocal((new Date(data.date_publication)).toISOString())}</p>
        </div>
    )
}
