"use client"

import { usePathname, useRouter } from '@/i18n/routing'
import { MapPin, Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Button } from './button'
import { useTranslations } from 'next-intl'

export default function SearchParoisses() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const ts = useTranslations("search")

    const handleSearch = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const params = new URLSearchParams(searchParams)
        if (value) { params.set('query', value) }
        else { params.delete('query') }
        replace(`${pathname}?${params.toString()}#evenements`)
    }, 800)

    const deletePosition = () => {
        const params = new URLSearchParams(searchParams)
        params.delete('gps')
        replace(`${pathname}?${params.toString()}#evenements`)
    }

    const [isActive, setIsActive] = useState(false)
    const [userLatitude, setUserLatitude] = useState<number>()
    const [userLongitude, setUserLongitude] = useState<number>()
    const [positionError, setPositionError] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)


    const fetchGeoPosition = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                if (isActive) {
                    setUserLatitude(position.coords.latitude);
                    setUserLongitude(position.coords.longitude);
                    setPositionError(null);

                    const params = new URLSearchParams(searchParams)
                    params.set('gps', `${position.coords.latitude};${position.coords.longitude}`)
                    replace(`${pathname}?${params.toString()}#evenements`)
                }
                setIsLoading(false)
            },
            error =>{
                isActive && setPositionError(error.message)},
            { enableHighAccuracy: true, timeout: 5*60*60, maximumAge: 10000 }
        );
    }

    // Récupération de la position géographique de l'utilisateur
    useEffect(() => {
        if (isActive) {
            setIsLoading(true)
            fetchGeoPosition()
        }
        return () => setIsActive(false)
    }, [isActive])

    const getLocation = () => {
        setIsActive(true)
    }

    return (
        <div className='w-full absolute top-4 left-0 right-0'>
            <div className="px-5 w-[95%] flex gap-2">
                <div className='relative flex-1'>
                    <input type="text"
                        placeholder={ts("placeholder")}
                        onChange={handleSearch}
                        defaultValue={searchParams.get('query')?.toString()}
                        className="w-full border border-gray-100 bg-gray-50 rounded-lg pr-3 pl-10 py-2
                                    text-gray-900 ring-1 ring-inset ring-gray-50 placeholder:text-gray-400
                                    placeholder:text-xs sm:text-sm sm:leading-6 outline-none"/>
                    <Search className="mr-2 h-4 w-4 text-gray-300 absolute top-3 left-3" />
                </div>
                <Button onClick={ () => {
                    if (searchParams.get('gps')?.toString()) { deletePosition() } 
                    else { getLocation() }
                } } variant="secondary" className='bg-[#1D0104] text-[12px] text-white hover:bg-[#230105]'>
                    <MapPin className="md:mr-2 h-4 w-4 text-white" />
                    <span className='hidden md:flex !text-white'>
                        { searchParams.get('gps')?.toString() ? ts("gps_cancel_btn") : ts("gps_btn") }
                    </span>
                </Button>
            </div>
        </div>
    )
}