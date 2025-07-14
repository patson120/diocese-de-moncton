
import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Suspense } from 'react'
import Mouvements from './Mouvements'
import { MessageSkeleton, MessagesSkeleton } from '@/components/ui/shared/skeletons'
import { useTranslations } from 'next-intl'


export default function Page() {
    const t= useTranslations("mouvements")
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/mouvements.png'
                title={t("hero_titre")}
                subtitle={t("hero_titre")}
            />
            <div className='mt-6 md:mt-10 lg:mt-20'></div>
            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <h1 className='heading-3 font-extrabold mt-5 mb-5 md:mb-10'>{t("section_1_titre")}</h1>
                <Suspense fallback={
                    <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                                <MessageSkeleton key={item} />
                            ))
                        }
                    </div>
                }>
                    <Mouvements />
                </Suspense>
            </section>
        </main>
    )
}