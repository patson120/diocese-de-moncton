'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Paroisse } from '@/types';


interface MapProps {
  parishes: Paroisse[];
  selectedParish: Paroisse | null;
  onParishSelect: (parish: Paroisse) => void;
}

export default function Map({ parishes, selectedParish, onParishSelect }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: number]: google.maps.Marker }>({});

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current && !googleMapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: parseFloat(parishes[0].gps.split(";")[0]), lng: parseFloat(parishes[0].gps.split(";")[1])},
          zoom: 12,
          styles: [
            {
              featureType: 'poi.business',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });

        googleMapRef.current = map;

        parishes.forEach((parish) => {
          const marker = new google.maps.Marker({
            position: { lat: parseFloat(parish.gps.split(";")[0]), lng: parseFloat(parish.gps.split(";")[1]) },
            map,
            title: parish.nom,
            animation: google.maps.Animation.DROP,
          });

          marker.addListener('click', () => {
            onParishSelect(parish);
          });

          markersRef.current[parish.id] = marker;
        });
      }
    });
  }, [parishes, onParishSelect]);

  useEffect(() => {
    if (selectedParish && googleMapRef.current) {
      const marker = markersRef.current[selectedParish.id];
      if (marker) {
        googleMapRef.current.panTo(marker.getPosition()!);
        googleMapRef.current.setZoom(15);
      }
    }
  }, [selectedParish]);

  return <div ref={mapRef} className="h-full w-full" />;
}