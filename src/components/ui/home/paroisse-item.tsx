import { Paroisse } from "@/types";
import Image from "next/image";

export default function ParoisseItem({ data }: { data: Paroisse }) {
    return (
        <div className='flex justify-start items-center space-x-4 text-black'>
            <div className='h-[80px] w-[80px] shrink-0 rounded-lg bg-gray-100 overflow-hidden relative'>
                <Image
                    alt={data.nom}
                    src={'/assets/img/paroisse-1.png'}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div>
                <h4 className='text-sm lg:text-base xl:text-lg font-semibold mb-1'>{data.nom}</h4>
                <p className='text-xs md:text-sm xl:text-base text-gray-500 line-clamp-1'>Adresse: {data.adresse}</p>
                <span className='text-xs md:text-sm text-gray-400'>Tél.: {data.telephone}</span>
            </div>
        </div>
    )
}