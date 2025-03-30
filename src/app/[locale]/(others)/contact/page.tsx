
'use client'
import { sendMessage } from "@/_lib/data";
import { Button } from "@/components/ui/shared/button";
import { useRouter } from "@/i18n/routing";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from 'sonner';


// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false })

const parishes = [
    {
        id: 1,
        name: "Cathédrale Notre-Dame de l'Assomption",
        address: '220 St George St, Moncton, NB E1C 1V8',
        phone: '+1 506-857-4223',
        email: 'cathedrale@diocesemoncton.ca',
        website: 'https://www.cathedralemoncton.ca',
        location: { lat: 46.0878, lng: -64.7782 }
    }
];


export default function Page() {
    const router = useRouter()

    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sujet, setSujet] = useState('');
    const [name, setName] = useState('');

    const [selectedParish, setSelectedParish] = useState<any>(null);

    const handleSendMessage = async () => {
        const response = await sendMessage({
            nom: name,
            email: email,
            sujet: sujet,
            message: message
        })        
        if (response.status === false) {
            toast.error(JSON.stringify(response));
        }
        else {
            // setIsSending(true)
            setTimeout(() => {
                setIsSending(false)
                setMessage('')
                setEmail('')
                setPhone('')
                setName('')
            }, 2000)
            toast.success('Votre message a été envoyé avec succès!')
        }
    };

    return (
        <>
            <section className="container max-margin py-0">
                <div className="h-10 flex justify-between items-center mt-5 mb-5 md:mb-0">
                    <Button size={'sm'} variant={'link'} onClick={() => { router.back() }} className="pl-0 body-2 text-black">
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        <span>Retour</span>
                    </Button>
                    <Button size={'sm'} variant={'link'} onClick={() => { router.push("/") }} className="pr-0 hidden md:block body-2 text-gray">
                        Retour à l’accueil
                    </Button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-5 md:gap-6 lg:gap-14 md:py-4 lg:py-8'>
                    <div className='col-span-full lg:col-span-2 space-y-4 h-min'>
                        <h1 className='heading-4 font-extrabold mb-4'>Contactez-nous</h1>
                        <div className='px-4 md:px-8 py-6 md:py-12 space-y-8 relative rounded-xl overflow-hidden bg-[#F9F4F5]'>
                            <div className="space-y-2">
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="nom">Nom</label>
                                    <input onChange={(e) => setName(e.target.value)} type="text" required placeholder="Entrez votre nom complet" className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" />
                                </div>
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="courriel">Courriel</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Entrez votre adresse électronique" className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" />
                                </div>
                                {/* <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="telephone">Téléphone</label>
                                    <input  onChange={(e) => setPhone(e.target.value)} type="tel" required placeholder="Entrez votre numéro de téléphone" className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" />
                                </div> */}
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="telephone">Sujet</label>
                                    <input  onChange={(e) => setSujet(e.target.value)} type="tel" required placeholder="Entrez le sujet" className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" />
                                </div>
                                <div className=''>
                                    <label className='body-3 inline-block font-semibold mb-1' htmlFor="message">Votre message</label>
                                    <textarea  onChange={(e) => setMessage(e.target.value)} required placeholder="Ce que vous avez à dire" rows={4} className="border-[1.5px] border-gray-200 bg-transparent p-2 rounded-lg w-full" />
                                </div>
                            </div>
                            <Button onClick={handleSendMessage} className="w-full body-2">
                                Envoyer le message
                            </Button>
                        </div>
                    </div>
                    <div className='mt-8 md:px-0 md:mx-0 col-span-full lg:col-span-3'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h1 className='body-1 font-extrabold'>Adresse</h1>
                                <p className='body-2 text-gray'>Place de la cathédrale</p>
                                <p className='body-2 text-gray'>224 rue St-George, bureau 104</p>
                                <p className='body-2 text-gray'>Moncton, N.-B. E1C 0V1</p>
                                <p className='body-2 text-gray'>courriel: annettel.diocese@gmail.com</p>
                            </div>
                            <div className="space-x-10 md:space-x-0 md:space-y-3 flex flex-row items-start md:items-center md:flex-col">
                                <div>
                                    <h1 className='body-1 font-extrabold'>Téléphone</h1>
                                    <p className='body-2 text-gray'>(506) 857-9531</p>
                                </div>
                                <div>
                                    <h1 className='body-1 font-extrabold'>Télécopieur</h1>
                                    <p className='body-2 text-gray'>(506) 857-9533</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='body-1 font-extrabold mt-5'>Heures de bureau</h1>
                            <p className='body-2 text-gray'>Lundi à Jeudi, 08h-12h; 13h-16h</p>
                        </div>

                        <h1 className="heading-4 font-extrabold text-black mt-10 mb-4">Sur la carte</h1>
                        {/* Map */}
                        <div className="h-64 w-full bg-gray-100 rounded-xl overflow-hidden">
                            {/* <Map
                                parishes={parishes}
                                selectedParish={selectedParish}
                                onParishSelect={setSelectedParish}
                            /> */}
                        </div>


                        <div className="mt-8 lg:mt-16"></div>
                        <h1 className='heading-3 font-extrabold mb-4'>Contacts paroissiaux</h1>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Mgr Guy Desrochers</h1>
                                    <p className='body-3 text-gray'>Archevêque de Moncton</p>
                                </div>
                                <p className='body-2 text-gray'>507-743-2494</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Père Jean-Gyu Dallaire</h1>
                                    <p className='body-3 text-gray'>Vicaire général</p>
                                </div>
                                <p className='body-2 text-gray'>507-743-2494</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Ronald Drisdelle</h1>
                                    <p className='body-3 text-gray'>Chef des opérations</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1234</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>François Siewe</h1>
                                    <p className='body-3 text-gray'>Comptable et fondation de l'Archevêché</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1264</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Annette Leblanc</h1>
                                    <p className='body-3 text-gray'>Secrétaire/réceptionniste</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1222</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Rachel Vienneau</h1>
                                    <p className='body-3 text-gray'>Administration des cimetières N.D. du Calvaire & Shediac Road Cemetery</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1228</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Nathalie Leblanc</h1>
                                    <p className='body-3 text-gray'>Finances: fondations de la cathédrale</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1292</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Gladys Leblanc</h1>
                                    <p className='body-3 text-gray'>Dosssiers justice et solidarité</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1230</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Diane Léger</h1>
                                    <p className='body-3 text-gray'>Catéchèse & Protection des personnes vulnérables</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1229</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Patricia Niles</h1>
                                    <p className='body-3 text-gray'>Vice-chancelière & Notaire au tribunal matrimonial</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1236</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Diacre Louis Allard</h1>
                                    <p className='body-3 text-gray'>Auditeur au tribunal matrimonial</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1236</p>
                            </div>
                            <div className="flex items-center space-x-10">
                                <div>
                                    <h1 className='font-extrabold'>Mario Robichaud</h1>
                                    <p className='body-3 text-gray'>Éducation de la foi des adultes</p>
                                </div>
                                <p className='body-2 text-gray'>Poste 1242</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:mt-20" />
            </section>
        </>
    )
}
