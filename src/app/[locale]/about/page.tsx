import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
    const t = useTranslations("About")
    return (
        <div className='h-screen w-full justify-center items-center'>
            <p className=' text-center mt-60'>{t('title')}</p>
            <p className='mt-5 text-center'>Une petite description de cette page </p>
        </div>
    )
}