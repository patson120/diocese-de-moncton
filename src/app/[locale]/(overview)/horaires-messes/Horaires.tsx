import Text from '@/components/Text'
import { Button } from '@/components/ui/shared/button'
import { mapper } from '@/constants'
import { Link } from '@/i18n/routing'
import { HoraireMesse } from '@/types'
import { Plus } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function Horaires({ horaires }: { horaires: HoraireMesse[]}) {
    const [selectedHour, setSelectedHour] = useState<HoraireMesse | null>()

    const localActive = useLocale()

    const t = useTranslations("horaires_messe")
    return (
        <div className="mt-8 lg:mt-16 flex flex-col justify-center items-center">
            <div className='w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4'>
                {
                    horaires.length === 0 &&
                    <div>
                        <p className='text-muted-foreground text-center'>{t("aucune_horaire")}</p>
                    </div>
                }
                {
                    horaires.map((item, index) => (
                        <div key={`${item.id}-${index}`}>
                            {
                                item.paroisse &&
                                <div className={`${selectedHour?.id === item.id ? 'bg-[#F9F4F5]' : ''} rounded-[8px] min-h-12 border border-[#D9D9D9] p-3 flex justify-between items-center`}>
                                    <div>
                                        <h1 className='body-1 font-bold'>
                                            <span className='mr-3 font-semibold'>
                                                {/* localActive === 'fr' ? item.jour : mapper[item.jour.toLocaleLowerCase()]*/}
                                                {localActive === 'fr' ? item.paroisse.nom : item.paroisse.nom_en}
                                            </span>
                                            
                                        </h1>
                                        <div className='flex flex-wrap items-end gap-2 mt-2'>
                                        <p className="text-gray capitalize">{item.jour}</p>
                                        {
                                            item.heure.split(';').map((heure, i) => (
                                                <p key={`${i}-${heure}`} className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">{heure}</p>
                                            ))
                                        }
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            (selectedHour?.id !== item.id) &&
                                            <Link href={`/paroisses/${item.paroisse.id}`} 
                                                className="px-3 py-1 rounded-lg flex flex-row items-center bg-primary/10 border border-gray-200">
                                                {t("voir")}
                                                <Plus className="ml-2 h-4 w-6" />
                                            </Link>
                                        }
                                        {/*
                                            (selectedHour?.id === item.id) &&
                                            <Button onClick={() => { setSelectedHour(null) }}
                                                size='sm'
                                                variant='ghost'
                                                className="pr-0">
                                                {t("fermer")}
                                                <Plus className="ml-2 h-4 w-6 rotate-45" />
                                            </Button>
                                        */}

                                    </div>
                                </div>
                            }
                            {/*
                                ((selectedHour?.id === item.id) && (selectedHour?.activites!.length! > 0)) &&
                                <ul className='my-3 ml-8 space-y-2'>
                                    {
                                        item.activites.map((item, index) => (
                                            <li key={index} className='list-disc'>
                                                <Text labelEn={item.intitule_en!} labelFr={item.intitule_fr!} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            */}
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
