'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Button } from '@/components/ui/shared/button'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/hero-cimetiere.png'
                title="Cimetière Notre-Dame du calvaire"
                subtitle="Un lieu de recueillement, de mémoire et de paix"
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de cimetière"
                                src="/assets/img/cimetiere-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-3 font-extrabold mb-3'>Bienvenue au cimetière diocésain</h1>
                            <div className='space-y-3'>
                                <p className='body-2 text-gray'>Le cimetière diocésain de NOTRE-DAME DU CALVAIRE est un lieu sacré où les défunts reposent en paix, entourés de prières et de souvenirs. Ouvert à tous, il offre un espace de recueillement et de mémoire pour les familles et les proches.</p>
                                <div>
                                    <p className='body-2 text-gray'>Nous nous engageons à préserver la dignité et le respect de chaque personne inhumée, en accord avec les valeurs chrétiennes.</p>
                                    <p className='body-2 text-gray'>Adresse : <span className='text-gray-800 font-bold'>480 rue Amirault, Dieppe NB E1A 1C8</span></p>
                                </div>
                                <div className='flex space-x-3'>
                                    <Button size="sm" className="px-5 w-full md:w-auto">
                                        <span>Trouver un lot</span>
                                    </Button>
                                    <Button variant="outline" size="sm" className="px-5 w-full md:w-auto">
                                        <span>Voir les prix</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="">
                <div className='h-80 w-full relative bg-gray-100'>
                    <Image
                        alt="hero cimetière"
                        src="/assets/img/hero-cimetiere-2.png"
                        fill
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%'
                        }}
                    />
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Un lieu de mémoire et de prière</h2>
                    <p className='body-2 text-gray'>La chancellerie offre une gamme de services pour soutenir les membres de l'Église diocésaine</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Environnement paisible</h1>
                            <p className='body-2 text-gray'>Un cadre naturel et apaisant, propice au recueillement et à la prière.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Monuments et espaces commémoratifs</h1>
                            <p className='body-2 text-gray'>Des lieux dédiés pour honorer la mémoire des défunts.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-2'>
                            <h1 className='body-1 text-[#1D0104] font-bold'>Chapelle et espaces de prière</h1>
                            <p className='body-2 text-gray'>Des espaces pour célébrer des messes, des prières ou des moments de méditation.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-1'>Tarifs et réservations</h2>
                    <p className='body-2 text-gray'>La chancellerie offre une gamme de services pour soutenir les membres de l'Église diocésaine</p>
                    <div className='mt-10 space-y-4'>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Lot simple</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>1,000.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Lot double</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>2,000.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Lot triple</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>2,800.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Petit lot (2 urnes)</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>800.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Niche</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>2,500.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Ouverture, fermeture et entretien perpétuel pour cercueil</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>1,000.00 + taxe</p>
                        </div>
                        <div className='pb-4 flex justify-between items-center border-b border-b-gray-200'>
                            <h2 className='body-2 text-gray'>Ouverture, fermeture et entretien perpétual pour urne</h2>
                            <p className='body-2 font-bold whitespace-nowrap'>600.00 + taxe</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Contact</h2>
                    <div>
                        <p className='body-2 text-gray'>Rachel Vienneau</p>
                        <p className='body-2 text-gray'>Place de la Cathédrale</p>
                        <p className='body-2 text-gray'>224, rue St.George, Bureau 104</p>
                        <p className='body-2 text-gray'>Moncton, NB</p>
                        <p className='body-2 text-gray'>E1C 0V1</p>
                        <p className='body-2 text-gray'>Téléphone : (506) 857-9531 poste 1228</p>
                        <p className='body-2 text-gray'>fax : (506) 388-2759</p>
                        <p className='body-2 text-gray'>adresse couriel ; cimetiere@diocesemoncton.ca</p>
                    </div>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}