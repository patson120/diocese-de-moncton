"use client"

import { HoraireMesse } from '@/types'
import React, { useEffect, useState } from 'react'
import Horaires from './Horaires'
import Filter from './Filter'

export default function HorairesSection({ horaires}: { horaires: any}) {
    const [day, setDay] = useState('')
    const [keys, setKeys] = useState<string[]>([])
    const [hours, setHours] = useState<HoraireMesse[]>([])
    
    useEffect(() => {
        if (horaires && Object.keys(horaires).length){
            let days = Object.keys(horaires)
            setKeys(days)
            setDay(days[0])
        }
    }, [horaires])

    useEffect(() => {
        if (keys.length) {
            setHours(horaires[day.toLowerCase()] as HoraireMesse[])
        }
    }, [day, setDay])
    
    
    return (
        <>
            {/* filter */}
            <Filter day={day} setDay={setDay} />

            {/* Horaires */}
            <Horaires horaires={hours} />
        </>
    )
}
