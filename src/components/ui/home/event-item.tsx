import { formatDateToLocal } from '@/_lib/utils'
import Text from '@/components/Text'
import { TypeEvent } from '@/types'
import { cookies } from 'next/headers';

export default function EventItem({ data, row }: { data: TypeEvent, row?: boolean }) {
    const cookieStore = cookies();
    const userLanguage = cookieStore.get('NEXT_LOCALE')?.value || 'fr';
    return (
        <div className={`${row ? 'flex flex-row' : 'flex flex-col'}   p-2 md:p-3 space-y-3 rounded-xl text-black border border-gray-200 hover:bg-[#EEDEE1]`}>
            <div className='flex flex-1 flex-row justify-between items-center divide-x'>
                <div className='w-[70px] text-center flex-col justify-center items-center '>
                    <p className='heading-4 font-extrabold text-primary'>{formatDateToLocal((new Date(data.date_event)).toISOString(),  userLanguage === 'en' ? "en-EN": 'fr-FR').split(" ")[0]}</p>
                    <p className='body-1 text-primary'>{formatDateToLocal((new Date(data.date_event)).toISOString(), userLanguage === 'en' ? "en-EN": 'fr-FR').split(" ")[1]} <span className='font-bold'>{formatDateToLocal((new Date(data.date_event)).toISOString(), userLanguage === 'en' ? "en-EN": 'fr-FR').split(" ")[2]}</span></p>
                </div>
                <div className='flex-1 pl-2 md:pl-3'>
                    <h3 className='body-2 font-extrabold'>{data.heure_event}</h3>
                    <p className='body-3 text-gray-500'>{data.lieu}</p>
                </div>
            </div>
            <div className={`${row ? 'divide-x flex-1' : 'divide-y space-y-2'}`}>
                <div className={`${row ? 'hidden' : 'flex'}`}></div>
                <div className={`${row ? 'pl-4' : 'pt-2 pl-2 md:pl-3'}`}>
                    <h3 className='body-2 font-extrabold line-clamp-1'>
                        <Text labelEn={data?.titre_en} labelFr={data?.titre_fr} />
                    </h3>
                    <p className='legend text-gray-500'>Type:
                        <Text labelEn={data?.categorie?.intitule_en} labelFr={data?.categorie?.intitule_fr} />
                    </p>
                    <p className='legend text-gray-500'>Contact:
                        <span className='font-semibold'> {data.contact} </span>
                    </p>
                </div>
            </div>
        </div>
    )
}