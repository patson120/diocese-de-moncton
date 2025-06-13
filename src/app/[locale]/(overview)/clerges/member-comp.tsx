import Text from "@/components/Text";
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/shared/button";
import { Membre } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function MemberComp( { membres }: { membres: Membre[]}){
    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<any>({})
    return <>
        <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {
                membres.map((member: Membre) => (
                    <div key={member.id} className='space-y-3 w-full' >
                        <div className='h-[240px] relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                            {
                                member.image ?
                                <Image
                                    alt={`Image ${member.nom}`}
                                    src={ member.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${member.image}` : "/assets/img/clerge-1.png" }
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                /> :
                                <Image
                                    alt="Célébration de baptême"
                                    src="/assets/img/placeholder-vector.png"
                                    width={60}
                                    height={60}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            }
                        </div>
                        <h1 className='body-2 font-bold'>{member.nom}</h1>
                        <p className='body-2 text-gray'>{member.unites.length ? member.unites[0].intitule_fr : ''}</p>
                        <div className="">
                            <Button size={'sm'} variant={'link'} onClick={() => { setSelectedItem(member); setOpen(true) }} className="underline text-black px-0 ">
                                Coordonnées
                            </Button>
                        </div>
                    </div>
                ))
            }
        </div>
        <PretresDialog open={open} onOpenChange={setOpen} member={selectedItem} />
    </>
}


const PretresDialog = ({
    open,
    onOpenChange,
    member
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    member?: Membre;
}) => {
    return <Dialog open={open} onOpenChange={onOpenChange} >
        <DialogContent className="w-full md:w-2/5 max-h-[540px] overflow-y-scroll [&::-webkit-scrollbar]:w-2">
            <DialogDescription>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-[140px] md:w-full flex flex-row md:flex-col gap-3 ">
                        <div className='h-[140px] w-[140px] shrink-0 relative rounded-xl overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
                            {
                                member?.image ?
                                <Image
                                    alt={`Image ${member.nom}`}
                                    src={ member.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${member.image}` : "/assets/img/clerge-1.png" }
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                /> :
                                <Image
                                    alt="Célébration de baptême"
                                    src="/assets/img/placeholder-vector.png"
                                    width={60}
                                    height={60}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            }
                        </div>
                        <div>
                            <div className="mb-3 mt-2">
                                <h5 className='body-2 text-black font-bold'>{member?.nom}</h5>
                                <p className='body-3'>
                                    { member?.etat === 1 && "En activité" }
                                    { member?.etat === 0 && "En retraite" }
                                    { member?.etat === -1 && "Décédé" }
                                </p>
                            </div>
                            <div>
                                <h5 className='body-2 text-black font-bold'>Coordonnées</h5>
                                <p className='body-2'>{member?.coordonnees}</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold">Fonctions</h4>
                                <p className="text-gray">{member?.poste}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-col gap-4">
                        {
                            member?.unites?.length &&
                            <div>
                                <h5 className='body-2 text-black font-bold'>Unités pastorales</h5>
                                <Text className='text-gray w-full' 
                                    labelEn={member?.unites.map((unite) => unite.intitule_en).join(', ')} 
                                    labelFr={member?.unites.map((unite) => unite.intitule_fr).join(', ')}  />
                            </div>
                        }
                        <div>
                            <h5 className='body-2 text-black font-bold'>Biographie</h5>
                            <Text className='text-gray w-full' labelEn={member?.description_en} labelFr={member?.description_fr}  />
                        </div>
                    </div>
                </div>
            </DialogDescription>
        </DialogContent>
    </Dialog>
}

