'use client';

import { useRouter } from '@/i18n/routing';
import { Paroisse } from '@/types';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef, useState } from 'react';

interface MapProps {
  parishes: Paroisse[];
  selectedParish: Paroisse | null;
  onParishSelect: (parish: Paroisse) => void;
}

export default function Map({ parishes, selectedParish, onParishSelect }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: number]: google.maps.Marker }>({});
  let map: google.maps.Map;

  const router = useRouter();

  const [first, setfirst] = useState<Paroisse>(selectedParish!)

  useEffect(() => {
    setfirst(prev => ({ ...prev, ...parishes[0] }))

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current && !googleMapRef.current) {
        map = new google.maps.Map(mapRef.current, {
          center: { 
            lat: first ? parseFloat(first!.gps?.split(";")[0]) : 46.091091,
            lng: first ? parseFloat(first!.gps?.split(";")[1]) : -64.781880
          },
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
            position: { 
              lat: parish?.gps ? parseFloat(parish?.gps.split(";")[0]) : 46.091091, 
              lng: parish?.gps ? parseFloat(parish?.gps.split(";")[1]) : -64.781880
            },
            map,
            title: parish?.nom || '',
            animation: google.maps.Animation.DROP,
          });

          marker.addListener('click', () => {
            onParishSelect(parish);
            // googleMapRef.current?.panTo(marker.getPosition()!);
            // googleMapRef.current?.setZoom(15);
            if (parish?.id) {router.push(`/paroisses/${parish?.id}`)}
          });

          markersRef.current[parish?.id] = marker;
        });
      }
    });

  }, [parishes, onParishSelect, first?.gps]);

  // useEffect(() => {
  //   if (selectedParish && googleMapRef.current) {
  //     const marker = markersRef.current[selectedParish.id];
  //     if (marker) {
  //       googleMapRef.current.panTo(marker.getPosition()!);
  //       googleMapRef.current.setZoom(15);
  //     }
  //   }
  // }, [selectedParish]);

  useEffect(() => {

    if (first && googleMapRef.current) {
      let marker = markersRef.current[first.id];
      if (!marker) {
        marker = new google.maps.Marker({
          position: { lat: parseFloat(first.gps.split(";")[0]), lng: parseFloat(first.gps.split(";")[1]) },
          map,
          title: first.nom,
          animation: google.maps.Animation.DROP,
          clickable: true,
        });
      }
      else {
        googleMapRef.current.panTo(marker.getPosition()!);
        googleMapRef.current.setZoom(15);
      }
    }

  }, [first?.gps!]);

  return <div ref={mapRef} className="h-full w-full" />;
}