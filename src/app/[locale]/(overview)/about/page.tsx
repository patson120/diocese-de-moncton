'use client'

import { useTranslations } from 'next-intl'
import React, { useEffect, useRef } from 'react'
import { Link } from '@/i18n/routing';
// import { 
//     GoogleMap
//  } from "@react-google-maps/api";

import { Loader } from "@googlemaps/js-api-loader";
import { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } from '@/constants';

export default function Page() {
    const t = useTranslations("About")


    const mapRef = useRef(null)

    useEffect(() => {

        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: 'quartely'
            });
            const { Map } = await loader.importLibrary("maps")

            const locationInMap = {
                lat: 46.1182,
                lng: -71.1885,
            }

            // MARKER
            const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary

            const options: google.maps.MapOptions = {
                center: locationInMap,
                zoom: 12,
                mapId: 'NEXT_MAPS_TUTS'
            }

            const map = new Map(mapRef.current!, options)

            // Add a marker in the map
            const marker = new Marker({
                position: locationInMap,
                map: map
            })
            console.log(marker);
            
        }

        // 
        initializeMap()

    }, [])
    return (
        <>
            <div className='flex flex-col h-screen justify-center items-center'>
                <p className=''>{t('title')}</p>
                <p className='my-5'>Une petite description de cette page </p>
                <Link href='../' className='text-blue-600'>Retour à la page d&apos;accueil</Link>
            </div>
            <div className='h-96 w-full border-4 border-white' ref={mapRef}>
            </div>
        </>
    )
}

// const fetchGeoPosition = () => {
//     navigator.geolocation.getCurrentPosition(
//     position => { 
//       if (isActive){

//       setUserLatitude(position.coords.latitude);
//       setUserLongitude(position.coords.longitude);
//       setPositionError(null);


//       console.log('Location Accessed')

      
//     } 
//     setIsLoading(false)

//   }, 

//   error => isActive && setPositionError(error.message),
//   {enableHighAccuracy: true, timeout: 0, maximumAge: 1000} 
//   ); 