'use client'

import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { ChevronLeft, Mail, Phone, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'


export default function Page() {
    const router = useRouter()
    const t = useTranslations("deposer_plainte")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [sujet, setSujet] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [lieu, setLieu] = useState('')
    const [temoin, setTemoin] = useState<boolean | null>(null)
    const [anonyme, setAnonyme] = useState(false)

    const handleSubmit = async () => {
        setIsSubmitting(true)
        
        setTimeout(() => {
            setIsSubmitting(false)
            setNom('')
            setEmail('')
            setTelephone('')
            setSujet('')
            setDescription('')
            setDate('')
            setLieu('')
            setTemoin(null)
            setAnonyme(false)
            toast.success(t("section_3_btn") + " - OK!")
        }, 2000)
    }

    return (
        <>
            <section className="container max-margin py-0">
                <div className="h-10 flex justify-between items-center mt-5 mb-5 md:mb-0">
                    <Button size={'sm'} variant={'link'} onClick={() => { router.back() }} className="pl-0 body-2 text-black">
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        <span>{t("retour")}</span>
                    </Button>
                    <Button size={'sm'} variant={'link'} onClick={() => { router.push("/") }} className="pr-0 hidden md:block body-2 text-gray">
                        {t("back_to_home")}
                    </Button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4 h-min'>
                        <h1 className='heading-4 font-extrabold mb-4'>{t("hero_titre")}</h1>
                        <p className='body-2 text-gray mb-6'>{t("hero_desc")}</p>
                        
                        <div className='px-4 md:px-8 py-6 md:py-12 space-y-8 relative rounded-xl overflow-hidden bg-[#F9F4F5]'>
                            <div className="flex items-center justify-center mb-4">
                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Shield className="h-10 w-10 text-primary" />
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="nom">{t("section_3_nom")}</label>
                                    <input 
                                        onChange={(e) => setNom(e.target.value)} 
                                        type="text" 
                                        required 
                                        disabled={anonyme}
                                        placeholder={t('section_3_nom_placeholder')} 
                                        className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full disabled:opacity-50" 
                                    />
                                </div>
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="courriel">{t("section_3_courriel")}</label>
                                    <input 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        type="email" 
                                        required 
                                        disabled={anonyme}
                                        placeholder={t("section_3_courriel_placeholder")} 
                                        className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full disabled:opacity-50" 
                                    />
                                </div>
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="telephone">{t("section_3_telephone")}</label>
                                    <input 
                                        onChange={(e) => setTelephone(e.target.value)} 
                                        type="tel" 
                                        disabled={anonyme}
                                        placeholder={t("section_3_telephone_placeholder")} 
                                        className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full disabled:opacity-50" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div className="space-y-8">
                            <div className="bg-primary/5 p-6 rounded-xl">
                                <h2 className='heading-5 font-extrabold mb-3'>{t("section_1_titre")}</h2>
                                <p className='body-2 text-gray mb-2'>{t("section_1_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_1_p_2")}</p>
                            </div>

                            <div>
                                <h2 className='heading-5 font-extrabold mb-4'>{t("section_2_titre")}</h2>
                                <p className='body-2 text-gray mb-3'>{t("section_2_p_1")}</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className='body-3'>{t("section_2_li_1")}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className='body-3'>{t("section_2_li_2")}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className='body-3'>{t("section_2_li_3")}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-8">
                                <h2 className='heading-5 font-extrabold mb-6'>{t("section_3_titre")}</h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className='body-3 inline-block font-semibold mb-1' htmlFor="sujet">{t("section_3_sujet")}</label>
                                        <input 
                                            onChange={(e) => setSujet(e.target.value)} 
                                            type="text" 
                                            required 
                                            placeholder={t("section_3_sujet_placeholder")} 
                                            className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" 
                                        />
                                    </div>
                                    <div>
                                        <label className='body-3 inline-block font-semibold mb-1' htmlFor="description">{t("section_3_description")}</label>
                                        <textarea 
                                            onChange={(e) => setDescription(e.target.value)} 
                                            required 
                                            placeholder={t("section_3_description_placeholder")} 
                                            rows={5} 
                                            className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" 
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className='body-3 inline-block font-semibold mb-1' htmlFor="date">{t("section_3_date")}</label>
                                            <input 
                                                onChange={(e) => setDate(e.target.value)} 
                                                type="date" 
                                                className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" 
                                            />
                                        </div>
                                        <div>
                                            <label className='body-3 inline-block font-semibold mb-1' htmlFor="lieu">{t("section_3_lieu")}</label>
                                            <input 
                                                onChange={(e) => setLieu(e.target.value)} 
                                                type="text" 
                                                placeholder={t("section_3_lieu_placeholder")} 
                                                className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='body-3 inline-block font-semibold mb-2' htmlFor="temoin">{t("section_3_temoin")}</label>
                                        <div className="flex space-x-4">
                                            <Button 
                                                onClick={() => setTemoin(true)} 
                                                variant={temoin === true ? 'default' : 'outline'}
                                                className={temoin === true ? '' : 'text-gray'}
                                            >
                                                {t("section_3_temoin_oui")}
                                            </Button>
                                            <Button 
                                                onClick={() => setTemoin(false)} 
                                                variant={temoin === false ? 'default' : 'outline'}
                                                className={temoin === false ? '' : 'text-gray'}
                                            >
                                                {t("section_3_temoin_non")}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input 
                                            type="checkbox" 
                                            id="anonyme"
                                            checked={anonyme}
                                            onChange={(e) => setAnonyme(e.target.checked)}
                                            className="h-4 w-4 rounded border-gray-300" 
                                        />
                                        <label htmlFor="anonyme" className='body-3 text-gray-600 cursor-pointer'>
                                            {t("section_3_anonyme")}
                                        </label>
                                    </div>
                                </div>

                                <Button 
                                    onClick={handleSubmit} 
                                    disabled={isSubmitting}
                                    className="w-full body-2 mt-6"
                                >
                                    {isSubmitting ? '...' : t("section_3_btn")}
                                </Button>
                            </div>

                            <div className="border-t border-gray-200 pt-8 mt-8">
                                <h2 className='heading-5 font-extrabold mb-4'>{t("section_4_titre")}</h2>
                                <p className='body-2 text-gray mb-4'>{t("section_4_p_1")}</p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <a href="mailto:responsible.ministry@diocesemoncton.ca" className='body-3 hover:underline'>
                                            responsible.ministry@diocesemoncton.ca
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <a href="tel:(506)857-9531" className='body-3 hover:underline'>
                                            (506) 857-9531
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-8 mt-8">
                                <h2 className='heading-5 font-extrabold mb-4'>{t("section_5_titre")}</h2>
                                <p className='body-2 text-gray mb-2'>{t("section_5_p_1")}</p>
                                <p className='body-2 text-gray'>{t("section_5_p_2")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-20" />
            </section>
        </>
    )
}