"use client"

import { HoraireMesse } from '@/types'
import React, { useState } from 'react'
import Horaires from './Horaires'
import Filter from './Filter'

export default function HorairesSection({ horaires}: { horaires: HoraireMesse[]}) {
    const [day, setDay] = useState('')
    
    return (
        <>
            {/* filter */}
            <Filter day={day} setDay={setDay} />

            {/* Horaires */}
            <Horaires horaires={horaires} />
        </>
    )
}
