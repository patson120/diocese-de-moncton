
export default function ParoisseItem() {
    return (
        <div className='flex justify-start items-center space-x-4 text-black'>
            <div className='h-20 w-20 rounded-lg bg-gray-100 overflow-hidden relative'>
                {/* <Image
                    alt="Image de la l'actualité"
                    src="/assets/img/campost.jpg"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                /> */}
            </div>
            <div>
                <h4 className='text-sm font-semibold mb-2'>Immaculé Conception</h4>
                <p className='text-xs text-gray-500 line-clamp-1'>Adresse: 4049, Route 480 Acadieville NB E4Y 1Z3</p>
                <span className='text-xs text-gray-400'>Tél.: (505) 775-2421</span>
            </div>
        </div>
    )
}
