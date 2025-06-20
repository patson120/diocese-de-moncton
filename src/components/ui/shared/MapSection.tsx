"use client"
import { Paroisse } from '@/types';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'

// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false });

export default function MapSection({paroisses}: {paroisses: Paroisse[]}) {
    const [selectedParish, setSelectedParish] = useState<Paroisse | null >(paroisses?.length ? paroisses[0] : null);

    return (
        <Map
            parishes={paroisses}
            selectedParish={selectedParish!}
            onParishSelect={setSelectedParish}
        />
    )
}
