'use client'

import { cn } from '@/_lib/utils'
import { HeroSectionSecond } from '@/components/sections/hero-second'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Page() {

    const t = useTranslations("history")

    const [targetSection, setTargetSection] = useState("")

    const scrollToElementById = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (element) {
        setTargetSection(elementId)
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }
    }
    
    
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={t("hero_title")}
                subtitle={""}
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='h-screen overflow-y-scroll h-scroll [&::-webkit-scrollbar]:w-0 flex flex-col-reverse md:flex-row gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8 relative'>
                    <div className='w-full md:w-2/3 flex flex-col gap-3'>
                        <h3 id='paragraph-1' className='text-left text-xl font-bold'>{t("sommaire_title_1")}</h3>
                        <p className='leading-8'>
                            {t("paragraph_1")}
                        </p>
                        <h3 id='paragraph-2' className='text-left text-xl font-bold'>{t("sommaire_title_2")}</h3>
                        <p className='leading-8'>
                           {t("paragraph_2")}
                        </p>
                        <h3 id='paragraph-3' className='text-left text-xl font-bold'>{t("sommaire_title_3")}</h3>
                        <p className='leading-8'>
                           {t("paragraph_3")}
                        </p>
                        <h3 id='paragraph-4' className='text-left text-xl font-bold'>{t("sommaire_title_4")}</h3>
                        <p className='leading-8'>
                           {t("paragraph_4")}
                        </p>
                        <h3 id='paragraph-5' className='text-left text-xl font-bold'>{t("sommaire_title_5")}</h3>
                        <p className='leading-8'>
                            {t("paragraph_5")}
                        </p>
                        <h3 id='paragraph-6' className='text-left text-xl font-bold'>{t("sommaire_title_6")}</h3>
                        <p className='leading-8'>
                            {t("paragraph_6")}
                        </p>
                        <h3 id='paragraph-7' className='text-left text-xl font-bold'>{t("sommaire_title_7")} </h3>
                        <p className='leading-8'>
                            {t("paragraph_7")}
                        </p>
                    </div>
                    <div className='w-full md:w-1/3 md:sticky md:top-0 leading-8'>
                        <h1 className='text-3xl font-bold'>{t("sommaire")}</h1>
                        <div className='mt-8 flex flex-col gap-4'>
                            <h3 onClick={() => scrollToElementById("paragraph-1")}  className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-1' && "font-bold underline" )}>
                                {t("sommaire_title_1")}
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-2")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-2' && "font-bold underline" )}>
                                {t("sommaire_title_2")}
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-3")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-3' && "font-bold underline" )}>
                                {t("sommaire_title_3")}
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-4")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-4' && "font-bold underline" )}>
                                {t("sommaire_title_4")}
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-5")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-5' && "font-bold underline" )}>
                                {t("sommaire_title_5")}
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-6")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-6' && "font-bold underline" )}>
                                {t("sommaire_title_6")}
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-7")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-7' && "font-bold underline" )}>
                                {t("sommaire_title_7")}
                            </h3>
                        </div>
                    </div>
                    
                </div>

                <div className='mt-20'>
                    <p className='font-medium leading-8'>{t("list_title")}</p>
                    <ul className='flex flex-col space-y-2 mt-4 pl-5 leading-8'>
                        <li className='list-disc'>{t("list_element_1")}</li>
                        <li className='list-disc'>{t("list_element_2")}</li>
                        <li className='list-disc'>{t("list_element_3")}</li>
                        <li className='list-disc'>{t("list_element_4")}</li>
                        <li className='list-disc'>{t("list_element_5")}</li>
                        <li className='list-disc'>{t("list_element_6")}</li>
                        <li className='list-disc'>{t("list_element_7")}</li>
                        <li className='list-disc'>{t("list_element_8")}</li>
                        <li className='list-disc'>{t("list_element_9")}</li>
                    </ul>
                    <p className='font-medium leading-8'>{t("paragraph_last")}</p>
                </div>
            </section> 

            <div className='mt-10 lg:mt-20'></div>
        </main>
    )
}
