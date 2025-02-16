'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title="Le sacrement de l'ordre"
                subtitle="Comprendre les trois degrés : évêque, prêtre et diacre."
            />
            <div className='md:mt-10 lg:mt-20'></div>
            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
                    <div className='h-72 xl:h-80 hidden lg:block col-span-5 rounded-3xl overflow-hidden relative'>
                        <Image
                            alt="les sacrements"
                            src="/assets/img/ordre.png"
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div className='col-span-full md:col-span-7 py-10 space-y-6'>
                        <div>
                            <h2 className='heading-3 text-gray-900 mb-4'>Qu'est-ce que le sacrement de l'ordre ?</h2>
                            <div className='space-y-3'>
                                <p className='body-2 text-gray'>Le sacrement de l'ordre est l'un des sept sacrements de l'Église catholique. Il comporte trois degrés : l'épiscopat (évêque), le presbytérat (prêtre) et le diaconat (diacre)</p>
                                <p className='body-2 text-gray'>Chacun de ces degrés confère une mission spécifique au service de l'Église et de la communauté chrétienne.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div className='space-y-6'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='heading-3 text-gray-900 mb-4'>Les trois degrés du sacrement de l'ordre</h2>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Évêque</h1>
                                <p className='body-2 text-gray'>Le ministère épiscopal remonte aux apôtres et perpétue leur mission pastorale. Le Pape est le premier parmi les évêques.</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Prêtre</h1>
                                <p className='body-2 text-gray'>Par l'ordination, le prêtre reçoit un pouvoir spécifique et une mission auprès de ses frères et sœurs dans la foi.</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Diacre</h1>
                                <p className='body-2 text-gray'>Le diaconat est un ministère à part entière, axé sur le service et l'aide aux évêques dans les œuvres pastorales et sociales.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>Leurs roles</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-3'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Rôle"
                                    src="/assets/img/role-1.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>L'évêque, successeur des apôtres</h1>
                            <p className='body-2 text-gray'>L'évêque est le véritable ministre pastoral dans l'Église. Son rôle remonte aux apôtres, les premiers témoins de Jésus. Le Pape, en tant qu'évêque de Rome, est le premier parmi les évêques et dirige le collège épiscopal.</p>

                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Rôle"
                                    src="/assets/img/role-2.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>Le prêtre, ministre du Christ</h1>
                            <p className='body-2 text-gray'>Être prêtre ne se limite pas à une fonction ou un ministère. Par le sacrement de l'ordre, le prêtre reçoit un pouvoir spécifique et une mission. Il agit in persona Christi (en la personne du Christ), servant humblement la communauté et administrant les sacrements.</p>

                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Rôle"
                                    src="/assets/img/role-3.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>Le diacre, serviteur de l'Église</h1>
                            <p className='body-2 text-gray'>Le diaconat est un ministère à part entière, ouvert aux célibataires et aux mariés. Les diacres mettent l'accent sur le service, aidant les évêques dans les œuvres pastorales et sociales. Leur ordination imprime un caractère sacramentel irrévocable.</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-8 md:mt-16'></div>
            <section className='container max-margin py-0'>
                <div className=''>
                    <h2 className='heading-3 text-gray-900 mb-4'>Ressources</h2>
                    <p className='body-2 text-gray'>Pour approfondir votre compréhension</p>
                </div>
                <div className='flex flex-row flex-wrap gap-3 items-center mt-5'>
                    <a href='https://www.vatican.va/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p className='whitespace-nowrap'>Site officiel du Vatican</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                    <a href='https://eglise.catholique.fr/' target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                        <p className='whitespace-nowrap'>Conférence des Evêques de France</p>
                        <ArrowUpRight className="h-4 w-6" />
                    </a>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Vous avez des questions ?</h2>
                    <p className='body-2 text-gray'>Pour en savoir plus sur le sacrement de l'ordre ou pour discuter d'une vocation, contactez votre paroisse ou le service diocésain des vocations</p>

                </div>
            </section>
        </main>
    )
}