
'use client'

import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const items = [
    {
        id: 1,
        title: 'Mgr Arthur Melanson',
        description: 'Premier archevêque de Moncton (1936-1942)',
        link: '',
        image: '/assets/img/archeveque-1.png'
    },
    {
        id: 2,
        title: 'Mgr Norbert Robichaud',
        description: 'Deuxième archevêque de Moncton (1942 – 1972)',
        link: '',
        image: '/assets/img/archeveque-2.png'
    },
    {
        id: 3,
        title: 'Mgr Donat Chiasson',
        description: 'Troisième archevêque de Moncton (1972 – 1997)',
        link: '',
        image: '/assets/img/archeveque-3.png'
    },
    {
        id: 4,
        title: 'Mgr Ernest Léger',
        description: 'Quatrième archevêque de Moncton (1997-2002)',
        link: '',
        image: '/assets/img/archeveque-4.png'
    },
    {
        id: 5,
        title: 'Mgr André Richard, c.s.c.',
        description: 'Cinquième archevêque de Moncton (2002-2012)',
        link: '',
        image: '/assets/img/archeveque-5.png'
    },
    {
        id: 6,
        title: 'Mgr Valéry Vienneau',
        description: 'Sixième archevêque de Moncton (2012-2023)',
        link: '',
        image: '/assets/img/archeveque-6.png'
    },
]


export default function Page() {

    return (
        <>
            <div className='px-5 md:px-10 py-2 h-12 bg-gray-20 border border-b-gray-200 bg-gray-100'>
                <div className="flex justify-between ">
                </div>
            </div>
            <section className="container max-margin py-0">
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4'>
                        <div className='h-80 xl:h-[500px] relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                            <Image
                                alt="Image de l'archevèque"
                                src="/assets/img/image.png"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                    </div>
                    <div className='container max-margin md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div>
                            <small className='text-gray uppercase'>Archevêque de Moncton</small>
                            <h1 className='heading-4 font-extrabold mb-4'>Son Excellence Monseigneur Guy Desrochers, C.Ss.R.</h1>
                            <div className=" space-y-10">
                                <p className='body-2 text-gray'>Mgr Desrochers est né en 1956 dans le secteur de Hull à Gatineau (Québec). Après ses études secondaires, il est entré au collège Algonquin d’Ottawa où des études en beaux-arts et en art commercial l’ont préparé à travailler comme graphiste pendant sept ans au quotidien français d’Ottawa, Le Droit.</p>
                                <p className='body-2 text-gray'>Sa vocation l’a ensuite conduit à la Congrégation du Très-Saint-Rédempteur (les Rédemptoristes) où il a été ordonné prêtre en 1989.</p>
                                <p className='body-2 text-gray'>Après son ordination, il a collaboré à une mission d’évangélisation dans la région de Gaspé, au Québec. Il a ensuite servi pendant plusieurs années comme recteur de l’ancien monastère des Rédemptoristes à Aylmer-Gatineau, avant d’être nommé au Sanctuaire de Sainte-Anne-de-Beaupré.</p>
                                <p className='body-2 text-gray'>Après avoir été brièvement supérieur d’une maison de retraite des Rédemptoristes près de la ville de Québec, il est retourné à Sainte-Anne-de-Beaupré en tant que directeur des Annales de Sainte-Anne, poste qu’il a occupé pendant trois ans. En juillet 2011, il est devenu recteur de la Basilique de Sainte-Anne-de-Beaupré. Il a consacré une partie de son temps à prêcher des retraites un peu partout en Amérique du Nord et, en juin 2015, il a repris ce ministère tout en étant directeur des vocations chez les Rédemptoristes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div>
                    <h2 className='heading-3 text-gray-900 mb-6'>Archevêques précédents</h2>
                    <div className='lg:flex lg:flex-row lg:overflow-x-scroll h-scroll pb-0 lg:pb-8 lg:space-x-6 grid gap-6 lg:gap-0 grid-cols-2'>
                        {
                            items.map(item => (
                                <div key={item.id} className='space-y-3'>
                                    <div className='w-full lg:w-[240px] h-[240px] relative rounded-xl lg:rounded-3xl overflow-hidden'>
                                        <Image
                                            alt="Célébration de baptême"
                                            src={item.image}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    <h1 className='body-2 font-bold'>{item.title}</h1>
                                    <p className='body-2 text-gray'>{item.description}</p>
                                    <div className="">
                                        <Link href="" className="body-3 font-semibold underline">
                                            Voir biographie
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className='mt-10 md:mt-20'></div>

            {/* Action de grace */}
            <ActionGrace />
        </>
    )
}
