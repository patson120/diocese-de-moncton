"use client"

import { fetchMembres } from "@/_lib/data";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Button } from "@/components/ui/shared/button";
import { Membre } from "@/types";
import Image from "next/image";
import MemberComp from "../clerges/member-comp";
import { useEffect, useState } from "react";

// const items = [
//     {
//         id: 1,
//         title: 'Mgr Arthur Melanson',
//         description: 'Premier archevêque de Moncton (1936-1942)',
//         link: '',
//         image: '/assets/img/archeveque-1.png'
//     },
//     {
//         id: 2,
//         title: 'Mgr Norbert Robichaud',
//         description: 'Deuxième archevêque de Moncton (1942 – 1972)',
//         link: '',
//         image: '/assets/img/archeveque-2.png'
//     },
//     {
//         id: 3,
//         title: 'Mgr Donat Chiasson',
//         description: 'Troisième archevêque de Moncton (1972 – 1997)',
//         link: '',
//         image: '/assets/img/archeveque-3.png'
//     },
//     {
//         id: 4,
//         title: 'Mgr Ernest Léger',
//         description: 'Quatrième archevêque de Moncton (1997-2002)',
//         link: '',
//         image: '/assets/img/archeveque-4.png'
//     },
//     {
//         id: 5,
//         title: 'Mgr André Richard, c.s.c.',
//         description: 'Cinquième archevêque de Moncton (2002-2012)',
//         link: '',
//         image: '/assets/img/archeveque-5.png'
//     },
//     {
//         id: 6,
//         title: 'Mgr Valéry Vienneau',
//         description: 'Sixième archevêque de Moncton (2012-2023)',
//         link: '',
//         image: '/assets/img/archeveque-6.png'
//     },
// ]


export default function Page() {
    // const archeveques: Archeveque[] = await fetchArcheveques();
    const [members, setMembers] = useState<Membre[]>([])

    useEffect(() => {
      ( async () => {
        const response: Membre[] = await fetchMembres(`?categorie_id=21`)
        setMembers(response)
      } )()
    }, [])
    

    return (
        <>
            <div className='flex justify-between items-center border-y border-y-gray-100 '>
                <div className="container max-margin py-4 flex justify-between ">
                    <Breadcrumbs
                        breadcrumbs={[
                            { 
                                label: '',
                                href: '/',
                                data: {
                                    labelEn: "Home",
                                    labelFr: "Accueil"
                                }
                                
                            },
                            {
                                label: 'Archeveques',
                                href: '/archeveques',
                                active: true,
                                data: {
                                    labelEn: "Archbishops",
                                    labelFr: "Archeveques"
                                }
                            },
                        ]}
                    />
                    <div className='space-x-2'>
                        <Button
                            size={'sm'} 
                            variant="outline"
                            className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                        >Evêque précédent
                        </Button>
                        <Button
                            size={'sm'}
                            variant="outline"
                            className='w-min bg-transparent hover:bg-transparent border-gray-300 text-gray-500'
                        >Evêque suivant
                        </Button>
                    </div>
                </div>
            </div>
            <section className="md:container md:max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4'>
                        <div className='h-80 xl:h-[500px] relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'archevèque"
                                src={ (members.length && members[0].image) ? `${process.env.NEXT_PUBLIC_BASE_URL}/${members[0].image}` : "/assets/img/clerge-1.png" }
                                // src={"/assets/img/clerge-1.png" }
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className='container max-margin px-4 md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div>
                            <small className='text-gray uppercase'>Archevêque de Moncton</small>
                            <h1 className='heading-4 font-extrabold mb-4'>{members.length ? members[0].nom : ""}</h1>
                            <div className="space-y-3 md:space-y-7 lg:space-y-10">
                                <p className='body-2 text-gray'>Mgr Desrochers est né en 1956 dans le secteur de Hull à Gatineau (Québec). Après ses études secondaires, il est entré au collège Algonquin d’Ottawa où des études en beaux-arts et en art commercial l’ont préparé à travailler comme graphiste pendant sept ans au quotidien français d’Ottawa, Le Droit.</p>
                                <p className='body-2 text-gray'>Sa vocation l’a ensuite conduit à la Congrégation du Très-Saint-Rédempteur (les Rédemptoristes) où il a été ordonné prêtre en 1989.</p>
                                <p className='body-2 text-gray'>Après son ordination, il a collaboré à une mission d’évangélisation dans la région de Gaspé, au Québec. Il a ensuite servi pendant plusieurs années comme recteur de l’ancien monastère des Rédemptoristes à Aylmer-Gatineau, avant d’être nommé au Sanctuaire de Sainte-Anne-de-Beaupré.</p>
                                <p className='body-2 text-gray'>Après avoir été brièvement supérieur d’une maison de retraite des Rédemptoristes près de la ville de Québec, il est retourné à Sainte-Anne-de-Beaupré en tant que directeur des Annales de Sainte-Anne, poste qu’il a occupé pendant trois ans. En juillet 2011, il est devenu recteur de la Basilique de Sainte-Anne-de-Beaupré. Il a consacré une partie de son temps à prêcher des retraites un peu partout en Amérique du Nord et, en juin 2015, il a repris ce ministère tout en étant directeur des vocations chez les Rédemptoristes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='md:mt-10 lg:mt-20'></div>
            <section className="container max-margin py-0">
                <div>
                    <h2 className='heading-3 text-gray-900 mb-6'>Archevêques précédents</h2>
                    {/* 
                        <div className='lg:flex lg:flex-row lg:overflow-x-scroll h-scroll pb-0 lg:pb-8 lg:space-x-6 grid gap-3 md:gap-6 lg:gap-0 grid-cols-2'>
                            {
                                archeveques.slice(1,).map((item: Archeveque) => (
                                    <div key={item.id} className='space-y-3'>
                                        <div className='w-full lg:w-[240px] h-[240px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                            <Image
                                                alt="Célébration de baptême"
                                                src="/assets/img/archeveque-1.png"
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                    height: '100%',
                                                    width: '100%'
                                                }}
                                            />
                                        </div>
                                        <h1 className='body-2 font-bold'>{item.name}</h1>
                                        <p className='body-2 text-gray line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cum?</p>
                                        <div className="">
                                            <Link href="" className="body-3 font-semibold underline">
                                                Voir biographie
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    */}
                    <MemberComp membres={members} />
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>

            {/* Action de grace */}
            <ActionGrace />
        </>
    )
}
