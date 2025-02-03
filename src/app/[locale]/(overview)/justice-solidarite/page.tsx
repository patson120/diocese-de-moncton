'use client'

import Image from 'next/image'


export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <section className='h-[25vh] md:h-[50vh] w-full relative bg-gray-200'>
                {/* Hero image */}
                <Image
                    alt="hero section clergés"
                    src="/assets/img/clerges.png"
                    fill
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                />
                <div className='absolute inset-0 flex justify-center items-start bg-black bg-opacity-40'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='heading-2 text-center text-white font-extrabold'>Justice et solidarité dans l'Archidiocèse de Moncton</h1>
                        <p className='body-2 text-center text-white mt-3'>Promouvoir la justice sociale et la solidarité auprès des plus démunis</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>

            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-1 md:order-2 col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/justice-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Notre mission</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>L’Équipe diocésaine Justice et solidarité de l’Archidiocèse de Moncton a pour mission de promouvoir la justice sociale et la solidarité dans notre milieu de vie.</p>
                                <p className='body-2 text-gray'>Nous appuyons les efforts déployés pour aider les personnes démunies, défavorisées ou victimes d’injustice. Notre équipe est composée de représentants des différentes unités pastorales du diocèse, unis pour agir ensemble.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <div className='container max-margin py-0 space-y-6'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Agir pour les plus démunis</h2>
                    <p className='body-2 text-gray'>Tout sacrement comporte trois dimensions: un signe, ce que l'on voit, une parole, ce que l'on entend et un symbole, ce que le signe et la parole expriment.</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>Présence et accompagnement</h1>
                            <p className='body-2 text-gray'>Nous assurons une présence auprès des personnes en difficulté pour les aider à trouver des solutions à leurs problèmes.</p>
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>Sensibilisation</h1>
                            <p className='body-2 text-gray'>Nous informons les paroissiens et le public sur les réalités de la pauvreté et des injustices autour de nous.</p>
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>Soutien aux initiatives</h1>
                            <p className='body-2 text-gray'>Nous appuyons les projets et initiatives d’entraide qui valorisent les personnes démunies.</p>
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
                            <h1 className='body-1 text-[#1D0104] font-bold'>Solidarité au-delà des frontières</h1>
                            <p className='body-2 text-gray'>Nous collaborons avec des organisations comme Développement et Paix-Caritas Canada et les Œuvres pontificales Missionnaires pour étendre notre action.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-1 md:order-2 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src="/assets/img/justice-2.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Les fondements de notre engagement</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Notre travail est indissociable de la foi. L'Église nous invite à vivre selon les sept principes fondamentaux de sa doctrine sociale, qui guident notre action :</p>
                                <ol className='ml-5'>
                                    <li className='body-2 text-gray list-decimal'>La dignité de la personne humaine</li>
                                    <li className='body-2 text-gray list-decimal'>Le bien commun</li>
                                    <li className='body-2 text-gray list-decimal'>La subsidiarité</li>
                                    <li className='body-2 text-gray list-decimal'>La solidarité</li>
                                    <li className='body-2 text-gray list-decimal'>L'option préférentielle pour les pauvres</li>
                                    <li className='body-2 text-gray list-decimal'>La destination universelle des biens</li>
                                    <li className='body-2 text-gray list-decimal'>Le respect de la vie humaine</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>L'amour du prochain au cœur de notre action</h2>
                    <p className='body-2 text-gray'>Jésus a aimé les pauvres d’un amour privilégié, et son enseignement nous rappelle que chaque personne humaine est égale aux yeux de Dieu. En priant et en faisant confiance à l'Esprit, nous trouvons la force de persévérer dans notre engagement pour la justice et la solidarité.</p>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Contact et inscriptions</h2>
                    <p className='body-2 text-gray'>Pour en savoir plus sur nos actions, proposer un projet ou vous engager, contactez l’Équipe diocésaine Justice et solidarité :</p>
                </div>
                <div className='mt-10 md:mt-20'></div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>L'amour du prochain au cœur de notre action</h2>
                    <p className='body-2 text-gray'>Jésus a aimé les pauvres d’un amour privilégié, et son enseignement nous rappelle que chaque personne humaine est égale aux yeux de Dieu. En priant et en faisant confiance à l'Esprit, nous trouvons la force de persévérer dans notre engagement pour la justice et la solidarité.</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}