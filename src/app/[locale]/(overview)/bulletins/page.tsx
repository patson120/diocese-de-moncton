"use client"

import { fetchBulletins, fetchUnitesPastorales } from '@/_lib/data'
import { formatDateToLocal } from '@/_lib/utils'
import { HeroSectionSecond } from '@/components/sections/hero-second'
import Text from '@/components/Text'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bulletin, TypeParoisse } from '@/types'
import { ArrowUpRight, SlidersHorizontalIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function Page() {
    const t = useTranslations("bulletins")
    const userLanguage = useLocale();

    const [isFetching, setisFetching] = useState(false)

    const [bulletins, setBulletins] = useState<Bulletin[]>([])
    const [unitesPastorales, setUnitesPastorales] = useState<TypeParoisse[]>([])
    const [selectedUnitesPastorales, setSelectedUnitesPastorales] = useState<TypeParoisse | undefined>(undefined)
    
    useEffect(() => {
        ( async () => {
            // Fetch Unités Pastorales
            setisFetching(true)
            const unitesPastorales: TypeParoisse[] = await fetchUnitesPastorales()
            setUnitesPastorales(unitesPastorales)
            if (unitesPastorales.length){
                setSelectedUnitesPastorales(unitesPastorales[0])
            }
        })();
    }, [])

    useEffect(() => {        
        ( async () => {
            // Fetch Bulletins
            if (selectedUnitesPastorales?.id){
                try {
                    const params = `?unite_id=${selectedUnitesPastorales.id}&paginate=4`
                    const response = await fetchBulletins(params)
                    setBulletins(response.data)                    
                } catch (error: any) { console.log(error.message) }
                finally{ setisFetching(false) }
            }
        })();
    }, [ selectedUnitesPastorales?.id])
    
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={t("bulletin_paroissiaux")}
                subtitle={t("hero_desc")}
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                {/* filter */}
                <div className='border-b border-b-gray-100 pb-8 mb-10 mt-5 md:mt-12 flex flex-col md:flex-row md:items-center gap-3 lg:gap-4 w-full md:w-auto'>
                    <div className='flex items-center gap-[6px]'>
                        <SlidersHorizontalIcon className="h-5 w-5 text-gray-600" />
                        <label className='font-bold whitespace-nowrap' htmlFor="filter">{t("filtrer_resultats")}</label>
                    </div>
                    <Select
                        onValueChange={(value) => {
                            const filtered = unitesPastorales.find(unite => `${unite.id}` === value);
                            setSelectedUnitesPastorales(filtered);
                        }}
                        defaultValue={selectedUnitesPastorales ? `${selectedUnitesPastorales.id}` : undefined}>
                        <SelectTrigger>
                            <SelectValue placeholder={t("unite_placeholder")} />
                        </SelectTrigger>
                        <SelectContent>
                        {
                            unitesPastorales && unitesPastorales.map((unite: TypeParoisse) => (
                            <SelectItem key={unite.id} value={`${unite.id}`}>
                                { userLanguage === 'en' ? (unite.intitule_en ?? unite.intitule_fr) : unite.intitule_fr }
                            </SelectItem>
                            ))
                        }
                        </SelectContent>
                    </Select>
                </div>
                {
                    isFetching ?
                    <div className='h-96 w-full flex justify-center items-center'>
                        <LoadingSpinner />
                    </div> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5'>
                        {
                            bulletins.length > 0 && bulletins.map((item, index) => 
                                <a key={index} href={ item.lien_externe ?? `${process.env.NEXT_PUBLIC_BASE_URL}/${item.document}`} target='_blank' 
                                className='border border-[#D9D9D9] rounded-lg p-5 flex justify-between items-start space-x-2'>
                                    <p className='truncate'>{ 
                                        item.lien_externe ? 
                                        item.lien_externe.split("/")[item.lien_externe.split("/").length -1].split(".")[0] : 
                                        (item.titre_fr ?? item.titre_en)} 
                                        <br />
                                        <span className="text-gray-400 text-xs">
                                            { formatDateToLocal(item.created_at, userLanguage === 'en' ? "en-EN": 'fr-FR') }
                                        </span>
                                    </p>
                                    <ArrowUpRight className="h-6 w-10 shrink-0 ml-4" />
                                </a>
                            )
                        }
                        {
                            bulletins.length === 0 &&
                            <div className='h-96 w-full flex justify-center items-center'>
                                <p className="text-center text-gray-400 text-sm"><Text keyString="aucun_bulletin" /></p>
                            </div>
                        }
                    </div>
                }
            </section> 
            <div className='mt-10 lg:mt-20'></div>
        </main>
    )
}
