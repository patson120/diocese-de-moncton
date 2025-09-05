import { fetchActualites } from '@/_lib/data'
import { formatDateToLocal } from '@/_lib/utils'
import Text from '@/components/Text'
import { Link } from '@/i18n/routing'
import { TypeActualite } from '@/types'
import { cookies } from 'next/headers'
import Image from 'next/image'
import React from 'react'

export default async function ImportantPost() {
    const response = await fetchActualites(`?paginate=1`)
    const actualite: TypeActualite = response.data[0]

    const cookieStore = cookies();
    const userLanguage = cookieStore.get('NEXT_LOCALE')?.value || 'fr';
  
    return (
        <Link href={`/actualites/${actualite.id}`} className='w-full text-black  grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='relative h-72 xl:h-96 w-full rounded-2xl overflow-hidden bg-gray-100'>
                <Image
                    alt={`${actualite.titre_fr}/${actualite.titre_en}`}
                    src={actualite.galerie.length ? `${process.env.NEXT_PUBLIC_BASE_URL}/${actualite.galerie[0].path}` :"/assets/img/new-4.png"}
                    fill
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className='space-y-4'>
                <div>
                    <span className='legend font-bold text-primary'><Text labelEn={actualite.categorie.intitule_en} labelFr={actualite.categorie.intitule_fr} /></span>
                    <h4 className='heading-3 line-clamp-2'><Text labelEn={actualite.titre_en} labelFr={actualite.titre_fr} /></h4>
                </div>
                <p className='body-2 line-clamp-6 text-gray-500'><Text labelEn={actualite.description_en} labelFr={actualite.description_fr} /></p>
                <p className='body-3 text-gray-400'><Text keyString='publier_le' /> {formatDateToLocal((new Date(actualite?.date_publication ? actualite?.date_publication : actualite?.created_at)).toISOString(), userLanguage === 'en' ? "en-EN": 'fr-FR')}</p>
            </div>
        </Link >
    )
}
