"use client"

import { fetchEvents } from '@/_lib/data'
import { TypeEvent } from '@/types'
import { useEffect, useState } from 'react'
import { CalendarGrid } from './components/calendar/calendar-grid'
import { CalendarHeader } from './components/calendar/calendar-header'

export default function Calendrier() {
    
    const [evenements, setEvenements] = useState<TypeEvent[]>([])
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<"day" | "week" | "month">("month");

    const getEvents = async () => {
        const response = await fetchEvents()
        setEvenements(response)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            
            <CalendarHeader
                currentDate={currentDate}
                view={view}
                onDateChange={setCurrentDate}
                onViewChange={setView}
            />
            <div className="mt-6">
                <CalendarGrid 
                    currentDate={currentDate} 
                    events={evenements}
                    view={view}
                />
            </div>
        </div>
    )
}
