
import { fetchMembres, fetchParoisses } from "@/_lib/data";
import { formatDateToLocal } from "@/_lib/utils";
import Text from "@/components/Text";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ActionGrace from "@/components/ui/shared/ActionGrace";

import { Button } from "@/components/ui/shared/button";
import MapSection from "@/components/ui/shared/MapSection";
import { Link } from "@/i18n/routing";
import { Membre, Paroisse } from "@/types";
import { ArrowUpRight, Mail, MapPin, PhoneCall } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import Carousel from "./carousel";
import { VideoPlayer } from "./components/VideoPlayer";
import MembreCard from "./components/MemberCard";


export default async function Page(props: {
    params: Promise<{ paroisseId: string }>,
}) {

    const { paroisseId } = await props.params;
    const paroisse: Paroisse = await fetchParoisses(`/${paroisseId}`)
    const response: any = await fetchParoisses(`?paginate=4&type_id=${paroisse.type_paroisse_id}`)
    const paroisses: Paroisse[] = response.data;

    const responsable: Membre = await fetchMembres(`/${paroisse.pretre_responsable}`)
    
    const cookieStore = cookies();
    const userLanguage = cookieStore.get('NEXT_LOCALE')?.value || 'fr';

    return (
        <>
            <div className='flex justify-between items-center border-y border-y-gray-100 '>
                <div className="container max-margin py-3 flex justify-between items-center ">
                    <Breadcrumbs
                        breadcrumbs={[
                            { 
                                label: 'Accueil', 
                                href: '/',
                                data: {
                                    labelEn: "Home",
                                    labelFr: "Accueil"
                                }
                            },
                            {
                                label: '',
                                href: '/paroisses',
                                data: {
                                    labelEn: "Parishes",
                                    labelFr: "Paroisses"
                                }
                            },
                            {
                                label: paroisse?.nom ?? "",
                                href: '',
                                active: true,
                                data: {
                                    labelEn: paroisse?.nom,
                                    labelFr: paroisse.nom
                                }
                            },
                        ]}
                    />
                    {
                        paroisse.site_web &&
                        <div className='space-x-2'>
                            <Link href={paroisse.site_web} target="_blank">
                                <Button variant='outline' size="sm" className="hidden md:flex text-xs lg:text-sm">
                                    <Text keyString="visit_parish" />
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <section className="md:container md:max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4'>
                        <Carousel images={[ ...paroisse.galerie, ...paroisse.media ]} />
                        <div className='container max-margin md:w-full md:mx-0 md:px-0 py-0 flex gap-3'>
                            {
                                paroisse.site_web &&
                                <Link href={paroisse.site_web} target="_blank">
                                    <Button variant='outline' size="sm" className="hidden md:flex text-xs lg:text-sm">
                                        <Text keyString="visit_parish" />
                                    </Button>
                                </Link>
                            }
                            {
                                (paroisse.lien_youtube != null) &&
                                <VideoPlayer video={paroisse.lien_youtube} /> 
                            }
                        </div>
                        {
                            responsable.nom &&
                            <div className="container max-margin md:w-full md:mx-0 md:px-0 py-0 gap-3">
                                <h1 className="heading-4 font-extrabold text-black mt-10 mb-4"><Text keyString="pretre_responsable" /></h1>
                                <MembreCard membre={responsable} />
                            </div>
                        }
                        {
                            paroisse.pretre &&
                            paroisse.pretre.length > 0 &&
                            <div className="mt-5">
                                <h1 className="heading-4 font-extrabold text-black mt-10 mb-4"><Text keyString="autres_membres" /></h1>
                                {
                                    paroisse.pretre.filter(membre => membre.id !== responsable.id).map((membre) => (
                                        <MembreCard  key={membre.id} membre={membre} />
                                    ))  
                                }
                            </div>
                        }
                    </div>
                    <div className='container max-margin md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div>
                            <h1 className='heading-4 font-extrabold'>{paroisse.nom}</h1>
                            <div className="flex flex-row gap-2">
                                <small className='text-gray uppercase mb-4'><Text keyString="unite_pastorale" />: </small>
                                <div className="text-sm">
                                    <Text labelFr={paroisse.type?.intitule_fr!} labelEn={paroisse.type?.intitule_en!} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2"><Text keyString="heures_messes" /></h1>
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

                        <div>
                           <h1 className="heading-4 font-extrabold text-black mt-10 mb-2"><Text keyString="bulletin_paroissiaux" /></h1>
                            <div className='flex flex-row flex-wrap gap-3 items-center mt-5'>
                                    {
                                        paroisse?.bulletins.map((item, index) => 
                                            <a key={index} href={ item.lien_externe ?? `${process.env.NEXT_PUBLIC_BASE_URL}/${item.document}`} target='_blank' className='border border-[#D9D9D9] rounded-full px-4 py-3 flex justify-center items-center space-x-2'>
                                                <p>{ item.lien_externe ? item.lien_externe.split("/")[item.lien_externe.split("/").length -1].split(".")[0] : (item.titre_fr ?? item.titre_en)} <br />
                                                <span className="text-gray-400 text-xs">{formatDateToLocal(item.created_at, userLanguage === 'en' ? "en-EN": 'fr-FR')}</span></p>
                                                <ArrowUpRight className="h-6 w-10 ml-4" />
                                            </a>
                                        )
                                    }
                                    {
                                        !paroisse.bulletins.length &&
                                        <p className="text-center h-10 text-gray-400 text-sm"><Text keyString="aucun_bulletin" /></p>
                                    }
                                
                            </div>
                        </div>
                        
                        <div className="font-body-3 whitespace-nowrap">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2"><Text keyString="heures_bureau" /></h1>
                            <Text className='text-sm text-gray' labelFr={paroisse?.horaire_bureau!} labelEn={paroisse?.horaire_bureau!} />  
                        </div>
                        
                        <div className="">
                            <h1 className="heading-4 font-extrabold text-black mt-10 mb-2"><Text keyString="secretariat_paroissial" /></h1>
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

                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2"><Text keyString="sur_la_map" /></h1>
                        {/* Map */}
                        <div className="h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
                            <MapSection paroisses={[paroisse]} />
                        </div>
                        
                        <div className="mt-10">
                            <h1 className="heading-4 font-extrabold text-blac mb-2"><Text keyString="parish_history" /></h1>
                            <p className='body-2 text-gray'>{paroisse.histoire}</p>
                        </div>

                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-2"><Text keyString="autres_paroisses" /></h1>
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