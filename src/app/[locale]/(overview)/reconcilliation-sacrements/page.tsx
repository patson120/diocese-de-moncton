
import { HeroSectionSecond } from '@/components/sections/hero-second'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/sacrements.png'
                title="Le sacrement de pénitence et de réconciliation"
                subtitle="Un sacrement de guérison et de miséricorde"
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='order-2 lg:order-1 col-span-full lg:col-span-2'>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de reconciliation"
                                src="/assets/img/reconciliation.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Un sacrement de guérison</h1>
                            <div className='space-y-2'>
                                <p className='body-2 text-gray'>Le sacrement de pénitence et de réconciliation est un don de l'amour infini de Dieu. Par ce sacrement, le Christ nous libère du péché, nous guérit de nos blessures spirituelles et nous fortifie dans notre faiblesse.</p>
                                <p className='body-2 text-gray'>Il est une manifestation de la miséricorde divine, comme l'illustre la parabole de l'enfant prodigue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
                    <div className=''>
                        <h2 className='heading-3 text-gray-900 mb-4'>Dieu nous attend avec amour</h2>
                        <div className='space-y-5'>
                            <p className='body-2 text-gray'>Dans la parabole de l'enfant prodigue, Jésus nous montre un Père qui nous attend toujours, prêt à nous accueillir et à nous pardonner, peu importe nos égarements. </p>
                            <p className='body-2 text-gray'>Ce sacrement est une invitation à revenir vers Dieu, qui nous aime d'un amour infini et qui désire nous réconcilier avec Lui.</p>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='heading-3 text-gray-900 mb-4'>Jésus, source du pardon</h2>
                        <div className='space-y-5'>
                            <p className='body-2 text-gray'>Seul Dieu peut pardonner les péchés. Jésus, en tant que Fils de Dieu, a le pouvoir de dire : « Tes péchés te sont pardonnés » (Mc 2, 5). Il a transmis ce pouvoir à ses apôtres et, par eux, aux prêtres de l'Église. </p>
                            <p className='body-2 text-gray'>Ainsi, lors de la confession, c'est le Christ lui-même qui agit à travers le prêtre pour nous accorder son pardon.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-3 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='heading-4 font-extrabold mb-4'>Comment se préparer à la confession ?</h1>
                            <div className='space-y-4'>
                                <p className='body-2 text-gray'>La confession comporte cinq étapes essentielles :</p>
                                <ul className='ml-3'>
                                    <li className='body-2 text-gray list-decimal'><span className='font-bold'>Examen de conscience :</span> Réfléchir à nos actions, paroles et pensées à la lumière de l'Évangile.</li>
                                    <li className='body-2 text-gray list-decimal'><span className='font-bold'>Repentir :</span> Avoir un cœur sincèrement désolé pour nos péchés.</li>
                                    <li className='body-2 text-gray list-decimal'><span className='font-bold'>Résolution :</span> Prendre la ferme décision de ne plus recommencer.</li>
                                    <li className='body-2 text-gray list-decimal'><span className='font-bold'>Aveu :</span> Confesser nos péchés au prêtre avec humilité et sincérité.</li>
                                    <li className='body-2 text-gray list-decimal'><span className='font-bold'>Pénitence :</span> Accomplir l'acte de réparation proposé par le prêtre.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-2 '>
                        <div className='h-72 xl:h-80 relative rounded-xl md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de confession"
                                src="/assets/img/confession.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className='container max-margin py-0'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='heading-3 text-gray-900 mb-4'>Vous avez des questions ?</h2>
                    <p className='body-2 text-gray'>Si vous avez des questions sur le sacrement de réconciliation ou si vous souhaitez rencontrer un prêtre pour une confession, n'hésitez pas à nous contacter.</p>
                </div>
            </section>
            <div className='mt-5 md:mt-10'></div>
        </main>
    )
}