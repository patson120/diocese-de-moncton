'use client'

import { Button } from '@/components/ui/shared/button'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section background image"
                    src="/assets/img/sacrements.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Les sacrements</h1>
                        <p className='body-2 text-center text-white mt-3'>Retrouvez tous les sacrements et les informations associées.</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>

            <section className='container max-margin py-0 pb-10 md:pb-20'>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
                    <div className='hidden lg:block col-span-5 rounded-3xl overflow-hidden relative'>
                        <Image
                            alt="les sacrements"
                            src="/assets/img/sacrement-1.png"
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
                            <h2 className='heading-3 text-gray-900 mb-4'>Les sacrements de l'Église catholique</h2>
                            <p className='body-2 text-gray'>Les sacrements sont des signes visibles du don gratuit ( la grâce ) de Dieu, institués par le Christ et confiés à l’Eglise. Par les sacrements, le croyant entre et participe à la vie divine. Les sacrements manifestent toute notre existence, dans ses différentes étapes, appelées à être vécue dans le Christ.</p>
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div className='space-y-3'>
                                <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                    <Image
                                        alt="les sacrements"
                                        src="/assets/icons/vector-1.png"
                                        width={28}
                                        height={28}
                                        style={{ objectFit: 'contain', }}
                                    />
                                </div>
                                <p className='body-2 text-gray'>Les rites visibles ( eau, imposition des mains, onction … ) sous lesquels les sacrements sont célébrés, signifient et réalisent les grâces propres de chaque sacrement ( pardon de Dieu, vie de Dieu par le baptême, service des frères par l’ordination … )</p>
                            </div>
                            <div className='space-y-3'>
                                <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                    <Image
                                        alt="les sacrements"
                                        src="/assets/icons/vector-2.png"
                                        width={20}
                                        height={20}
                                        style={{ objectFit: 'contain', }}
                                    />
                                </div>
                                <p className='body-2 text-gray'>L’Esprit Saint nous prépare aux sacrements par la Parole de Dieu. Les sacrements nous fortifient et expriment la foi.  Leur fruit, s’il est d’abord personnel, contribue à la communion de toute l’Église « une âme qui s’élève, élève le monde ».</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div className='space-y-6'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='heading-3 text-gray-900 mb-4'>Les sacrements sont de trois ordres</h2>
                        <p className='body-2 text-gray'>Tout sacrement comporte trois dimensions: un signe, ce que l'on voit, une parole, ce que l'on entend et un symbole, ce que le signe et la parole expriment.</p>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className='space-y-3'>
                            <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                <Image
                                    alt="les sacrements"
                                    src="/assets/icons/vector-3.png"
                                    width={20}
                                    height={20}
                                    style={{ objectFit: 'contain', }}
                                />
                            </div>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Les sacrements de l’initiation</h1>
                                <p className='body-2 text-gray'>Les rites visibles ( eau, imposition des mains, onction … ) sous lesquels les sacrements sont célébrés, </p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                <Image
                                    alt="les sacrements"
                                    src="/assets/icons/vector-4.png"
                                    width={22}
                                    height={22}
                                    style={{ objectFit: 'contain', }}
                                />
                            </div>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Les sacrements de guérison</h1>
                                <p className='body-2 text-gray'>Les rites visibles ( eau, imposition des mains, onction … ) sous lesquels les sacrements sont célébrés, </p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='rounded-full overflow-hidden h-12 w-12 flex justify-center items-center relative bg-[#F9F4F5]'>
                                <Image
                                    alt="les sacrements"
                                    src="/assets/icons/vector-5.png"
                                    width={16}
                                    height={16}
                                    style={{ objectFit: 'contain', }}
                                />
                            </div>
                            <div className='space-y-2'>
                                <h1 className='body-1 text-[#1D0104] font-bold'>Les sacrements d'engagement</h1>
                                <p className='body-2 text-gray'>Les rites visibles ( eau, imposition des mains, onction … ) sous lesquels les sacrements sont célébrés, </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>Les sacrements de l’initiation</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-3'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Célébration de baptême"
                                    src="/assets/img/bapteme.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>Le Baptême</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="#" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Célébration de baptême"
                                    src="/assets/img/confirmation.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>La Confirmation</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="#" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L'Eucharistie"
                                    src="/assets/img/eucharistie.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>L'Eucharistie</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="/messages/1" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>Les sacrements de guérison</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-2'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="reconciliation"
                                    src="/assets/img/reconciliation.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>La Réconciliation</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="#" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L'onction des malades"
                                    src="/assets/img/onction-des-malades.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>L’onction des malades</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="#" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div>
                    <h2 className='heading-3 text-gray-900 mb-4'>Les sacrements d'engagement</h2>
                    <div className='flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-8 lg:pb-0 space-x-4 lg:grid lg:gap-6 lg:grid-cols-2'>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="L’Ordre"
                                    src="/assets/img/ordre.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>L’Ordre</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="#" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-[260px] md:w-[416px] lg:w-full h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                <Image
                                    alt="Le Mariage"
                                    src="/assets/img/le-mariage.png"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <h1 className='heading-4'>Le Mariage</h1>
                            <p className='body-2 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <Link href="#" className="mt-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => { }}
                                        className='font-bold border-[#1D0104] rounded-[8px]'
                                    >En savoir plus</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}