
import { fetchParoisses } from "@/_lib/data";
import Text from "@/components/Text";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ActionGrace from "@/components/ui/shared/ActionGrace";

import { Button } from "@/components/ui/shared/button";
import MapSection from "@/components/ui/shared/MapSection";
import { Link } from "@/i18n/routing";
import { Paroisse } from "@/types";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";


export default async function Page(props: {
    params: Promise<{ paroisseId: string }>,
}) {

    const { paroisseId } = await props.params;
    const paroisse: Paroisse = await fetchParoisses(`/${paroisseId}`)
    const response: any = await fetchParoisses(`?paginate=4&type_id=${paroisse.type_paroisse_id}`)
    const paroisses: Paroisse[] = response.data;

    return (
        <>
            <div className='flex justify-between items-center border-y border-y-gray-100 '>
                <div className="container max-margin py-3 flex justify-between items-center ">
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: 'Accueil', href: '/' },
                            {
                                label: 'Paroisses',
                                href: '/paroisses',
                            },
                            {
                                label: paroisse?.nom ?? "",
                                href: '',
                                active: true,
                            },
                        ]}
                    />
                    <div className='space-x-2'>
                        <Link href={paroisse.site_web} target="_blank">
                            <Button variant='outline' size="sm" className="hidden md:flex text-xs lg:text-sm">
                                Visiter le site internet
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="md:container md:max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4'>
                        <div className='h-80 xl:h-96 relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de détail de l'évènement"
                                src={paroisse.galerie?.length ? `${process.env.NEXT_PUBLIC_BASE_URL}/${paroisse.galerie[0].path}` : "/assets/img/paroisse-detail.png"}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='container max-margin md:w-full md:mx-0 md:px-0 py-0 flex gap-3'>
                            <Link href={paroisse.site_web} target="_blank">
                                <Button variant='outline' size="sm" className="hidden md:flex text-xs lg:text-sm">
                                    Visiter le site internet
                                </Button>
                            </Link>
                            {/** 
                                <a href={paroisse.lien_youtube} target="_blank">
                                    <Button variant='outline' size="sm" className="w-full md:w-auto text-xs lg:text-sm">
                                        <Play className="mr-2 h-4 w-6" />
                                        Voir la paroisse en vidéo
                                    </Button>
                                </a>
                             */}
                        </div>
                    </div>
                    <div className='container max-margin md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div>
                            <h1 className='heading-4 font-extrabold'>{paroisse.nom}</h1>
                            <div className="flex flex-row gap-2">
                                <small className='text-gray uppercase mb-4'>Unité pastorale: </small>
                                <div className="text-sm">
                                    <Text labelFr={paroisse.type?.intitule_fr!} labelEn={paroisse.type?.intitule_en!} />
                                </div>
                            </div>
                            <p className='body-2 text-gray'>{paroisse.histoire}</p>
                            {/* <span className='font-bold cursor-pointer'>voir plus</span> */}
                        </div>
                        <div className="flex flex-wrap gap-4 my-5 py-3 border-y border-y-[#E5E5E5]">
                            <div className="flex flex-nowrap">
                                <span className="text-gray-500 text-sm mr-2">Etabli en</span>
                                <span className="text-sm font-extrabold">{paroisse.etabli_le}</span>
                            </div>
                            <div className="flex flex-nowrap">
                                <span className="text-gray-500 text-sm mr-2">Ordonné en</span>
                                <span className="text-sm font-extrabold">{paroisse.ordonne_le}</span>
                            </div>
                            <div className="flex flex-nowrap">
                                <span className="text-gray-500 text-sm mr-2">Premier curé</span>
                                <span className="text-sm font-extrabold">{paroisse.premier_cure}</span>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Heures des messes</h1>
                            <div className="flex flex-col gap-y-3">
                                {
                                    paroisse.horaireparoisses.map((horaire) => (
                                        <div key={`${horaire.id}-${paroisse.id}`} className="w-min flex justify-center items-center gap-2 border border-[#E5E5E5] rounded-xl py-[6px] px-2">
                                            <p className="text-gray capitalize">{horaire.jour}</p>
                                            {
                                                horaire.heure.split(';').map((heure, i) => (
                                                    <p key={`${i}-${heure}`} className="text-gray px-[10px] py-[6px] rounded-[8px] bg-[#F9F4F5]">{heure}</p>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Secrétariat paroissial</h1>
                            <div className="space-y-2 mt-4 body-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-6 font-extrabold" />
                                    <p className="text-gray">{paroisse.adresse}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <PhoneCall className="h-4 w-6 font-extrabold" />
                                    <p className="text-gray">{paroisse.telephone}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-6 font-extrabold" />
                                    <p className="text-gray">{paroisse.email}</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Sur la carte</h1>
                        {/* Map */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
                            <MapSection paroisses={[paroisse]} />
                        </div>
                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2">Autres paroisses de l'unité</h1>
                        <div>
                            <div className="flex flex-nowrap overflow-x-scroll xl:overflow-x-hidden gap-4 pb-5">
                                {
                                    paroisses.map((item, index) => (
                                        <Link href={`/paroisses/${item.id}`} key={index} className="max-w-48">
                                            <div className="h-32 w-48 shrink-0 relative overflow-hidden rounded-md bg-gray-100">
                                                <Image
                                                    alt={`${paroisse.nom}`}
                                                    src={item.galerie?.length  ? `${process.env.NEXT_PUBLIC_BASE_URL}/${item.galerie[0].path}` : '/assets/img/paroisse-1.png'}
                                                    fill
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '100%',
                                                        width: '100%'
                                                    }}
                                                />
                                            </div>
                                            <h3 className="font-extrabold text-xs mt-3 mb-1">{item.nom}</h3>
                                            <p className="text-xs text-gray-500">{item.adresse}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Action de grace */}
            <ActionGrace />
        </>
    )
}

