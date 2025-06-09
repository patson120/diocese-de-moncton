"use client"

import { HoraireMesse } from '@/types'
import React, { useEffect, useState } from 'react'
import Horaires from './Horaires'
import Filter from './Filter'

export default function HorairesSection({ horaires}: { horaires: HoraireMesse[]}) {

    const [day, setDay] = useState(horaires.length ? horaires[0].jour : '')
    const [hours, setHours] = useState<HoraireMesse[]>([])
    
    useEffect(() => {
        if (horaires.length ) {
            const newDay = !day ? horaires[0].jour: day
            setDay(newDay)
            setHours(horaires.filter(h => h.jour === newDay))
        }
    }, [day, horaires])
    return (
        <>
            {/* filter */}
            <Filter day={day} setDay={setDay} />

            {/* Horaires */}
            <Horaires horaires={hours} />
        </>
    )
}
