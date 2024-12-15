import { ParoisseType } from "@/types";
import Image from "next/image";

export default function ParoisseItem({ data }: { data: ParoisseType }) {
    return (
        <div className='flex justify-start items-center space-x-4 text-black'>
            <div className='h-20 w-20 rounded-lg bg-gray-100 overflow-hidden relative'>
                <Image
                    alt={data.title}
                    src={data.image}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div>
                <h4 className='text-xs font-semibold mb-2'>{data.title}</h4>
                <p className='text-[10px] text-gray-500 line-clamp-1'>Adresse: {data.adresse}</p>
                <span className='text-[10px] text-gray-400'>Tél.: {data.tel}</span>
            </div>
        </div>
    )
}