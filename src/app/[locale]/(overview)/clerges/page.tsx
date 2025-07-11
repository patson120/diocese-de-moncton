'use client'

import { fetchMembres } from "@/_lib/data";
import { HeroSectionSecond } from "@/components/sections/hero-second";
import ActionGrace from "@/components/ui/shared/ActionGrace";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Membre } from "@/types";
import { useEffect, useState } from 'react';
import MemberComp from "./member-comp";

const items = [
    {
        id: 1,
        title: 'ALLARD, Dc. Louis',
        description: 'Unité pastorale Providence',
        link: '',
        image: '/assets/img/clerge-1.png'
    },
    {
        id: 2,
        title: 'DEVEAUX, Dc. André',
        description: "Unité pastorale Marie-Reine-de-l'Acadie",
        link: '',
        image: '/assets/img/clerge-2.png'
    },
    {
        id: 3,
        title: 'DUPUIS, Dc. Jules',
        description: 'Unité pastorale Sainte-Famille',
        link: '',
        image: '/assets/img/clerge-3.png'
    },
    {
        id: 4,
        title: 'LEBLANC, Dc. Armand',
        description: 'Unité pastorale Saint-Jean-Paul II',
        link: '',
        image: '/assets/img/clerge-4.png'
    },
    {
        id: 5,
        title: 'LEBLANC, Dc. Calixte',
        description: 'Unité pastorale Saint-Jean XXIII',
        link: '',
        image: '/assets/img/clerge-5.png'
    },
]


const menus = [
    {
        id: '21',
        title: 'Archevêque',
        slug: 'archeveque',
    },
    {
        id: '19',
        title: 'Diacres',
        slug: 'diacres',
    },
    {
        id: '20',
        title: 'Prêtres',
        slug: 'pretres',
    },
    {
        id: '22',
        title: 'Religieux',
        slug: 'religieux',
    },
    {
        id: '23',
        title: 'Autres',
        slug: 'autres',
    },
]


export default function Page() {

    const [selectedMenu, setSelectedMenu] = useState(menus[0])
    const [membres, setMembres] = useState<Membre[]>([])

    const getMembres = async () => {
        const response: Membre[] = await fetchMembres(`?categorie_id=${selectedMenu.id}`)
        setMembres(response)
    }

    useEffect(() => {
        getMembres()
    }, [selectedMenu])

    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title="Clergé"
                subtitle="Retrouvez tous les membres derrière notre diocèse"
            />
            <div className='mt-10 lg:mt-20'></div>
            <section className='container max-margin py-0 pb-10 md:pb-20'>
                <div>
                    <p className='body-2 text-gray mb-2'>Sélectionnez le profil recherché</p>
                    <Tabs defaultValue={menus[0].slug} className="space-y-4">
                        <TabsList className='bg-white h-auto flex flex-row justify-start overflow-x-scroll xl:overflow-x-hidden gap-3 pb-4'>
                            {
                                menus.map((menu, index) => (
                                    <TabsTrigger
                                        onClick={() => setSelectedMenu(menu)}
                                        key={index} value={menu.slug}
                                        className={`${selectedMenu.id === menu.id ? '!bg-[#1D0104] !text-white !font-bold' : 'bg-[#F5F5F5]'}  rounded-[8px] py-2`}>
                                        {menu.title}
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                        <MemberComp membres={membres} />


                        {/**
                            <TabsContent value="diacres">
                                <Diacres membres={membres} />
                                </TabsContent>
                                <TabsContent value="les-peres-redemptoristes">
                                    <Autres />
                                    <div className='mt-10 md:mt-20'></div>
                                    <section>
                                        <div className='w-full lg:w-1/2'>
                                            <h2 className='heading-5 text-gray-900 mb-4'>Retrouvez les pères rédemptoristes</h2>
                                            <p className='body-2 text-gray'>Paroisse St-Louis-des-Français, 10565, rue Principale, St-Louis-de-Kent,  (NB)   E4X 1E9</p>
                                            <p className='body-2 text-gray'>site web : http://www.redemptoristes.ca/</p>
                                        </div>
                                    </section>
                                </TabsContent>
                                <TabsContent value="clerge-diocesains">
                                    <Autres />
                                </TabsContent>
                                <TabsContent value="congregations-des-saintes-croix">
                                <Autres />
                                <div className='mt-10 md:mt-20'></div>
                                <section>
                                    <div className='w-full lg:w-1/2'>
                                        <h2 className='heading-5 text-gray-900 mb-4'>Retrouvez la congrégation des Sainte-Croix, c.s.c.Faubourg du Mascaret, pavillon LeBlanc</h2>
                                        <p className='body-2 text-gray'>171, avenue Morton, Moncton, NB, E1A 9V7</p>
                                        <p className='body-2 text-gray'>Téléphone/Télécopieur: 506 854-6498(salle communautaire)</p>
                                        <p className='body-2 text-gray'>site web : ste-croix.qc.ca/</p>
                                    </div>
                                </section>
                            </TabsContent>

                            const Diacres = ( {membres}: { membres: Membre[]} ) => {
                                const [open,  setOpen ] = useState(false)
                                const [selectedItem, setSelectedItem] = useState<Membre | undefined>()
                                
                                return <>
                                    <div className='lg:flex lg:flex-row lg:overflow-x-scroll h-scroll pb-8 lg:pb-0 grid gap-6 grid-cols-2 md:grid-cols-3'>
                                        {
                                            membres.map((member: Membre) => (
                                                <div key={member.id} className='space-y-3 w-full' >
                                                    <div className='h-[240px] min-w-[240px] relative rounded-xl overflow-hidden'>
                                                        <Image
                                                            alt={`Image ${member.nom}`}
                                                            src={ member.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${member.image}` : "/assets/img/clerge-1.png" }
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                                height: '100%',
                                                                width: '100%'
                                                            }}
                                                        />
                                                    </div>
                                                    <h1 className='body-2 font-bold'>{member.nom}</h1>
                                                    <p className='body-2 text-gray'>{member.poste}</p>
                                                    <div className="">
                                                        <Button size={'sm'} variant={'link'} onClick={() => { setSelectedItem(member); setOpen(true) }} className="underline text-black px-0 ">
                                                            Coordonnées
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <DiacresDialog open={open} onOpenChange={setOpen} item={selectedItem} />
                                </>
                            }

                            const Pretres = ( {membres}: { membres: Membre[]} ) => {
                                const [open, setOpen] = useState(false)
                                const [selectedItem, setSelectedItem] = useState<any>({})
                                return <>
                                    <div className='lg:flex lg:flex-row pb-8 lg:pb-0 grid gap-6 grid-cols-2 md:grid-cols-3'>
                                        {
                                            membres.map((member: Membre) => (
                                                <div key={member.id} className='space-y-3 w-full' >
                                                    <div className='h-[240px] relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                                                        <Image
                                                            alt="Célébration de baptême"
                                                            src="/assets/img/placeholder-vector.png"
                                                            width={60}
                                                            height={60}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    </div>
                                                    <h1 className='body-2 font-bold'>{member.nom}</h1>
                                                    <p className='body-2 text-gray'>{member.coordonnees}</p>
                                                    <div className="">
                                                        <Button size={'sm'} variant={'link'} onClick={() => { setSelectedItem(member); setOpen(true) }} className="underline text-black px-0 ">
                                                            Coordonnées
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <PretresDialog open={open} onOpenChange={setOpen} item={selectedItem} />
                                </>
                            }

                            const DiacresDialog = ({
                                open,
                                onOpenChange,
                                item
                            }: {
                                open: boolean;
                                onOpenChange: (open: boolean) => void;
                                item?: Membre;
                            }) => {
                                return <Dialog open={open} onOpenChange={onOpenChange}>
                                    <DialogContent className="w-full md:max-w-lg">
                                        <DialogDescription>
                                            <div className="flex flex-row gap-4">
                                                <div className='h-[160px] w-[160px] relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                                                    <Image
                                                        alt="Célébration de baptême"
                                                        src={items[0].image}
                                                        fill
                                                        style={{
                                                            objectFit: 'cover',
                                                            height: '100%',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-4">
                                                    <div className="mt-4">
                                                        <h5 className='body-2 text-black font-bold'>{item?.nom}</h5>
                                                        <p className='body-3'>{item?.poste}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className='body-2 text-black font-bold'>Coordonnées</h5>
                                                        <p className='body-3'>415, rue Main</p>
                                                        <p className='body-3'>Shediac, NB E4P 2B6</p>
                                                        <p className='body-3'>506-532-3281</p>
                                                        <p className='body-3'>FAX : 506-532-8371</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            }

                            const PretresDialog = ({
                                open,
                                onOpenChange,
                                item
                            }: {
                                open: boolean;
                                onOpenChange: (open: boolean) => void;
                                item?: any;
                            }) => {
                                return <Dialog open={open} onOpenChange={onOpenChange} >
                                    <DialogContent className="w-full md:w-2/5">
                                        <DialogDescription>
                                            <div className="flex flex-row gap-4">
                                                <div className="w-[140px]">
                                                    <div className='h-[140px] w-[140px] relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                                                        <Image
                                                            alt="Célébration de baptême"
                                                            src="/assets/img/placeholder-vector.png"
                                                            width={60}
                                                            height={60}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="mb-3 mt-2">
                                                        <h5 className='body-2 text-black font-bold'>{item.nom}</h5>
                                                        <p className='body-3'>En activité</p>
                                                    </div>
                                                    <div>
                                                        <h5 className='body-2 text-black font-bold'>Coordonnées</h5>
                                                        <p className='body-2'>415, rue Main</p>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div>
                                                        <h5 className='body-2 text-black font-bold'>Biographie</h5>
                                                        <p className='body-2'>Né le 12 avril 1966 à Moncton ; fils d’Ernest Belliveau et Louina LeBlanc.</p>
                                                        <p className='body-2'>Études : Collège Dominicain, Ottawa, Bruxelles.</p>
                                                        <p className='body-2'>Ordination : le 13 octobre 1992 à Memramcook par Mgr Donat Chiasson.</p>
                                                        <p className='body-2'>Ministère : vicaire : Shédiac (1992) ; curé : Pointe-Sapin (1994-1998), Ste-Marie et St-Norbert (1998-2000), Rogersville (2000-2004), Études à Bruxelles (2004-2005), Aumônier assistant aux hôpitaux de Moncton et prêtre assistant aux paroisses St. Bernard et St. Augustin (2006-2007), Aumônier des hôpitaux de Moncton et du Foyer pour les vétérans (2007-).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            }

                            const Autres = () => {
                                const [open, setOpen] = useState(false)
                                const [selectedItem, setSelectedItem] = useState<any>({})
                                return <>
                                    <div className='lg:flex lg:flex-row pb-8 lg:pb-0 grid gap-6 grid-cols-2 md:grid-cols-3'>
                                        {
                                            items.map(item => (
                                                <div key={item.id} className='space-y-3 w-full' >
                                                    <div className='h-[240px] relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                                                        <Image
                                                            alt="Célébration de baptême"
                                                            src="/assets/img/placeholder-vector.png"
                                                            width={60}
                                                            height={60}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    </div>
                                                    <h1 className='body-2 font-bold'>{item.title}</h1>
                                                    <p className='body-2 text-gray'>{item.description}</p>
                                                    <div className="">
                                                        <Button size={'sm'} variant={'link'} onClick={() => { setSelectedItem(item); setOpen(true) }} className="underline text-black px-0 ">
                                                            Coordonnées
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <AlertDialog open={open} onOpenChange={setOpen} item={selectedItem} />
                                </>
                            }

                            const AlertDialog = ({
                                open,
                                onOpenChange,
                                item
                            }: {
                                open: boolean;
                                onOpenChange: (open: boolean) => void;
                                item?: any;
                            }) => {
                                return <Dialog open={open} onOpenChange={onOpenChange}>
                                    <DialogContent className="w-full md:max-w-lg">
                                        <DialogDescription>
                                            <div className="flex flex-row gap-4">
                                                <div className='h-[140px] w-[140px] relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                                                    <Image
                                                        alt="Célébration de baptême"
                                                        src="/assets/img/placeholder-vector.png"
                                                        width={60}
                                                        height={60}
                                                        style={{
                                                            objectFit: 'cover',
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-4">
                                                    <div className="mt-4">
                                                        <h5 className='body-2 text-black font-bold'>{item.title}</h5>
                                                        <p className='body-3'>{item.description}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className='body-2 text-black font-bold'>Coordonnées</h5>
                                                        <p className='body-3'>415, rue Main</p>
                                                        <p className='body-3'>Shediac, NB E4P 2B6</p>
                                                        <p className='body-3'>506-532-3281</p>
                                                        <p className='body-3'>FAX : 506-532-8371</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            }


                        */}
                    </Tabs>
                </div>
            </section>
            {/* Action de grace */}
            <ActionGrace />
        </main>
    )
}