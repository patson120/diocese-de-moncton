'use client'

import { cn } from '@/_lib/utils'
import { HeroSectionSecond } from '@/components/sections/hero-second'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Page() {

    const tp = useTranslations("app")
    
    
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={tp("bulletin_paroissiaux")}
                subtitle={""}
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                
            </section> 
            <div className='mt-10 lg:mt-20'></div>
        </main>
    )
}
