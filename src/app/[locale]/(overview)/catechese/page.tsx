'use client'

import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Button } from '@/components/ui/shared/button'
import Image from 'next/image'

const items = [
    {
        id: 1,
        title: 'Niveau 1',
        image: '/assets/img/pourquoi-inscrire 1.png'
    },
    {
        id: 2,
        title: 'Niveau 2',
        image: '/assets/img/pourquoi-inscrire 2.png'
    },
    {
        id: 3,
        title: 'Niveau 3',
        image: '/assets/img/pourquoi-inscrire 4.png'
    },
    {
        id: 4,
        title: 'Niveau 4',
        image: '/assets/img/pourquoi-inscrire 5.png'
    },
    {
        id: 5,
        title: 'Niveau 5',
        image: '/assets/img/pourquoi-inscrire 6.png'
    },
    {
        id: 6,
        title: 'Niveau 6',
        image: '/assets/img/pourquoi-inscrire 7.png'
    },
]


export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/mouvements.png'
                title="Catéchèse dans le Diocèse de Moncton"
                subtitle="Accompagner les jeunes dans leur cheminement de foi"
            />
            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>La catéchèse des jeunes dans le Diocèse de Moncton</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>« Le but définitif de la catéchèse est de mettre quelqu’un non seulement en contact mais en communion, en intimité, avec Jésus Christ. »</p>
                                <p className='body-2 text-gray'>La catéchèse aide les jeunes à connaître, célébrer, vivre et contempler le mystère du Christ à travers la foi, la liturgie, la morale, la prière, la vie communautaire et la mission.</p>
                            </div>
                            <div className='mt-6 mb-8 md:mb-0'>
                                <Button size="sm" className="px-5 w-full md:w-auto">
                                    <span>Inscrire un enfant</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de la catéchèse"
                                src="/assets/img/faire-un-don.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de la catéchèse"
                                src="/assets/img/catechese-1.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>La famille, premier lieu de la catéchèse</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Les jeunes entrent en contact avec le message de Jésus par le témoignage de vie chrétienne donné par leurs parents. </p>
                                <p className='body-2 text-gray'>L'éveil religieux dans l'enfance, au sein de la famille, a un caractère « irremplaçable ». La catéchèse familiale précède, accompagne et enrichit toute autre forme de catéchèse.</p>
                            </div>
                            <div className='mt-6 mb-8 md:mb-0'>
                                <Button size="sm" className="px-5 w-full md:w-auto">
                                    <span>Inscrire un enfant</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <h2 className='heading-3 text-gray-900 mb-6'>Nos programmes de catéchèse</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-3'>
                        <div className='h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="catéchèse"
                                src="/assets/img/catechese-2.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>Catéchèse familiale <span className='text-base font-normal'>(enfants de moins de 10 ans)</span></h1>
                        <p className='body-2 text-gray'>Nous favorisons une catéchèse familiale pour les familles avec de jeunes enfants. La communauté chrétienne fournit le matériel nécessaire et soutient les familles dans cette tâche.</p>
                        <div className='pt-6 mb-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span>Inscrire un enfant</span>
                            </Button>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='h-[280px] md:h-[400px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                            <Image
                                alt="catéchèse"
                                src="/assets/img/catechese-3.png"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </div>
                        <h1 className='heading-4'>Catéchèse en petits groupes <span className='text-base font-normal'>(jeunes de plus de 10 ans)</span></h1>
                        <p className='body-2 text-gray'>Pour les jeunes de plus de 10 ans, la catéchèse se fait en petits groupes pour approfondir leur foi et les préparer aux sacrements.</p>
                        <div className='pt-6 mb-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span>Inscrire un enfant</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <h2 className='heading-3 text-gray-900 mb-6'>Préparation aux sacrements</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-3 rounded-xl lg:rounded-3xl border px-5 py-8'>
                        <h1 className='heading-4'>Première communion et sacrement de pardon</h1>
                        <p className='body-2 text-gray'>Après deux années de catéchèse, les jeunes sont invités à se préparer pour recevoir, pour la première fois, les sacrements de pardon et de l’eucharistie.</p>
                        <div className='pt-4 lg:pt-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span>Inscrire un enfant</span>
                            </Button>
                        </div>
                    </div>
                    <div className='space-y-3 rounded-xl lg:rounded-3xl border px-5 py-8'>
                        <h1 className='heading-4'>Sacrement de confirmation</h1>
                        <p className='body-2 text-gray'>En septième année de catéchèse, les jeunes réfléchissent au sacrement de la confirmation. Ils sont invités à décider personnellement s’ils sont prêts à être disciples de Jésus et à faire partie de l’Église.</p>
                        <div className='pt-4 lg:pt-8 md:mb-0'>
                            <Button size="sm" className="px-5 w-full md:w-auto">
                                <span>Inscrire un enfant</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <div className='md:mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div>
                    <h2 className='heading-3 text-gray-900 mb-6'>Matériel utilisé en catéchèse</h2>
                    <div className='flex flex-row overflow-x-scroll xl:overflow-hidden h-scroll pb-8 space-x-6'>
                        {
                            items.map(item => (
                                <div key={item.id} className='space-y-3'>
                                    <div className='w-[175px] h-[250px] relative overflow-hidden'>
                                        <Image
                                            alt={item.title}
                                            src={item.image}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Frais d'inscription pour la catéchèse</h2>
                    <div>
                        <p className='body-2 text-gray'>Après plusieurs mois de consultations, les frais minimums d’inscription à la catéchèse sont fixés à :</p>
                        <ul className='ml-5'>
                            <li className='body-2 list-disc font-bold'>30$ par enfant</li>
                            <li className='body-2 list-disc font-bold'>50$ par famille</li>
                        </ul>
                        <p className='body-2 text-gray'>Ces frais s’appliquent à la fois pour la catéchèse familiale et la catéchèse paroissiale. Ils entrent en vigueur à partir de janvier 2013.</p>
                        <p className='body-2 text-gray'><span className='text-black font-semibold'>Note :</span> Aucun montant maximum n'est suggéré, car les situations financières des paroisses varient. Ces frais minimums sont appliqués pour éviter le « magasinage » entre paroisses avoisinantes.</p>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                    <div>
                        <h2 className='heading-3 text-gray-900 mb-4'>Contact et inscriptions</h2>
                        <p className='body-2 text-gray'>Pour plus d'informations sur la catéchèse offerte dans votre paroisse ou pour inscrire un enfant, contactez le coordinateur ou la coordinatrice de catéchèse de votre paroisse.</p>
                    </div>
                    <div className='flex flex-col-reverse'>
                        <ul className='text-right'>
                            <li className='body-2 text-gray'>Dianne Léger, Coordonatrice diocésaine</li>
                            <li className='body-2 text-gray'>Téléphone : <span className='text-black font-semibold'>(506) 857-9531, poste 1229</span></li>
                            <li className='body-2 text-gray'>Email : <span className='text-black font-semibold'>catechese.dianneleger@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}