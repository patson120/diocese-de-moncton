import { useTranslations } from 'next-intl'
import React from 'react'
import {Link} from '@/i18n/routing';

export default function About() {
    const t = useTranslations("About")
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <p className=''>{t('title')}</p>
            <p className='my-5'>Une petite description de cette page </p>
            <Link href='../' className='text-blue-600'>Retour à la page d'accueil</Link>
        </div>
    )
}