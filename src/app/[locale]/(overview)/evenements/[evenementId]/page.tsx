
import { fetchEvents } from '@/_lib/data';
import { formatDateToLocal } from '@/_lib/utils';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/shared/button';
import MapSection from '@/components/ui/shared/MapSection';
import { TypeEvent } from '@/types';
import { Calendar, Timer } from 'lucide-react';
import Image from 'next/image';


export default async function Page(props: {
    params: Promise<{ evenementId: string }>,
}) {
    const { evenementId } = await props.params;
    const event: TypeEvent = await fetchEvents(`/${evenementId}`)
    // const paroisses: Paroisse[] = await fetchParoisses(`?type_paroisse_id=${paroisse.type_paroisse_id}`)

    return (
        <>
            <div className='flex justify-between items-center border-y border-y-gray-100 '>
                <div className="container max-margin py-3 flex justify-between items-center ">
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: 'Accueil', href: '/' },
                            {
                                label: 'Evenements',
                                href: '/evenements',
                            },
                            {
                                label: event?.titre_fr ?? "",
                                href: '',
                                active: true,
                            },
                        ]}
                    />
                    <div className='space-x-2'>
                        <Button
                            size={'sm'}
                            variant="outline"
                            className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                        >Précédent
                        </Button>
                        <Button
                            size={'sm'}
                            variant="outline"
                            className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                        >Suivant
                        </Button>
                    </div>
                </div>
            </div>
            <section className="container  max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-12 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2'>
                        <div className='h-80 xl:h-96 relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt={event.titre_fr}
                                src="/assets/img/event-details.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3'>
                        <div>
                            <small className='text-gray'>Titre évènement</small>
                            <h1 className='heading-4 font-extrabold mb-4'>{event.titre_fr}</h1>
                            <p className='body-2 text-gray line-clamp-4'>{event.description_fr}</p>
                        </div>
                        <div className='flex flex-wrap gap-3 items-center font-light text-xs my-4'>
                            <label htmlFor="type_evenement" className='body-2 font-bold w-full md:w-auto'>Type évènement</label>
                            <p className='px-4 py-3 text-gray text-sm rounded-xl border border-gray-100'>Formation</p>
                            <p className='px-4 py-3 text-gray text-sm rounded-xl border border-gray-100'>Célébration</p>
                            <p className='px-4 py-3 text-gray text-sm rounded-xl border border-gray-100'>Communautaire</p>
                        </div>
                        <div className='my-4 border-b border-b-[#E5E5E5]' />
                        <div className='flex flex-col md:flex-row gap-8 mt-4'>
                            <div className='space-y-1'>
                                <div className='flex items-center space-x-1'>
                                    <Calendar className="h-5 w-5 text-gray-400" />
                                    <label htmlFor="date" className='text-gray'>Date</label>
                                </div>
                                <h1 className='text-base font-semibold'>{formatDateToLocal((new Date(event.date_event)).toISOString())}</h1>
                            </div>
                            <div className='space-y-1'>
                                <div className='flex space-x-1'>
                                    <Timer className="h-5 w-5 text-gray-400" />
                                    <label htmlFor="heure" className=' text-gray-500'>Heure</label>
                                </div>
                                <h1 className='text-base font-semibold'>{event.heure_event}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Lieu</h1>
                            <p className='body-2 text-gray'>{event.lieu}</p>
                        </div>

                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Sur la carte</h1>
                        {/* Map */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
                            <MapSection paroisses={[event.paroisse]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}