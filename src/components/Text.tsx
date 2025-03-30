
"use client"
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

export default function Text({ labelFr, labelEn, keyString }: { labelFr?: string; labelEn?: string, keyString?: string }) {
    const t = useTranslations("app")
    const localActive = useLocale()
    return <>
        {
            keyString ?
                t(keyString) :
                (localActive === 'fr' ? labelFr : labelEn)
        }
    </>

}
