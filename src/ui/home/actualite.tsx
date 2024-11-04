
import { formatDateToLocal } from '@/lib/utils'

export default function Actualite() {
    
    return (
        <div className='w-full text-black flex flex-col space-y-2'>
            <div className='relative h-52 w-full rounded-xl overflow-hidden bg-gray-100'>
                {/* <Image
                    alt="Image de la l'actualité"
                    src="/assets/img/campost.jpg"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                /> */}
            </div>
            <span className='text-sm font-medium text-primary'>Diocèse</span>
            <h4 className='text-base font-bold line-clamp-2'>Quel est la problème avec l&apos;aide médicale à mourir(A )</h4>
            <p className='line-clamp-2 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis.</p>
            <p className='text-gray-400 text-xs'>Publié le {formatDateToLocal((new Date()).toISOString())}</p>
        </div >
    )
}
