import Text from '@/components/Text'
import { Button } from '@/components/ui/shared/button'
import { mapper } from '@/constants'
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
                            <div className={`${selectedHour?.id === item.id ? 'bg-[#F9F4F5]' : ''} rounded-[8px] h-12 border border-[#D9D9D9] p-3 flex justify-between items-center`}>
                                <h1 className='body-1 font-bold'><span className='mr-3 font-normal'>{localActive === 'fr' ? item.jour : mapper[item.jour.toLocaleLowerCase()]}</span>{item.heure}</h1>
                                <div>
                                    {
                                        (selectedHour?.id !== item.id) &&
                                        <Button onClick={() => { setSelectedHour(item) }}
                                            size='sm'
                                            variant='ghost'
                                            className="pr-0">
                                            {t("voir")}
                                            <Plus className="ml-2 h-4 w-6" />
                                        </Button>
                                    }
                                    {
                                        (selectedHour?.id === item.id) &&
                                        <Button onClick={() => { setSelectedHour(null) }}
                                            size='sm'
                                            variant='ghost'
                                            className="pr-0">
                                            {t("fermer")}
                                            <Plus className="ml-2 h-4 w-6 rotate-45" />
                                        </Button>
                                    }

                                </div>
                            </div>
                            {
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
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
