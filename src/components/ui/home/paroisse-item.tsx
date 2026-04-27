import Text from "@/components/Text";
import { Paroisse } from "@/types";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function ParoisseItem({ data }: { data: Paroisse }) {
    const localActive = useLocale()
    return (
        <div className='flex justify-start items-center space-x-4 text-black'>
            <div className='h-[80px] w-[80px] shrink-0 rounded-lg bg-gray-100 overflow-hidden relative'>
                <Image
                    alt={data.nom}
                    src={ data.galerie.length ? `${process.env.NEXT_PUBLIC_BASE_URL}/${data.galerie[0].path}` : '/assets/img/paroisse.jpeg'}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div>
                <h4 className='text-sm lg:text-base xl:text-lg font-semibold mb-1'>{localActive =="fr" ? data.nom: data.nom_en}</h4>
                <p className='text-xs md:text-sm xl:text-base text-gray-500 line-clamp-1'><Text keyString="adresse" />: {data.adresse}</p>
                <span className='text-xs md:text-sm text-gray-400'><Text keyString="phone" />: {data.telephone}</span>
            </div>
        </div>
    )
}